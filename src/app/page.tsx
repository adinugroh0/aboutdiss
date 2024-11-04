import { TextRevealDemo } from "@/components/TextRevealDemo";
import HeroVideoDialogDemo from "../components/HeroVideoDialogDemo";
import Sambutan from "../components/Sambutan";
import Image from "next/image";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { FocusCardsDemo } from "@/components/FocusCardsDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { SVGMaskEffectDemo } from "@/components/SVGMaskEffectDemo";
import { HyperTextDemo } from "@/components/HyperTextDemo";
import { BoxRevealDemo } from "@/components/BoxRevealDemo";
import { CardStackDemo } from "@/components/CardStackDemo";

export default function Home() {
  return (
    <main
      className="bg-black
    ">
      <Sambutan />
      <HeroVideoDialogDemo />
      <TextRevealDemo />
      <HeroScrollDemo />
      <FocusCardsDemo />
      <InfiniteMovingCardsDemo />
      <SVGMaskEffectDemo />
      <BoxRevealDemo />
      <CardStackDemo />
      <HyperTextDemo />
    </main>
  );
}
