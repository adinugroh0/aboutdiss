"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden p-40">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className=" font-semibold text-white">
              Terimakasih <br />
              <span className=" md:text-[4rem] font-bold mt-1 leading-none">
                Semua ini akan menjadi momen yang akan selalu kuingat
              </span>
            </h1>
          </>
        }>
        <Image
          src={`/surat.png`}
          alt="hero"
          height={720}
          width={1400}
          className="w-full"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
