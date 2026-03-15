import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function WebDevelopmentPricing() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col selection:bg-blue-500/30 relative">
      {/* Reused Navigation */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-4 flex justify-between items-center z-50 shrink-0">
        <Link href="/" className="font-bold text-2xl tracking-tighter cursor-pointer">
          NOCTURNE<span className="text-blue-500">.</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          <Link href="/#services" className="hover:text-white transition-colors duration-300">Services</Link>
          <Link href="/#work" className="hover:text-white transition-colors duration-300">Work</Link>
          <Link href="/#about" className="hover:text-white transition-colors duration-300">About</Link>
        </div>
        <button className="hidden md:block text-sm font-medium border border-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-900 transition-colors duration-300">
          Contact Us
        </button>
      </nav>

      {/* Main Pricing Content — compressed to fit one viewport on desktop */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-8 py-6 relative z-10 w-full">
        {/* Header Section */}
        <ScrollReveal className="text-center mb-8 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Web Development Packages
          </h1>
          <p className="text-base text-zinc-400">
            Select the perfect tier for your digital presence.
          </p>
        </ScrollReveal>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 w-full max-w-4xl">
          
          {/* Card 1: Premium Package */}
          <ScrollReveal delay={0} className="flex flex-col">
            <div className="relative bg-white/5 backdrop-blur-md border border-purple-500/20 p-7 rounded-3xl flex flex-col hover:border-blue-500/40 transition-colors duration-300 h-full">
              <h3 className="text-xl font-bold mb-1">Premium Package</h3>
              <div className="mb-5">
                <span className="text-4xl font-extrabold text-white tracking-tight">Rp 300.000</span>
              </div>
              
              <ul className="space-y-3 mb-6 flex-1">
                {[
                  'Landing page (Up to 10 pages)',
                  'Basic SEO',
                  'Free basic domain',
                  'Free entry hosting (1 GB)',
                  'Free 5 images editing & 1 logo'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-3 px-6 rounded-full font-semibold text-white border border-blue-500/50 hover:bg-blue-500/10 transition-colors duration-300 text-sm">
                Choose Premium
              </button>
            </div>
          </ScrollReveal>

          {/* Card 2: Exclusive Package (Highlighted) */}
          <ScrollReveal delay={150} className="flex flex-col">
            <div className="relative bg-white/5 backdrop-blur-md border border-blue-500/50 p-7 rounded-3xl flex flex-col md:scale-105 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] h-full">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-blue-500/5 rounded-3xl pointer-events-none" />
              
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                Recommended
              </div>

              <h3 className="text-xl font-bold mb-1">Exclusive Package</h3>
              <div className="mb-5">
                <span className="text-4xl font-extrabold text-white tracking-tight">Rp 375.000</span>
              </div>
              
              <ul className="space-y-3 mb-6 flex-1 relative z-10">
                {[
                  'Fullstack Website (Unlimited pages)',
                  'Advanced SEO',
                  'Free popular domain (.com, .net, .id)',
                  'Free small unlimited hosting',
                  'Free 10 images editing & 1 logo'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-300 font-medium text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="relative z-10 w-full py-3 px-6 rounded-full font-semibold text-white bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300 transform hover:-translate-y-1 text-sm">
                Choose Exclusive
              </button>
            </div>
          </ScrollReveal>

        </div>
      </main>

      {/* Decorative Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_30%,transparent_100%)] pointer-events-none z-0" />
    </div>
  );
}
