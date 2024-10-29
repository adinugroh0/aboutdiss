import HeroVideoDialogDemo from "../components/HeroVideoDialogDemo";
import Sambutan from "../components/Sambutan";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="bg-black
    ">
      <Sambutan />
      <HeroVideoDialogDemo />
    </main>
  );
}
