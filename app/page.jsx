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


export default function main_page() {
    return (
        <div className="min-h-screen bg-[#121429]">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center" id="hero_section">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{opacity: 0, x: -50}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.5}}
                            viewport={{once: true}}
                            className="space-y-8"
                        >
                            <div>
                                <TypeAnimation
                                    sequence={["Ich heisse\nMaximillian Pilz", 800,]}
                                    repeat={0}
                                    className="text-5xl md:text-6xl font-bold text-white"
                                />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold text-white">Über mich</h2>
                                <p className="text-lg text-white/90 leading-relaxed">
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
                            <Image
                                src={profilePic}
                                width={500}
                                height={500}
                                alt="Picture of me"
                                className="rounded-full border-2 border-white/20 shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Interests Section */}
            <section id="my_interests" className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        viewport={{once: true}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white">
                            Meine Interessen
                        </h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            viewport={{once: true}}
                            className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center space-y-6">
                                <div
                                    className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-white/20">
                                    <Image
                                        src={volleyballImage}
                                        alt="Volleyball"
                                        fill
                                        sizes="192px"
                                        className="object-cover"
                                    />
                                    <div
                                        className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                        <FadeDownVolleyball/>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-semibold text-white">Volleyball</h3>
                                    <p className="text-lg text-white/90 leading-relaxed">
                                        Zu einer meiner grössten Leidenschaften gehört Volleyball. Ich spiele nun seit
                                        2. Jahren im
                                        Volleyball Club Volley Oerlikon. Mir gefällt am Volleyball das Teamwork und
                                        Kommunikation
                                        aber auch dass man schnell die beste Entscheidung treffen muss.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.2}}
                            viewport={{once: true}}
                            className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center space-y-6">
                                <div
                                    className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-white/20">
                                    <Image
                                        src={cookingImage}
                                        alt="Cooking"
                                        fill
                                        sizes="192px"
                                        className="object-cover"
                                    />
                                    <div
                                        className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                        <FadeDownCooking/>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-semibold text-white">Kochen</h3>
                                    <p className="text-lg text-white/90 leading-relaxed">
                                        Ein Hobby dass ich noch nicht so lange mache, ist kochen. Am kochen fasziniert
                                        mich vor allem wie unterschiedlich verschiedene
                                        Nationalitäten kochen, wobei ich italienisch am besten finde, und man diese
                                        zubereitet. Ich
                                        koche meistens italienisch oder asiatisch.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="my_projects" className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        viewport={{once: true}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white">
                            Meine Projekte
                        </h2>
                        <div className="w-24 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                    </motion.div>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <motion.div
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                                viewport={{once: true}}
                                className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 w-300 mx-auto flex"
                            >
                                <Image
                                    src={MemoNotesMockup}
                                    alt="House Price Predictor Image"
                                    className="w-1/2"
                                />
                                <div className="space-y-6 w-1/2 ml-5">
                                    <h3 className="text-2xl font-semibold text-white">MemoNotes</h3>
                                    <p className="text-lg text-white/80">
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
                                                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Express.js</span>
                                                <span
                                                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">PostgreSQL</span>
                                            </div>
                                        </div>
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <h4 className="text-sm font-medium text-white mb-2">Status</h4>
                                            <p className="text-white/80 text-sm">In Entwicklung</p>
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
                                className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 w-300 mx-auto flex"
                            >
                                <Image
                                    src={HousePricePredictorMockup}
                                    alt="MemoNotes Mockup"
                                    className="w-1/2"
                                />
                                <div className="space-y-6 w-1/2 ml-5">
                                    <h3 className="text-2xl font-semibold text-white">HousePricePredictor</h3>
                                    <p className="text-lg text-white/80">
                                        Ein KI-gestütztes Tool zur Vorhersage von Immobilienpreisen
                                    </p>
                                    <div className="space-y-4">
                                        <div className="bg-white/10 p-4 rounded-lg">
                                            <h4 className="text-sm font-medium text-white mb-2">Features</h4>
                                            <ul className="text-white/80 space-y-1 text-sm">
                                                <li>• KI-gestützte Vorhersagen</li>
                                                <li>• Standortanalyse</li>
                                                <li>• Markttrends-Analyse</li>
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
                                            <p className="text-white/80 text-sm">In Entwicklung</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            {/* How I Work Section */}
            <section id="my_process" className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white">So arbeite ich</h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { title: "1. Idee", text: "Ich beginne mit einer klaren Problemstellung und recherchiere passende Lösungsansätze. Lorem ipsum dolor sit amet." },
                            { title: "2. Planung", text: "Ich plane die Projektstruktur, definiere Features und setze Meilensteine. Lorem ipsum dolor sit amet." },
                            { title: "3. Umsetzung", text: "Ich entwickle Schritt für Schritt das Projekt mit modernen Technologien. Lorem ipsum dolor sit amet." },
                            { title: "4. Test & Feedback", text: "Am Ende teste ich alles gründlich und hole Feedback ein, um Verbesserungen vorzunehmen. Lorem ipsum dolor sit amet." },
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 text-center"
                            >
                                <div className="text-3xl font-bold text-blue-400 mb-4">{step.title}</div>
                                <p className="text-white/80 text-base">{step.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}