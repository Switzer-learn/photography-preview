import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <section className="bg-white text-neutral-900 py-20 min-h-screen flex flex-col px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-auto">
        {/* Left: Portrait Image */}
        <div className="flex justify-center lg:justify-end me-10">
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] aspect-[3/4] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/Team_1.png"
              alt="About Us"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 460px"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex flex-col lg:items-start">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left">
            More than photographs — stories you can feel.
          </h1>

          <p className="max-w-2xl text-neutral-700 mb-6 text-center lg:text-left leading-relaxed">
            At KANAE, we believe every couple carries a story worth telling with
            grace and intention. Behind every glance, touch, and smile lies a
            memory that deserves to be preserved — not just as a photograph, but
            as a feeling you can return to for years to come.
          </p>

          <p className="max-w-2xl text-neutral-700 mb-6 text-center lg:text-left leading-relaxed">
            Our approach is quiet yet intentional, allowing real emotions to
            unfold naturally. From the laughter shared under Bali’s golden skies
            to the intimacy of a whispered vow, we document the in-between
            moments that often mean the most. Each image is crafted with
            cinematic care, balancing elegance with authenticity, so your love
            feels timeless on every page of your story.
          </p>

          <p className="max-w-2xl text-neutral-700 mb-8 text-center lg:text-left leading-relaxed">
            From Bali sunsets to faraway destinations, our promise is simple: to
            create photographs that hold not only how your day looked, but how
            it truly felt — a visual legacy of love, intimacy, and memory that
            endures forever.
          </p>

          <a
            href="/meet-the-team"
            className="inline-block bg-[#CFAE70] text-white font-medium px-6 py-3 rounded hover:bg-[#B8965F] transition-colors"
          >
            Meet the Team
          </a>
        </div>
      </div>
    </section>
  );
}
