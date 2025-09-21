"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function InitialLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
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

      // Start progress tracking
      progressIntervalRef.current = setInterval(checkLoadingProgress, 100);
    };

    // Wait a bit for DOM to be ready
    setTimeout(trackResources, 100);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

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

    // Update progress (ensure minimum 10% for visual feedback)
    const newProgress =
      totalResources > 0
        ? Math.max(10, Math.floor((loadedCount / totalResources) * 100))
        : 100;

    setProgress(newProgress);

    // Check if everything is loaded
    if (loadedCount >= totalResources && totalResources > 0) {
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
      const startTime = performance.now();
      const remainingTime = Math.max(0, minDisplayTime - startTime);

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
      <div className='text-center'>
        {/* Logo */}
        <div className='mb-8'>
          <Image
            src='/logo.png'
            alt='Logo'
            width={100}
            height={100}
            className='mx-auto'
            onLoad={() => setLogoLoaded(true)}
            priority
          />
        </div>

        {/* Progress Bar */}
        <div className='w-64 mx-auto mb-4'>
          <div className='w-full bg-gray-200 rounded-full h-2'>
            <div
              className='bg-orange-500 h-2 rounded-full transition-all duration-300 ease-out'
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Progress Text */}
        <p className='text-gray-600 text-sm'>Loading... {progress}%</p>
      </div>
    </div>
  );
}
