import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  try {
    const { name } = await req.json();

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

    return NextResponse.json({ message: "Login sukses!" });
  } catch (e: any) {
    console.error("API Error:", e);
    return NextResponse.json({ message: "Terjadi kesalahan" }, { status: 500 });
  }
}
