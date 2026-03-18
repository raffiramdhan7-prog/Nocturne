"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pb-24">
      <div className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-white">
            Build{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#3b82f6,#8b5cf6,#3b82f6,#8b5cf6)] bg-[length:300%_auto] animate-gradient-flow">
              digital ecosystems
            </span>{" "}
            suited for you.
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-white/80 max-w-3xl">
            Nocturne is a digital architecture and creative engineering agency. We’re making immersive, resilient and sustainable digital ecosystems.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-6 md:px-12 max-w-7xl mx-auto mt-24">
        <div className="md:col-span-3">
          <div className="md:sticky md:top-24">
            <h2 className="text-2xl font-bold text-white">Our Purpose</h2>
          </div>
        </div>
        <div className="md:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Accessible High End Technology
              </h3>
              <p className="text-white/70 leading-relaxed">
                We believe that high end digital transformation should not be for a privileged one, it has to be accessible for everyone. By disrupting traditional market pricing without compromising technical integrity, Nocturne opens the door for everyone to own world class digital ecosystems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Catalyzing Digital Evolution.
              </h3>
              <p className="text-white/70 leading-relaxed">
                Nocturne operates as an agent of change. We are dedicated to accelerating digitalization in developing nations, starting with Southeast Asia, to ensure local economies and institutions reach global competitiveness.
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-3 text-white">
                People Empowerment Focus.
              </h3>
              <p className="text-white/70 leading-relaxed">
                In a fast shifting digital era, being online isn’t enough. You need to know how your digital engine runs. We don’t just deliver a product, Instead we ensure our partners actually understand how the ecosystems were built for them.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 max-w-7xl mx-auto py-16">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="md:col-span-3">
          <div className="md:sticky md:top-24">
            <h2 className="text-2xl font-bold text-white">Our Value</h2>
          </div>
        </div>
        <div className="md:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Act for the global good.
              </h3>
              <p className="text-white/70 leading-relaxed">
                Everything we build is designed to help people win in the long run. We aren’t afraid to take big steps to make sure our technology truly does good. Since the world is moving fast toward a digital future, we feel responsible for making that change smooth and successful for everyone.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Be Humble, Helpful and Honest.
              </h3>
              <p className="text-white/70 leading-relaxed">
                Nocturne is a high trust agency. We believe that the suitest digital ecosystems can only be built on a foundation of humbleness and honesty. We communicate directly and transparently, stripping away the marketing fluff to focus on what actually works. Even in disagreement, we assume good intentions, knowing that the best ideas are often forged through honest friction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
