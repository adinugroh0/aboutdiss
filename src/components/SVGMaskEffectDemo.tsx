"use client";
import { MaskContainer } from "./ui/svg-mask-effect";

export function SVGMaskEffectDemo() {
  return (
    <div className="h-[40rem] w-full flex flex-col items-center justify-center  overflow-hidden">
      <p className="text-3xl text-white">
        Arahkan mouse di dalam kotak untuk menbaca
      </p>
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-black text-center  text-4xl font-bold">
            Aku kutunggu kamu Besok, kalau Besok belum bisa juga, makasetiaphari
            adalah Besok. Dan sampai kapanpun kamu adalah langit yang kusikai
            cerahnya, mendungnya, hujanya,badainya,petirnya, senjanya,
            pelanginya, dan semua yang ada pada diri kamu
          </p>
        }
        className="h-[40rem] border rounded-md">
        Aku tunggu kamu <span className="text-red-500">Besok, </span> kalau
        <span className="text-red-500"> Besok </span>
        belum bisa juga, maka setiap hari adalah
        <span className="text-red-500"> Besok. </span>
        Dan sampai kapanpun kamu adalah langit yang kusukai cerahnya,
        mendungnya, hujanya,badainya,petirnya, senjanya, pelanginya, dan semua
        yang ada pada diri kamu
      </MaskContainer>
    </div>
  );
}
