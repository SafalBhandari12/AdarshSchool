"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          {/* Left: giant heading */}
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="font-extrabold leading-tight text-white text-[3.4rem] sm:text-[4.8rem] md:text-[6rem] lg:text-[7.5rem]">
              Ready to outfit
              <br /> your students?
            </h2>
          </div>

          {/* Right: description, CTA, small credit */}
          <div className="w-full lg:w-1/2 max-w-md text-left flex flex-col items-start gap-8">
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              Gain direct access to our design and production teams to deliver
              comfortable, durable and affordable school uniforms — tailored to
              your house colours and sizing needs.
            </p>

            <a
              href="#contact"
              className="inline-block bg-[#d6df3a] text-black font-semibold rounded-full px-10 py-4 shadow-md hover:brightness-95 transition"
            >
              REQUEST A QUOTE
            </a>

            <div className="flex items-center gap-3 mt-4">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="opacity-95"
              >
                <path
                  d="M4 4h16v4H4zM4 10h16v10H4z"
                  fill="#ffffff"
                  opacity="0.95"
                />
              </svg>

              <div className="text-white/90">
                <div className="text-sm font-medium">Powered by</div>
                <div className="text-base font-semibold">Adarsh School Uniforms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
