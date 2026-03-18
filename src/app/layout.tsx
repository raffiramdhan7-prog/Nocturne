import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nocturne Indonesia | Premium Web Development & Digital Ecosystems",
  description:
    "Nocturne is a digital architecture agency. Jasa pembuatan website premium, web development, dan AI engineering untuk ekosistem digital bisnis Anda. Buat website profesional sekarang.",
  keywords: [
    "Nocturne Indonesia",
    "Bikin Website",
    "Pembuatan Website",
    "Buat Website",
    "Web Development Agency",
    "Digital Ecosystem",
    "Jasa Bikin Web",
  ],
  openGraph: {
    title: "Nocturne Indonesia | Premium Web Development & Digital Ecosystems",
    description:
      "Nocturne is a digital architecture agency. Jasa pembuatan website premium, web development, dan AI engineering untuk ekosistem digital bisnis Anda. Buat website profesional sekarang.",
    type: "website",
    siteName: "Nocturne",
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
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
