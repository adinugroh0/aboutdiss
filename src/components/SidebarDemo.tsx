"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Create from "./Create";
import Delete from "./Delete";
import Akusiapa from "./Akusiapa";

export function SidebarDemo() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "Akses",
      value: "home",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Upload",
      value: "Upload",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Dashboard",
      value: "Dashboard",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      value: "logout",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const renderPage = () => {
    switch (selectedPage) {
      case "home":
        return <Akusiapa />;
      case "Upload":
        return <Create />;
      case "Dashboard":
        return <Delete />;
      default:
        return <h1>Page not found</h1>;
    }
  };

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1  mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden h-screen"
      )}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPage(link.value)}
                  className={cn(
                    "flex items-center gap-3 p-2 rounded-md text-left",
                    selectedPage === link.value
                      ? "bg-gray-300 text-Black"
                      : "hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-300"
                  )}>
                  {link.icon}
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Aboutdiss",
                href: "#",
                icon: (
                  <Image
                    src="/"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Main content with scroll enabled */}
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        {renderPage()}
      </main>
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre">
        Welcome
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="https://wisata-sendang-wuluh.vercel.app/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

export default SidebarDemo;
