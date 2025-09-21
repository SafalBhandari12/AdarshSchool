"use client";

import { useState, useEffect } from "react";
import InitialLoader from "@/components/InitialLoader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Listen for loader completion
    const handleLoaderComplete = () => {
      setTimeout(() => {
        setShowContent(true);
        // Re-enable scrolling
        if (typeof document !== 'undefined') {
          document.body.style.overflow = '';
        }
      }, 300);
    };

    // Custom event listener for loader completion
    window.addEventListener('loaderComplete', handleLoaderComplete);

    return () => {
      window.removeEventListener('loaderComplete', handleLoaderComplete);
    };
  }, []);

  return (
    <>
      <InitialLoader />
      <div 
        className={`transition-opacity duration-700 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          visibility: showContent ? 'visible' : 'hidden',
        }}
      >
        {children}
      </div>
    </>
  );
}
