"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent, tujuan: "baru" | "lama") => {
    e.preventDefault();

    if (!name.trim()) {
      alert("aku siapa kamu?");
      return;
    }

    // Minta permission notifikasi kalau belum granted

    // Kirim ke API login termasuk tujuan
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, tujuan }),
    });

    const data = await res.json();

    if (res.ok) {
      // Tampilkan notifikasi browser kalau izin sudah granted
      if (Notification.permission === "granted") {
        new Notification("Login Berhasil", {
          body: `Selamat datang, ${name}!`,
          icon: "/login.png", // opsional, pakai ikon login kalau ada
        });
      }
      const target = tujuan === "baru" ? "/Halaman-Baru" : "/Halaman";
      router.push(`${target}?name=${encodeURIComponent(name)}`);
    } else {
      alert(data.message || "Login gagal");
    }
  };

  return (
    <main className="flex flex-col md:flex-row h-screen">
      {/* Gambar */}
      <div className="relative w-full md:w-1/2 h-64 md:h-full">
        <Image
          src="/login.png"
          alt="Gambar Login"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Form login */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <form
          onSubmit={(e) => handleLogin(e, "lama")}
          className="flex flex-col gap-6 w-full max-w-md bg-white/80 p-6 rounded-md shadow-md backdrop-blur-sm">
          <h1 className="text-2xl font-bold text-center">Hai tiaa</h1>
          <input
            type="text"
            placeholder="Siapa aku?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={(e) => handleLogin(e, "lama")}
              className="flex-1 bg-transparent border border-blue-600 py-3 rounded-md hover:bg-blue-700 transition text-blue-600 hover:text-white">
              Web Lama
            </button>
            <button
              type="button"
              onClick={(e) => handleLogin(e, "baru")}
              className="flex-1 bg-blue-600 text-white py-3 rounded-md hover:bg-transparent border border-blue-600 hover:text-blue-600 transition">
              Web Baru
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
