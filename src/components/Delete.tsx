"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

interface News {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
}

export default function Delete() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase
          .from("news")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setNews(data || []);
      } catch (err) {
        setError("Error fetching news.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const deleteNews = async (id: number) => {
    if (!confirm("Are you sure you want to delete this news?")) return;

    try {
      const { error } = await supabase.from("news").delete().eq("id", id);
      if (error) throw error;
      setNews((prevNews) => prevNews.filter((item) => item.id !== id));
      alert("News deleted successfully!");
    } catch (err) {
      alert("Failed to delete news.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="p-4">
      {news.length === 0 ? (
        <p className="text-center text-gray-500">No news available.</p>
      ) : (
        <ul>
          {news.map((item) => (
            <li
              key={item.id}
              className="mb-4 p-4 border rounded shadow flex items-start">
              <div className="flex-1">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.content}</p>
                <p className="text-sm text-gray-500 italic">
                  By: {item.author}
                </p>
                <p className="text-xs text-gray-400">
                  {new Date(item.created_at).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => deleteNews(item.id)}
                className="ml-auto px-3 py-1 bg-red-500 text-white text-sm rounded">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
