import React from 'react';

const services = [
  {
    title: 'Weddings',
    desc: 'Cinematic coverage of your most important day.',
    cta: 'See Packages',
  },
  {
    title: 'Preweddings',
    desc: 'Elegant portraits to celebrate your journey.',
    cta: 'See Packages',
  },
  {
    title: 'Families',
    desc: 'Cherished moments across generations.',
    cta: 'See Packages',
  },
];

export default function ServicesSnapshot() {
  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="rounded-lg bg-white shadow-md p-8 flex flex-col items-start">
              <h3 className="font-serif text-xl text-neutral-900 mb-2">{service.title}</h3>
              <p className="text-neutral-700 mb-4">{service.desc}</p>
              <button className="border border-[#CFAE70] text-neutral-900 hover:bg-[#CFAE70] hover:text-white px-5 py-2 rounded-lg font-semibold transition text-sm">{service.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
