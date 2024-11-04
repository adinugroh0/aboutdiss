"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
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
    name: "Anu",
    designation: "5 November 2024",
    content: (
      <p>
        Aku tidak tau kapan terahir kamu lihat web ini{" "}
        <Highlight>Mungkin hanya waktu pertama aku kirim link</Highlight> Dan
        saat ini aku mulai merasa kalau bukan aku orang kamu mau
      </p>
    ),
  },
  {
    id: 1,
    name: "Anu",
    designation: "5 Novembaer 2024",
    content: (
      <p>
        Mungkin jika momen <Highlight>Pantai</Highlight> tiba itu mungkin akan
        menjadi momen <Highlight>Penentu untuk semuanya</Highlight> dan itu akan
        menjadi momen of truee.
      </p>
    ),
  },
  {
    id: 2,
    name: "Anu",
    designation: "5 November 2024",
    content: (
      <p>
        Oh ya aku ingat kamu pernah bilang kepadaku kalau aku menerimamu karena
        <Highlight> Aku Kasihan padamu</Highlight> dan kamu salah , sepertinya
        <Highlight> kamu Kasihan padaku</Highlight> entah hanya perasaanku atau
        memamng benar begitu.
      </p>
    ),
  },
];
