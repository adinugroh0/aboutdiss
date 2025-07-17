import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCardDemo() {
  const items = [
    {
      title: "geser foto untuk melihat pesan",
      image: "/voly.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "geser foto untuk melihat pesan",
      image: "/voly1.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "geser foto untuk melihat pesan",
      image: "/voly2.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "geser foto untuk melihat pesan",
      image: "/voly3.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
  ];

  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Aku tau semuanya bukan soal percintaan tapi apa bisa kita membohongi
        perasaan kita sendiri? ada beberapa hal yang awalnya aku tidak begitu
        suka dan menjadi suka karena kamu.
      </p>
      {items.map((item, index) => (
        <DraggableCardBody key={index} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
