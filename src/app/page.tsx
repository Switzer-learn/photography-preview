"use client";
import {Hero, FeaturedStories, AboutPreview, ServicesSnapshot, HowItWorksPreview, TestimonialsPreview, FinalCTA } from "../components";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      
      <Hero />
      <AboutPreview />
      
      <FeaturedStories />
      
      <ServicesSnapshot />
      <HowItWorksPreview />
      <TestimonialsPreview />
      
      <FinalCTA />
      
    </main>
  );
}
