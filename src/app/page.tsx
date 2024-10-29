import { TextRevealDemo } from "@/components/TextRevealDemo";
import HeroVideoDialogDemo from "../components/HeroVideoDialogDemo";
import Sambutan from "../components/Sambutan";
import Image from "next/image";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { FocusCardsDemo } from "@/components/FocusCardsDemo";

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
    </main>
  );
}
