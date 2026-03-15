"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col selection:bg-blue-500/30 relative">
      {/* Animated Aurora Blobs (The 'Fuel' Effect) */}
      <div className="absolute top-0 inset-x-0 h-screen overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-[#1e3a8a] rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob" />
        <div className="absolute top-[30%] right-[20%] w-[600px] h-[600px] bg-[#581c87] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-blob-reverse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Navigation -> First element stagger: 100ms delay */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-50 opacity-0 animate-fade-up-100">
        <div className="font-bold text-2xl tracking-tighter cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          NOCTURNE<span className="text-blue-500">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          <button 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }} 
            className="hover:text-white transition-colors duration-300"
          >
            Services
          </button>
          <Link href="#work" className="hover:text-white transition-colors duration-300">Work</Link>
          <Link href="#about" className="hover:text-white transition-colors duration-300">About</Link>
        </div>
        <button className="hidden md:block text-sm font-medium border border-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-900 transition-colors duration-300">
          Contact Us
        </button>
      </nav>

      {/* Main Hero Section */}
      <main className="min-h-screen flex flex-col items-center justify-center px-6 md:px-8 pb-32 relative overflow-hidden">
        <div className="z-10 text-center max-w-4xl w-full">
          {/* Headline -> Second element stagger: 300ms delay */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 opacity-0 animate-fade-up-300">
            We Code <br className="md:hidden" />
            {/* The 'Power' Effect moving gradient */}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#3b82f6,#8b5cf6,#3b82f6)] bg-[length:200%_auto] animate-gradient-flow">
              The Future.
            </span> <br />
            In The Dark.
          </h1>

          {/* Sub-headline -> Third element stagger: 500ms delay */}
          <p className="mt-8 mb-12 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up-500">
            Nocturne transforms digital visions into reality through premium web
            development and uncompromising performance.
          </p>

          {/* Call-to-Action Buttons -> Fourth element stagger: 700ms delay */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fade-up-700">
            {/* Enhanced Button Pulse on Primary Button */}
            <button className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] animate-pulse-glow hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 ease-out transform hover:-translate-y-1">
              Start a Project
            </button>
            
            <button className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white relative group overflow-hidden border border-blue-500/30 hover:border-blue-500/80 transition-all duration-300 ease-out">
              <span className="relative z-10">Our Portfolio</span>
              <div className="absolute inset-0 bg-blue-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>
          </div>
        </div>

        {/* Decorative subtle grid or lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />
      </main>

      {/* Services Section */}
      <section id="services" className="w-full py-24 px-6 md:px-8 bg-black relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* Section Headers */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Our Core Expertise
          </h2>
          <p className="text-zinc-400 text-lg text-center mb-16 max-w-2xl">
            Precision-engineered solutions for web and mobile.
          </p>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {/* Card 1: Web Development */}
            <Link href="/web-development" className="block group relative bg-white/5 backdrop-blur-md border border-purple-500/20 p-10 rounded-2xl hover:-translate-y-2 hover:border-blue-500/80 transition-all duration-300 ease-out cursor-pointer overflow-hidden">
              {/* Subtle inner glow effect on hover */}
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="w-14 h-14 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                Custom Web Development
                <svg className="w-5 h-5 text-blue-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                We craft highly scalable and lightning-fast web applications designed specifically for your unique business requirements. Our team leverages modern frameworks and robust architectures to ensure optimal performance.
              </p>
            </Link>

            {/* Card 2: App Engineering */}
            <Link href="/app-engineering" className="block group relative bg-white/5 backdrop-blur-md border border-purple-500/20 p-10 rounded-2xl hover:-translate-y-2 hover:border-blue-500/80 transition-all duration-300 ease-out cursor-pointer overflow-hidden">
              {/* Subtle inner glow effect on hover */}
              <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="w-14 h-14 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20">
                <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                Advanced App Engineering
                <svg className="w-5 h-5 text-purple-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Transform your mobile presence with sleek and native-like experiences engineered for seamless performance across all devices. We focus on intuitive interfaces and deep ecosystem integrations.
              </p>
            </Link>
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

      {/* Professional Footer */}
      <footer className="w-full bg-black border-t border-white/10 pt-20 pb-10 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Identity */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="font-bold text-3xl tracking-tighter cursor-pointer text-white">
              NOCTURNE<span className="text-blue-500">.</span>
            </Link>
            <p className="text-zinc-400 max-w-xs leading-relaxed">
              Engineering premium digital experiences in the dark.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-semibold text-lg mb-2">Explore</h4>
            <button onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-zinc-500 hover:text-white transition-colors duration-300 text-left w-fit cursor-pointer">
              Services
            </button>
            <Link href="#projects" className="text-zinc-500 hover:text-white transition-colors duration-300 w-fit">
              Projects
            </Link>
            <Link href="#privacy-policy" className="text-zinc-500 hover:text-white transition-colors duration-300 w-fit">
              Privacy Policy
            </Link>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-semibold text-lg mb-2">Connect</h4>
            
            <a href="mailto:raffiramdhan7@gmail.com" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 rounded-full bg-blue-500/5 border border-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <span className="text-zinc-400 group-hover:text-white transition-colors duration-300">raffiramdhan7@gmail.com</span>
            </a>

            <a href="tel:+6281352920853" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 rounded-full bg-purple-500/5 border border-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/10 group-hover:border-purple-500/30 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300">
                <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.077-7.077l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <span className="text-zinc-400 group-hover:text-white transition-colors duration-300">+62 813 5292 0853</span>
            </a>

          </div>
        </div>

        {/* Bottom Bar Container */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col items-center">
          <p className="text-zinc-500 text-sm md:text-base text-center">
            © 2026 Nocturne Web Development. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
