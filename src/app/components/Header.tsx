// src/app/components/Header.tsx
"use client";

import { UserIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header
      className="
      fixed top-0 left-0 w-full z-10
      px-4 md:px-6 py-4
      pt-20
      flex items-center
      justify-center md:justify-end
      bg-transparent
    "
    >
      {/* done */}
      <nav className="flex items-center gap-5 md:gap-8">
        <a
          href="https://instagram.com/metaswap"
          target="_blank"
          className="underline underline-offset-4 decoration-2 text-2xl md:text-3xl font-bold"
        >
          News
        </a>
        <a
          href="https://metaswap.xyz.com/about"
          target="_blank"
          className="underline underline-offset-4 decoration-2 text-2xl md:text-3xl font-bold"
        >
          About
        </a>
        <a
          href="mailto:info@metaswapllc.com"
          className="underline underline-offset-4 decoration-2 text-2xl md:text-3xl font-bold"
        >
          Investors
        </a>

        <UserIcon className="h-6 w-6 md:h-8 md:w-8 text-black ml-2" />
      </nav>
    </header>
  );
}
