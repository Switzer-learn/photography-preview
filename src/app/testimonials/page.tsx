"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    image: '/images/Couple_Bali_Nature.png',
    quote: 'The photos exceeded our expectations — every frame feels alive.',
    name: 'Maya & Arjun',
  },
  {
    image: '/images/Couple_Bandung_UrbanBar.png',
    quote: 'Booking Kanae was the best decision for our wedding in Paris.',
    name: 'Sophie & Thomas',
  },
  {
    image: '/images/Couple_International_Beach.png',
    quote: 'The process was seamless, and the gallery delivery was faster than expected.',
    name: 'Claire & Dimas',
  },
  {
    image: '/images/Engagement_Bali_Cultural.png',
    quote: 'Kanae captured our engagement with such artistry and care.',
    name: 'Ayu & Kevin',
  },
  {
    image: '/images/Prewedding_International_Urban.png',
    quote: 'We felt so comfortable and the results are stunning. Thank you Kanae!',
    name: 'Lina & Marco',
  },
];

export default function TestimonialsPage() {
  const [current, setCurrent] = useState(0);
  const cardsToShow = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : (typeof window !== 'undefined' && window.innerWidth >= 640 ? 2 : 1);

  // Responsive: 1 card on mobile, 2 on sm/md, 3 on lg+
  // But for SSR, fallback to 1
  const getCardsToShow = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  React.useEffect(() => {
    const handleResize = () => setCurrent(0);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = testimonials.length;
  const cards = getCardsToShow();
  const canGoPrev = current > 0;
  const canGoNext = current < total - cards;

  const handlePrev = () => {
    if (canGoPrev) setCurrent(current - 1);
  };
  const handleNext = () => {
    if (canGoNext) setCurrent(current + 1);
  };

  return (
    <section className="bg-neutral-900 text-white py-20 min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">Stories Shared by Couples</h1>
      <div className="relative w-full max-w-4xl flex items-center justify-center">
        {/* Left arrow */}
        <button
          onClick={handlePrev}
          disabled={!canGoPrev}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 border border-white/20 text-white p-2 rounded-full hover:bg-white/20 transition-all disabled:opacity-30 disabled:pointer-events-none`}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        {/* Carousel cards */}
        <div className="overflow-hidden w-full">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${(100 / cards) * current}%)` }}>
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / cards}%`, minWidth: 0 }}
              >
                <motion.div
                  className="bg-neutral-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center h-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#CFAE70] mb-4">
                    <Image src={t.image} alt={t.name} width={96} height={96} className="object-cover w-full h-full" />
                  </div>
                  <blockquote className="italic text-lg md:text-xl mb-4">“{t.quote}”</blockquote>
                  <span className="block text-[#CFAE70] font-semibold">— {t.name}</span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        {/* Right arrow */}
        <button
          onClick={handleNext}
          disabled={!canGoNext}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 border border-white/20 text-white p-2 rounded-full hover:bg-white/20 transition-all disabled:opacity-30 disabled:pointer-events-none`}
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
