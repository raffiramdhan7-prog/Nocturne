"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-black border-t border-white/10 pt-20 pb-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="flex flex-col space-y-4">
          <Link href="/" className="font-bold text-3xl tracking-tighter cursor-pointer text-white" aria-label="Nocturne Indonesia Home">
            NOCTURNE<span className="text-blue-500">.</span>
          </Link>
          <p className="text-zinc-400 max-w-xs leading-relaxed">
            Build digital ecosystem for you.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-semibold text-lg mb-2">Explore</h4>
          <Link
            href="/#services"
            className="text-zinc-500 hover:text-white transition-colors duration-300 w-fit"
          >
            Services
          </Link>
          <Link href="/portfolio" className="text-zinc-500 hover:text-white transition-colors duration-300 w-fit">
            Portfolio
          </Link>
          <Link href="/about" className="text-zinc-500 hover:text-white transition-colors duration-300 w-fit">
            About
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-semibold text-lg mb-2">Contact</h4>
          <a href="mailto:raffiramdhan7@gmail.com" className="flex items-center gap-3 group w-fit">
            <div className="w-10 h-10 rounded-full bg-blue-500/5 border border-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
              <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <title>Email Nocturne Indonesia</title>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <span className="text-zinc-400 group-hover:text-white transition-colors duration-300">raffiramdhan7@gmail.com</span>
          </a>

          <a href="tel:+6281352920853" className="flex items-center gap-3 group w-fit">
            <div className="w-10 h-10 rounded-full bg-purple-500/5 border border-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/10 group-hover:border-purple-500/30 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300">
              <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <title>Telepon Nocturne Indonesia</title>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.077-7.077l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <span className="text-zinc-400 group-hover:text-white transition-colors duration-300">+62 813 5292 0853</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col items-center">
        <p className="text-zinc-500 text-sm md:text-base text-center">
          © 2026 Nocturne Indonesia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
