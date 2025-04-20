"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const images = [
    "S.png",
    "S.png",
    "S.png",
    "5.png",
    "2.png",
    "3.png",
    "1.png",
    "S.png",
    "S.png",
    "S.png",
    "S.png",
    "1.png",
    "4.png",
    "1.png",
    "7.png",
    "8.png",
    "1.png",
    "S.png",
    "S.png",
    "S.png",
    "1.png",
    "9.png",
    "10.png",
    "6.png",
    "S.png",
    "S.png",
    "S.png",
    "S.png",
    "S.png",
    "S.png",
    "1.png",
  ];
  return (
    <div className="w-full  h-full rounded-3xl bg-gray-950/5  ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}
export default ThreeDMarqueeDemo;
