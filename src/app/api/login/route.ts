import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  try {
    const { name, tujuan } = await req.json();

    if (!name) {
      return NextResponse.json(
        { message: "Nama wajib diisi" },
        { status: 400 }
      );
    }

    // Simpan ke Supabase
    const { error } = await supabase.from("logins").insert({ name });
    if (error) {
      console.error("Supabase Error:", error.message);
      return NextResponse.json(
        { message: "Gagal menyimpan ke database" },
        { status: 500 }
      );
    }

    // Kirim pesan WhatsApp via CallMeBot
    const phone = process.env.WA_PHONE!;
    const apikey = process.env.WA_API_KEY!;
    const message =
      tujuan === "lama"
        ? `🔔 hai ${name} aku membuka Web Baru`
        : `🔔 hai ${name} aku membuka ke Web Lama`;

    const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(
      message
    )}&apikey=${apikey}`;

    const waResponse = await fetch(url);
    const waText = await waResponse.text();

    console.log("CallMeBot response:", waText);

    return NextResponse.json({ message: "Login sukses! Notifikasi dikirim." });
  } catch (e: any) {
    console.error("API Error:", e);
    return NextResponse.json({ message: "Terjadi kesalahan" }, { status: 500 });
  }
}
