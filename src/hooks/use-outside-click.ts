import { useEffect, useRef } from "react";

export function useOutsideClick(callback: () => void) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    // Menambahkan event listener untuk mendeteksi klik di luar
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Menghapus event listener saat unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return ref;
}
