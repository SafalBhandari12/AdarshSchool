"use client";
import React, { useEffect, useRef } from "react";
import BlurText from "@/components/BlurText";
import Image from "next/image";

export default function SamplesGallery() {
  const scrollerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Image arrays for each category
  const femaleDownImages = [
    "WhatsApp Image 2025-09-26 at 13.14.03_67fedf00.jpg",
    "WhatsApp Image 2025-09-26 at 13.14.04_d8b00167.jpg",
    "WhatsApp Image 2025-09-26 at 13.14.08_ec5a38a2.jpg",
    "WhatsApp Image 2025-09-26 at 13.14.09_7e0d207a.jpg",
    "WhatsApp Image 2025-09-26 at 13.14.09_844203ed.jpg",
    "WhatsApp Image 2025-09-26 at 13.14.09_cd52c0b2.jpg",
    "WhatsApp Image 2025-09-26 at 13.14.09_d980b856.jpg",
    "WhatsApp Image 2025-09-26 at 13.14.10_02c3132b.jpg",
    "WhatsApp Image 2025-09-26 at 13.14.10_15652a11.jpg",
    "WhatsApp Image 2025-09-26 at 13.14.11_44531aa0.jpg",
    "WhatsApp Image 2025-09-26 at 13.14.11_d4e2b86a.jpg",
    "WhatsApp Image 2025-09-26 at 13.14.12_cf183b61.jpg",
    "WhatsApp Image 2025-09-26 at 13.14.34_3a35d808.jpg",
    "WhatsApp Image 2025-09-26 at 13.14.35_03e95ffa.jpg",
    "WhatsApp Image 2025-09-26 at 13.14.36_039a92ac.jpg",
    "WhatsApp Image 2025-09-26 at 13.14.36_69c4f8bf.jpg",
  ];

  const femaleUpImages = [
    "WhatsApp Image 2025-09-26 at 13.13.52_b7a35239.jpg",
    "WhatsApp Image 2025-09-26 at 13.13.53_7a291925.jpg",
    "WhatsApp Image 2025-09-26 at 13.13.54_7293653c.jpg",
    "WhatsApp Image 2025-09-26 at 13.13.55_06225dc9.jpg",
    "WhatsApp Image 2025-09-26 at 13.13.56_2c7d344b.jpg",
    "WhatsApp Image 2025-09-26 at 13.13.57_df4578c8.jpg",
    "WhatsApp Image 2025-09-26 at 13.13.58_9e5d3911.jpg",
    "WhatsApp Image 2025-09-26 at 13.13.59_248cf967.jpg",
    "WhatsApp Image 2025-09-26 at 13.14.00_2eaef526.jpg",
    "WhatsApp Image 2025-09-26 at 13.14.01_1bfe6625.jpg",
    "WhatsApp Image 2025-09-26 at 13.14.02_02c49b0b.jpg",
    "WhatsApp Image 2025-09-26 at 13.14.02_432a133d.jpg",
    "WhatsApp Image 2025-09-26 at 13.14.02_5283fd95.jpg",
  ];

  const shirtImages = [
    "WhatsApp Image 2025-09-26 at 12.40.33_9fbbd7c9.jpg",
    "WhatsApp Image 2025-09-26 at 12.40.34_073af703.jpg",
    "WhatsApp Image 2025-09-26 at 12.40.34_82c1beb7.jpg",
    "WhatsApp Image 2025-09-26 at 12.40.34_a46f1bb5.jpg",
    "WhatsApp Image 2025-09-26 at 12.40.35_5cb42147.jpg",
    "WhatsApp Image 2025-09-26 at 12.40.35_70a19bcf.jpg",
    "WhatsApp Image 2025-09-26 at 12.40.35_cd7cda83.jpg",
    "WhatsApp Image 2025-09-26 at 12.40.36_1056195f.jpg",
    "WhatsApp Image 2025-09-26 at 12.40.36_9dd3508a.jpg",
    "WhatsApp Image 2025-09-26 at 12.40.36_cbd68a4f.jpg",
    "WhatsApp Image 2025-09-26 at 12.40.36_df345e05.jpg",
    "WhatsApp Image 2025-09-26 at 12.40.37_0e4e95a4.jpg",
  ];

  const sweaterImages = [
    "WhatsApp Image 2025-09-26 at 12.40.27_02ad2330.jpg",
    "WhatsApp Image 2025-09-26 at 12.40.28_05b865b8.jpg",
    "WhatsApp Image 2025-09-26 at 12.40.28_3604e33f.jpg",
    "WhatsApp Image 2025-09-26 at 12.40.28_b3fd678b.jpg",
    "WhatsApp Image 2025-09-26 at 12.40.29_0a96b977.jpg",
    "WhatsApp Image 2025-09-26 at 12.40.29_423de14e.jpg",
    "WhatsApp Image 2025-09-26 at 12.40.29_58353446.jpg",
    "WhatsApp Image 2025-09-26 at 12.40.29_cd3ac19b.jpg",
    "WhatsApp Image 2025-09-26 at 12.40.30_90a7f756.jpg",
    "WhatsApp Image 2025-09-26 at 12.40.30_b3942fe2.jpg",
    "WhatsApp Image 2025-09-26 at 12.40.30_c8999934.jpg",
    "WhatsApp Image 2025-09-26 at 12.40.31_21844aba.jpg",
  ];

  const imageCollections = [
    {
      images: femaleDownImages,
      folder: "female down",
      title: "Pants & Dresses",
    },
    {
      images: femaleUpImages,
      folder: "female up",
      title: "Girl's Shirts & Tops",
    },
    { images: shirtImages, folder: "shirt", title: "Boy's Shirts" },
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

    // Start animation after a short delay to let critical layout happen
    const timer = setTimeout(animateScrollers, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='bg-[#f7f2ee] py-20 favorit-font overflow-hidden'>
      <div className='max-w-7xl mx-auto px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='font-bold leading-tight text-[#2b6f74] text-[3.2rem] sm:text-[5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[9.5rem] mb-8'>
            <BlurText
              text={"Our Samples"}
              animateBy='letters'
              delay={20}
              className='block'
            />
          </h2>

          <div className='max-w-3xl mx-auto'>
            <BlurText
              text={
                "Explore our diverse collection of school uniforms crafted with precision and care. From traditional designs to modern styles, each piece reflects our commitment to quality and comfort."
              }
              animateBy='words'
              delay={60}
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
                <h3 className='text-[#2b6f74] text-2xl md:text-3xl font-semibold'>
                  <BlurText
                    text={collection.title}
                    animateBy='words'
                    delay={100 + collectionIndex * 50}
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
                  maskImage:
                    "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
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
                    className='flex-shrink-0 w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group'
                  >
                    <Image
                      src={`/scroller/${collection.folder}/${image}`}
                      alt={`${collection.title} sample ${imageIndex + 1}`}
                      fill
                      className='object-cover transition-transform duration-700 group-hover:scale-110'
                      sizes='(max-width: 768px) 320px, 320px'
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
