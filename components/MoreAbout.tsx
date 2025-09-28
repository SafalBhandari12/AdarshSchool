"use client";
import React from "react";
import BlurText from "@/components/BlurText";

export default function MoreAbout() {
  const features = [
    {
      title: "Quality Fabrics",
      text: "Premium cotton and blended fabrics chosen for durability and comfort. We test batches to ensure consistent color and shrinkage.",
      icon: (
        <svg
          width='40'
          height='40'
          viewBox='0 0 24 24'
          fill='none'
          aria-hidden='true'
        >
          {/* Shirt / fabric icon */}
          <path
            d='M4 7.5C4 6.67 4.67 6 5.5 6h1.2c.28 0 .54.12.72.33L9 8h6l1.58-1.67c.18-.21.44-.33.72-.33h1.2c.83 0 1.5.67 1.5 1.5V11c0 1.1-.9 2-2 2h-1v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-6H5c-1.1 0-2-.9-2-2V7.5z'
            fill='#000'
          />
          <path
            d='M8.5 14.5c1 1 3 1 4 0'
            stroke='#fff'
            strokeWidth='0.9'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      title: "Custom Embroidery",
      text: "On-site logo and badge embroidery with color-matched threads and secure stitching. Proofing and sample runs ensure accurate placement.",
      icon: (
        <svg
          width='40'
          height='40'
          viewBox='0 0 24 24'
          fill='none'
          aria-hidden='true'
        >
          <path
            d='M14.7 3.3a1 1 0 0 0-1.4 0L3 13.6V18h4.4l10.3-10.3a1 1 0 0 0 0-1.4l-3-3zM5 16v-1.6L12.4 6.9l1.6 1.6L6.6 16H5z'
            fill='#000'
          />
          <path
            d='M16.5 5.5l2 2'
            stroke='#000'
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      title: "Bulk Production",
      text: "Reliable large-quantity manufacturing with strict quality checks to ensure timely delivery and consistent stitching.",
      icon: (
        <svg
          width='40'
          height='40'
          viewBox='0 0 24 24'
          fill='none'
          aria-hidden='true'
        >
          <path d='M3 13h18v7H3z' fill='#000' />
          <path
            d='M5 13V8l3-3h8l3 3v5'
            stroke='#000'
            strokeWidth='1'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <circle cx='7.5' cy='18.5' r='1.5' fill='#000' />
          <circle cx='16.5' cy='18.5' r='1.5' fill='#000' />
        </svg>
      ),
    },
    {
      title: "Fittings & Sizing",
      text: "Measured fittings and grading to ensure consistent fit across ages. We provide sample fittings and grading notes.",
      icon: (
        <svg
          width='40'
          height='40'
          viewBox='0 0 24 24'
          fill='none'
          aria-hidden='true'
        >
          <rect x='2' y='9' width='20' height='2' fill='#000' />
          <rect x='4' y='5' width='12' height='2' fill='#000' />
          <rect x='4' y='13' width='8' height='2' fill='#000' />
        </svg>
      ),
    },
    {
      title: "Eco-friendly Options",
      text: "Sustainable fabric choices and low-impact dyes available on request. We can advise on recycled blends and water-saving processes.",
      icon: (
        <svg
          width='40'
          height='40'
          viewBox='0 0 24 24'
          fill='none'
          aria-hidden='true'
        >
          <path
            d='M12 2C8.7 5.8 6.5 8 6.5 11c0 3.3 2.7 6 6 6s6-2.7 6-6c0-3-2.2-5.2-6.5-9z'
            fill='#000'
          />
        </svg>
      ),
    },
    {
      title: "Fast Turnaround",
      text: "Dedicated production lines and logistics partners to meet school season deadlines with prioritized scheduling.",
      icon: (
        <svg
          width='40'
          height='40'
          viewBox='0 0 24 24'
          fill='none'
          aria-hidden='true'
        >
          <rect x='2' y='7' width='14' height='8' fill='#000' />
          <path d='M16 11h4l2 3v1h-6' fill='#000' />
          <circle cx='6.5' cy='16.5' r='1.5' fill='#000' />
          <circle cx='18.5' cy='16.5' r='1.5' fill='#000' />
        </svg>
      ),
    },
  ];

  return (
    <section className='py-20 flex items-center justify-center min-h-[60vh] bg-[#f7f2ee] favorit-font overflow-hidden'>
      <div className='text-center leading-none w-full max-w-8xl px-4 sm:px-6 md:px-8'>
        <div className='mb-2'>
          <BlurText
            text={"How we"}
            animateBy='letters'
            delay={40}
            className={`text-[#2b6f74] font-bold text-[2.8rem] sm:text-[5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[9.5rem] leading-tight justify-center inline-block`}
          />
        </div>

        <div className='-mt-4'>
          <BlurText
            text={"Manufacture"}
            animateBy='letters'
            delay={120}
            className={`text-[#2b6f74] font-bold text-[2.8rem] sm:text-[5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[9.5rem] leading-tight justify-center inline-block`}
          />
        </div>

        <div className='-mt-4'>
          <BlurText
            text={"Clothes."}
            animateBy='letters'
            delay={200}
            className={`text-[#2b6f74] font-bold text-[2.8rem] sm:text-[5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[9.5rem] leading-tight justify-center inline-block`}
          />
        </div>

        {/* Features grid tailored to school dress manufacturing */}
        <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-8'>
          {features.map((f, i) => (
            <div key={i} className='flex flex-col items-start gap-4 py-6 px-2'>
              <div className='flex-shrink-0'>{f.icon}</div>

              <div className='w-full'>
                <BlurText
                  text={f.title}
                  animateBy='words'
                  delay={i * 40}
                  className='text-black text-2xl md:text-3xl font-semibold'
                />

                <div className='mt-3'>
                  <BlurText
                    text={f.text}
                    animateBy='words'
                    delay={i * 12 + 20}
                    className='text-black/90 text-sm md:text-base leading-relaxed font-normal text-justify hyphens-auto'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
