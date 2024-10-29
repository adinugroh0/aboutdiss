import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Terimakasih",
      src: "/arakarakan1.jpg",
    },
    {
      title: "Sudah",
      src: "/image10.jpg",
    },
    {
      title: "Datang",
      src: "/image12.jpg",
    },
    {
      title: "Didalam",
      src: "/image13.jpg",
    },
    {
      title: "Hidupku",
      src: "/image14.jpg",
    },
    {
      title: "🫶🫶",
      src: "/image20.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}
