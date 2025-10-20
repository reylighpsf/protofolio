/**
 * Education Section - Displays academic background and achievements
 */
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Education() {
  const educationData = [
    {
      degree: "Teknik Informatika",
      institution: "Universitas Negeri Surabaya",
      period: "2021 - Sekarang",
      status: "Semester 5",
      description: "Fokus pada pengembangan perangkat lunak, algoritma, dan teknologi web.",
      achievements: [
        "IPK: 3.8/4.0",
        "Aktif dalam organisasi mahasiswa",
        "Magang di bidang pengembangan web"
      ]
    },
    {
      degree: "SMA Negeri 1 Surabaya",
      institution: "SMA Negeri 1 Surabaya",
      period: "2018 - 2021",
      status: "Lulus",
      description: "Jurusan IPA dengan fokus pada matematika dan fisika.",
      achievements: [
        "Nilai rata-rata: 85+",
        "Juara 2 Olimpiade Matematika Kota",
        "Ketua OSIS"
      ]
    }
  ];

  const skills = [
    "Algoritma & Struktur Data",
    "Pemrograman Web",
    "Basis Data",
    "Sistem Operasi",
    "Jaringan Komputer",
    "Matematika Diskrit"
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-gray-800 via-gray-900/95 to-gray-950 relative overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Pendidikan{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              & Prestasi
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
          >
            Perjalanan akademik dan pencapaian yang membentuk fondasi karir saya di bidang teknologi.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-cyan-500/10 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="text-cyan-400 mt-1">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-4 text-white/60 text-sm mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full text-xs">
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-white/70 mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold flex items-center gap-2">
                        <Award className="h-4 w-4 text-yellow-400" />
                        Pencapaian
                      </h4>
                      <ul className="text-white/60 text-sm space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Skills & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Academic Skills */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-cyan-400" />
                Mata Kuliah Utama
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 * index }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm text-white/80 px-4 py-3 rounded-lg border border-white/20 text-sm hover:bg-cyan-500/20 hover:text-white transition-all duration-300 text-center"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Placeholder */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Award className="h-6 w-6 text-yellow-400" />
                Sertifikasi
              </h3>
              <p className="text-white/60 mb-4">
                Sertifikasi yang telah diperoleh dalam bidang teknologi dan pengembangan.
              </p>
              <div className="space-y-3">
                {[
                  "Belajar Dasar Pemrograman Web (Dicoding)",
                  "Cloud Computing (Google Cloud)",
                  "Responsive Web Design (freeCodeCamp)"
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white/80 text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
