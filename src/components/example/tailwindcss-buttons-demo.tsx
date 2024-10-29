import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner"; // Pastikan import ini benar
import { ButtonsCard } from "../ui/tailwindcss-buttons";

export default function TailwindcssButtons() {
  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Copied to clipboard"); // Menggunakan toast dari sonner
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
        toast.error("Failed to copy text");
      });
  };

  return (
    <div>
      <Toaster /> {/* Render Toaster di tempat yang sesuai */}
      {/* Komponen Anda di sini */}
      <ButtonsCard onClick={() => handleCopy("Example text")}>
        Copy Text
      </ButtonsCard>
    </div>
  );
}
