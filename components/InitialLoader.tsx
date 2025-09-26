"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function InitialLoader() {
  const [visible, setVisible] = useState(true);
  const [logoVisible, setLogoVisible] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Dummy loader: show for exactly 3.5 seconds then hide
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      // Dispatch event for ClientLayout after fade
      setTimeout(() => {
        const event = new CustomEvent("loaderComplete");
        window.dispatchEvent(event);
      }, 500);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  // Logo animation effect (keep same animation)
  useEffect(() => {
    if (!visible) return;

    if (typeof window !== "undefined") {
      let counter = 0;
      intervalRef.current = setInterval(() => {
        counter += 1;
        if (counter >= 50) {
          setLogoVisible((v) => !v);
          counter = 0;
        }
      }, 15);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [visible]);

  // Prevent scrolling while loader is visible
  useEffect(() => {
    if (visible) {
      // Store original styles
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;

      // Calculate scrollbar width to prevent layout shift
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      // Apply scroll prevention
      document.body.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }

      // Prevent touch scrolling on mobile
      const preventDefault = (e: Event) => e.preventDefault();
      document.addEventListener("touchmove", preventDefault, {
        passive: false,
      });
      document.addEventListener("wheel", preventDefault, { passive: false });

      return () => {
        // Restore original styles
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;

        // Remove event listeners
        document.removeEventListener("touchmove", preventDefault);
        document.removeEventListener("wheel", preventDefault);
      };
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className='fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500'>
      <div className='relative'>
        <Image
          src='/logo.png'
          alt='Logo'
          width={200}
          height={200}
          className={`transition-all duration-1000 ${
            logoVisible ? "opacity-100 scale-100" : "opacity-50 scale-95"
          }`}
          priority
        />
      </div>
    </div>
  );
}
