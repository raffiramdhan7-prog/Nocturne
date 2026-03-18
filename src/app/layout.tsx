import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nocturne Indonesia | Jasa Bikin Website & Digital Ecosystem",
  description:
    "Nocturne Indonesia adalah agensi creative engineering. Kami melayani jasa pembuatan website, app building, dan AI engineering untuk transformasi digital bisnis Anda. Buat website profesional sekarang.",
  keywords: [
    "Nocturne Indonesia",
    "Bikin Website",
    "Jasa Pembuatan Website",
    "Pembuatan Website",
    "Buat Website",
    "Web Development Agency",
    "Digital Ecosystem",
    "Jasa Bikin Web",
    "AI Engineering Indonesia"
  ],
  openGraph: {
    title: "Nocturne Indonesia | Jasa Bikin Website & Digital Ecosystem",
    description:
      "Nocturne Indonesia adalah agensi creative engineering. Kami melayani jasa pembuatan website, app building, dan AI engineering untuk transformasi digital bisnis Anda.",
    type: "website",
    siteName: "Nocturne Indonesia",
  },
  verification: {
    google: "google0ab1176c12c8e1f3.html",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased font-sans bg-black text-white`}
        suppressHydrationWarning
      >
        <JsonLd />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
