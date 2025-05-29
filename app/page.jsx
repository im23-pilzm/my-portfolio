"use client"
import {motion} from "framer-motion";
import React from "react";
import Image from "next/image";
import FadeDownVolleyball from "@/components/FadeDownVolleyball";
import FadeDownCooking from "@/components/FadeDownCooking"
import profilePic from "/public/IMG_0360.JPG"
import volleyballImage from "/public/Volleyball_Ball.png"
import cookingImage from "/public/Header-Bewusst-Zeitsparend-Kochen-001.jpg"
import HousePricePredictorMockup from "/public/HousePricePredictor_Mockup.png"
import MemoNotesMockup from "/public/MemoNotes_Mockup.png"
import MemoNotesImage from "/public/Screenshot 2025-04-10 143034.png"
import {TypeAnimation} from "react-type-animation";
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import ContactSection from "@/components/ContactSection";

export default function main_page() {
    return (
        <div className="min-h-screen bg-[#121429]">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center py-20 md:py-0" id="hero_section">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <motion.div
                            initial={{opacity: 0, x: -50}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.5}}
                            viewport={{once: true}}
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
                                <h2 className="text-xl md:text-2xl font-semibold text-white">Über mich</h2>
                                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                                    Ich bin Maximilian Pilz, 17 Jahre alt, und besuche seit
                                    zwei Jahren die Informatikmittelschule (IMS). Programmieren fasziniert mich,
                                    weil es vielseitig einsetzbar ist und Kreativität mit logischem Denken verbindet.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, x: 50}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.5}}
                            viewport={{once: true}}
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
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        viewport={{once: true}}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Meine Interessen
                        </h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            viewport={{once: true}}
                            className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center space-y-6">
                                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white/20">
                                    <Image
                                        src={volleyballImage}
                                        alt="Volleyball"
                                        fill
                                        sizes="(max-width: 768px) 160px, 192px"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                        <FadeDownVolleyball/>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl md:text-2xl font-semibold text-white">Volleyball</h3>
                                    <p className="text-base md:text-lg text-white/90 leading-relaxed">
                                        Zu einer meiner grössten Leidenschaften gehört Volleyball. Ich spiele nun seit
                                        2. Jahren im Volleyball Club Volley Oerlikon. Mir gefällt am Volleyball das Teamwork und
                                        Kommunikation aber auch dass man schnell die beste Entscheidung treffen muss.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.2}}
                            viewport={{once: true}}
                            className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center space-y-6">
                                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white/20">
                                    <Image
                                        src={cookingImage}
                                        alt="Cooking"
                                        fill
                                        sizes="(max-width: 768px) 160px, 192px"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                        <FadeDownCooking/>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl md:text-2xl font-semibold text-white">Kochen</h3>
                                    <p className="text-base md:text-lg text-white/90 leading-relaxed">
                                        Ein Hobby dass ich noch nicht so lange mache, ist kochen. Am kochen fasziniert
                                        mich vor allem wie unterschiedlich verschiedene Nationalitäten kochen, wobei ich italienisch am besten finde, und man diese
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
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        viewport={{once: true}}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Meine Projekte
                        </h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                    </motion.div>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
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
                        <SwiperSlide>
                            <motion.div
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                                viewport={{once: true}}
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
                                        />
                                    </div>
                                    <div className="space-y-6 w-full md:w-1/2">
                                        <h3 className="text-xl md:text-2xl font-semibold text-white">MemoNotes</h3>
                                        <p className="text-base md:text-lg text-white/80">
                                            Eine moderne Notizen-App mit Echtzeit-Synchronisation und Markdown-Unterstützung
                                        </p>
                                        <div className="space-y-4">
                                            <div className="bg-white/10 p-4 rounded-lg">
                                                <h4 className="text-sm font-medium text-white mb-2">Features</h4>
                                                <ul className="text-white/80 space-y-1 text-sm">
                                                    <li>• Echtzeit-Synchronisation</li>
                                                    <li>• Markdown-Unterstützung</li>
                                                    <li>• Cloud-Speicherung</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white/10 p-4 rounded-lg">
                                                <h4 className="text-sm font-medium text-white mb-2">Verwendete Technologien</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">HTML</span>
                                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">CSS</span>
                                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">JavaScript</span>
                                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Node.js</span>
                                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Express.js</span>
                                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">PostgreSQL</span>
                                                </div>
                                            </div>
                                            <div className="bg-white/10 p-4 rounded-lg">
                                                <h4 className="text-sm font-medium text-white mb-2">Status</h4>
                                                <p className="text-white/80 text-sm">Pausiert</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.div
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: 0.2}}
                                viewport={{once: true}}
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
                                        <h3 className="text-xl md:text-2xl font-semibold text-white">House Price Predictor</h3>
                                        <p className="text-base md:text-lg text-white/80">
                                            Ein KI-gestütztes Tool zur Vorhersage von Immobilienpreisen
                                        </p>
                                        <div className="space-y-4">
                                            <div className="bg-white/10 p-4 rounded-lg">
                                                <h4 className="text-sm font-medium text-white mb-2">Features</h4>
                                                <ul className="text-white/80 space-y-1 text-sm">
                                                    <li>• KI-basierte Preisvorhersage</li>
                                                    <li>• Detaillierte Immobilienanalyse</li>
                                                    <li>• Benutzerfreundliche Oberfläche</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white/10 p-4 rounded-lg">
                                                <h4 className="text-sm font-medium text-white mb-2">Verwendete Technologien</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Python</span>
                                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">TensorFlow</span>
                                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React</span>
                                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Node.js</span>
                                                </div>
                                            </div>
                                            <div className="bg-white/10 p-4 rounded-lg">
                                                <h4 className="text-sm font-medium text-white mb-2">Status</h4>
                                                <p className="text-white/80 text-sm">In Entwicklung</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            {/* Contact Section */}
            <ContactSection />
        </div>
    );
}