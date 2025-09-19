"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

const portfolioItems = {
    'By Location': [
        { name: 'Bali', desc: 'Sacred temples, endless beaches' },
        { name: 'Bandung', desc: 'Highland mist, pine forests' },
        { name: 'International', desc: 'Love knows no borders' }
    ],
    'By Vibe': [
        { name: 'Beach', desc: 'Ocean witness to your love' },
        { name: 'Mountain', desc: 'Romantic highland retreats' },
        { name: 'Urban', desc: 'City lights, modern romance' },
        { name: 'Garden', desc: 'Lush greenery, natural beauty' }
    ],
    'By Event': [
        { name: 'Wedding', desc: 'Cinematic day documentation' },
        { name: 'Prewed', desc: 'Elegant journey celebration' },
        { name: 'Couple', desc: 'Authentic love stories' },
        { name: 'Family', desc: 'Cherished generational moments' },
        { name: 'Engagement', desc: 'Beginning of forever' }
    ]
};

const infoItems = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'How it Works', href: '/how-it-works' }
];


const Header = () => {
    const [modal, setModal] = useState<'portfolio' | 'info' | null>(null);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            // Get the height of the Hero section (assume it is at least 90vh)
            const hero = document.querySelector('section');
            const heroHeight = hero ? hero.offsetHeight : 0;
            setScrolled(window.scrollY > heroHeight - 80); // 80px header height buffer
        };
        window.addEventListener('scroll', onScroll);
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Modal close on overlay click or ESC
    React.useEffect(() => {
        if (!modal) return;
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setModal(null);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [modal]);

    const textOutline = {
        textShadow: `
            -1px -1px 0 #000,
             1px -1px 0 #000,
            -1px  1px 0 #000,
             1px  1px 0 #000
        `
    };
    const navHover =
        'hover:bg-[#CFAE70] hover:text-white focus:bg-[#CFAE70] focus:text-white transition-colors duration-200';
    // Pulse animation for Inquiry
    const pulseAnim = 'animate-[pulse_1.2s_ease-in-out_1]';
    const pathname = usePathname();
    // Always bg-white/30 if not on home, else scroll-based
    const headerBg = pathname !== "/" ? " bg-white/30 backdrop-blur-md" : (scrolled ? " bg-white/20 backdrop-blur-md" : "");
    // Chevron color follows header background: white over Hero, dark after scroll
    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300${headerBg}`}>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-3 flex items-center justify-center">
                {/* Desktop nav */}
                <nav className={`relative items-center gap-8 ${montserrat.className} hidden lg:flex`} style={{ zIndex: 10 }}>
                    {/* Portfolio Dropdown */}
                    <div className="relative hidden lg:block"
                        onMouseEnter={() => setModal('portfolio')}
                        onMouseLeave={() => setModal(null)}
                    >
                        <button
                            className={`tracking-wider text-xs font-light uppercase flex items-center gap-1 text-white bg-transparent px-3 py-1 rounded ${navHover}`}
                            style={textOutline}
                            onClick={() => setModal(modal === 'portfolio' ? null : 'portfolio')}
                            aria-expanded={modal === 'portfolio'}
                        >
                            <span style={textOutline}>Portfolio</span> <ChevronDown size={16} />
                        </button>
                        <AnimatePresence>
                            {modal === 'portfolio' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute left-0 mt-2 bg-black/90 text-white rounded-xl shadow-2xl min-w-[220px] p-4"
                                    style={{ zIndex: 20 }}
                                >
                                    <div className="flex flex-col gap-6">
                                        {Object.entries(portfolioItems).map(([category, items]) => (
                                            <div key={category}>
                                                <h4 className="font-serif text-base font-semibold text-[#CFAE70] mb-2 w-full">{category}</h4>
                                                <ul className="space-y-2">
                                                    {items.map((item) => (
                                                        <li key={item.name}>
                                                            <a href={`#portfolio-${item.name.toLowerCase()}`} className="block text-white hover:text-[#CFAE70] transition font-light text-sm">
                                                                <span className="font-medium w-full">{item.name}</span>

                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    {/* Info Dropdown */}
                    <div className="relative hidden lg:block"
                        onMouseEnter={() => setModal('info')}
                        onMouseLeave={() => setModal(null)}
                    >
                        <button
                            className={`tracking-wider text-xs font-light uppercase flex items-center gap-1 text-white bg-transparent px-3 py-1 rounded ${navHover}`}
                            style={textOutline}
                            onClick={() => setModal(modal === 'info' ? null : 'info')}
                            aria-expanded={modal === 'info'}
                        >
                            <span style={textOutline}>Info</span> <ChevronDown size={16} />
                        </button>
                        <AnimatePresence>
                            {modal === 'info' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute left-0 mt-2 bg-black/90 text-white rounded-xl shadow-2xl min-w-[180px] p-4"
                                    style={{ zIndex: 20 }}
                                >
                                    <ul className="space-y-3">
                                        {infoItems.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="block text-white hover:text-[#CFAE70] transition font-light text-sm">
                                                    <span style={textOutline}>{item.name}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <Link href="/meet-the-team" className={`tracking-wider text-xs font-light uppercase text-white bg-transparent px-3 py-1 rounded ${navHover}`} style={textOutline}><span style={textOutline}>Meet Us</span></Link>
                    <div className="flex items-center flex-shrink-0 mx-2">
                        <Link href="/">
                            <Image src="/images/Logo_LG.png" alt="KANAE Logo" width={44} height={44} />
                        </Link>
                    </div>
                    <Link href="/testimonials" className={`tracking-wider text-xs font-light uppercase text-white bg-transparent px-3 py-1 rounded ${navHover}`} style={textOutline}><span style={textOutline}>Reviews</span></Link>
                    <Link href="/blog" className={`tracking-wider text-xs font-light uppercase text-white bg-transparent px-3 py-1 rounded ${navHover}`} style={textOutline}><span style={textOutline}>Stories</span></Link>
                    <Link href="/inquiry" className={`tracking-wider text-xs font-medium uppercase text-white bg-transparent px-3 py-1 rounded ${navHover} ${pulseAnim}`} style={textOutline}><span style={textOutline}>Inquiry</span></Link>
                </nav>
                {/* Mobile menu button */}
                <button className="lg:hidden ml-2 text-white z-50 relative" onClick={() => setMobileMenu((v) => !v)} aria-label="Open menu">
                    <div className='flex items-center gap-1 flex-col'>
                        <Image src="/images/Logo_LG.png" width={40} height={40} alt='Dropdown Menu' />
                        {!mobileMenu ? (
                            <ChevronDown size={16} className={scrolled ? 'text-neutral-900' : 'text-white'} />
                        ) : (
                            <ChevronUp size={16} className={scrolled ? 'text-neutral-900' : 'text-white'} />
                        )}
                    </div>
                </button>
            </div>

            {/* Mobile nav */}
            <AnimatePresence>
                {mobileMenu && (
                    <motion.div
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -40, opacity: 0 }}
                        className={`lg:hidden fixed inset-0 top-[56px] w-full bg-black/95 shadow-md z-40 overflow-y-auto ${montserrat.className}`}
                    >
                        <div className="flex flex-col gap-2 p-6 text-sm">
                            {/* Portfolio Dropdown as grid */}
                            <div className="relative">
                                <button onClick={() => setModal(modal === 'portfolio' ? null : 'portfolio')} className={`flex items-center gap-1 py-2 uppercase tracking-wider font-light text-white px-3 rounded bg-transparent ${navHover} w-full justify-between`} style={textOutline}>
                                    <span style={textOutline}>Portfolio</span> <ChevronDown size={16} />
                                </button>
                                <AnimatePresence>
                                    {modal === 'portfolio' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="w-full mt-2 bg-black/90 text-white rounded-xl shadow-2xl p-4"
                                            style={{ zIndex: 20 }}
                                        >
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                                {Object.entries(portfolioItems).map(([category, items]) => (
                                                    <div key={category} className="min-w-[120px] max-w-[180px]">
                                                        <h4 className="font-serif text-base font-semibold text-[#CFAE70] mb-2">{category}</h4>
                                                        <ul className="space-y-2">
                                                            {items.map((item) => (
                                                                <li key={item.name}>
                                                                    <a href={`#portfolio-${item.name.toLowerCase()}`} className="block text-white hover:text-[#CFAE70] transition font-light text-sm">
                                                                        <span className="font-medium">{item.name}</span>
                                                                        <span className="block text-xs text-neutral-300">{item.desc}</span>
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            {/* Info Dropdown */}
                            <div className="relative">
                                <button onClick={() => setModal(modal === 'info' ? null : 'info')} className={`flex items-center gap-1 py-2 uppercase tracking-wider font-light text-white px-3 rounded bg-transparent ${navHover} w-full justify-between`} style={textOutline}>
                                    <span style={textOutline}>Info</span> <ChevronDown size={16} />
                                </button>
                                <AnimatePresence>
                                    {modal === 'info' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="w-full mt-2 bg-black/90 text-white rounded-xl shadow-2xl p-4"
                                            style={{ zIndex: 20 }}
                                        >
                                            <ul className="space-y-3">
                                                {infoItems.map((item) => (
                                                    <li key={item.name}>
                                                        <Link href={item.href} className="block text-white hover:text-[#CFAE70] transition font-light text-sm">
                                                            <span style={textOutline}>{item.name}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <Link href="/meet-the-team" className={`py-2 uppercase tracking-wider font-light text-white px-3 rounded bg-transparent ${navHover}`} style={textOutline}><span style={textOutline}>Meet Us</span></Link>
                            <Link href="/testimonials" className={`py-2 uppercase tracking-wider font-light text-white px-3 rounded bg-transparent ${navHover}`} style={textOutline}><span style={textOutline}>Reviews</span></Link>
                            <Link href="/blog" className={`py-2 uppercase tracking-wider font-light text-white px-3 rounded bg-transparent ${navHover}`} style={textOutline}><span style={textOutline}>Stories</span></Link>
                            <Link href="/inquiry" className={`py-2 uppercase tracking-wider font-medium text-white px-3 rounded bg-transparent ${navHover}`} style={textOutline}><span style={textOutline}>Inquiry</span></Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;