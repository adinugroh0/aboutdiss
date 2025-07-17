import Image from "next/image";

import { DraggableCardDemo } from "@/components/DraggableCardDemo";
import { ContainerTextFlipDemo } from "@/components/ContainerTextFlipDemo";

export default function Home() {
  return (
    <main
      className="bg-black
    ">
      <DraggableCardDemo />
      <div className="flex flex-col items-center justify-center py-8 px-4 md:px-0">
        <ContainerTextFlipDemo />
      </div>
    </main>
  );
}
