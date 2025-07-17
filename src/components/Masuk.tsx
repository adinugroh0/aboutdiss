"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export function Masuk() {
  const router = useRouter();

  const handleLogin = async (tujuan: "baru" | "lama") => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: " aboutdiss.vercel.app" }), // Ubah sesuai kebutuhan
    });

    const data = await res.json();

    if (res.ok) {
      const target = tujuan === "baru" ? "/Halaman-Baru" : "/Halaman";
      router.push(target);
    } else {
      alert(data.message || "Login gagal");
    }
  };

  return (
    <div className="relative mx-auto  flex max-w-7xl flex-col items-center justify-center bg-black">
      <Navbar />
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Welcome to aboutdiss 👋".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block">
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400">
          Terimakasih masih membuka web ini yang isinya tentang aku dan ada kamu
          di sana.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            type="button"
            onClick={() => handleLogin("lama")}
            className="p-[3px] w-60 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-black text-center rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              Web Lama
            </div>
          </a>
          <a
            type="button"
            onClick={() => handleLogin("baru")}
            className="p-[3px] w-60 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-black text-center rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              Web Baru
            </div>
          </a>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.1 }}
          className="text-center mt-4 text-xl font-semibold text-neutral-500 dark:text-neutral-400">
          proses agak lama ya hehehe 🫶
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="relative z-10 mt-20 rounded-3xl border   p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <Image
              src="/login.png"
              alt="Landing page preview"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={1000}
              width={1000}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const Navbar = () => {
  return <nav className="flex w-full  items-center justify-between "></nav>;
};

export default Masuk;
