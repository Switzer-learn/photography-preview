"use client";
import { Header,Hero, TrustStrip, FeaturedStories, AboutPreview, ServicesSnapshot, HowItWorksPreview, TestimonialsPreview, FinalCTA, Footer } from "../components";

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
