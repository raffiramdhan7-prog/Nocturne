import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nocturne | Premium Web Development",
  description: "Nocturne transforms digital visions into reality through premium web development and uncompromising performance.",
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
        {children}
      </body>
    </html>
  );
}
