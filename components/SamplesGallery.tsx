"use client";
import React, { useEffect, useRef } from "react";
import BlurText from "@/components/BlurText";
import Image from "next/image";

export default function SamplesGallery() {
  const scrollerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Image arrays for each category
  const femaleDownImages = [
    "WhatsApp Image 2025-09-26 at 13.14.03_67fedf00.png",
    "WhatsApp Image 2025-09-26 at 13.14.04_d8b00167.png",
    "WhatsApp Image 2025-09-26 at 13.14.08_ec5a38a2.png",
    "WhatsApp Image 2025-09-26 at 13.14.09_7e0d207a.png",
    "WhatsApp Image 2025-09-26 at 13.14.09_844203ed.png",
    "WhatsApp Image 2025-09-26 at 13.14.09_cd52c0b2.png",
    "WhatsApp Image 2025-09-26 at 13.14.09_d980b856.png",
    "WhatsApp Image 2025-09-26 at 13.14.10_02c3132b.png",
    "WhatsApp Image 2025-09-26 at 13.14.10_15652a11.png",
    "WhatsApp Image 2025-09-26 at 13.14.11_44531aa0.png",
    "WhatsApp Image 2025-09-26 at 13.14.11_d4e2b86a.png",
    "WhatsApp Image 2025-09-26 at 13.14.12_cf183b61.png",
    "WhatsApp Image 2025-09-26 at 13.14.34_3a35d808.png",
    "WhatsApp Image 2025-09-26 at 13.14.35_03e95ffa.png",
    "WhatsApp Image 2025-09-26 at 13.14.36_039a92ac.png",
    "WhatsApp Image 2025-09-26 at 13.14.36_69c4f8bf.png",
  ];

  const femaleUpImages = [
    "WhatsApp Image 2025-09-26 at 13.13.52_b7a35239.png",
    "WhatsApp Image 2025-09-26 at 13.13.53_7a291925.png",
    "WhatsApp Image 2025-09-26 at 13.13.54_7293653c.png",
    "WhatsApp Image 2025-09-26 at 13.13.55_06225dc9.png",
    "WhatsApp Image 2025-09-26 at 13.13.56_2c7d344b.png",
    "WhatsApp Image 2025-09-26 at 13.13.57_df4578c8.png",
    "WhatsApp Image 2025-09-26 at 13.13.58_9e5d3911.png",
    "WhatsApp Image 2025-09-26 at 13.13.59_248cf967.png",
    "WhatsApp Image 2025-09-26 at 13.14.00_2eaef526.png",
    "WhatsApp Image 2025-09-26 at 13.14.01_1bfe6625.png",
    "WhatsApp Image 2025-09-26 at 13.14.02_02c49b0b.png",
    "WhatsApp Image 2025-09-26 at 13.14.02_432a133d.png",
    "WhatsApp Image 2025-09-26 at 13.14.02_5283fd95.png",
  ];

  const shirtImages = [
    "WhatsApp Image 2025-09-26 at 12.40.33_9fbbd7c9.png",
    "WhatsApp Image 2025-09-26 at 12.40.34_073af703.png",
    "WhatsApp Image 2025-09-26 at 12.40.34_82c1beb7.png",
    "WhatsApp Image 2025-09-26 at 12.40.34_a46f1bb5.png",
    "WhatsApp Image 2025-09-26 at 12.40.35_5cb42147.png",
    "WhatsApp Image 2025-09-26 at 12.40.35_70a19bcf.png",
    "WhatsApp Image 2025-09-26 at 12.40.35_cd7cda83.png",
    "WhatsApp Image 2025-09-26 at 12.40.36_1056195f.png",
    "WhatsApp Image 2025-09-26 at 12.40.36_9dd3508a.png",
    "WhatsApp Image 2025-09-26 at 12.40.36_cbd68a4f.png",
    "WhatsApp Image 2025-09-26 at 12.40.36_df345e05.png",
    "WhatsApp Image 2025-09-26 at 12.40.37_0e4e95a4.png",
    "WhatsApp Image 2025-09-26 at 12.40.37_a945aaff.png",
    "WhatsApp Image 2025-09-26 at 12.40.37_f5ac9b23.png",
    "WhatsApp Image 2025-09-26 at 12.40.38_084a7470.png",
    "WhatsApp Image 2025-09-26 at 12.40.38_1a093aa1.png",
    "WhatsApp Image 2025-09-26 at 12.40.38_29836458.png",
    "WhatsApp Image 2025-09-26 at 12.40.38_d3f43fdf.png",
    "WhatsApp Image 2025-09-26 at 12.40.39_0f392c3a.png",
    "WhatsApp Image 2025-09-26 at 12.40.39_1bee664a.png",
  ];

  const sweaterImages = [
    "WhatsApp Image 2025-09-26 at 12.40.27_02ad2330.png",
    "WhatsApp Image 2025-09-26 at 12.40.28_05b865b8.png",
    "WhatsApp Image 2025-09-26 at 12.40.28_3604e33f.png",
    "WhatsApp Image 2025-09-26 at 12.40.28_b3fd678b.png",
    "WhatsApp Image 2025-09-26 at 12.40.29_0a96b977.png",
    "WhatsApp Image 2025-09-26 at 12.40.29_423de14e.png",
    "WhatsApp Image 2025-09-26 at 12.40.29_58353446.png",
    "WhatsApp Image 2025-09-26 at 12.40.29_cd3ac19b.png",
    "WhatsApp Image 2025-09-26 at 12.40.30_90a7f756.png",
    "WhatsApp Image 2025-09-26 at 12.40.30_b3942fe2.png",
    "WhatsApp Image 2025-09-26 at 12.40.30_c8999934.png",
    "WhatsApp Image 2025-09-26 at 12.40.31_21844aba.png",
    "WhatsApp Image 2025-09-26 at 12.40.31_3feb9dbb.png",
    "WhatsApp Image 2025-09-26 at 12.40.32_1a1fbc22.png",
    "WhatsApp Image 2025-09-26 at 12.40.32_79c9e435.png",
    "WhatsApp Image 2025-09-26 at 12.40.32_7c4b8d1e.png",
    "WhatsApp Image 2025-09-26 at 12.40.32_b6be5030.png",
    "WhatsApp Image 2025-09-26 at 12.40.33_496e6a57.png",
    "WhatsApp Image 2025-09-26 at 12.40.33_5c944cc9.png",
  ];

  const imageCollections = [
    {
      images: femaleDownImages,
      folder: "female down",
      title: "Pants & Shorts",
    },
    {
      images: femaleUpImages,
      folder: "female up",
      title: "Girl's Skirts & Tunics",
    },
    { images: shirtImages, folder: "shirt", title: "Shirts" },
    { images: sweaterImages, folder: "sweater", title: "Sweaters & Cardigans" },
  ];

  useEffect(() => {
    const animateScrollers = () => {
      scrollerRefs.current.forEach((scroller, index) => {
        if (!scroller) return;

        // 0=L->R, 1=R->L, 2=L->R, 3=R->L (alternating directions)
        const isReverse = index % 2 === 1; // Even indexes L->R, odd indexes R->L

        // Calculate speed proportional to content width for consistent loop timing
        const baseSpeed = 0.5; // Base speed factor
        const imageWidth = 256; // Approximate width of each image card (w-64 = 256px)
        const gap = 24; // gap-6 = 24px
        const imageCount = imageCollections[index].images.length;
        const totalWidth = imageCount * (imageWidth + gap);
        const speed = Math.max(1, Math.round((totalWidth / 10000) * baseSpeed)); // Normalize speed

        const animate = () => {
          const maxScroll = scroller.scrollWidth - scroller.clientWidth;

          if (maxScroll <= 0) {
            // If still no scrollable area, keep looping until layout settles
            requestAnimationFrame(animate);
            return;
          }

          if (isReverse) {
            // Right to Left scrolling
            scroller.scrollLeft -= speed;
            if (scroller.scrollLeft <= 0) {
              scroller.scrollLeft = maxScroll;
            }
          } else {
            // Left to Right scrolling
            scroller.scrollLeft += speed;
            if (scroller.scrollLeft >= maxScroll) {
              scroller.scrollLeft = 0;
            }
          }

          requestAnimationFrame(animate);
        };

        // Wait until the scroller has a measurable scrollable width before starting
        const waitForReadyAndStart = () => {
          const startTime = performance.now();
          const check = () => {
            const maxScroll = scroller.scrollWidth - scroller.clientWidth;

            if (maxScroll > 10) {
              // Initialize reverse scrollers to the right edge
              if (isReverse) {
                scroller.scrollLeft = maxScroll;
              } else {
                scroller.scrollLeft = 0;
              }

              // Start animation immediately without setTimeout delay
              animate();
            } else if (performance.now() - startTime < 5000) {
              // keep checking for up to 5s for layout/images to settle
              requestAnimationFrame(check);
            } else {
              // fallback: force start
              console.log(
                `Gallery ${index} fallback start, maxScroll: ${maxScroll}`
              );
              if (isReverse) {
                scroller.scrollLeft = Math.max(
                  0,
                  scroller.scrollWidth - scroller.clientWidth
                );
              } else {
                scroller.scrollLeft = 0;
              }
              animate();
            }
          };

          check();
        };

        waitForReadyAndStart();
      });
    };

    // Start animation immediately for faster loading
    const timer = setTimeout(animateScrollers, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='bg-[#f7f2ee] py-20 favorit-font overflow-hidden'>
      <div className='max-w-7xl mx-auto '>
        {/* Header */}
        <div className='text-center mb-16 px-8'>
          <h2 className='font-bold leading-tight text-[#2b6f74] text-[2.8rem] sm:text-[5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[9.5rem] mb-2'>
            <BlurText
              text={"Our"}
              animateBy='letters'
              delay={1}
              className='block'
            />
          </h2>
          <h2 className='font-bold leading-tight text-[#2b6f74] text-[2.8rem] sm:text-[5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[9.5rem] mb-8'>
            <BlurText
              text={"Samples"}
              animateBy='letters'
              delay={3}
              className='block'
            />
          </h2>

          <div className='max-w-3xl mx-auto'>
            <BlurText
              text={
                "Explore our diverse collection of school uniforms crafted with precision and care. From traditional designs to modern styles, each piece reflects our commitment to quality and comfort."
              }
              animateBy='words'
              delay={5}
              className='text-[#2b6f74]/80 text-lg md:text-xl leading-relaxed'
            />
          </div>
        </div>

        {/* Scrolling Gallery */}
        <div className='space-y-12'>
          {imageCollections.map((collection, collectionIndex) => (
            <div key={collectionIndex} className='w-full'>
              {/* Collection Title */}
              <div className='mb-6 text-center'>
                <h3 className='text-[#2b6f74] text-2xl md:text-3xl font-semibold px-5'>
                  <BlurText
                    text={collection.title}
                    animateBy='words'
                    delay={7 + collectionIndex * 2}
                    className='block'
                  />
                </h3>
              </div>

              {/* Horizontal Scroller */}
              <div
                ref={(el) => {
                  scrollerRefs.current[collectionIndex] = el;
                }}
                className='flex gap-6 overflow-x-hidden'
                style={{
                  // tightened gradient stops so the faded edges are smaller (less blur)
                  maskImage:
                    "linear-gradient(to right, transparent, black 2%, black 98%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 2%, black 98%, transparent)",
                }}
              >
                {/* Duplicate images for seamless looping */}
                {[
                  ...collection.images,
                  ...collection.images,
                  ...collection.images,
                ].map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className='flex-shrink-0 w-36 h-48 sm:w-48 sm:h-60 md:w-56 md:h-72 relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group'
                  >
                    <Image
                      src={`/scroller/${collection.folder}/${image}`}
                      alt={`${collection.title} sample ${imageIndex + 1}`}
                      fill
                      className='object-cover transition-transform duration-700 group-hover:scale-110'
                      sizes='(max-width: 768px) 220px, 320px'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
