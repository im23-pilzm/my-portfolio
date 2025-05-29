'use client';

import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedField, setFocusedField] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: 'Nachricht erfolgreich gesendet! Ich melde mich bald bei Ihnen.'
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error(data.error || 'Etwas ist schiefgelaufen');
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#121429]">
            <motion.div 
                className="max-w-4xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <motion.div className="text-center mb-12" variants={itemVariants}>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
                        Kontaktieren Sie mich
                    </h2>
                    <p className="text-white/80">
                        Ich freue mich darauf, von Ihnen zu hören und über neue Projekte zu sprechen.
                    </p>
                </motion.div>

                <motion.div 
                    className="bg-[#1a1d3d] rounded-lg shadow-lg p-6 sm:p-8 border border-white/10"
                    variants={itemVariants}
                >
                    {status.message && (
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`mb-6 p-4 rounded-md ${
                                status.type === 'success' 
                                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                            }`}
                        >
                            {status.message}
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <motion.div variants={itemVariants}>
                            <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('name')}
                                onBlur={() => setFocusedField('')}
                                required
                                className={`w-full px-4 py-2 bg-[#121429] border rounded-md text-white transition-all duration-300 ${
                                    focusedField === 'name'
                                        ? 'border-blue-500 ring-2 ring-blue-500/20'
                                        : 'border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                }`}
                            />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField('')}
                                required
                                className={`w-full px-4 py-2 bg-[#121429] border rounded-md text-white transition-all duration-300 ${
                                    focusedField === 'email'
                                        ? 'border-blue-500 ring-2 ring-blue-500/20'
                                        : 'border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                }`}
                            />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                                Nachricht
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('message')}
                                onBlur={() => setFocusedField('')}
                                required
                                rows="4"
                                className={`w-full px-4 py-2 bg-[#121429] border rounded-md text-white transition-all duration-300 ${
                                    focusedField === 'message'
                                        ? 'border-blue-500 ring-2 ring-blue-500/20'
                                        : 'border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                }`}
                            ></textarea>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium rounded-md hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#121429] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative group overflow-hidden"
                            >
                                <span className="relative z-10">
                                    {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </button>
                        </motion.div>
                    </form>

                    <motion.div 
                        className="mt-8 pt-8 border-t border-white/10"
                        variants={itemVariants}
                    >
                        <div className="flex justify-center space-x-6">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-md transition-all duration-300 relative group"
                            >
                                <FaGithub className="w-6 h-6 relative z-10" />
                                <span className="absolute inset-0 bg-white/5 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
} 