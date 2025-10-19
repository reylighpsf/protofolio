/**
 * About Section - Modern redesigned with cards and interactive elements
 */
import { Code2, Palette, Zap, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Web Development",
      description: "Mengembangkan aplikasi web modern dengan teknologi terkini"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Mendesain interface yang menarik dan user-friendly"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Problem Solving",
      description: "Analisis dan solusi untuk tantangan pemrograman"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "Berkolaborasi dalam tim untuk mencapai tujuan bersama"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tentang <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Saya</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Mahasiswa Teknik Informatika yang bersemangat dalam dunia pengembangan web dan teknologi
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Text */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Perjalanan Saya</h3>
                <p className="text-white/70 mb-4">
                  Saat ini saya adalah mahasiswa Teknik Informatika semester 5 di Universitas Negeri Surabaya 
                  yang sedang menjalani program magang. Saya memiliki ketertarikan yang besar dalam 
                  pengembangan web modern dan teknologi terkini.
                </p>
                <p className="text-white/70">
                  Melalui perkuliahan dan pengalaman magang, saya terus mengembangkan skill dalam 
                  pemrograman dan berharap dapat berkontribusi dalam industri teknologi.
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Node.js', 'Git', 'Figma', 'PHP', 'MySQL', 'Python'].map((skill) => (
                  <span 
                    key={skill}
                    className="bg-white/10 backdrop-blur-sm text-white/80 px-4 py-2 rounded-full border border-white/20 text-sm hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer"
                >
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                  <p className="text-white/60 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}