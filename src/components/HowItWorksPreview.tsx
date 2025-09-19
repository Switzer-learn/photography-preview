import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Camera, GalleryVertical, Send, Phone } from 'lucide-react';
import Link from 'next/link';

const steps = [
    { icon: <Send className="w-6 h-6 text-[#CFAE70]" />, title: 'Connect', desc: 'Send us an inquiry and share your vision.' },
    { icon: <Calendar className="w-6 h-6 text-[#CFAE70]" />, title: 'Book', desc: 'Choose your package, confirm your date.' },
    { icon: <Camera className="w-6 h-6 text-[#CFAE70]" />, title: 'Shoot', desc: 'Relax and enjoy your photoshoot experience.' },
    { icon: <GalleryVertical className="w-6 h-6 text-[#CFAE70]" />, title: 'Relive', desc: 'Receive a beautifully edited gallery to download and keep forever.' },
];

export default function HowItWorksPreview() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-8">How It Works</h2>
                <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.title}
                            className="flex flex-col items-center text-center flex-1 px-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <div className="mb-4">{step.icon}</div>
                            <h3 className="font-serif text-lg text-neutral-900 mb-2">{step.title}</h3>
                            <p className="text-neutral-700 text-sm">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12">
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
            </div>
        </section>
    );
}
