"use client";
import Image from "next/image";

export async function Bukanmalu() {
  return (
    <div className="relative w-full h-screen flex  items-center justify-around ">
      <div className="flex  items-center justify-around gap-10">
        <div>
          <Image
            src="/chat.png"
            alt="Background Image"
            width={500}
            height={500}
          />
        </div>
        <div className="  text-center text-white items-center justify-center ">
          <div>
            <p>
              `&quot;`aku tidak malu tapi aku malas melihat kamu tebarpesona
              disitu`&quot;`
            </p>
          </div>
          <div className="mt-5">
            <p>
              `&quot;`aku tidak akan melarangmu walupun aku tidak suka apa yang
              kamu lakukan ,kenapa? <br />
              karena itu yang kamu suka lagi pula aku siapa? aku penting? apa
              kabarku penting?, tidak kan.
              <br />
              aku pikir status itu tidak penting tapi ternyata salah.
              <br />
              kamu punya banyak waktu untuk semuanya tapi bukan aku. `&quot;`
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Bukanmalu;
