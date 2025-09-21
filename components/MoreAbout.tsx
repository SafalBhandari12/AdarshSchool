"use client";
import React from "react";
import BlurText from "@/components/BlurText";

export default function MoreAbout() {
  return (
    <section className='py-20 flex items-center justify-center min-h-[60vh]'>
      <div className='text-center leading-none'>
        <div className='mb-2'>
          <BlurText
            text={"How we"}
            animateBy='letters'
            delay={40}
            className={`text-[#2b6f74] font-bold text-[3.2rem] sm:text-[5rem] md:text-[7rem] lg:text-[9.5rem] leading-tight justify-center`}
          />
        </div>

        <div className='-mt-4 mb-2'>
          <BlurText
            text={"Manufacture"}
            animateBy='letters'
            delay={120}
            className={`text-[#2b6f74] font-bold text-[3.2rem] sm:text-[5rem] md:text-[7rem] lg:text-[9.5rem] leading-tight justify-center`}
          />
        </div>

        <div className='-mt-4'>
          <BlurText
            text={"Clothes."}
            animateBy='letters'
            delay={200}
            className={`text-[#2b6f74] font-bold text-[3.2rem] sm:text-[5rem] md:text-[7rem] lg:text-[9.5rem] leading-tight justify-center`}
          />
        </div>
      </div>
    </section>
  );
}
