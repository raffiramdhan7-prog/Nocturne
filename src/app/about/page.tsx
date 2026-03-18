import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "Tentang Kami | Nocturne Indonesia Creative Agency",
  description: "Pelajari lebih lanjut tentang visi, misi, dan nilai-nilai Nocturne Indonesia dalam membangun ekosistem digital kelas dunia. Kami adalah agen perubahan untuk digitalisasi.",
  keywords: ["Tentang Nocturne", "Visi Misi Nocturne", "Agensi Digital Indonesia", "Creative Engineering"],
};

export default function Page() {
  return <AboutContent />;
}
