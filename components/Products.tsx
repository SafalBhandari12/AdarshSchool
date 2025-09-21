"use client";
import React from "react";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import BlurText from "@/components/BlurText";

const Products = () => {
  return (
    <section className='py-24 bg-[#4e2858]'>
      <div className='mx-auto max-w-5xl px-6 mb-16'>
        <div className='flex flex-col items-start'>
          <div className='leading-none'>
            <BlurText
              text={"Our"}
              className='text-[#ddf0f7] text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold'
              animateBy='letters'
              delay={40}
              vertical
            />
          </div>
          <div className='-mt-4'>
            <BlurText
              text={"Products"}
              className='text-[#ddf0f7] text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold'
              animateBy='letters'
              delay={80}
              vertical
            />
          </div>
        </div>
      </div>
      <ScrollStack>
        <ScrollStackItem
          title='School Blazers'
          subtitle='Tailored wool-blend blazers — durable, wrinkle-resistant and available in multiple house colours.'
        >
          <img
            src={"/card2.png"}
            alt='school blazers'
            className='w-full h-full object-cover rounded-lg'
          />
        </ScrollStackItem>

        <ScrollStackItem
          title='Uniform Shirts'
          subtitle='Breathable cotton and poly-cotton shirts with reinforced stitching for daily wear.'
        >
          <img
            src={"/card1.png"}
            alt='uniform shirts'
            className='w-full h-full object-cover rounded-lg'
          />
        </ScrollStackItem>

        <ScrollStackItem
          title='Custom Tailored Sets'
          subtitle='Complete uniform sets with custom logo embroidery, measured fittings and bulk production.'
        >
          <img
            src='https://lh3.googleusercontent.com/CeIgstZWNBERJnTFElhbNc_BnMszKpGLFXFjJ2QoPooezsjAs1SDBIk_Yubi3uI87uZyHcGtqg8rBVr-M8BTpv74vi5KWp0sKqN_VV4p_yXYk6dJf0djJe8QH7QwE64OQ2CbiIJA'
            alt='custom uniform sets'
            className='w-full h-full object-cover rounded-lg'
          />
        </ScrollStackItem>
      </ScrollStack>
    </section>
  );
};

export default Products;
