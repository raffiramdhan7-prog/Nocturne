"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

type FaqItem = {
  question: string;
  answer: string;
};

export default function WebDevelopmentPricing() {
  const faqItems = useMemo<FaqItem[]>(
    () => [
      {
        question: "Apa itu Hosting?",
        answer:
          "Web hosting adalah layanan yang menyediakan ruang penyimpanan dan infrastruktur yang diperlukan agar situs web dapat diakses di internet 24 jam.",
      },
      {
        question: "Apa itu Domain?",
        answer:
          "Domain adalah alamat unik website Anda di internet sekaligus representasi identitas digital brand Anda. Domain memudahkan pelanggan menemukan Anda, menggantikan alamat IP yang kompleks dengan nama yang sederhana dan mudah diingat.",
      },
      {
        question: "Apa itu SEO?",
        answer:
          "Search Engine Optimization (SEO) adalah proses untuk meningkatkan situs web Anda untuk meningkatkan visibilitasnya ketika orang mencari produk atau layanan yang berkaitan dengan bisnis Anda di mesin pencari.",
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col selection:bg-blue-500/30 relative">
      {/* Global Header/ Footer are provided via layout.tsx */}

      <main className="w-full relative z-10">
        <section className="w-full px-6 md:px-8 pt-6 pb-6 min-h-screen flex items-center">
          <div className="w-full max-w-7xl mx-auto flex flex-col gap-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-[linear-gradient(90deg,#3b82f6,#8b5cf6,#3b82f6,#8b5cf6)] bg-[length:300%_auto] animate-gradient-flow">
                Pengembangan Web Kustom
              </h1>
              <p className="mt-2 text-xl md:text-2xl text-white/90 leading-relaxed">
                Wujudkan visi Anda ke dalam dunia digital.
              </p>
            </div>

            <div className="w-full">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center md:text-left">
                Mengapa Perlu Membuat Website?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Menambah Kredibilitas
                    </h3>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed">
                      Di era yang serba digital ini, sebelum seseorang mengunjungi kantor Anda atau membeli produk Anda, mereka akan mencari Anda melalui platform digital terlebih dahulu. Kami membantu Anda membangun "etalase" digital premium yang membuat orang merasa aman dan percaya dengan brand Anda.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Karyawan 24 Jam
                    </h3>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed">
                      Website adalah anggota tim Anda yang paling berdedikasi. Ia tidak pernah tidur dan juga tidak pernah libur. Website akan menjelaskan profil Anda, memamerkan produk Anda, dan menjawab pertanyaan pelanggan 24 jam penuh.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Investasi Jangka Panjang Terbaik
                    </h3>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed">
                      Website premium adalah investasi satu kali yang akan bekerja tanpa lelah untuk Anda selamanya. Jauh lebih hemat biaya dan permanen dibandingkan iklan media sosial yang berlalu begitu saja atau iklan baliho tradisional.
                    </p>
                  </div>
                </div>

                <div className="md:sticky md:top-24">
                  <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden p-8 max-h-[400px]">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.14),transparent_55%)]" />
                    <motion.svg
                      width="100%"
                      height="220"
                      viewBox="0 0 600 320"
                      className="relative z-10"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      style={{ willChange: "transform, opacity" }}
                    >
                      <defs>
                        <linearGradient id="nw-wire" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.85" />
                          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.75" />
                        </linearGradient>
                        <filter id="nw-glow">
                          <feGaussianBlur stdDeviation="3" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      <motion.path
                        d="M110 170 C 190 60, 310 60, 370 150 C 430 240, 520 240, 540 160"
                        fill="none"
                        stroke="url(#nw-wire)"
                        strokeWidth="2"
                        filter="url(#nw-glow)"
                        animate={{ pathLength: [0.85, 1, 0.85], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.path
                        d="M80 210 C 190 240, 270 270, 350 220 C 430 170, 500 130, 565 110"
                        fill="none"
                        stroke="url(#nw-wire)"
                        strokeWidth="1.5"
                        opacity="0.7"
                        filter="url(#nw-glow)"
                        animate={{ pathLength: [1, 0.88, 1] }}
                        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.path
                        d="M140 90 C 220 120, 260 150, 320 130 C 380 110, 470 70, 520 70"
                        fill="none"
                        stroke="url(#nw-wire)"
                        strokeWidth="1.5"
                        opacity="0.6"
                        filter="url(#nw-glow)"
                        animate={{ opacity: [0.5, 0.85, 0.5] }}
                        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                      />

                      {[
                        { cx: 110, cy: 170, r: 5 },
                        { cx: 210, cy: 95, r: 4 },
                        { cx: 310, cy: 110, r: 6 },
                        { cx: 430, cy: 210, r: 4 },
                        { cx: 520, cy: 90, r: 5 },
                      ].map((n, i) => (
                        <motion.circle
                          key={i}
                          cx={n.cx}
                          cy={n.cy}
                          r={n.r}
                          fill="#0b1220"
                          stroke="url(#nw-wire)"
                          strokeWidth="2"
                          filter="url(#nw-glow)"
                          animate={{ r: [n.r, n.r + 2, n.r] }}
                          transition={{ duration: 3.8 + i * 0.35, repeat: Infinity, ease: "easeInOut" }}
                          style={{ willChange: "transform" }}
                        />
                      ))}
                    </motion.svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-24 px-6 md:px-8 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Paket Pengembangan Web
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 w-full max-w-4xl mx-auto">
              <ScrollReveal delay={0} className="flex flex-col">
                <div className="relative bg-white/5 backdrop-blur-md border border-purple-500/20 p-7 rounded-3xl flex flex-col hover:border-blue-500/40 transition-colors duration-300 h-full">
                  <h3 className="text-xl font-bold mb-1">Paket Premium</h3>
                  <div className="mb-5">
                    <span className="text-4xl font-extrabold text-white tracking-tight">
                      Rp 300.000
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6 flex-1">
                    {[
                      "Landing page (Hingga 10 halaman)",
                      "SEO Dasar",
                      "Gratis domain dasar",
                      "Gratis hosting entry (1 GB)",
                      "Gratis edit 5 gambar & 1 logo",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-blue-400 shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-zinc-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="https://wa.me/628135141357?text=Halo%20kak,%20aku%20cukup%20tertarik%20dengan%20paket%20yang%20Premium." target="_blank" rel="noopener noreferrer" className="block text-center w-full py-3 px-6 rounded-full font-semibold text-white border border-blue-500/50 hover:bg-blue-500/10 transition-colors duration-300 text-sm">
                    Pilih Premium
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150} className="flex flex-col">
                <div className="relative bg-white/5 backdrop-blur-md border border-blue-500/50 p-7 rounded-3xl flex flex-col md:scale-105 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] h-full">
                  <div className="absolute inset-0 bg-blue-500/5 rounded-3xl pointer-events-none" />

                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    Rekomendasi
                  </div>

                  <h3 className="text-xl font-bold mb-1">Paket Eksklusif</h3>
                  <div className="mb-5">
                    <span className="text-4xl font-extrabold text-white tracking-tight">
                      Rp 375.000
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6 flex-1 relative z-10">
                    {[
                      "Website Fullstack (Halaman Tidak Terbatas)",
                      "SEO Lanjutan",
                      "Gratis domain populer (.com, .net, .id)",
                      "Gratis hosting tanpa batas (small)",
                      "Gratis edit 10 gambar & 1 logo",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-blue-400 shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-zinc-300 font-medium text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="https://wa.me/628135141357?text=Halo%20kak,%20aku%20tertarik%20dengan%20Paket%20Exclusive." target="_blank" rel="noopener noreferrer" className="block text-center relative z-10 w-full py-3 px-6 rounded-full font-semibold text-white bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300 transform hover:-translate-y-1 text-sm">
                    Pilih Eksklusif
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="w-full py-24 px-6 md:px-8 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Terminologi Kompleks
            </h2>

            <div className="mt-12 space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={item.question}
                    className="border border-white/10 bg-white/[0.02] rounded-2xl overflow-hidden"
                  >
                    <button
                      type="button"
                      className="w-full px-6 md:px-8 py-5 flex items-center justify-between text-left"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span className="text-white font-medium text-lg">
                        {item.question}
                      </span>
                      <motion.span
                        className="text-white/70"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ willChange: "transform" }}
                      >
                        +
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeInOut" }}
                          style={{ willChange: "height, opacity" }}
                        >
                          <div className="px-6 md:px-8 pb-6 text-white/70 leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_30%,transparent_100%)] pointer-events-none z-0" />
    </div>
  );
}
