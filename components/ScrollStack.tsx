"use client";
import React, { ReactNode } from "react";

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
  stepNumber?: number;
  topPx?: number; // computed sticky offset from parent
  cardHeightVh?: number;
  zIndex?: number;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
  stepNumber,
  topPx = 70,
  cardHeightVh = 70,
  zIndex = 1,
}) => {
  return (
    <div
      className={`sticky w-full flex flex-col items-center p-5 rounded-[20px] bg-[#d3fcd2] shadow-xl border border-black/5 ${itemClassName}`.trim()}
      style={{
        top: `${topPx}px`,
        height: `${cardHeightVh}vh`,
        zIndex,
      }}
    >
      <div className='img-step-title'>
        <div className='step-sign-container flex justify-center'>
          <div className='step-sign rounded-[40px] bg-[#153973] px-5 py-[15px]'>
            <p className='text-center text-white font-bold text-base'>
              {stepNumber || 1}
            </p>
          </div>
        </div>
        <p className='mt-5 text-[#153973] text-center font-bold text-xl leading-[50px]'>
          Step {stepNumber || 1} Description
        </p>
      </div>
      <div className='mt-6 w-full max-w-[900px] flex-1 flex items-center justify-center overflow-hidden'>
        {children}
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
  sectionHeightVh = 120,
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
