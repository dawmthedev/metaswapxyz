"use client";

import { UserIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full px-4 md:px-6 py-4 z-10 flex justify-center items-center bg-transparent mt-10">
      <div className="max-w-7xl w-full flex justify-center items-center">
        <nav className="flex items-center gap-4 md:gap-12">
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
          <UserIcon className="h-6 w-6 text-white ml-2" />
        </nav>
      </div>
    </header>
  );
}
