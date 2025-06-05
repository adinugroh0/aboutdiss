"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent, tujuan: "baru" | "lama") => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    const data = await res.json();

    if (res.ok) {
      const target = tujuan === "baru" ? "/Halaman-Baru" : "/Halaman";
      router.push(`${target}?name=${encodeURIComponent(name)}`);
    } else {
      alert(data.message || "Login gagal");
    }
  };

  return (
    <main className="relative h-screen w-full flex flex-col md:flex-row bg-black">
      <div className=" md:block w-full h-full relative">
        <Image
          src="/login.png"
          alt="Gambar Login Desktop"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Form login */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-black bg-opacity-90 md:bg-opacity-100">
        <form
          onSubmit={(e) => handleLogin(e, "lama")}
          className="flex flex-col gap-6 w-full max-w-md bg-white bg-opacity-90 p-6 rounded-md shadow-md">
          <h1 className="text-2xl font-bold text-center">Haii tiaaa👋</h1>
          <input
            type="text"
            placeholder="Siapa aku ?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex flex-col justify-between sm:flex-row gap-4">
            <button
              type="button"
              onClick={(e) => handleLogin(e, "lama")}
              className="p-[3px] w-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Web Lama
              </div>
            </button>
            <button
              type="button"
              onClick={(e) => handleLogin(e, "baru")}
              className="p-[3px] w-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Web Baru
              </div>
            </button>
          </div>
          <h1 className="text-2xl font-bold text-center">
            proses agak lama ya hehehe🫶
          </h1>
        </form>
      </div>
    </main>
  );
}
