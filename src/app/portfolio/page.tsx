"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-3xl md:text-5xl font-medium leading-tight text-white/90">
          Our lab is constantly engineering concepts that push the boundaries of what a{" "}
          <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#3b82f6,#8b5cf6,#3b82f6,#8b5cf6)] bg-[length:300%_auto]">
            digital ecosystem
          </span>{" "}
          can be.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
