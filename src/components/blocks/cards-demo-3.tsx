// src/components/blocks/cards-demo-3.tsx
"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function CardsDemo() {
  const controls = useAnimation();

  useEffect(() => {
    // Fungsi untuk menjalankan animasi dengan pengulangan dan jeda
    async function startAnimation() {
      await controls.start({
        scale: [1, 1.2, 1],
        rotate: [0, 10, 0],
        transition: {
          duration: 1, // Durasi satu siklus animasi
          ease: "easeInOut",
        },
      });

      // Ulangi animasi dengan jeda 1 detik
      setTimeout(startAnimation, 1000);
    }

    // Mulai animasi pertama kali
    startAnimation();
  }, [controls]);

  return (
    <motion.div
      className="card w-64 h-64 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl"
      animate={controls} // Menggunakan kontrol animasi
    >
      Animasi Berulang
    </motion.div>
  );
}
