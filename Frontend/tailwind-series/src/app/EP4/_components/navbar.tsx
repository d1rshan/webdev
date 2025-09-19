"use client";

import { useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="relative mx-auto flex max-w-4xl items-center justify-between bg-white p-2 shadow-xs md:rounded-full md:shadow-sm">
      <Image
        alt="logo"
        src={"https://ui.aceternity.com/logo.png"}
        width={30}
        height={30}
        className="rounded-full"
      />

      <div className="mr-10 hidden gap-4 text-sm text-neutral-500 md:flex">
        {links.map((link, idx) => (
          <Link href={link.href} className="hover:text-neutral-900" key={idx}>
            {link.name}
          </Link>
        ))}
      </div>

      <button
        className="mr-2 text-neutral-500 md:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <IconMenu2 className="size-5" />
      </button>

      {isOpen && (
        <div className="absolute inset-x-0 top-15 mx-auto flex max-w-[95%] flex-col items-center gap-2 rounded-md bg-white text-neutral-500 shadow-xs md:hidden">
          {links.map((link, idx) => (
            <Link href={link.href} className="hover:text-neutral-900" key={idx}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
