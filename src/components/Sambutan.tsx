"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroParallax } from "./ui/hero-parallax";

export default function Sanbuatan() {
  return <HeroParallaxDemo />;
}

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

// Array produk dengan ID unik dan gambar lokal
export const products = [
  {
    id: 1,
    title: "Local Image 1",
    link: "https://example.com",
    thumbnail: "/image1.jpg", // Gambar lokal dari folder public/images
  },
  {
    id: 2,
    title: "Local Image 2",
    link: "https://example.com",
    thumbnail: "/image2.jpg", // Gambar lokal dari folder public/images
  },
  {
    id: 3,
    title: "Local Image 3",
    link: "https://example.com",
    thumbnail: "/image3.jpg", // Gambar lokal dari folder public/images
  },
  {
    id: 4,
    title: "Local Image 4",
    link: "https://example.com",
    thumbnail: "/image4.jpg", // Gambar lokal dari folder public/images
  },
  {
    id: 5,
    title: "Local Image 5",
    link: "https://example.com",
    thumbnail: "/image5.jpg", // Gambar lokal dari folder public/images
  },
  {
    id: 6,
    title: "Local Image 6",
    link: "https://example.com",
    thumbnail: "/image6.jpg", // Gambar lokal dari folder public/images
  },
  {
    id: 7,
    title: "Local Image 7",
    link: "https://example.com",
    thumbnail: "/image7.jpg", // Gambar lokal dari folder public/images
  },
  {
    id: 8,
    title: "Local Image 8",
    link: "https://example.com",
    thumbnail: "/septi locu.jpg", // Gambar lokal dari folder public/images
  },
  {
    id: 9,
    title: "Local Image 9",
    link: "https://example.com",
    thumbnail: "/image9.jpg", // Gambar lokal dari folder public/images
  },
  {
    id: 10,
    title: "Local Image 10",
    link: "https://example.com",
    thumbnail: "/image10.jpg", // Gambar lokal dari folder public/images
  },
  {
    id: 11,
    title: "Local Image 11",
    link: "https://example.com",
    thumbnail: "/image11.jpg", // Gambar lokal dari folder public/images
  },
  {
    id: 12,
    title: "Local Image 12",
    link: "https://example.com",
    thumbnail: "/image12.jpg", // Gambar lokal dari folder public/images
  },
  {
    id: 13,
    title: "Local Image 13",
    link: "https://example.com",
    thumbnail: "/image13.jpg", // Gambar lokal dari folder public/images
  },
  {
    id: 14,
    title: "Local Image 14",
    link: "https://example.com",
    thumbnail: "/image14.jpg", // Gambar lokal dari folder public/images
  },
  {
    id: 15,
    title: "Local Image 15",
    link: "https://example.com",
    thumbnail: "/image15.jpg", // Gambar lokal dari folder public/images
  },
];
