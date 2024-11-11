"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";

export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex flex-col items-center justify-center w-full gap-6">
      {/* Judul Overthinking di atas semua kartu */}
      <h1 className="text-2xl font-bold mb-4 text-white">Overthinking</h1>
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}>
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: ".",
    designation: "5 November 2024",
    content: (
      <p>
        Aku tidak tau kapan terakhir kamu lihat web ini{" "}
        <Highlight>Mungkin hanya waktu pertama aku kirim link</Highlight> Dan
        saat ini aku mulai merasa kalau bukan aku orang yang kamu mau
      </p>
    ),
  },
  {
    id: 1,
    name: ".",
    designation: "5 November 2024",
    content: (
      <p>
        Aku akan mengungkapkan <Highlight>Semua</Highlight> dan jika itu
        terjadimungkin akan menjadi momen{" "}
        <Highlight>Penentu untuk semuanya</Highlight> dan itu akan menjadi momen
        of truee.
      </p>
    ),
  },
  {
    id: 2,
    name: ".",
    designation: "5 November 2024",
    content: (
      <p>
        Oh ya aku ingat kamu pernah bilang kepadaku kalau aku menerimamu karena
        <Highlight> Aku Kasihan padamu</Highlight> dan kamu salah, sepertinya
        <Highlight> kamu Kasihan padaku</Highlight> entah hanya perasaanku atau
        memang benar begitu.
      </p>
    ),
  },
];

export default CardStackDemo;
