"use client";

import { useEffect, useState, useRef } from "react";

export default function InitialLoader() {
  const [visible, setVisible] = useState(true);
  const [logoVisible, setLogoVisible] = useState(true);

  // new state to orchestrate reveal sequence
  const [whiteRevealed, setWhiteRevealed] = useState(false);
  const [logoActive, setLogoActive] = useState(false);

  const intervalRef = useRef<number | null>(null);

  // Enforce the loader to be visible for at least 2 seconds
  const startRef = useRef<number | null>(null);
  const initTimeoutRef = useRef<number | null>(null);
  const hideTimeoutRef = useRef<number | null>(null);
  const fallbackRef = useRef<number | null>(null);
  // refs for local reveal timers
  const whiteTimeoutRef = useRef<number | null>(null);
  const logoStartRef = useRef<number | null>(null);

  const scheduleHide = (delay = 0) => {
    if (initTimeoutRef.current) {
      clearTimeout(initTimeoutRef.current);
      initTimeoutRef.current = null;
    }

    initTimeoutRef.current = window.setTimeout(() => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }

      const started = startRef.current ?? Date.now();
      const elapsed = Date.now() - started;
      const remaining = Math.max(0, 2000 - elapsed); // ensure 2s minimum

      hideTimeoutRef.current = window.setTimeout(() => {
        setVisible(false);
      }, remaining);
    }, delay);
  };

  useEffect(() => {
    startRef.current = Date.now();

    // Remove server-rendered loader element if present so it doesn't persist after hydration
    try {
      const ssr = document.getElementById("ssr-initial-loader");
      if (ssr && ssr.parentNode) ssr.parentNode.removeChild(ssr);
    } catch (e) {
      /* ignore */
    }

    // Orchestrate the visual sequence:
    // 1) show base background immediately
    // 2) after a short delay, reveal a white overlay from bottom -> top
    // 3) after the white reveal animation completes, activate the logo effects
    const initialBgDelay = 200; // ms to wait before starting white reveal
    const whiteAnimDuration = 700; // must match the CSS transition duration

    whiteTimeoutRef.current = window.setTimeout(() => {
      setWhiteRevealed(true);
    }, initialBgDelay);

    logoStartRef.current = window.setTimeout(() => {
      setLogoActive(true);
    }, initialBgDelay + whiteAnimDuration);

    // If page already loaded, hide quickly but respect 2s minimum
    if (typeof document !== "undefined" && document.readyState === "complete") {
      scheduleHide(250);
      return () => {
        if (initTimeoutRef.current) {
          clearTimeout(initTimeoutRef.current);
          initTimeoutRef.current = null;
        }
        if (hideTimeoutRef.current) {
          clearTimeout(hideTimeoutRef.current);
          hideTimeoutRef.current = null;
        }
      };
    }

    const onLoad = () => scheduleHide(250);
    window.addEventListener("load", onLoad);

    // Fallback: hide after 4s to avoid stuck loader
    fallbackRef.current = window.setTimeout(() => scheduleHide(0), 4000);

    return () => {
      window.removeEventListener("load", onLoad);
      if (fallbackRef.current) {
        clearTimeout(fallbackRef.current);
        fallbackRef.current = null;
      }
      if (initTimeoutRef.current) {
        clearTimeout(initTimeoutRef.current);
        initTimeoutRef.current = null;
      }
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
      // clear reveal timers
      if (whiteTimeoutRef.current) {
        clearTimeout(whiteTimeoutRef.current);
        whiteTimeoutRef.current = null;
      }
      if (logoStartRef.current) {
        clearTimeout(logoStartRef.current);
        logoStartRef.current = null;
      }
    };
  }, []);

  // Toggle logo opacity while the loader is visible and the reveal sequence has activated the logo
  useEffect(() => {
    // only start flicker when the logo sequence has started and loader is still visible
    if (!visible || !logoActive) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    // faster flicker interval for a noticeable loading effect
    intervalRef.current = window.setInterval(() => {
      setLogoVisible((v) => !v);
    }, 500);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [visible, logoActive]);

  if (!visible) return null;

  return (
    <div className='fixed inset-0 z-[9999] grid place-items-center bg-black overflow-hidden'>
      {/* base background layer (shows first) */}
      <div className='absolute inset-0 bg-black' aria-hidden />

      {/* white reveal layer: slides up from bottom to top */}
      <div
        className={`absolute inset-0 bg-white transform transition-transform duration-[700ms] ease-in-out ${
          whiteRevealed ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden
      />

      {/* content wrapper sits above the reveal; logo will fade/translate in when logoActive */}
      <div className='relative z-10 flex items-center justify-center p-8'>
        {/* floating wrapper uses a translateY animation so the img can still use scale transforms */}
        <div
          style={{
            animation: logoActive ? "float 3.5s ease-in-out infinite" : "none",
          }}
          className={`transition-all duration-500 ease-in-out transform ${
            logoActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <img
            src='/logo.png'
            alt='Logo'
            className={`w-40 h-40 sm:w-56 sm:h-56 object-contain filter transition-all duration-300 ease-in-out transform ${
              logoVisible
                ? "opacity-100 scale-105 brightness-125 drop-shadow-2xl"
                : "opacity-25 scale-98 brightness-80 drop-shadow-sm"
            }`}
          />
        </div>
      </div>

      {/* local keyframes for the floating effect and keep them scoped here */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
