"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function InitialLoader() {
  const [visible, setVisible] = useState(true);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [logoVisible, setLogoVisible] = useState(true);

  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const resourcesRef = useRef<{
    videos: HTMLVideoElement[];
    images: HTMLImageElement[];
    totalResources: number;
    loadedResources: number;
  }>({
    videos: [],
    images: [],
    totalResources: 0,
    loadedResources: 0,
  });

  // Initialize resource tracking
  useEffect(() => {
    const trackResources = () => {
      // Find all video elements
      const videos = Array.from(
        document.querySelectorAll("video")
      ) as HTMLVideoElement[];
      const images = Array.from(
        document.querySelectorAll("img, [data-nimg]")
      ) as HTMLImageElement[];

      resourcesRef.current = {
        videos,
        images,
        totalResources: videos.length + images.length,
        loadedResources: 0,
      };

      // If no resources found, mark as loaded immediately
      if (videos.length === 0 && images.length === 0) {
        setContentLoaded(true);
        return;
      }

      // Start progress tracking
      progressIntervalRef.current = setInterval(checkLoadingProgress, 100);
    };

    // Wait a bit for DOM to be ready
    setTimeout(trackResources, 500);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  // Logo animation effect
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

  const checkLoadingProgress = () => {
    const { videos, images, totalResources } = resourcesRef.current;
    let loadedCount = 0;

    // Check video loading state
    videos.forEach((video) => {
      if (video.readyState >= 3) {
        // HAVE_FUTURE_DATA or greater
        loadedCount++;
      }
    });

    // Check image loading state
    images.forEach((img) => {
      if (img.complete && img.naturalHeight !== 0) {
        loadedCount++;
      }
    });

    resourcesRef.current.loadedResources = loadedCount;

    // Check if everything is loaded
    if (loadedCount >= totalResources && totalResources > 0) {
      setContentLoaded(true);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    }

    // Fallback: If we're stuck for too long, force completion
    if (Date.now() - startTimeRef.current > 8000) {
      setContentLoaded(true);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    }
  };

  // Complete the loader when content is ready
  useEffect(() => {
    if (contentLoaded && logoLoaded) {
      // Ensure minimum loading time of 2 seconds for UX
      const minDisplayTime = 2000;
      const elapsed = Date.now() - startTimeRef.current;
      const remainingTime = Math.max(0, minDisplayTime - elapsed);

      setTimeout(() => {
        setVisible(false);
        // Dispatch event for ClientLayout
        setTimeout(() => {
          const event = new CustomEvent("loaderComplete");
          window.dispatchEvent(event);
        }, 500);
      }, remainingTime);
    }
  }, [contentLoaded, logoLoaded]);

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
          onLoad={() => setLogoLoaded(true)}
          priority
        />
      </div>
    </div>
  );
}
