import BoxReveal from "@/components/ui/box-reveal";

export async function BoxRevealDemo() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-around overflow-hidden">
      <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center blur-lg"></div>
      <div className="relative z-10">
        <BoxReveal boxColor="#A19E9E" duration={0.9}>
          <h2 className="mt-[.5rem] text-lg text-white max-w-3xl text-center italic">
            &quot;Maaf soal pantai waktu itu dan aku tau kamu masih mengingat
            itu sampai sekarang. &quot;
            <br />
            &quot;Mungkin momen ini membuat mu kecewa maaf.
          </h2>
        </BoxReveal>
      </div>
    </div>
  );
}
