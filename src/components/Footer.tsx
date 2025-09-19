"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'How it Works', href: '/how-it-works' },
    { name: 'Meet the Team', href: '/meet-the-team' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/inquiry' },
  ];

  const services = [
    { name: 'Wedding Photography', href: '/services' },
    { name: 'Prewedding Sessions', href: '/services' },
    { name: 'Couple Portraits', href: '/services' },
    { name: 'Family Photography', href: '/services' },
    { name: 'Engagement Shoots', href: '/services' },
    { name: 'International Destinations', href: '/services' },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-screen-xl mx-auto px-6 md:px-12 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand & About */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Image src="/images/Logo_LG.png" alt="KANAE Logo" width={80} height={80} />
            </div>
            
            <p className="text-neutral-300 leading-relaxed mb-6 max-w-sm">
              More than photographs — stories you can feel. At KANAE, we believe every couple has a unique story. Our passion lies in capturing authentic emotions, candid moments, and timeless memories you&apos;ll cherish forever.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, color: '#CFAE70' }}
                href="#"
                className="text-neutral-400 hover:text-[#CFAE70] transition-colors"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, color: '#CFAE70' }}
                href="mailto:hello@kanaephotography.com"
                className="text-neutral-400 hover:text-[#CFAE70] transition-colors"
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, color: '#CFAE70' }}
                href="tel:+62"
                className="text-neutral-400 hover:text-[#CFAE70] transition-colors"
              >
                <Phone size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="font-serif text-xl font-semibold mb-6 text-[#CFAE70]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.div whileHover={{ x: 5, color: '#CFAE70' }}>
                    <Link
                      href={link.href}
                      className="text-neutral-300 hover:text-[#CFAE70] transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="font-serif text-xl font-semibold mb-6 text-[#CFAE70]">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <motion.div whileHover={{ x: 5, color: '#CFAE70' }}>
                    <Link
                      href={service.href}
                      className="text-neutral-300 hover:text-[#CFAE70] transition-all duration-300"
                    >
                      {service.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="font-serif text-xl font-semibold mb-6 text-[#CFAE70]">
              Get In Touch
            </h4>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#CFAE70] mt-1 flex-shrink-0" />
                <div className="text-neutral-300 text-sm">
                  <p>Banjar Kayangan, Bali, Indonesia</p>
                  <p className="mt-1">Available in Bandung & International</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-[#CFAE70] flex-shrink-0" />
                <a 
                  href="mailto:hello@kanaephotography.com"
                  className="text-neutral-300 text-sm hover:text-[#CFAE70] transition-colors"
                >
                  hello@kanaephotography.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-[#CFAE70] flex-shrink-0" />
                <a 
                  href="https://wa.me/62"
                  className="text-neutral-300 text-sm hover:text-[#CFAE70] transition-colors"
                >
                  WhatsApp: +62 xxx-xxxx-xxxx
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <p className="text-sm text-neutral-400 mb-3">
                Subscribe for latest stories & tips
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-l-lg text-white placeholder-neutral-400 focus:outline-none focus:border-[#CFAE70] transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#CFAE70] text-neutral-900 px-4 py-2 rounded-r-lg font-medium hover:bg-[#B8965F] transition-colors"
                >
                  Join
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border-t border-neutral-800 py-6"
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-neutral-400 text-sm">
              <span>© 2024 KANAE Photography. All rights reserved.</span>
              <Heart size={14} className="text-rose-500" />
            </div>

            {/* Social Follow */}
            <div className="flex items-center space-x-6 text-sm text-neutral-400">
              <a 
                href="#" 
                className="hover:text-[#CFAE70] transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="hover:text-[#CFAE70] transition-colors"
              >
                Terms of Service
              </a>
              <div className="flex items-center space-x-1">
                <span>Follow our journey on Instagram</span>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://instagram.com/kanaepix"
                  className="text-[#CFAE70] font-medium hover:text-[#B8965F] transition-colors"
                >
                  @kanaepix
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;