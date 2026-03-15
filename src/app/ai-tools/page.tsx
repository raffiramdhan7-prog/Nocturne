import Link from "next/link";

export default function AIToolsComingSoon() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center relative overflow-hidden px-6 md:px-8 selection:bg-blue-500/30">
      
      {/* Refined Navigation Header */}
      <nav className="absolute top-0 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-50">
        <Link href="/" className="font-bold text-2xl tracking-tighter cursor-pointer">
          NOCTURNE<span className="text-blue-500">.</span>
        </Link>
      </nav>

      {/* Pulsing Background Glows */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-[130px] rounded-full animate-pulse-glow" />
        <div className="absolute w-[500px] h-[500px] bg-purple-700/10 blur-[150px] rounded-full mix-blend-screen" style={{ animation: 'pulse-glow 5s infinite alternate-reverse' }} />
      </div>

      <main className="z-10 flex flex-col items-center text-center max-w-2xl w-full">
        {/* Sparkles / AI Icon */}
        <div className="w-24 h-24 mb-10 text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)] animate-fade-up-100 opacity-0">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
          </svg>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 opacity-0 animate-fade-up-300 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Expert AI Tools
        </h1>

        {/* Sub-headline */}
        <h2 className="text-xl md:text-2xl font-medium tracking-[0.3em] text-white/80 mb-8 opacity-0 animate-fade-up-500">
          COMING SOON
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md mx-auto mb-12 opacity-0 animate-fade-up-700">
          We are architecting something intelligent in the dark.
          Our cutting-edge AI automation tools will launch shortly.
        </p>

        {/* Return Button */}
        <div className="opacity-0 animate-fade-up-700" style={{ animationDelay: '900ms' }}>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-purple-500/30 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 group"
          >
            <svg className="w-5 h-5 text-blue-400 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Return to Home
          </Link>
        </div>

      </main>

      {/* Decorative Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none z-0" />
    </div>
  );
}
