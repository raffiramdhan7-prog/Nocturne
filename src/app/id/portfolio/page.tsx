import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio Proyek Digital | Nocturne Indonesia",
  description: "Lihat koleksi proyek desain web, aplikasi mobile, dan solusi AI yang telah kami kerjakan untuk partner kami. Bukti kualitas creative engineering kami.",
  keywords: ["Portfolio Web Design", "Proyek Nocturne Indonesia", "Hasil Kerja Agensi Digital", "Digital Ecosystem Portfolio"],
};

export default function Page() {
  return <PortfolioContent />;
}
