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
          style={{ willChange: "transform, opacity" }}
        >
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-white">
            Membangun{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#3b82f6,#8b5cf6,#3b82f6,#8b5cf6)] bg-[length:300%_auto] animate-gradient-flow">
              ekosistem digital
            </span>{" "}
            yang sesuai untuk Anda.
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-white/80 max-w-3xl">
            Nocturne adalah agensi arsitektur digital dan rekayasa kreatif yang merancang dan membangun ekosistem digital yang imersif, tangguh, dan berkelanjutan untuk masa depan
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-6 md:px-12 max-w-7xl mx-auto mt-24">
        <div className="md:col-span-3">
          <div className="md:sticky md:top-24">
            <h2 className="text-2xl font-bold text-white">Tujuan Kami</h2>
          </div>
        </div>
        <div className="md:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Teknologi Tingkat Tinggi yang Aksesibel
              </h3>
              <p className="text-white/70 leading-relaxed">
                Kami percaya bahwa transformasi digital tingkat tinggi tidak seharusnya hanya dinikmati oleh segelintir orang; hal ini harus bisa diakses oleh siapa saja. Dengan mendisrupsi harga pasar tradisional tanpa mengorbankan integritas teknis, Nocturne membuka pintu bagi semua orang untuk memiliki ekosistem digital berkelas dunia.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Pendorong Evolusi Digital
              </h3>
              <p className="text-white/70 leading-relaxed">
                Nocturne beroperasi sebagai agen perubahan. Kami berdedikasi untuk mempercepat digitalisasi di negara-negara berkembang, dimulai dari Asia Tenggara, untuk memastikan ekonomi dan institusi lokal mampu mencapai daya saing global.
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Fokus Pemberdayaan Manusia
              </h3>
              <p className="text-white/70 leading-relaxed">
                Di era digital yang berubah cepat, sekadar "hadir secara online" tidaklah cukup. Anda perlu tahu bagaimana mesin digital Anda bekerja. Kami tidak sekadar memberikan produk jadi; kami memastikan mitra kami benar-benar memahami bagaimana ekosistem digital tersebut dibangun untuk mereka.
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
            <h2 className="text-2xl font-bold text-white">Nilai-Nilai Kami</h2>
          </div>
        </div>
        <div className="md:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Bertindak demi kebaikan global
              </h3>
              <p className="text-white/70 leading-relaxed">
                Segala hal yang kami bangun dirancang untuk membantu orang-orang meraih kesuksesan dalam jangka panjang. Kami tidak takut mengambil langkah besar untuk memastikan teknologi kami benar-benar membawa dampak positif. Karena dunia bergerak cepat menuju masa depan digital, kami merasa bertanggung jawab untuk membuat transisi tersebut berjalan lancar dan sukses bagi semua orang.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Berakar pada kerendahan hati, kepedulian dan kejujuran
              </h3>
              <p className="text-white/70 leading-relaxed">
                Nocturne adalah agensi yang menjunjung tinggi kepercayaan. Kami percaya bahwa ekosistem digital yang paling tepat hanya bisa dibangun di atas fondasi kerendahan hati dan kejujuran. Kami berkomunikasi secara langsung dan transparan, menyingkirkan bahasa marketing yang berlebihan untuk fokus pada apa yang benar-benar efektif.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
