"use client";

import { useEffect, useState } from "react";

export default function CountdownRomantic() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [showLove, setShowLove] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-03-24T00:00:00").getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      setTimeLeft(difference);

      if (difference <= 0) {
        setShowLove(true);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  if (timeLeft <= 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-center">
        <div className="text-4xl font-bold text-red-500 animate-pulse">
          Selamat Ulangtahun ya Cinta
        </div>
      </div>
    );
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="flex flex-col items-center justify-center  text-center p-4">
      <div className="bg-gray-200 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          Hitungan Mundur ke 24 Maret 2025
        </h2>
        <div className="grid grid-cols-4 gap-4 text-center text-lg font-semibold">
          <div className="bg-gray-900 text-white p-4 rounded-lg">
            <p>{days}</p>
            <span>Hari</span>
          </div>
          <div className="bg-gray-900 text-white p-4 rounded-lg">
            <p>{hours}</p>
            <span>Jam</span>
          </div>
          <div className="bg-gray-900 text-white p-4 rounded-lg">
            <p>{minutes}</p>
            <span>Menit</span>
          </div>
          <div className="bg-gray-900 text-white p-4 rounded-lg">
            <p>{seconds}</p>
            <span>Detik</span>
          </div>
        </div>
      </div>
    </div>
  );
}
