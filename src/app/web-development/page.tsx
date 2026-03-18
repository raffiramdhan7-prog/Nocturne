import type { Metadata } from "next";
import WebDevContent from "./WebDevContent";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Custom | Nocturne Indonesia",
  description: "Solusi pembuatan website custom, landing page, dan sistem web kompleks dengan performa maksimal dan desain premium. Jasa bikin website terbaik di Indonesia.",
  keywords: ["Jasa Website Custom", "Bikin Landing Page", "Web Developer Indonesia", "Jasa Web Design"],
};

export default function Page() {
  return <WebDevContent />;
}
