import React from 'react';
import { Phone } from 'lucide-react';

const StickyWhatsApp = () => (
  <a
    href="https://wa.me/62"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat via WhatsApp"
  className="fixed bottom-6 right-6 z-[100] bg-[#CFAE70] text-white shadow-lg rounded-full border-2 border-white p-4 flex items-center justify-center hover:bg-[#B8965F] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
    style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)' }}
  >
  <Phone size={28} />
  </a>
);

export default StickyWhatsApp;
