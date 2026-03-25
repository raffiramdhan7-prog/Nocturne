"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Fungsi khusus biar layar cuma ketarik ke bawah tanpa ganti link URL
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false); // Otomatis nutup menu HP kalau lagi kebuka

    // Kalau lagi di halaman lain (Portfolio/About), balik ke Home dulu
    const isId = pathname === "/id" || pathname.startsWith("/id/");
    if (pathname !== "/" && pathname !== "/id") {
      router.push(isId ? `/id/#${targetId}` : `/#${targetId}`);
      return;
    }

    // Kalau udah di Home, langsung scroll halus
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (targetId === "footer") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full max-w-7xl mx-auto px-6 py-6 z-50 relative">
      <div className="flex items-center justify-between w-full">
        {/* Left: Logo */}
        <div className="flex-1 flex items-center justify-start">
          <Link href="/" className="font-bold text-2xl tracking-tighter cursor-pointer" aria-label="Nocturne Indonesia Home">
            NOCTURNE<span className="text-blue-500">.</span>
          </Link>
        </div>

        {/* Center: Desktop Menu (Hilang di HP) */}
        <div className="hidden md:flex flex-1 justify-center gap-8 text-sm font-medium text-zinc-400 items-center">
          <button onClick={(e) => handleScroll(e, "services")} className="hover:text-white transition-colors duration-300 cursor-pointer">
            {pathname.startsWith("/id") ? "Layanan" : "Services"}
          </button>
          <Link href={pathname.startsWith("/id") ? "/id/portfolio" : "/portfolio"} className="hover:text-white transition-colors duration-300">
            {pathname.startsWith("/id") ? "Portofolio" : "Portfolio"}
          </Link>
          <Link href={pathname.startsWith("/id") ? "/id/about" : "/about"} className="hover:text-white transition-colors duration-300">
            {pathname.startsWith("/id") ? "Tentang" : "About"}
          </Link>
        </div>

        {/* Right: Lang Switcher & Contact Button (Desktop) */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-5">
          {/* Language Switcher Desktop */}
          <div className="flex items-center gap-3">
            {pathname === "/id" || pathname.startsWith("/id/") ? (
              <>
                <Link href={pathname.replace(/^\/id/, "") || "/"} className="hover:opacity-80 hover:scale-105 transition-all duration-300 flex items-center justify-center" title="English">
                  <img src="https://flagcdn.com/gb.svg" alt="UK Flag" className="w-[28px] h-[28px] rounded-full object-cover border border-white/20" />
                </Link>
                <div className="flex items-center justify-center cursor-default ring-2 ring-[#3b82f6] rounded-full drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" title="Indonesia">
                  <img src="https://flagcdn.com/id.svg" alt="Indonesia Flag" className="w-[28px] h-[28px] rounded-full object-cover" />
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-center cursor-default ring-2 ring-[#3b82f6] rounded-full drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" title="English">
                  <img src="https://flagcdn.com/gb.svg" alt="UK Flag" className="w-[28px] h-[28px] rounded-full object-cover" />
                </div>
                <Link href={`/id${pathname === "/" ? "" : pathname}`} className="hover:opacity-80 hover:scale-105 transition-all duration-300 flex items-center justify-center" title="Indonesia">
                  <img src="https://flagcdn.com/id.svg" alt="Indonesia Flag" className="w-[28px] h-[28px] rounded-full object-cover border border-white/20" />
                </Link>
              </>
            )}
          </div>

          <div className="h-6 w-px bg-zinc-800"></div>

          {/* Desktop Contact Button */}
          <button
            onClick={(e) => handleScroll(e, "footer")}
            className="text-sm font-medium border border-zinc-800 px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            {pathname.startsWith("/id") ? "Hubungi Kami" : "Contact Us"}
          </button>
        </div>

        {/* Mobile Hamburger Button (Muncul cuma di HP) */}
        <div className="md:hidden flex flex-1 justify-end">
          <button
            className="text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Muncul kalau garis tiga diklik) */}
      {isOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-black/95 border-b border-zinc-800 py-6 px-6 flex flex-col gap-6 text-sm font-medium text-zinc-400 backdrop-blur-md shadow-2xl">
          <button onClick={(e) => handleScroll(e, "services")} className="text-left hover:text-white transition-colors cursor-pointer text-base">
            {pathname.startsWith("/id") ? "Layanan" : "Services"}
          </button>
          <Link href={pathname.startsWith("/id") ? "/id/portfolio" : "/portfolio"} onClick={() => setIsOpen(false)} className="hover:text-white transition-colors text-base">
            {pathname.startsWith("/id") ? "Portofolio" : "Portfolio"}
          </Link>
          <Link href={pathname.startsWith("/id") ? "/id/about" : "/about"} onClick={() => setIsOpen(false)} className="hover:text-white transition-colors text-base">
            {pathname.startsWith("/id") ? "Tentang" : "About"}
          </Link>
          <button
            onClick={(e) => handleScroll(e, "footer")}
            className="text-center text-white border border-zinc-800 px-4 py-3 rounded-full hover:bg-zinc-900 transition-colors mt-4 text-base"
          >
            {pathname.startsWith("/id") ? "Hubungi Kami" : "Contact Us"}
          </button>

          {/* Language Switcher Mobile */}
          <div className="flex items-center justify-center gap-6 mt-4 pb-2 border-t border-zinc-800 pt-8">
            {pathname === "/id" || pathname.startsWith("/id/") ? (
              <>
                <Link href={pathname.replace(/^\/id/, "") || "/"} onClick={() => setIsOpen(false)} className="hover:opacity-80 hover:scale-105 transition-all duration-300 flex items-center justify-center" title="English">
                  <img src="https://flagcdn.com/gb.svg" alt="UK Flag" className="w-[36px] h-[36px] rounded-full object-cover border border-white/20" />
                </Link>
                <div className="flex items-center justify-center cursor-default ring-2 ring-[#3b82f6] rounded-full drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" title="Indonesia">
                  <img src="https://flagcdn.com/id.svg" alt="Indonesia Flag" className="w-[36px] h-[36px] rounded-full object-cover" />
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-center cursor-default ring-2 ring-[#3b82f6] rounded-full drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" title="English">
                  <img src="https://flagcdn.com/gb.svg" alt="UK Flag" className="w-[36px] h-[36px] rounded-full object-cover" />
                </div>
                <Link href={`/id${pathname === "/" ? "" : pathname}`} onClick={() => setIsOpen(false)} className="hover:opacity-80 hover:scale-105 transition-all duration-300 flex items-center justify-center" title="Indonesia">
                  <img src="https://flagcdn.com/id.svg" alt="Indonesia Flag" className="w-[36px] h-[36px] rounded-full object-cover border border-white/20" />
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}