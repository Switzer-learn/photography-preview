import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="relative min-h-[320px] flex items-center justify-center bg-neutral-900 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/Contact page hero.png"
          alt="Brand — Contact — Elegant flatlay of wedding invitation, engagement ring, vintage camera, and flowers on neutral background"
          fill
          className="object-cover object-center w-full h-full opacity-80"
          sizes="(max-width: 768px) 100vw, 1280px"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      </div>
      <motion.div
        className="relative z-10 text-center text-white py-16 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Ready to Begin Your Story?</h2>
        <p className="text-lg mb-6">We’d be honored to capture your most important moments. Let’s make them unforgettable.</p>
        <button className="border border-[#CFAE70] text-white hover:bg-[#CFAE70] hover:text-white px-8 py-3 rounded-lg font-semibold transition">Start Your Inquiry</button>
      </motion.div>
    </section>
  );
}
