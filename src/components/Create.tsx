"use client";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient"; // Make sure this path is correct
import { useRouter } from "next/navigation";

export default function Create() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    image_url: "",
    author: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();

  // Fungsi untuk mengunggah gambar ke Supabase
  const uploadImage = async () => {
    if (!file) {
      console.error("No file selected for upload");
      return null;
    }

    const fileName = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("news-images") // Ensure this is the correct bucket name
      .upload(fileName, file);

    if (error) {
      console.error("Error uploading image:", error.message);
      alert("Gagal mengunggah gambar. Periksa file dan coba lagi.");
      return null;
    }

    // Mendapatkan URL publik dari file yang diunggah
    const { data: publicData } = supabase.storage
      .from("news-images")
      .getPublicUrl(fileName);

    return publicData?.publicUrl || null;
  };

  // Fungsi untuk menangani form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Upload gambar dan ambil URL publiknya
    const imageUrl = await uploadImage();

    if (!imageUrl) {
      console.error("Failed to upload image");
      return;
    }

    // Insert berita ke dalam tabel 'news'
    const { error } = await supabase.from("news").insert([
      {
        ...form,
        image_url: imageUrl, // Save the image URL in the 'image_url' field
      },
    ]);

    if (error) {
      console.error("Error creating news:", error.message);
    } else {
      console.log("News created successfully!");
      router.push("/"); // Redirect after success
    }
  };

  // Fungsi untuk menangani perubahan input form
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Tambahkan apa Saja yang kamu mau
        </h1>

        {/* Image upload */}
        <div className="flex justify-center mb-6">
          <input
            type="file"
            accept="image/*"
            placeholder="gambar"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full max-w-xs p-2 border-2 border-gray-300 rounded-md shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Judul"
          value={form.title}
          onChange={handleChange}
          className="w-full p-4 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Content */}
        <textarea
          name="content"
          placeholder="Konten isi"
          value={form.content}
          onChange={handleChange}
          className="w-full p-4 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
        />

        {/* Author */}
        <input
          type="text"
          name="author"
          placeholder="Penulis"
          value={form.author}
          onChange={handleChange}
          className="w-full p-4 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Simpan
        </button>
      </form>
    </div>
  );
}
