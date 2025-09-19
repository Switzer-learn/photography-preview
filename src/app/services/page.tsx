import React from 'react';

export default function ServicesPage() {
  return (
    <section className="bg-white text-neutral-900 py-20 min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-center">Tailored Packages for Every Journey</h1>
      <p className="max-w-2xl text-lg md:text-xl text-neutral-700 mb-8 text-center">
        Transparent pricing, no surprises. Whether your celebration is in Bali, Bandung, or overseas, we craft packages that fit your needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
        <div className="bg-stone-50 rounded-lg p-6 shadow">
          <h2 className="font-serif text-xl font-semibold mb-2 text-[#CFAE70]">Bali Weddings</h2>
          <p className="text-neutral-700 mb-2">Sunsets, beaches, temples — Bali at its finest.</p>
          <p className="text-neutral-500 mb-4">From IDR xx,xxx,xxx</p>
          <a href="#" className="text-[#CFAE70] hover:text-neutral-900 underline">View Details</a>
        </div>
        <div className="bg-stone-50 rounded-lg p-6 shadow">
          <h2 className="font-serif text-xl font-semibold mb-2 text-[#CFAE70]">Bandung Highlands</h2>
          <p className="text-neutral-700 mb-2">Romantic highlands, lush greenery, cool breezes.</p>
          <p className="text-neutral-500 mb-4">From IDR xx,xxx,xxx</p>
          <a href="#" className="text-[#CFAE70] hover:text-neutral-900 underline">View Details</a>
        </div>
        <div className="bg-stone-50 rounded-lg p-6 shadow">
          <h2 className="font-serif text-xl font-semibold mb-2 text-[#CFAE70]">International</h2>
          <p className="text-neutral-700 mb-2">From Paris to Tokyo, love knows no borders.</p>
          <p className="text-neutral-500 mb-4">Custom Quote</p>
          <a href="/inquiry" className="text-[#CFAE70] hover:text-neutral-900 underline">Inquire Now</a>
        </div>
      </div>
    </section>
  );
}
