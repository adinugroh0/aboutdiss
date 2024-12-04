"use client"; // Tambahkan ini di bagian atas file untuk menandai sebagai Client Component

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Image from "next/image";

interface News {
  id: number;
  title: string;
  content: string;
  author: string;
  image_url: string;
  created_at: string;
}

export default function NewsList() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data, error } = await supabase
          .from("news")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          throw new Error(error.message);
        }

        setNews(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div className="bg-transparent">
      <div className="max-w-5xl mx-auto py-10 flex flex-col justify-center items-center gap-3">
        <h1 className="text-4xl font-bold text-white mb-8">apa pun itu</h1>
        {news.length === 0 ? (
          <p className="text-center text-gray-500">Tidak ada inputan</p>
        ) : (
          <ul className="space-y-8">
            {news.map((item) => (
              <li
                key={item.id}
                className="bg-transparent text-white shadow-md rounded-lg p-6 flex flex-col lg:flex-row gap-6 items-start">
                {item.image_url && (
                  <div className="w-full lg:w-1/3">
                    <Image
                      src={item.image_url}
                      alt={item.title}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                )}
                <div className="flex flex-col">
                  <h2 className="text-2xl font-semibold mb-2 text-white">
                    {item.title}
                  </h2>
                  <p className="mb-4 text-white">{item.content}</p>
                  <p className="text-sm text-white">
                    Penulis: {item.author} |{" "}
                    {new Date(item.created_at).toLocaleDateString()}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
