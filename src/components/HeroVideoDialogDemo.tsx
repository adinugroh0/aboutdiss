"use client";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="/momen.mp4"
        thumbnailSrc="/ABOUT.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="/momen.mp4"
        thumbnailSrc="/ABOUT.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
export default HeroVideoDialogDemo;
