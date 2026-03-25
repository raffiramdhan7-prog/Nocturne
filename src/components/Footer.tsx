"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  // Pake e: any biar lu bebas dari error merah TypeScript
  const handleScroll = (e: any, targetId: string) => {
    e.preventDefault(); // Nahan biar URL nggak ganti

    const isId = pathname === "/id" || pathname.startsWith("/id/");
    if (pathname !== "/" && pathname !== "/id") {
      router.push(isId ? `/id/#${targetId}` : `/#${targetId}`);
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer id="footer" className="w-full bg-black border-t border-white/10 pt-20 pb-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

        {/* Kolom 1 */}
        <div className="flex flex-col space-y-4">
          <Link href="/" className="font-bold text-3xl tracking-tighter cursor-pointer text-white" aria-label="Nocturne Indonesia Home">
            NOCTURNE<span className="text-blue-500">.</span>
          </Link>
          <p className="text-zinc-400 max-w-xs leading-relaxed">
            {pathname.startsWith("/id") ? "Membangun ekosistem digital untuk Anda." : "Build digital ecosystem for you."}
          </p>
        </div>

        {/* Kolom 2 */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-semibold text-lg mb-2">{pathname.startsWith("/id") ? "Eksplorasi" : "Explore"}</h4>

          {/* Kita pake tag <a> biasa. Styling 100% aman, nggak ngubah layout lu! */}
          <a
            href={pathname.startsWith("/id") ? "/id/#services" : "/#services"}
            onClick={(e) => handleScroll(e, "services")}
            className="text-zinc-500 hover:text-white transition-colors duration-300 w-fit cursor-pointer"
          >
            {pathname.startsWith("/id") ? "Layanan" : "Services"}
          </a>

          <Link href={pathname.startsWith("/id") ? "/id/portfolio" : "/portfolio"} className="text-zinc-500 hover:text-white transition-colors duration-300 w-fit">
            {pathname.startsWith("/id") ? "Portofolio" : "Portfolio"}
          </Link>
          <Link href={pathname.startsWith("/id") ? "/id/about" : "/about"} className="text-zinc-500 hover:text-white transition-colors duration-300 w-fit">
            {pathname.startsWith("/id") ? "Tentang" : "About"}
          </Link>
        </div>

        {/* Kolom 3 */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-semibold text-lg mb-2">{pathname.startsWith("/id") ? "Kontak" : "Contact"}</h4>
          <a href="mailto:nocturneindonesia.official@gmail.com" className="flex items-center gap-3 group w-fit">
            <div className="w-10 h-10 rounded-full bg-blue-500/5 border border-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
              <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <title>Email Nocturne Indonesia</title>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <span className="text-zinc-400 group-hover:text-white transition-colors duration-300">nocturneindonesia.official@gmail.com</span>
          </a>

          <a href="https://wa.me/628135141357" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group w-fit">
            <div className="w-10 h-10 rounded-full bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 group-hover:shadow-[0_0_15px_rgba(16,185,绿,0.3)] transition-all duration-300">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <title>WhatsApp Nocturne Indonesia</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </div>
            <span className="text-zinc-400 group-hover:text-white transition-colors duration-300">+62 813-5141-357</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col items-center">
        <p className="text-zinc-500 text-sm md:text-base text-center">
          © {new Date().getFullYear()} Nocturne Indonesia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}