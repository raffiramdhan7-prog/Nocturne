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
  metadataBase: new URL('https://nocturneindonesia.com'),
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
    url: "https://nocturneindonesia.com",
    type: "website",
    siteName: "Nocturne Indonesia",
    images: [
      {
        url: "https://nocturneindonesia.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nocturne Indonesia - Creative Engineering Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nocturne Indonesia | Jasa Bikin Website & Digital Ecosystem",
    description: "Nocturne Indonesia adalah agensi creative engineering. Kami melayani jasa pembuatan website, app building, dan AI engineering.",
    images: ["https://nocturneindonesia.com/og-image.png"],
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
