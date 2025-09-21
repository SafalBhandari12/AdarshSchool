"use client";
import React from "react";
import SplitText from "./SplitText";

export default function About() {
  const handleHeadingComplete = () => {
    console.log("Heading animation complete");
  };

  return (
    <section
      id='about'
      className='h-screen w-full bg-[#f7f5f0] flex flex-col justify-start px-6 py-6'
    >
      {/* Top-left large heading (animated) */}
      <div className='pt-4'>
        <SplitText
          text='School uniforms crafted for comfort, durability and style'
          tag='h2'
          className='font-extrabold text-black leading-[0.95] max-w-[95%] text-3xl md:text-4xl lg:text-[4.5rem] xl:text-[5.5rem]'
          delay={30}
          duration={0.45}
          ease='power3.out'
          splitType='chars'
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin='-100px'
          textAlign='left'
          onLetterAnimationComplete={handleHeadingComplete}
        />
      </div>

      {/* Bottom-right paragraph (animated) */}
      <div className='mt-28  self-end'>
        <SplitText
          text={
            "Regardless of where your child studies, what size they wear, or how active their day is, our uniforms are your go-to destination for comfortable, durable schoolwear that lasts."
          }
          tag='p'
          className='inline-block w-full max-w-[680px] text-base md:text-lg lg:text-xl text-black/90 leading-relaxed'
          delay={30}
          duration={0.45}
          ease='power3.out'
          splitType='words'
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.3}
          rootMargin='-50px'
          textAlign='right'
        />
      </div>
    </section>
  );
}
