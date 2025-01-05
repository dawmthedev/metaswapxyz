// src/app/components/Header.tsx
"use client";

import { UserIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header
      className="
      fixed top-0 left-0 w-full z-10
      px-4 md:px-6 py-4
      mt-10
      flex items-center
      justify-center md:justify-end
      bg-transparent
    "
    >
      <nav className="flex items-center gap-4 md:gap-8">
        <a
          href="#"
          className="underline underline-offset-4 decoration-2 text-base md:text-lg font-bold"
        >
          News
        </a>
        <a
          href="#"
          className="underline underline-offset-4 decoration-2 text-base md:text-lg font-bold"
        >
          Careers
        </a>
        <a
          href="#"
          className="underline underline-offset-4 decoration-2 text-base md:text-lg font-bold"
        >
          Investors
        </a>
        <UserIcon className="h-6 w-6 text-black ml-2" />
      </nav>
    </header>
  );
}
