"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Image from "next/image";

export function Iklas() {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 md:px-0">
      <div className="flex flex-col items-center justify-center text-center ">
        <div>
          <p className="text-white text-sm md:text-base lg:text-lg px-6 md:px-24">
            &quot;Maaf untuk sekian banyak karena web ini menjadi tempat aku
            mengeluh, untuk saat ini aku hanya bisa menunggu jawaban darimu,
            apapun jawaban yang kamu berikan akanku terima apapun itu baik atau
            buruk. &quot;
          </p>
        </div>
        <div className="w-24 h-24 md:w-32 md:h-32">
          <Image
            src="/apik.png"
            className="rounded-full "
            width={1000}
            height={1000}
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
}
