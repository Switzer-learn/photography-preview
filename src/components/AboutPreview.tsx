import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function AboutPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-4">More than photographs — stories you can feel.</h2>
          <p className="text-neutral-700 text-lg mb-6">At KANAE, we believe every couple has a unique story. Our passion lies in capturing authentic emotions, candid moments, and timeless memories you’ll cherish forever. From Bali sunsets to global destinations, we bring elegance and heart to every frame.</p>
          <Link href="/meet-the-team">
            <button className="border border-[#CFAE70] text-neutral-900 hover:bg-[#CFAE70] hover:text-white px-6 py-3 rounded-lg font-semibold transition">Meet the Team</button>
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/About Us section.png"
            alt="Brand — About Us — Elegant behind-the-scenes photo of photographer adjusting camera lens during golden hour"
            width={400}
            height={533}
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
