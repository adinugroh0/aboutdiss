"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

interface LoginData {
  id: string;
  name: string;
  login_time: string;
}

export default function Logins() {
  const [logins, setLogins] = useState<LoginData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLogins = async () => {
      try {
        const { data, error } = await supabase
          .from("logins")
          .select("*")
          .order("login_time", { ascending: false });

        if (error) throw error;
        setLogins(data || []);
      } catch (err) {
        setError("Gagal mengambil data login.");
      } finally {
        setLoading(false);
      }
    };

    fetchLogins();
  }, []);

  // Fungsi untuk ambil nama hari dari timestamp
  const getDayName = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("id-ID", { weekday: "long" }).format(date);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Riwayat Akses</h2>
      {logins.length === 0 ? (
        <p className="text-center text-gray-500">Belum ada data login.</p>
      ) : (
        <ul>
          {logins.map((item) => (
            <li
              key={item.id}
              className="mb-4 p-4 border rounded shadow bg-white">
              <p>Kamu adalah: {item.name}</p>
              <p className="text-sm text-gray-500">
                Akses hari: {getDayName(item.login_time)} (
                {new Date(item.login_time).toLocaleString("id-ID")})
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
