import Image from "next/image";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Mousewheel, Keyboard} from 'swiper/modules';
import { motion } from "framer-motion";
import memoNotes from "/public/Screenshot 2025-04-10 143034.png"
import housePricePredictor from "/public/Screenshot 2025-04-10 142916.png"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import "/app/globals.css"

export default function ProjectsMainPageLayout() {
    return (
        <div className="relative">
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper rounded-xl overflow-hidden shadow-2xl"
            >
                <SwiperSlide>
                    <div className="relative h-[600px] bg-gradient-to-br from-[#121429] to-[#1a1d3a] p-8">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="text-center mb-8"
                            >
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                                    MemoNotes
                                </h2>
                                <p className="mt-4 text-lg text-white/80">
                                    Eine moderne Notizen-App mit Echtzeit-Synchronisation und Markdown-Unterstützung
                                </p>
                            </motion.div>
                            <div className="flex justify-center">
                                <Image
                                    src={memoNotes}
                                    alt="memoNotes Picture"
                                    width={800}
                                    height={450}
                                    className="rounded-lg border-2 border-white/20 shadow-xl"
                                />
                            </div>
                            <div className="mt-8 grid grid-cols-3 gap-6">
                                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                                    <h3 className="text-lg font-semibold text-white mb-2">Features</h3>
                                    <ul className="text-white/80 space-y-2">
                                        <li>• Echtzeit-Synchronisation</li>
                                        <li>• Markdown-Unterstützung</li>
                                        <li>• Cloud-Speicherung</li>
                                    </ul>
                                </div>
                                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                                    <h3 className="text-lg font-semibold text-white mb-2">Technologien</h3>
                                    <ul className="text-white/80 space-y-2">
                                        <li>• React</li>
                                        <li>• Firebase</li>
                                        <li>• Tailwind CSS</li>
                                    </ul>
                                </div>
                                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                                    <h3 className="text-lg font-semibold text-white mb-2">Status</h3>
                                    <p className="text-white/80">In Entwicklung</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative h-[600px] bg-gradient-to-br from-[#121429] to-[#1a1d3a] p-8">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="text-center mb-8"
                            >
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                                    HousePricePredictor
                                </h2>
                                <p className="mt-4 text-lg text-white/80">
                                    Ein KI-gestütztes Tool zur Vorhersage von Immobilienpreisen
                                </p>
                            </motion.div>
                            <div className="flex justify-center">
                                <Image
                                    src={housePricePredictor}
                                    alt="housePricePredictor Picture"
                                    width={800}
                                    height={450}
                                    className="rounded-lg border-2 border-white/20 shadow-xl"
                                />
                            </div>
                            <div className="mt-8 grid grid-cols-3 gap-6">
                                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                                    <h3 className="text-lg font-semibold text-white mb-2">Features</h3>
                                    <ul className="text-white/80 space-y-2">
                                        <li>• KI-basierte Vorhersagen</li>
                                        <li>• Standortanalyse</li>
                                        <li>• Markttrends</li>
                                    </ul>
                                </div>
                                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                                    <h3 className="text-lg font-semibold text-white mb-2">Technologien</h3>
                                    <ul className="text-white/80 space-y-2">
                                        <li>• Python</li>
                                        <li>• TensorFlow</li>
                                        <li>• Pandas</li>
                                    </ul>
                                </div>
                                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                                    <h3 className="text-lg font-semibold text-white mb-2">Status</h3>
                                    <p className="text-white/80">In Entwicklung</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <style jsx global>{`
                .swiper-button-next,
                .swiper-button-prev {
                    color: #3b82f6 !important;
                    background: rgba(255, 255, 255, 0.1);
                    width: 40px !important;
                    height: 40px !important;
                    border-radius: 50%;
                    backdrop-filter: blur(4px);
                }
                .swiper-button-next:after,
                .swiper-button-prev:after {
                    font-size: 20px !important;
                }
                .swiper-pagination-bullet {
                    background: #3b82f6 !important;
                    opacity: 0.5;
                }
                .swiper-pagination-bullet-active {
                    opacity: 1;
                }
            `}</style>
        </div>
    );
}