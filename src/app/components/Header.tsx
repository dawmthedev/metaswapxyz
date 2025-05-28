"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const links = [
  { href: '/news', label: 'News' },
  { href: '/about', label: 'About' },
  { href: '/investors', label: 'Investors' },
  { href: '/careers', label: 'Careers' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className={`underline underline-offset-4 decoration-2 text-2xl md:text-3xl font-bold ${
        pathname === href ? 'text-blue-600' : ''
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-10 px-4 md:px-6 py-4 flex items-center justify-between bg-transparent">
      <Link href="/" className="text-3xl font-extrabold">Metaswap</Link>
      <nav className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}
      </nav>
      <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
        <Bars3Icon className="h-8 w-8" />
      </button>
      {open && (
        <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
          <button className="absolute top-4 right-4" aria-label="Close menu" onClick={() => setOpen(false)}>
            <XMarkIcon className="h-8 w-8" />
          </button>
        </div>
      )}
    </header>
  );
}
