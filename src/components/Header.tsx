"use client";

import Link from "next/link";

export default function Header() {
  return (
    <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-50">
      <Link href="/" className="font-bold text-2xl tracking-tighter cursor-pointer" aria-label="Nocturne Indonesia Home">
        NOCTURNE<span className="text-blue-500">.</span>
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
        <Link href="/#services" className="hover:text-white transition-colors duration-300">
          Services
        </Link>
        <Link href="/portfolio" className="hover:text-white transition-colors duration-300">
          Portfolio
        </Link>
        <Link href="/about" className="hover:text-white transition-colors duration-300">
          About
        </Link>
      </div>
      <Link
        href="#footer"
        className="hidden md:block text-sm font-medium border border-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-900 transition-colors duration-300"
      >
        Contact Us
      </Link>
    </nav>
  );
}
