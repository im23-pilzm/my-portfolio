'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Only update active section if we're on the home page
            if (pathname === '/') {
                const sections = ['hero_section', 'my_interests', 'my_projects', 'my_skills', 'contact'];
                const currentSection = sections.find(section => {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        return rect.top <= 100 && rect.bottom >= 100;
                    }
                    return false;
                });

                if (currentSection) {
                    setActiveSection(currentSection);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const getNavLink = (section) => {
        if (pathname === '/') {
            return `#${section}`;
        }
        return `/#${section}`;
    };

    const navItems = [
        { href: getNavLink('my_interests'), label: 'ABOUT' },
        { href: getNavLink('my_projects'), label: 'PROJEKTE' },
        { href: getNavLink('my_skills'), label: 'SKILLS' },
        { href: getNavLink('contact'), label: 'KONTAKT' }
    ];

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${
                isScrolled
                    ? 'bg-[#121429]/95 backdrop-blur-sm border-b border-white/10'
                    : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <nav>
                        <Link
                            href={getNavLink('hero_section')}
                            className="relative text-xl font-semibold px-2 py-1 rounded-md hover:bg-white/10 transition-all duration-300 group"
                        >
                            <span className="relative z-10 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Max Pilz</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                        </Link>
                    </nav>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-1">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 relative group ${
                                            activeSection === item.href.substring(1)
                                                ? 'text-white bg-white/10'
                                                : 'text-white/80 hover:text-white hover:bg-white/10'
                                        }`}
                                        href={item.href}
                                    >
                                        <span className="relative z-10">{item.label}</span>
                                        <span className="absolute inset-0 bg-white/5 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-md hover:bg-white/10 transition-all duration-300"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.nav
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden overflow-hidden bg-[#121429]/95 backdrop-blur-sm border-b border-white/10"
                        >
                            <ul className="py-4 space-y-2">
                                {navItems.map((item) => (
                                    <motion.li
                                        key={item.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link
                                            className={`block px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                                                activeSection === item.href.substring(1)
                                                    ? 'text-white bg-white/10'
                                                    : 'text-white hover:text-white hover:bg-white/10'
                                            }`}
                                            href={item.href}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}