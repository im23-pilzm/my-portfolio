"use client"
import { motion } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import FadeDownVolleyball from "@/components/FadeDownVolleyball";
import FadeDownCooking from "@/components/FadeDownCooking"
import profilePic from "/public/IMG_0360.JPG"
import volleyballImage from "/public/Volleyball_Ball.png"
import cookingImage from "/public/Header-Bewusst-Zeitsparend-Kochen-001.jpg"
import HousePricePredictorMockup from "/public/HousePricePredictor_Mockup.png"
import OnlineShopMockup from "public/Online-Shop_Mockup.png"
import MemoNotesMockup from "/public/MemoNotes_Mockup.png"
import OutfitTodayMockup from "public/OutfitToday_Mockup.png"
import { TypeAnimation } from "react-type-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import ContactSection from "@/components/ContactSection";
import SkillsSection from "@/components/SkillsSection";


export default function main_page() {
    const swiperRef = useRef();

    return (
        <div className="min-h-screen bg-[#121429]">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center py-20 md:py-0" id="hero_section">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="space-y-6 md:space-y-8 text-center md:text-left"
                        >
                            <div>
                                <TypeAnimation
                                    sequence={["Ich heisse\nMaximillian Pilz", 800,]}
                                    repeat={0}
                                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
                                />
                            </div>
                            <div className="space-y-4">
                                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                                    Ich bin Maximilian Pilz, 17 Jahre alt, und besuche seit
                                    zwei Jahren die Informatikmittelschule (IMS). Programmieren fasziniert mich,
                                    weil es vielseitig einsetzbar ist und Kreativität mit logischem Denken verbindet.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                                <Image
                                    src={profilePic}
                                    alt="Picture of me"
                                    fill
                                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                                    className="rounded-full border-2 border-white/20 shadow-2xl object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Interests Section */}
            <section id="my_interests" className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Meine Interessen
                        </h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center space-y-6">
                                <div
                                    className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white/20">
                                    <Image
                                        src={volleyballImage}
                                        alt="Volleyball"
                                        fill
                                        sizes="(max-width: 768px) 160px, 192px"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                        <FadeDownVolleyball />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl md:text-2xl font-semibold text-white">Volleyball</h3>
                                    <p className="text-base md:text-lg text-white/90 leading-relaxed">
                                        Zu einer meiner grössten Leidenschaften gehört Volleyball. Ich spiele nun seit
                                        2. Jahren im Volleyball Club Volley Oerlikon. Mir gefällt am Volleyball das
                                        Teamwork und
                                        Kommunikation aber auch dass man schnell die beste Entscheidung treffen muss.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center space-y-6">
                                <div
                                    className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white/20">
                                    <Image
                                        src={cookingImage}
                                        alt="Cooking"
                                        fill
                                        sizes="(max-width: 768px) 160px, 192px"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                        <FadeDownCooking />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl md:text-2xl font-semibold text-white">Kochen</h3>
                                    <p className="text-base md:text-lg text-white/90 leading-relaxed">
                                        Ein Hobby dass ich noch nicht so lange mache, ist kochen. Am kochen fasziniert
                                        mich vor allem wie unterschiedlich verschiedene Nationalitäten kochen, wobei ich
                                        italienisch am besten finde, und man diese
                                        zubereitet. Ich koche meistens italienisch oder asiatisch.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="my_projects" className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Meine Projekte
                        </h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Swiper
                            cssMode={true}
                            navigation={true}
                            pagination={true}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                            className="mySwiper relative"
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                768: {
                                    slidesPerView: 1,
                                    spaceBetween: 30
                                }
                            }}
                        >
                            <style jsx global>{`
                                .swiper-button-next,
                                .swiper-button-prev {
                                    color: #3b82f6 !important;
                                    background: rgba(255, 255, 255, 0.1);
                                    width: 40px !important;
                                    height: 40px !important;
                                    border-radius: 50%;
                                    backdrop-filter: blur(4px);
                                    z-index: 10;
                                }

                                .swiper-button-next:after,
                                .swiper-button-prev:after {
                                    font-size: 20px !important;
                                }

                                .swiper-button-prev {
                                    left: 10px !important;
                                }

                                .swiper-button-next {
                                    right: 10px !important;
                                }

                                .swiper-pagination-bullet {
                                    background: #3b82f6 !important;
                                    opacity: 0.5;
                                }

                                .swiper-pagination-bullet-active {
                                    opacity: 1;
                                }
                            `}</style>

                            <SwiperSlide>
                                <div
                                    className="bg-white/5 p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 mx-auto"
                                >
                                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                        <div className="w-full md:w-1/2 relative aspect-[4/3]">
                                            <Image
                                                src={MemoNotesMockup}
                                                alt="MemoNotes Mockup"
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover rounded-lg"
                                                onLoad={() => (swiperRef.current.update())}
                                            />
                                        </div>
                                        <div className="space-y-6 w-full md:w-1/2">
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-xl md:text-2xl font-semibold text-white">MemoNotes</h3>
                                            </div>
                                            <p className="text-base md:text-lg text-white/80">
                                                Eine moderne Notizen-App mit Datenbankabspeicherung und übersichtlicher Oberfläche
                                            </p>
                                            <div className="space-y-4">
                                                <div className="bg-white/10 p-4 rounded-lg">
                                                    <h4 className="text-sm font-medium text-white mb-2">Features</h4>
                                                    <ul className="text-white/80 space-y-1 text-sm">
                                                        <li>• Register und Login</li>
                                                        <li>• Datenbankabspeicherung der Login daten</li>
                                                        <li>• TODO-Liste um TODOs hinzuzufügen und zu löschen</li>
                                                        <li>• Post-It Taffel</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white/10 p-4 rounded-lg">
                                                    <h4 className="text-sm font-medium text-white mb-2">Verwendete
                                                        Technologien</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        <span
                                                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">HTML</span>
                                                        <span
                                                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">CSS</span>
                                                        <span
                                                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">JavaScript</span>
                                                        <span
                                                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Node.js</span>
                                                        <span
                                                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Tailwind CSS</span>
                                                    </div>
                                                </div>
                                                <div className="bg-white/10 p-4 rounded-lg">
                                                    <h4 className="text-sm font-medium text-white mb-2">Status</h4>
                                                    <p className="text-white/80 text-sm">Fertig</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <a
                                                        href="https://github.com/im23-pilzm/memoNotes"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label="GitHub Repository"
                                                        className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium rounded-md hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#121429] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative group overflow-hidden flex items-center gap-2 justify-center"
                                                    >
                                                        <svg
                                                            height="22"
                                                            width="22"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                            className="relative z-10"
                                                            style={{display: 'inline', verticalAlign: 'middle'}}
                                                        >
                                                            <path
                                                                d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.011-1.04-0.017-2.04-3.338 0.726-4.042-1.61-4.042-1.61-0.546-1.387-1.333-1.756-1.333-1.756-1.089-0.745 0.083-0.729 0.083-0.729 1.205 0.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495 0.997 0.108-0.775 0.418-1.305 0.762-1.605-2.665-0.305-5.466-1.334-5.466-5.931 0-1.31 0.469-2.381 1.236-3.221-0.124-0.303-0.535-1.523 0.117-3.176 0 0 1.008-0.322 3.301 1.23 0.957-0.266 1.983-0.399 3.003-0.404 1.02 0.005 2.047 0.138 3.006 0.404 2.291-1.553 3.297-1.23 3.297-1.23 0.653 1.653 0.242 2.873 0.119 3.176 0.77 0.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921 0.43 0.372 0.823 1.102 0.823 2.222 0 1.606-0.014 2.898-0.014 3.293 0 0.322 0.216 0.694 0.825 0.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                        </svg>
                                                        <span className="relative z-10">GitHub Repository</span>
                                                        <span
                                                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div
                                    className="bg-white/5 p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 mx-auto"
                                >
                                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                        <div className="w-full md:w-1/2 relative aspect-[4/3]">
                                            <Image
                                                src={OnlineShopMockup}
                                                alt="Online Shop Mockup"
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="space-y-6 w-full md:w-1/2">
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-xl md:text-2xl font-semibold text-white">Online Shop</h3>
                                            </div>
                                            <p className="text-base md:text-lg text-white/80">
                                                Ein moderner Onlineshop mit unterschiedlichen Features.
                                            </p>
                                            <div className="space-y-4">
                                                <div className="bg-white/10 p-4 rounded-lg">
                                                    <h4 className="text-sm font-medium text-white mb-2">Features</h4>
                                                    <ul className="text-white/80 space-y-1 text-sm">
                                                        <li>• Warenkorb</li>
                                                        <li>• Dark und Ligthmode</li>
                                                        <li>• Searchbar</li>
                                                        <li>• Kontaktformular</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white/10 p-4 rounded-lg">
                                                    <h4 className="text-sm font-medium text-white mb-2">Verwendete
                                                        Technologien</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        <span
                                                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React</span>
                                                        <span
                                                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Next.js</span>
                                                        <span
                                                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">JavaScript</span>
                                                        <span
                                                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Tailwind CSS</span>
                                                    </div>
                                                </div>
                                                <div className="bg-white/10 p-4 rounded-lg">
                                                    <h4 className="text-sm font-medium text-white mb-2">Status</h4>
                                                    <p className="text-white/80 text-sm">Fertig</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <a
                                                        href="https://github.com/im23-pilzm/reacttest"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label="GitHub Repository"
                                                        className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium rounded-md hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#121429] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative group overflow-hidden flex items-center gap-2 justify-center"
                                                    >
                                                        <svg
                                                            height="22"
                                                            width="22"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                            className="relative z-10"
                                                            style={{display: 'inline', verticalAlign: 'middle'}}
                                                        >
                                                            <path
                                                                d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.011-1.04-0.017-2.04-3.338 0.726-4.042-1.61-4.042-1.61-0.546-1.387-1.333-1.756-1.333-1.756-1.089-0.745 0.083-0.729 0.083-0.729 1.205 0.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495 0.997 0.108-0.775 0.418-1.305 0.762-1.605-2.665-0.305-5.466-1.334-5.466-5.931 0-1.31 0.469-2.381 1.236-3.221-0.124-0.303-0.535-1.523 0.117-3.176 0 0 1.008-0.322 3.301 1.23 0.957-0.266 1.983-0.399 3.003-0.404 1.02 0.005 2.047 0.138 3.006 0.404 2.291-1.553 3.297-1.23 3.297-1.23 0.653 1.653 0.242 2.873 0.119 3.176 0.77 0.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921 0.43 0.372 0.823 1.102 0.823 2.222 0 1.606-0.014 2.898-0.014 3.293 0 0.322 0.216 0.694 0.825 0.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                        </svg>
                                                        <span className="relative z-10">GitHub Repository</span>
                                                        <span
                                                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div
                                    className="bg-white/5 p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 mx-auto"
                                >
                                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                        <div className="w-full md:w-1/2 relative aspect-[4/3]">
                                            <Image
                                                src={OutfitTodayMockup}
                                                alt="OutfitToday Mockup"
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="space-y-6 w-full md:w-1/2">
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-xl md:text-2xl font-semibold text-white">OutfitToday</h3>
                                            </div>
                                            <p className="text-base md:text-lg text-white/80">
                                                Eine Webseite die dabei hilft deinen Kleiderschrank zu verwalten, neue Outfits zu erstellen und inspiration zu neuen Outfits zu geben.
                                            </p>
                                            <div className="space-y-4">
                                                <div className="bg-white/10 p-4 rounded-lg">
                                                    <h4 className="text-sm font-medium text-white mb-2">Features</h4>
                                                    <ul className="text-white/80 space-y-1 text-sm">
                                                        <li>• Register und Login</li>
                                                        <li>• Kleiderschrank um neue Kleidungsstücke hinzuzufügen</li>
                                                        <li>• Outfit ersteller aus Kleidern aus eigenem Kleiderschrank</li>
                                                        <li>• Outfit vorschläge</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white/10 p-4 rounded-lg">
                                                    <h4 className="text-sm font-medium text-white mb-2">Verwendete
                                                        Technologien</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        <span
                                                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Next.js</span>
                                                        <span
                                                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Javascript</span>
                                                        <span
                                                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Tailwind CSS</span>
                                                    </div>
                                                </div>
                                                <div className="bg-white/10 p-4 rounded-lg">
                                                    <h4 className="text-sm font-medium text-white mb-2">Status</h4>
                                                    <p className="text-white/80 text-sm">In Arbeit</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <a
                                                        href="https://github.com/im23-pilzm/outfit-today"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label="GitHub Repository"
                                                        className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium rounded-md hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#121429] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative group overflow-hidden flex items-center gap-2 justify-center"
                                                    >
                                                        <svg
                                                            height="22"
                                                            width="22"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                            className="relative z-10"
                                                            style={{display: 'inline', verticalAlign: 'middle'}}
                                                        >
                                                            <path
                                                                d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.011-1.04-0.017-2.04-3.338 0.726-4.042-1.61-4.042-1.61-0.546-1.387-1.333-1.756-1.333-1.756-1.089-0.745 0.083-0.729 0.083-0.729 1.205 0.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495 0.997 0.108-0.775 0.418-1.305 0.762-1.605-2.665-0.305-5.466-1.334-5.466-5.931 0-1.31 0.469-2.381 1.236-3.221-0.124-0.303-0.535-1.523 0.117-3.176 0 0 1.008-0.322 3.301 1.23 0.957-0.266 1.983-0.399 3.003-0.404 1.02 0.005 2.047 0.138 3.006 0.404 2.291-1.553 3.297-1.23 3.297-1.23 0.653 1.653 0.242 2.873 0.119 3.176 0.77 0.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921 0.43 0.372 0.823 1.102 0.823 2.222 0 1.606-0.014 2.898-0.014 3.293 0 0.322 0.216 0.694 0.825 0.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                        </svg>
                                                        <span className="relative z-10">GitHub Repository</span>
                                                        <span
                                                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div
                                    className="bg-white/5 p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 mx-auto"
                                >
                                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                        <div className="w-full md:w-1/2 relative aspect-[4/3]">
                                            <Image
                                                src={HousePricePredictorMockup}
                                                alt="House Price Predictor Mockup"
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="space-y-6 w-full md:w-1/2">
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-xl md:text-2xl font-semibold text-white">House Price
                                                    Predictor</h3>
                                            </div>
                                            <p className="text-base md:text-lg text-white/80">
                                                Ein Tool das aufgrund von Machine Learning Preise von Immobilien schätzen kann.
                                            </p>
                                            <div className="space-y-4">
                                                <div className="bg-white/10 p-4 rounded-lg">
                                                    <h4 className="text-sm font-medium text-white mb-2">Features</h4>
                                                    <ul className="text-white/80 space-y-1 text-sm">
                                                        <li>• Preisvorhersage aufgrund von Machine Learning</li>
                                                        <li>• Detaillierte Immobilienanalyse</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white/10 p-4 rounded-lg">
                                                    <h4 className="text-sm font-medium text-white mb-2">Verwendete
                                                        Technologien</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        <span
                                                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Python</span>
                                                        <span
                                                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Pandas</span>
                                                    </div>
                                                </div>
                                                <div className="bg-white/10 p-4 rounded-lg">
                                                    <h4 className="text-sm font-medium text-white mb-2">Status</h4>
                                                    <p className="text-white/80 text-sm">Nicht weitergeführt</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <a
                                                        href="https://github.com/im23-pilzm/HousePricePredicitor"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label="GitHub Repository"
                                                        className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium rounded-md hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#121429] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative group overflow-hidden flex items-center gap-2 justify-center"
                                                    >
                                                        <svg
                                                            height="22"
                                                            width="22"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                            className="relative z-10"
                                                            style={{display: 'inline', verticalAlign: 'middle'}}
                                                        >
                                                            <path
                                                                d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.011-1.04-0.017-2.04-3.338 0.726-4.042-1.61-4.042-1.61-0.546-1.387-1.333-1.756-1.333-1.756-1.089-0.745 0.083-0.729 0.083-0.729 1.205 0.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495 0.997 0.108-0.775 0.418-1.305 0.762-1.605-2.665-0.305-5.466-1.334-5.466-5.931 0-1.31 0.469-2.381 1.236-3.221-0.124-0.303-0.535-1.523 0.117-3.176 0 0 1.008-0.322 3.301 1.23 0.957-0.266 1.983-0.399 3.003-0.404 1.02 0.005 2.047 0.138 3.006 0.404 2.291-1.553 3.297-1.23 3.297-1.23 0.653 1.653 0.242 2.873 0.119 3.176 0.77 0.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921 0.43 0.372 0.823 1.102 0.823 2.222 0 1.606-0.014 2.898-0.014 3.293 0 0.322 0.216 0.694 0.825 0.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                        </svg>
                                                        <span className="relative z-10">GitHub Repository</span>
                                                        <span
                                                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <SkillsSection/>

            {/* Contact Section */}
            <ContactSection/>
        </div>
    );
}