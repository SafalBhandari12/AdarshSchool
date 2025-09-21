"use client";
import React, { useState } from "react";

export default function StaggeredMenuSimple({
  position = "right",
  colors = ["#B19EEF", "#5227FF", "#8A6BFF"],
  items = [
    { label: "Home", link: "#" },
    { label: "Work", link: "#" },
  ],
  socials = [{ label: "Twitter", link: "#" }],
}: {
  position?: "left" | "right";
  colors?: string[];
  items?: { label: string; link: string }[];
  socials?: { label: string; link: string }[];
}) {
  const [open, setOpen] = useState(false);
  const offClass =
    position === "left" ? "-translate-x-full" : "translate-x-full";

  return (
    <div className='relative w-full h-full'>
      {/* header */}
      <header className='absolute top-0 left-0 right-0 p-6 flex items-center justify-between pointer-events-none z-40'>
        <div className='pointer-events-auto'>
          <img src='/logoOrange.png' alt='logo' className='h-8' />
        </div>

        <button
          aria-expanded={open}
          aria-controls='menu-panel'
          onClick={() => setOpen((s) => !s)}
          style={{ color: open ? "#000" : "#ff6b6b" }}
          className={`pointer-events-auto cursor-pointer inline-flex items-center gap-3 bg-transparent border-0 p-2 focus:outline-none focus-visible:ring`}
        >
          <span className='inline-block w-12 text-sm'>
            {open ? "Close" : "Menu"}
          </span>

          {/* icon */}
          <span className='relative w-4 h-4 inline-flex items-center justify-center'>
            <span
              className={`absolute left-1/2 top-1/2 block w-6 h-[2px] bg-current transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
                open ? "rotate-45" : "rotate-0"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 block w-6 h-[2px] bg-current transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
                open ? "-rotate-45" : "rotate-90"
              }`}
            />
          </span>
        </button>
      </header>

      {/* prelayers */}
      <div
        aria-hidden
        className={`absolute top-0 bottom-0 ${
          position === "left" ? "left-0" : "right-0"
        } w-full md:w-[clamp(260px,38vw,420px)] pointer-events-none z-20 overflow-hidden`}
      >
        {colors.slice(0, 3).map((c, i) => (
          <div
            key={i}
            style={{ background: c }}
            className={`absolute inset-0 transition-transform ${
              open ? "translate-x-0" : offClass
            } ${i === 0 ? "z-10" : i === 1 ? "z-5" : "z-0"}`}
          />
        ))}
      </div>

      {/* panel */}
      <aside
        id='menu-panel'
        className={`absolute top-0 bottom-0 h-full bg-white z-30 p-6 md:p-24 pt-20 w-full md:w-[clamp(260px,38vw,420px)] transition-transform duration-300 ${
          open ? "translate-x-0" : offClass
        } ${position === "left" ? "left-0" : "right-0"}`}
        style={{
          WebkitBackdropFilter: "blur(12px)",
          backdropFilter: "blur(12px)",
        }}
        aria-hidden={!open}
      >
        <nav className='flex flex-col h-full'>
          <ul className='flex-1 space-y-3'>
            {items.map((it, idx) => {
              const delay = `${idx * 70}ms`;
              return (
                <li key={it.label} className='relative overflow-hidden'>
                  <a
                    href={it.link}
                    style={{ transitionDelay: open ? delay : "0ms" }}
                    className={`inline-block text-2xl md:text-4xl font-semibold uppercase transform transition-all duration-300 text-black hover:text-[#0b3d91] cursor-pointer whitespace-normal break-words ${
                      open
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                  >
                    {it.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* socials */}
          <div className='mt-auto pt-6'>
            <h3 className='text-sm font-medium text-indigo-600'>Socials</h3>
            <ul className='flex gap-4 mt-3'>
              {socials.map((s, i) => (
                <li key={s.label}>
                  <a
                    href={s.link}
                    className={`text-sm font-medium transition-opacity duration-300 text-black hover:text-[#0b3d91] cursor-pointer ${
                      open ? "opacity-100" : "opacity-0 translate-y-3"
                    }`}
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>
    </div>
  );
}
