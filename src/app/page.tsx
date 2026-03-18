"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import HeroScene from "@/components/HeroScene";
import { motion } from "framer-motion";

/**
 * Hook: fires a callback whenever the observed element crosses the viewport
 * boundary, returning a [ref, isVisible] tuple.
 */
function useInViewAnimation<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Play when entering the viewport, pause when leaving
        setIsVisible(entry.isIntersecting);
      },
      {
        // Trigger as soon as ANY part of the element is visible
        threshold: 0,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible] as const;
}

export default function Home() {
  // Intersection Observer hook — play gradient only when 'The Future.' is in viewport
  const [headlineRef, isHeadlineVisible] = useInViewAnimation<HTMLSpanElement>();
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col selection:bg-blue-500/30 relative">
      {/* Animated Aurora Blobs (The 'Fuel' Effect) */}
      <div className="absolute top-0 inset-x-0 h-screen overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-[#1e3a8a] rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob" />
        <div className="absolute top-[30%] right-[20%] w-[600px] h-[600px] bg-[#581c87] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-blob-reverse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Header is now global via layout.tsx */}

      {/* Main Hero Section */}
      <main className="min-h-screen flex flex-col items-center justify-center px-6 md:px-8 pb-32 relative overflow-hidden">
        <HeroScene />

        <div className="relative z-10 text-center max-w-4xl w-full">
          {/* Headline -> Second element stagger: 300ms delay */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 opacity-0 animate-fade-up-300">
            We Code <br className="md:hidden" />
            {/* The 'Power' Effect — Intersection Observer controlled gradient flow */}
            <span
              ref={headlineRef}
              className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#3b82f6,#8b5cf6,#3b82f6,#8b5cf6)] bg-[length:300%_auto] animate-gradient-flow"
              style={{
                animationPlayState: isHeadlineVisible ? 'running' : 'paused',
              }}
            >
              Your Future
            </span> <br />
            In The Dark
          </h1>

          {/* Sub-headline -> Third element stagger: 500ms delay */}
          <p className="mt-8 mb-12 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up-500">
            Nocturne transforms digital visions into reality with uncompromising performance.
          </p>

          {/* Call-to-Action Buttons -> Fourth element stagger: 700ms delay */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fade-up-700">
            {/* Enhanced Button Pulse on Primary Button — routes to funnel */}
            <Link href="/start-project" className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] animate-pulse-glow hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 ease-out transform hover:-translate-y-1 text-center">
              Start a Project
            </Link>
            
            <Link href="/portfolio" className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white relative group overflow-hidden border border-blue-500/30 hover:border-blue-500/80 transition-all duration-300 ease-out">
              <span className="relative z-10">Our Portfolio</span>
              <div className="absolute inset-0 bg-blue-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>
          </div>
        </div>

        {/* Decorative subtle grid or lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />
      </main>

      {/* Meet Your Digital Agent — split section */}
      <section className="w-full py-24 px-6 md:px-8 bg-black relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-10 items-center">
          {/* Left: Text */}
          <div className="flex flex-col items-start">
            <p className="text-white text-xl md:text-2xl tracking-[0.2em] capitalize">
              Meet your digital agent
            </p>
            <h2 className="mt-4 text-6xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-[linear-gradient(90deg,#3b82f6,#8b5cf6,#3b82f6,#8b5cf6)] bg-[length:300%_auto] animate-gradient-flow">
              Nocturne!
            </h2>
            <p className="mt-6 text-xl md:text-2xl text-white/85 leading-relaxed max-w-xl">
              Build premium digital ecosystem for everyone
            </p>
            <div className="mt-8 inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-3">
              <span className="text-sm text-white/90">Accessible</span>
              <span className="text-white/30">•</span>
              <span className="text-sm text-white/90">Helpful</span>
              <span className="text-white/30">•</span>
              <span className="text-sm text-white/90">Resilient</span>
            </div>
          </div>

          {/* Right: Animated abstract orb */}
          <div className="relative w-full h-[340px] md:h-[420px] flex items-center justify-center">
            <motion.div
              className="absolute inset-0"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_35%,rgba(59,130,246,0.28),transparent_55%),radial-gradient(circle_at_60%_60%,rgba(139,92,246,0.22),transparent_55%)] blur-2xl" />
              <motion.div
                className="absolute left-1/2 top-1/2 h-[260px] w-[260px] md:h-[320px] md:w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.55),rgba(0,0,0,0)_60%),radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.45),rgba(0,0,0,0)_58%)] blur-2xl opacity-90"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            </motion.div>
            <div className="absolute -bottom-12 left-0 right-0 flex justify-center">
              <Link
                href="/about"
                className="px-5 py-2 rounded-full text-sm text-white bg-black border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]"
              >
                Read more about Nocturne
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 px-6 md:px-8 bg-black relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border border-white/10 bg-white/[0.02] rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(59,130,246,0.10),transparent_55%),radial-gradient(ellipse_60%_60%_at_50%_110%,rgba(139,92,246,0.08),transparent_55%)]" />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-purple-500/40 opacity-70 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400/80" />
                </span>
                <span className="text-white/60 text-xs tracking-widest">
                  CURRENT INITIATIVE
                </span>
              </div>

              <h3 className="mt-8 text-3xl md:text-5xl font-medium leading-tight text-white">
                Nocturne is currently selecting a limited number of{" "}
                <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#3b82f6,#8b5cf6,#3b82f6,#8b5cf6)] bg-[length:300%_auto]">
                  Beta Partners.
                </span>
              </h3>

              <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
                Growing businesses and institutions ready to leap into the next digital era.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-24 px-6 md:px-8 bg-black relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">

          {/* Section Headers */}
          <ScrollReveal className="text-center mb-16 w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              Our Core Expertise
            </h2>
            <p className="text-zinc-400 text-lg text-center max-w-2xl mx-auto">
              Engineered solutions for web and mobile
            </p>
          </ScrollReveal>

          {/* Grid Container — 1 col mobile, 3 cols desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

            {/* Card 1: Web Development */}
            <ScrollReveal delay={0}>
              <Link href="/web-development" className="flex flex-col h-full group relative bg-white/5 backdrop-blur-md border border-purple-500/20 p-7 rounded-2xl hover:-translate-y-2 hover:border-blue-500/80 transition-all duration-300 ease-out cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="w-14 h-14 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 shrink-0">
                  <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Custom Web Development
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm flex-1">
                  We craft highly scalable and fast web applications designed specifically for your unique business or institutions requirements
                </p>
                <div className="mt-5 flex items-center justify-end gap-1 text-zinc-500 text-sm group-hover:text-blue-400 transition-colors duration-300">
                  <span>View Details</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            </ScrollReveal>

            {/* Card 2: App Building */}
            <ScrollReveal delay={120}>
              <Link href="/app-engineering" className="flex flex-col h-full group relative bg-white/5 backdrop-blur-md border border-purple-500/20 p-7 rounded-2xl hover:-translate-y-2 hover:border-blue-500/80 transition-all duration-300 ease-out cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="w-14 h-14 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20 shrink-0">
                  <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Advanced App Building
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm flex-1">
                  Transform your mobile presence with sleek and native-like experiences engineered for seamless performance across all devices.
                </p>
                <div className="mt-5 flex items-center justify-end gap-1 text-zinc-500 text-sm group-hover:text-purple-400 transition-colors duration-300">
                  <span>View Details</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            </ScrollReveal>

            {/* Card 3: Expert AI Engineering */}
            <ScrollReveal delay={240}>
              <Link href="/ai-tools" className="flex flex-col h-full group relative bg-white/5 backdrop-blur-md border border-purple-500/20 p-7 rounded-2xl hover:-translate-y-2 hover:border-blue-500/80 transition-all duration-300 ease-out cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="w-14 h-14 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 shrink-0">
                  <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Expert AI Engineering
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm flex-1">
                  Build learning and automation tools custom built to optimize workflows and enhance your product&apos;s capabilities.
                </p>
                <div className="mt-5 flex items-center justify-end gap-1 text-zinc-500 text-sm group-hover:text-blue-400 transition-colors duration-300">
                  <span>View Details</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Contact Banner Section */}
      <section className="w-full relative z-10 bg-gradient-to-r from-black via-slate-900 to-blue-950 py-24 px-6 md:px-8 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
            Ready to build your vision with Nocturne?
          </h2>
          
          <form className="w-full max-w-md flex flex-col sm:flex-row gap-4 justify-center items-center" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full sm:w-auto flex-1 bg-black/50 border border-white/10 rounded-full py-4 px-6 text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 backdrop-blur-sm"
              required
            />
            <button 
              type="submit"
              className="w-full sm:w-auto whitespace-nowrap px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer is now global via layout.tsx */}

    </div>
  );
}
