'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            
            // Update active section based on scroll position
            const sections = ['hero_section', 'my_interests', 'my_projects', 'my_process', 'contact'];
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
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '#my_interests', label: 'ABOUT' },
        { href: '#my_projects', label: 'PROJEKTE' },
        { href: '#my_process', label: 'PROZESS' },
        { href: '#contact', label: 'KONTAKT' }
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
                        <a
                            href="#hero_section"
                            className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent px-2 py-1 rounded-md hover:bg-white/10 transition-all duration-300 relative group"
                        >
                            <span className="relative z-10">MP</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                        </a>
                    </nav>
                    <nav>
                        <ul className="flex space-x-1">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <a
                                        className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 relative group ${
                                            activeSection === item.href.substring(1)
                                                ? 'text-white bg-white/10'
                                                : 'text-white/80 hover:text-white hover:bg-white/10'
                                        }`}
                                        href={item.href}
                                    >
                                        <span className="relative z-10">{item.label}</span>
                                        <span className="absolute inset-0 bg-white/5 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}