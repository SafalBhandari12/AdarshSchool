"use client";
import StaggeredMenuSimple from "./StaggeredMenuSimple";

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
  return (
    <section className='relative w-full h-screen overflow-hidden'>
      {/* fullscreen video background - place your MP4 in the public/ folder with the exact name */}
      <video
        className='absolute inset-0 w-full h-full object-cover'
        src={"/School of Style  A New Era of Fashion Education.mp4"}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />

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
