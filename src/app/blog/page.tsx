import React from 'react';

export default function BlogPage() {
  return (
    <section className="bg-slate-200 text-neutral-900 py-20 min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-center">Stories & Inspiration</h1>
      <p className="max-w-2xl text-lg md:text-xl text-neutral-700 mb-8 text-center">
        Every gallery holds more than images — it’s a journey. Browse our journal for real weddings, preweddings, and behind-the-scenes inspiration.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <div className="bg-stone-50 rounded-lg p-6 shadow">
          <h2 className="font-serif text-xl font-semibold mb-2 text-[#CFAE70]">A Romantic Prewedding in Lembang Highlands</h2>
          <p className="text-neutral-700 mb-2">Mist, pine trees, and soft laughter — nature at its most poetic.</p>
        </div>
        <div className="bg-stone-50 rounded-lg p-6 shadow">
          <h2 className="font-serif text-xl font-semibold mb-2 text-[#CFAE70]">Top 5 Bali Venues for Dream Weddings</h2>
          <p className="text-neutral-700 mb-2">From Uluwatu cliffs to Ubud’s jungle retreats, here are our favorite places to say ‘I do.’</p>
        </div>
      </div>
    </section>
  );
}
