"use client"

import Image from "next/image";
import { motion } from "framer-motion"
import Cooking from "/public/Header-Bewusst-Zeitsparend-Kochen-001.jpg"

export default function fadeDownCooking() {
    return (
        <div className="mr-50 mt-30">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <Image
                    src={ Cooking }
                    alt="Portfolio"
                    width={300}
                    height={300}
                    className="rounded-full border-white border-solid border-[1px] object-cover mx-auto"
                />
            </motion.div>
        </div>
    );
}