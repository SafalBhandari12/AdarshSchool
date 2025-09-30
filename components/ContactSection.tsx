"use client";
import React from "react";
import BlurText from "@/components/BlurText";

export default function ContactSection() {
  return (
    <section className='bg-[#f7f2ee] text-[#2b6f74] py-20 favorit-font'>
      <div className='max-w-7xl mx-auto px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='font-bold leading-tight text-[#2b6f74] text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] mb-6'>
            <BlurText
              text={"Get In Touch"}
              animateBy='words'
              delay={2}
              className='block'
            />
          </h2>

          <div className='max-w-2xl mx-auto'>
            <BlurText
              text={
                "Ready to outfit your school? Tell us about your uniform requirements and we'll get back to you with a custom quote."
              }
              animateBy='words'
              delay={6}
              className='text-[#2b6f74]/80 text-lg md:text-xl leading-relaxed'
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className='flex justify-center items-center'>
          <div className='w-full max-w-md sm:max-w-lg md:max-w-xl bg-white/80 p-6 sm:p-8 rounded-2xl mx-auto backdrop-blur-sm border border-[#2b6f74]/10 shadow-xl'>
            <h3 className='text-[#2b6f74] text-xl font-semibold mb-6 text-center'>
              <BlurText
                text={"Send us a message"}
                animateBy='words'
                delay={10}
                className='block'
              />
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
              className='space-y-6'
            >
              <div>
                <input
                  name='name'
                  type='text'
                  placeholder='Your Name'
                  required
                  className='w-full px-6 py-4 rounded-xl bg-white/60 text-[#2b6f74] placeholder-[#2b6f74]/60 border border-[#2b6f74]/20 focus:outline-none focus:ring-2 focus:ring-[#d6df3a] focus:border-transparent transition-all duration-200 backdrop-blur-sm'
                />
              </div>

              <div>
                <input
                  name='email'
                  type='email'
                  placeholder='Email or Phone'
                  required
                  className='w-full px-6 py-4 rounded-xl bg-white/60 text-[#2b6f74] placeholder-[#2b6f74]/60 border border-[#2b6f74]/20 focus:outline-none focus:ring-2 focus:ring-[#d6df3a] focus:border-transparent transition-all duration-200 backdrop-blur-sm'
                />
              </div>

              <div>
                <textarea
                  name='message'
                  placeholder='Tell us about your uniform requirements...'
                  rows={5}
                  required
                  className='w-full px-6 py-4 rounded-xl bg-white/60 text-[#2b6f74] placeholder-[#2b6f74]/60 border border-[#2b6f74]/20 focus:outline-none focus:ring-2 focus:ring-[#d6df3a] focus:border-transparent resize-none transition-all duration-200 backdrop-blur-sm'
                />
              </div>

              <div className='text-center'>
                <button
                  type='submit'
                  className='bg-[#d6df3a] text-black font-semibold rounded-full px-10 py-4 shadow-lg hover:shadow-xl hover:brightness-95 transition-all duration-300 hover:scale-105 min-w-[200px]'
                >
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
