import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function StartProject() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30 relative">

      {/* Page Header */}
      <div className="text-center pt-12 pb-6 px-6 opacity-0 animate-fade-up-100">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Start a Project
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto">
          Choose the service that fits your vision.
        </p>
      </div>

      {/* ─────────────────────────────────────────
          SECTION A: Custom Web Development
      ───────────────────────────────────────── */}
      <section className="px-6 md:px-8 pt-16 pb-10 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <div className="text-center mb-10 opacity-0 animate-fade-up-300">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Custom Web Development
            </h2>
            <p className="text-zinc-400 text-base">
              Select the perfect tier for your digital presence.
            </p>
          </div>

          {/* Pricing cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-0 animate-fade-up-500">

            {/* Card 1: Premium */}
            <div className="relative bg-white/5 backdrop-blur-md border border-purple-500/20 p-8 rounded-3xl flex flex-col hover:border-blue-500/40 transition-all duration-300 group">
              <div className="absolute inset-0 bg-blue-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
              <h3 className="text-xl font-bold mb-1 text-white">Premium Package</h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white tracking-tight">Rp 300.000</span>
              </div>
              <ul className="space-y-3 mb-7 flex-1">
                {[
                  'Landing page (Up to 10 pages)',
                  'Basic SEO',
                  'Free basic domain',
                  'Free entry hosting (1 GB)',
                  'Free 5 images editing & 1 logo',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-6 rounded-full font-semibold text-white border border-blue-500/50 hover:bg-blue-500/10 transition-colors duration-300 text-sm">
                Choose Premium
              </button>
            </div>

            {/* Card 2: Exclusive (highlighted) */}
            <div className="relative bg-white/5 backdrop-blur-md border border-blue-500/50 p-8 rounded-3xl flex flex-col md:scale-105 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] group">
              <div className="absolute inset-0 bg-blue-500/5 rounded-3xl pointer-events-none" />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                Recommended
              </div>
              <h3 className="text-xl font-bold mb-1 text-white">Exclusive Package</h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white tracking-tight">Rp 375.000</span>
              </div>
              <ul className="space-y-3 mb-7 flex-1 relative z-10">
                {[
                  'Fullstack Website (Unlimited pages)',
                  'Advanced SEO',
                  'Free popular domain (.com, .net, .id)',
                  'Free small unlimited hosting',
                  'Free 10 images editing & 1 logo',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-300 font-medium text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <button className="relative z-10 w-full py-3 px-6 rounded-full font-semibold text-white bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300 transform hover:-translate-y-1 text-sm">
                Choose Exclusive
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="border-t border-white/5 mt-16" />
      </div>

      {/* ─────────────────────────────────────────
          SECTION B: Advanced App Building
      ───────────────────────────────────────── */}
      <section className="px-6 md:px-8 mt-16 pb-10 relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white/5 backdrop-blur-md border border-purple-500/20 p-10 md:p-14 rounded-3xl flex flex-col md:flex-row items-center gap-8 hover:border-purple-500/60 transition-all duration-300 group overflow-hidden">
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl" />
              {/* Ambient glow blob */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-700/20 rounded-full blur-[80px] pointer-events-none" />

              {/* Icon */}
              <div className="shrink-0 w-20 h-20 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Advanced App Building
                </h2>
                <p className="text-sm font-medium tracking-[0.3em] text-purple-300/80 mb-4">
                  COMING SOON
                </p>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base max-w-lg">
                  Transforming mobile presence with sleek, native-like experiences engineered for seamless performance.
                </p>
              </div>

              {/* Badge */}
              <div className="shrink-0 relative z-10">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  In Development
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─────────────────────────────────────────
          SECTION C: Expert AI Engineering
      ───────────────────────────────────────── */}
      <section className="px-6 md:px-8 mt-8 pb-24 relative z-10">
        <ScrollReveal delay={100}>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white/5 backdrop-blur-md border border-blue-500/20 p-10 md:p-14 rounded-3xl flex flex-col md:flex-row items-center gap-8 hover:border-blue-500/60 transition-all duration-300 group overflow-hidden">
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl" />
              {/* Ambient glow blob */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-700/20 rounded-full blur-[80px] pointer-events-none" />

              {/* Icon */}
              <div className="shrink-0 w-20 h-20 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Expert AI Engineering
                </h2>
                <p className="text-sm font-medium tracking-[0.3em] text-blue-300/80 mb-4">
                  COMING SOON
                </p>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base max-w-lg">
                  Cutting-edge machine learning tools to optimize your workflows and elevate your product&apos;s capabilities.
                </p>
              </div>

              {/* Badge */}
              <div className="shrink-0 relative z-10">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  In Development
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Decorative grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,#000_20%,transparent_100%)] pointer-events-none z-0" />
    </div>
  );
}
