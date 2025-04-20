"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "5.png",
    "2.png",
    "3.png",
    "1.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "1.png",
    "4.png",
    "1.png",
    "7.png",
    "8.png",
    "1.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "1.png",
    "9.png",
    "10.png",
    "6.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "1.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "1.png",
    "https://assets.aceternity.com/wobble-card.png",
    "1.png",
  ];
  return (
    <div className="w-full  h-full rounded-3xl bg-gray-950/5  ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}
export default ThreeDMarqueeDemo;
