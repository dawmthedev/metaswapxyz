"use client";

import { UserIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full p-6 z-10 flex justify-center items-center gap-12 text-black font-bold mt-20">
      <nav className="flex gap-12 items-center">
        <a
          href="#"
          className="underline underline-offset-4 decoration-2 text-lg"
        >
          News
        </a>
        <a
          href="#"
          className="underline underline-offset-4 decoration-2 text-lg"
        >
          Careers
        </a>
        <a
          href="#"
          className="underline underline-offset-4 decoration-2 text-lg"
        >
          Investors
        </a>
      </nav>
      <UserIcon className="h-6 w-6" />
    </header>
  );
}
