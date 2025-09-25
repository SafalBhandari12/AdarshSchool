"use client";
import React from "react";
import BlurText from "@/components/BlurText";

export default function Footer() {
  return (
    <footer id='contact' className='bg-[#0f0f0f] text-white py-20'>
      <div className='max-w-7xl mx-auto px-8'>
        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12'>
          {/* Left: giant heading */}
          <div className='w-full lg:w-1/2 text-left'>
            <h2 className='font-bold leading-tight text-white text-[1.8rem] sm:text-[2.8rem] md:text-[3.6rem] lg:text-[4.8rem]'>
              <div className='block'>
                <BlurText
                  text={"Ready to outfit"}
                  animateBy='words'
                  delay={20}
                  className='block whitespace-nowrap'
                />
              </div>

              <div className='block -mt-1'>
                <BlurText
                  text={"your students?"}
                  animateBy='words'
                  delay={60}
                  className='block'
                />
              </div>
            </h2>
          </div>

          {/* Right: description, CTA, small credit */}
          <div className='w-full lg:w-1/2 max-w-md text-left flex flex-col items-start gap-8'>
            <BlurText
              text={
                "Gain direct access to our design and production teams to deliver comfortable, durable and affordable school uniforms — tailored to your house colours and sizing needs."
              }
              animateBy='words'
              delay={100}
              className='text-white text-base md:text-lg leading-relaxed font-normal'
            />

            <a
              href='https://wa.me/918449431638'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block bg-[#d6df3a] text-black font-semibold rounded-full px-10 py-4 shadow-md hover:brightness-95 transition'
            >
              <BlurText
                text={"REQUEST A QUOTE"}
                animateBy='words'
                delay={140}
                className='text-black text-sm md:text-base font-medium'
              />
            </a>

            {/* Contact Form */}
            <div className='w-full mt-8 bg-white/5 p-6 rounded-lg'>
              <h3 className='text-white text-lg font-semibold mb-4'>
                Send us a message
              </h3>
              <form
                onSubmit={(e: React.FormEvent) => {
                  e.preventDefault();
                  const formData = new FormData(
                    e.currentTarget as HTMLFormElement
                  );
                  const name = formData.get("name") as string;
                  const email = formData.get("email") as string;
                  const message = formData.get("message") as string;

                  const whatsappMessage = `Hi! I'm ${name} (${email}). ${message}`;
                  const whatsappUrl = `https://wa.me/918449431638?text=${encodeURIComponent(
                    whatsappMessage
                  )}`;
                  window.open(whatsappUrl, "_blank");
                }}
                className='space-y-4'
              >
                <input
                  name='name'
                  type='text'
                  placeholder='Your Name'
                  required
                  className='w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#d6df3a]'
                />
                <input
                  name='email'
                  type='email'
                  placeholder='Email or Phone'
                  required
                  className='w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#d6df3a]'
                />
                <textarea
                  name='message'
                  placeholder='Tell us about your uniform requirements...'
                  rows={4}
                  required
                  className='w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#d6df3a] resize-none'
                />
                <button
                  type='submit'
                  className='bg-[#d6df3a] text-black font-semibold rounded-full px-8 py-3 shadow-md hover:brightness-95 transition'
                >
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Buttons */}
      <div className='fixed right-6 bottom-6 flex flex-col gap-3 z-50'>
        {/* WhatsApp Button */}
        <a
          href='https://wa.me/918449431638'
          target='_blank'
          rel='noopener noreferrer'
          className='w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110'
          aria-label='Contact via WhatsApp'
        >
          <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
            <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488' />
          </svg>
        </a>
      </div>
    </footer>
  );
}
