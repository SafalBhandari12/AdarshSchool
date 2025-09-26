"use client";
import StaggeredMenuSimple from "./StaggeredMenuSimple";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "#about" },
  { label: "Services", link: "#services" },
  { label: "Contact", link: "#contact" },
];
const socialItems = [
  {
    label: "Instagram",
    link: "https://www.instagram.com/adarsh.school.dress?igsh=MTB5cTRnbjRyNGw4MA==",
  },
  { label: "WhatsApp", link: "https://wa.me/918449431638" },
];

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    // Determine video source once on mount
    const isMobile = window.innerWidth < 768;
    const src = isMobile
      ? "/mobile.mp4"
      : "/School of Style  A New Era of Fashion Education.mp4";
    setVideoSrc(src);
  }, []);

  return (
    <section className='relative w-full h-screen overflow-hidden'>
      {/* fullscreen video background - only load appropriate video */}
      {videoSrc && (
        <video
          className='absolute inset-0 w-full h-full object-cover'
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload='metadata'
          aria-hidden
        />
      )}

      {/* StaggeredMenuSimple placed above the video as navbar */}
      <div className='absolute inset-0 z-50 pointer-events-auto'>
        <StaggeredMenuSimple
          position='right'
          items={menuItems}
          socials={socialItems}
          colors={["#B19EEF", "#5227FF", "#8A6BFF"]}
        />
      </div>

      {/* Centered heading above the video */}
    </section>
  );
}
