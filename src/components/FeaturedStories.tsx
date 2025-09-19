"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const stories = [
  {
    title: 'Bali Cliffside Wedding',
    image: '/images/Prewedding_Bali_Beach_Cliff.png',
    alt: 'Prewedding — Bali Beach Cliff — Cinematic prewedding photoshoot at Uluwatu cliffs',
    teaser: 'An intimate ceremony overlooking Uluwatu’s dramatic cliffs, framed by ocean horizons.',
    cta: 'View Story',
  },
  {
    title: 'Bandung Highland Prewedding',
    image: '/images/Prewedding_Bandung_Nature.png',
    alt: 'Prewedding — Bandung Nature — Romantic portraits amidst the mist and pine forests of Lembang’s highlands.',
    teaser: 'Romantic portraits amidst the mist and pine forests of Lembang’s highlands.',
    cta: 'View Story',
  },
  {
    title: 'Paris Destination Elopement',
    image: '/images/Wedding_International_Urban.png',
    alt: 'Wedding — International Urban — A timeless elopement by the Seine — love knows no borders.',
    teaser: 'A timeless elopement by the Seine — love knows no borders.',
    cta: 'View Story',
  },
];

export default function FeaturedStories() {
  return (
  <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
  <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-10">Featured Stories</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <motion.div
              key={story.title}
              className="rounded-lg shadow-lg overflow-hidden bg-white group cursor-pointer transition-transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  className="object-cover object-center w-full h-full"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-neutral-900 mb-2">{story.title}</h3>
                <p className="text-neutral-700 text-base mb-4">{story.teaser}</p>
                <button className="text-[#CFAE70] hover:text-white hover:bg-[#CFAE70] px-4 py-2 rounded-lg font-medium text-sm border border-[#CFAE70] transition">{story.cta}</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
