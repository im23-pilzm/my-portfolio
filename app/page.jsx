"use client"

import Image from "next/image";
import FadeDownVolleyball from "@/components/FadeDownVolleyball";
import FadeDownCooking from "@/components/FadeDownCooking"
import profilePic from "/public/IMG_0360.JPG"
import pythonIcon from "/public/python-original.svg"
import htmlIcon from "/public/html5-original-wordmark.svg"
import cssIcon from "/public/css3-original-wordmark.svg"
import jsIcon from "/public/javascript-original.svg"
import reactIcon from "/public/react-original-wordmark.svg"
import nodeIcon from "/public/nodejs-original-wordmark.svg"
import mySqlIcon from "/public/mysql-original-wordmark.svg"
import mongoDbIcon from "/public/mongodb-original-wordmark.svg"
import {TypeAnimation} from "react-type-animation";


export default function main_page() {
    return (
        <div>
            <section id="about_section" className="flex">
                <div className="w-1/2">
                    <div>
                        <div className="justify ml-50 mt-60 text-6xl">
                            <TypeAnimation
                                sequence={[
                                    "Ich heisse\nMaximillian Pilz",
                                    800,
                                ]}
                                repeat={0}
                            />
                        </div>
                    </div>


                    <div className="mt-20">
                        <div className="ml-50 animate-fade-down delay-1000">
                            <p className="text-2xl"><b>Über mich</b></p>
                            <p className="mt-5">Ich bin Maximilian Pilz, 17 Jahre alt, und besuche seit
                                zwei Jahren die Informatikmittelschule (IMS). Programmieren fasziniert mich, weil es
                                vielseitig einsetzbar ist und Kreativität mit logischem Denken verbindet.</p>
                        </div>
                    </div>
                </div>


                <div className="w-1/2 mt-50 mb-50">
                    <Image
                        src={profilePic}
                        width={500}
                        height={500}
                        alt="Picture of me"
                        className="rounded-full mx-auto border-white border-solid border-[1px]"
                    />
                </div>
            </section>

            <section>
                <div>
                    <p className="ml-50 text-[3rem]">Meine Interessen</p>
                </div>
                <div className="flex">
                    <div className="w-1/2">
                        <FadeDownVolleyball></FadeDownVolleyball>
                    </div>

                    <div className="w-1/2">
                        <p className="mt-[13rem] w-[30rem] mx-auto">Zu einer meiner grössten Leidenschaften gehört Volleyball. Ich spiele nun seit 2. Jahren im
                            Volleyball Club Volley Oerlikon. Mir gefällt am Volleyball das Teamwork und Kommunikation
                            aber auch dass man schnell die beste Entscheidung treffen muss.</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/2">
                        <p className="mt-[13rem] w-[30rem] mx-auto">Ein Hobby dass ich noch nicht so lange mache, ist kochen. Am kochen fasziniert mich vor allem wie unterschiedlich verschiedene
                        Nationalitäten kochen, wobei ich italienisch am besten finde, und man diese zubereitet. Ich koche meistens italienisch oder asiatisch.</p>
                    </div>
                    <div className="w-1/2">
                        <FadeDownCooking></FadeDownCooking>
                    </div>
                </div>
            </section>

            <section>

            </section>
        </div>
    );
}