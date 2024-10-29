"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <p className="text-3xl text-white gap-5">
        Arakkan mouse dibagian card untuk membaca
      </p>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Sekarang aku sudah tidak pernah mendengan kata 'iya cinta' lagi darimu entah kenapa",
    name: "..",
    title: "anu",
  },
  {
    quote: "Aku akan menungu sampai kamu mau entah kapanpun itu",
    name: ",",
    title: "anu",
  },
  {
    quote:
      "Kamu belum menjelaskan alasanmu dengan jelas apa yang kamu mau aku susah untuk mengerti ",
    name: ",,",
    title: "anu",
  },
  {
    quote: "Kenapaa selalumengirim pap sekali lihattt?kenapaaas ",
    name: ",,,",
    title: "anu",
  },
  {
    quote:
      "Sebenarnya aku takut jauh darimu tapi aku takut kamu yang menjauhi aku ",
    name: ",,,,,",
    title: "anu",
  },
  {
    quote: "Tolong jika aku salah tegur aku jangan diam saja ",
    name: ",,,,,,",
    title: "anu",
  },
  {
    quote:
      "Toong ketika bersamaku jangan terlalu fokus dengan handphone mu karena aku ingin menikmati momen apapun itu saat bersamamu ",
    name: ",,,,,,,",
    title: "anu",
  },
];
