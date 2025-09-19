import React from 'react';

export default function InquiryPage() {
  return (
    <section className="bg-neutral-900 text-white py-20 min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-center">Let’s Create Your Story Together</h1>
      <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8 text-center">
        We’d be honored to capture your most important moments. Send us a message, and we’ll reply within 24 hours.
      </p>
      <form className="bg-white/10 rounded-lg p-8 max-w-xl w-full space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input className="flex-1 px-4 py-2 rounded bg-white/80 text-neutral-900 placeholder-neutral-500 focus:outline-none" placeholder="Name" required />
          <input className="flex-1 px-4 py-2 rounded bg-white/80 text-neutral-900 placeholder-neutral-500 focus:outline-none" placeholder="Email" type="email" required />
        </div>
        <input className="w-full px-4 py-2 rounded bg-white/80 text-neutral-900 placeholder-neutral-500 focus:outline-none" placeholder="WhatsApp" />
        <input className="w-full px-4 py-2 rounded bg-white/80 text-neutral-900 placeholder-neutral-500 focus:outline-none" placeholder="Event Date / Location" />
        <select className="w-full px-4 py-2 rounded bg-white/80 text-neutral-900 focus:outline-none">
          <option>Type of Shoot</option>
          <option>Wedding</option>
          <option>Prewed</option>
          <option>Couple</option>
          <option>Family</option>
          <option>Engagement</option>
        </select>
        <textarea className="w-full px-4 py-2 rounded bg-white/80 text-neutral-900 placeholder-neutral-500 focus:outline-none" placeholder="Message" rows={4} />
        <button type="submit" className="w-full bg-[#CFAE70] text-white font-medium px-6 py-3 rounded hover:bg-[#B8965F] transition-colors">Send Inquiry</button>
        <a href="https://wa.me/62" target="_blank" rel="noopener noreferrer" className="block text-center text-[#CFAE70] hover:text-white mt-2 underline">Chat via WhatsApp</a>
      </form>
    </section>
  );
}
