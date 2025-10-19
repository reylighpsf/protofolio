/**
 * About Section - Modern responsive design with animations and feature cards
 */
import { Code2, Palette, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const features = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Web Development",
      description: "Mengembangkan aplikasi web modern dengan teknologi terkini",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Mendesain interface yang menarik dan user-friendly",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Problem Solving",
      description: "Analisis dan solusi untuk tantangan pemrograman",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "Berkolaborasi dalam tim untuk mencapai tujuan bersama",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-800 relative overflow-hidden"
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
            Tentang{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Saya
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
          >
            Mahasiswa Teknik Informatika yang bersemangat dalam dunia
            pengembangan web dan teknologi.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio + Skills */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Bio Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-lg hover:shadow-cyan-500/10 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-4">
                Perjalanan Saya
              </h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                Saya adalah mahasiswa Teknik Informatika semester 5 di Universitas Negeri Surabaya,
                saat ini sedang menjalani program magang di bidang pengembangan web modern.
              </p>
              <p className="text-white/70 leading-relaxed">
                Saya terus memperdalam kemampuan di bidang pemrograman dan desain antarmuka
                untuk berkontribusi di dunia teknologi profesional.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                "JavaScript",
                "React",
                "TypeScript",
                "HTML/CSS",
                "Tailwind CSS",
                "Node.js",
                "Git",
                "Figma",
                "PHP",
                "MySQL",
                "Python",
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm text-white/80 px-4 py-2 rounded-full border border-white/20 text-sm hover:bg-cyan-500/20 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, rotateX: 3 }}
                transition={{ type: "spring", stiffness: 250, damping: 12 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 group cursor-pointer"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-white font-semibold mb-2">
                  {feature.title}
                </h4>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
