"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { usePathname } from "next/navigation";

export default function ContactForm() {
  const pathname = usePathname();
  // Safe check for pathname (can be null during SSR fallback in some cases)
  const isIndo = pathname ? pathname.startsWith("/id") : false;
  
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    const templateID = isIndo ? "template_1dqqmuo" : "template_ori6c5j";

    emailjs
      .send(
        "service_fszgypd",
        templateID,
        { user_email: email },
        "GtBZxTLEr2E5EQJ5k"
      )
      .then(
        () => {
          setEmail("");
          setStatus("success");
          // Reset status after 5 seconds
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("error");
          alert(isIndo ? "Gagal mengirim pesan." : "Failed to send message.");
          setTimeout(() => setStatus("idle"), 5000);
        }
      );
  };

  const getButtonText = () => {
    if (status === "loading") return isIndo ? "Mengirim..." : "Sending...";
    if (status === "success") return isIndo ? "Terkirim!" : "Sent!";
    return isIndo ? "Kirim Pesan" : "Send Message";
  };

  const getPlaceholderText = () => {
    return isIndo ? "Masukkan alamat email Anda" : "Enter your email address";
  };

  return (
    <form id="nocturne-form" className="w-full max-w-md flex flex-col sm:flex-row gap-4 justify-center items-center" onSubmit={handleSubmit}>
      <input
        id="user_email"
        name="user_email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={getPlaceholderText()}
        className="w-full sm:w-auto flex-1 bg-black/50 border border-white/10 rounded-full py-4 px-6 text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 backdrop-blur-sm"
        required
        disabled={status === "loading" || status === "success"}
      />
      <button
        id="submit-btn"
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="w-full sm:w-auto whitespace-nowrap px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none min-w-[160px]"
      >
        {getButtonText()}
      </button>
    </form>
  );
}
