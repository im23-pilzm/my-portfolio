'use client';

import { motion } from "framer-motion";

export default function Impressum() {
    return (
        <div className="min-h-screen bg-[#121429] py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    {/* Page Title */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Impressum
                        </h1>
                        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Content */}
                    <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                        <div className="space-y-8">
                            {/* Contact Information */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white mb-4">Kontakt</h2>
                                <div className="space-y-3">
                                    <p className="text-white/90">
                                        <span className="font-medium text-white">Name:</span> Maximillian Pilz
                                    </p>
                                    <p className="text-white/90">
                                        <span className="font-medium text-white">Adresse:</span> Greifenseestrasse 57, 8050 Zürich
                                    </p>
                                    <p className="text-white/90">
                                        <span className="font-medium text-white">E-Mail:</span> maxpilz2212@gmail.com
                                    </p>
                                    <p className="text-white/90">
                                        <span className="font-medium text-white">Telefon:</span> 078 679 38 19
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}