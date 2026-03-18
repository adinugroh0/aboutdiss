"use client";

import { useEffect, useState } from "react";

export default function CountdownPage() {
  const targetDate = new Date("2026-03-24T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // supaya detik langsung jalan saat pertama render
  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="text-center">
        {timeLeft ? (
          <div className="flex gap-4 text-2xl">
            <TimeBox label="Hari" value={timeLeft.days} />
            <TimeBox label="Jam" value={timeLeft.hours} />
            <TimeBox label="Menit" value={timeLeft.minutes} />
            <TimeBox label="Detik" value={timeLeft.seconds} />
          </div>
        ) : (
          <p className="text-xl">Waktu sudah habis!</p>
        )}
      </div>
    </div>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-gray-800 p-4 rounded-2xl shadow-md">
      <div className="text-4xl font-bold">{value}</div>
      <div className="text-sm">{label}</div>
    </div>
  );
}
