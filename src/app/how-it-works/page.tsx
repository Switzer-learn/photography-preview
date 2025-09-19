import React from 'react';
import { Phone } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorksPage() {
    return (
        <section className="bg-white text-neutral-900 py-20 min-h-screen flex flex-col items-center justify-center px-4">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-center">Your Journey With Us</h1>
            <p className="max-w-2xl text-lg md:text-xl text-neutral-700 mb-8 text-center">
                We make your photography experience seamless, joyful, and unforgettable. Here’s how it works:
            </p>
            <ol className="list-decimal list-inside max-w-xl mx-auto text-left text-lg text-neutral-800 space-y-3">
                <li><span className="font-semibold text-[#CFAE70]">Connect:</span> Send us an inquiry and share your vision.</li>
                <li><span className="font-semibold text-[#CFAE70]">Book:</span> Choose your package, confirm your date.</li>
                <li><span className="font-semibold text-[#CFAE70]">Shoot:</span> Relax and enjoy your photoshoot experience.</li>
                <li><span className="font-semibold text-[#CFAE70]">Relive:</span> Receive a beautifully edited gallery to download and keep forever.</li>
            </ol>
            <p className="text-lg text-neutral-700 text-center mt-12 mb-4">Ready to start your story with us? Reach out below and let’s make memories together.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a
                    href="https://wa.me/62"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#CFAE70] text-white font-medium px-6 py-3 rounded-full shadow hover:bg-[#B8965F] transition-colors"
                >
                    <Phone className="w-5 h-5" />
                    Chat via WhatsApp
                </a>
                <Link
                    href="/inquiry"
                    className="flex items-center gap-2 border border-[#CFAE70] text-[#CFAE70] font-medium px-6 py-3 rounded-full hover:bg-[#CFAE70] hover:text-white transition-colors"
                >
                    Inquiry Form
                </Link>
            </div>
        </section>
    );
}
