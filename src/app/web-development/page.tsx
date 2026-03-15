import Link from "next/link";

export default function WebDevelopmentPricing() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col selection:bg-blue-500/30 relative">
      {/* Reused Navigation */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-50">
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

      {/* Main Pricing Content */}
      <main className="flex-1 flex flex-col items-center px-6 md:px-8 pt-20 pb-32 relative z-10 w-full">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Web Development Packages
          </h1>
          <p className="text-xl text-zinc-400">
            Select the perfect tier for your digital presence.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 w-full max-w-5xl">
          
          {/* Card 1: Premium Package */}
          <div className="relative bg-white/5 backdrop-blur-md border border-purple-500/20 p-10 rounded-3xl flex flex-col hover:border-blue-500/40 transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-2">Premium Package</h3>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white tracking-tight">Rp 300.000</span>
            </div>
            
            <ul className="space-y-5 mb-10 flex-1">
              {[
                'Landing page (Up to 10 pages)',
                'Basic SEO',
                'Free basic domain',
                'Free entry hosting (1 GB)',
                'Free 5 images editing & 1 logo'
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-4 px-6 rounded-full font-semibold text-white border border-blue-500/50 hover:bg-blue-500/10 transition-colors duration-300">
              Choose Premium
            </button>
          </div>

          {/* Card 2: Exclusive Package (Highlighted) */}
          <div className="relative bg-white/5 backdrop-blur-md border border-blue-500/50 p-10 rounded-3xl flex flex-col md:scale-105 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-blue-500/5 rounded-3xl pointer-events-none" />
            
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
              Recommended
            </div>

            <h3 className="text-2xl font-bold mb-2">Exclusive Package</h3>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white tracking-tight">Rp 375.000</span>
            </div>
            
            <ul className="space-y-5 mb-10 flex-1 relative z-10">
              {[
                'Fullstack Website (Unlimited pages)',
                'Advanced SEO',
                'Free popular domain (.com, .net, .id)',
                'Free small unlimited hosting',
                'Free 10 images editing & 1 logo'
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="relative z-10 w-full py-4 px-6 rounded-full font-semibold text-white bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300 transform hover:-translate-y-1">
              Choose Exclusive
            </button>
          </div>

        </div>
      </main>

      {/* Decorative Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_30%,transparent_100%)] pointer-events-none z-0" />
    </div>
  );
}
