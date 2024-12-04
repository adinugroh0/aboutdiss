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
import {
  StickyScrollDemo,
  StickyScrollRevealDemo,
} from "@/components/StickyScrollDemo";
import NewsList from "@/components/NewsList";
import Create from "@/components/Create";
import { Iklas } from "@/components/Iklas";

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
      <Iklas />
      <Create />
      <NewsList />
      <HyperTextDemo />
    </main>
  );
}
