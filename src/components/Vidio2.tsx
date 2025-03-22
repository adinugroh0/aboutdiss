"use client";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function Vidio2() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="Vidio2.mp4"
        thumbnailSrc="/ABOUT.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="/Vidio2.mp4"
        thumbnailSrc="/ABOUT.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
export default Vidio2;
