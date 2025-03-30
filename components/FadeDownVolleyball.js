"use client"

import Image from "next/image";
import { motion } from "framer-motion"
import Volleyball from "/public/Volleyball_Ball.png"

export default function fadeDownVolleyball() {
    return (
        <div className="ml-50 mt-30">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <Image
                    src={ Volleyball }
                    alt="Portfolio"
                    width={300}
                    height={300}
                />
            </motion.div>
        </div>
    );
}