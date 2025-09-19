import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'KANAE captured our wedding in Bali so beautifully — every moment feels alive again.',
    image: '/images/Wedding_Bali_Beach.png',
    name: 'Maya & Arjun',
  },
  {
    quote: 'From inquiry to delivery, the experience was effortless and warm.',
    image: '/images/Wedding_Bandung_Mountain.png',
    name: 'Sophie & Thomas',
  },
];

export default function TestimonialsPreview() {
  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-8">Testimonials</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center max-w-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Image src={t.image} alt={t.name} width={48} height={48} className="rounded-full mb-4 object-cover" />
              <p className="text-neutral-700 italic mb-2">“{t.quote}”</p>
              <span className="text-neutral-500 text-sm">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
