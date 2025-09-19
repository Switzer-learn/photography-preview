import Image from "next/image";
import React from "react";

export default function MeetTheTeamPage() {
  return (
    <section className="bg-[#CFAE70] text-neutral-900 py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Team Group Photo */}
        <div className="relative w-full h-[400px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/Meet_the_Team_page.png"
            alt="KANAE Photography Team"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right: Text */}
        <div className="flex flex-col justify-center">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Meet the People Behind the Lens
          </h1>
          <div className="max-w-xl text-neutral-800 leading-relaxed space-y-4">
            <p>
              <span className="font-semibold">On the left —</span> Louis, our calm and thoughtful lead photographer.
              He’s known for spotting fleeting emotions and making couples feel
              instantly comfortable, even if they’ve never been in front of a
              camera before.
            </p>
            
            <p>
              <span className="font-semibold">In the center —</span> Maya, the creative soul of the team. With her
              warm personality and designer’s eye, she brings elegance to every
              detail and keeps the atmosphere lighthearted and fun throughout
              the day.
            </p>
            
            <p>
              <span className="font-semibold">On the right —</span> Ardi, our quiet storyteller behind the scenes. His
              editing style is cinematic yet true to life, ensuring that every
              image feels rich with emotion and polished with timeless beauty.
            </p>
            </div>
        </div>
      </div>
    </section>
  );
}
