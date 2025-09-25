"use client";
import React, { ReactNode } from "react";

// small helper to darken a hex color by percent (0-100)
function darkenHex(hex: string, percent: number) {
  const clean = hex.replace("#", "");
  const num = parseInt(
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean,
    16
  );
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;

  const amt = Math.round(2.55 * percent);
  r = Math.max(0, Math.min(255, r - amt));
  g = Math.max(0, Math.min(255, g - amt));
  b = Math.max(0, Math.min(255, b - amt));

  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
  stepNumber?: number;
  title?: string;
  subtitle?: string;
  topPx?: number; // computed sticky offset from parent
  cardHeightVh?: number;
  zIndex?: number;
  cardBg?: string; // optional background color for the inner card
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
  stepNumber,
  title,
  subtitle,
  topPx = 70,
  cardHeightVh = 70,
  zIndex = 1,
  cardBg,
}) => {
  return (
    // sticky wrapper stays full-width so it can center the card without breaking sticky
    <div
      className={`sticky left-0 right-0 flex justify-center ${itemClassName}`.trim()}
      style={{
        top: `${topPx}px`,
        height: `${cardHeightVh}vh`,
        zIndex,
      }}
    >
      {/* inner card constrained in width and centered */}
      <div
        className='w-full max-w-[900px] flex flex-col items-center p-5 rounded-[20px] shadow-xl border border-black/5'
        style={{ backgroundColor: cardBg ?? "#d3fcd2" }}
      >
        {/* Title and subtitle for product/company */}
        {(title || subtitle) && (
          <div className='img-step-title w-full text-center'>
            {title && (
              <h3 className='text-2xl md:text-3xl font-bold text-[#153973]'>
                {title}
              </h3>
            )}
            {subtitle && (
              <p className='mt-2 text-[#153973] text-sm md:text-base'>
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className='mt-6 w-full flex-1 flex items-center justify-center overflow-hidden'>
          {children}
        </div>
      </div>
    </div>
  );
};

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  // tuning
  baseTopPx?: number; // where the first card sticks
  stackOffsetPx?: number; // extra offset added per card
  cardHeightVh?: number; // visible card height
  sectionHeightVh?: number; // scroll distance per card
  introVh?: number; // padding before stack starts
  outroVh?: number; // padding after stack ends
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  baseTopPx = 70,
  stackOffsetPx = 24,
  cardHeightVh = 70,
  sectionHeightVh = 80,
  introVh = 0,
  outroVh = 0,
}) => {
  const items = React.Children.toArray(children).filter(Boolean);

  return (
    <div className={`relative isolate ${className}`}>
      {/* intro spacer */}
      {introVh > 0 && <div aria-hidden style={{ height: `${introVh}vh` }} />}

      {items.map((child, index) => {
        const topPx = baseTopPx + index * stackOffsetPx;
        const zIndex = 10 + index;
        // compute a slightly darker background per step (start from a light green)
        const base = "#d3fcd2";
        const darkened = darkenHex(base, index * 3); // 3% darker per step (subtler)
        return (
          <React.Fragment key={index}>
            {React.isValidElement(child) &&
              React.cloneElement(
                child as React.ReactElement<ScrollStackItemProps>,
                {
                  stepNumber: index + 1,
                  topPx,
                  cardHeightVh,
                  zIndex,
                  cardBg: darkened,
                }
              )}
            {/* spacer to create scroll distance for next item */}
            {index < items.length - 1 && (
              <div aria-hidden style={{ height: `${sectionHeightVh}vh` }} />
            )}
          </React.Fragment>
        );
      })}

      {/* outro spacer */}
      {outroVh > 0 && <div aria-hidden style={{ height: `${outroVh}vh` }} />}
    </div>
  );
};

export default ScrollStack;
