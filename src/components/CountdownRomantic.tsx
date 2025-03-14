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
      <div className="flex flex-col items-center justify-center  bg-pink-100 text-center"></div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center  bg-black text-white text-center p-4">
      <div className=" gap-6 text-center">
        {["March"].map((month, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">{month}</h3>
            <div className="grid grid-cols-7 gap-1 text-sm">
              {["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                <span key={day} className="font-semibold text-red-400">
                  {day}
                </span>
              ))}
              {[...Array(31)].map((_, dayIndex) => (
                <span
                  key={dayIndex}
                  className={`p-2 ${
                    month === "March" && dayIndex + 1 === 24
                      ? "bg-red-500 text-white font-bold"
                      : "text-gray-300"
                  }`}>
                  {dayIndex + 1 <= 31 ? dayIndex + 1 : ""}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
