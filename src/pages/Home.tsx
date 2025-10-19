import React, { useState, useEffect } from 'react';
import { 
  Mail, Github, Linkedin, Download, Code, Palette, Database, ExternalLink, 
  Menu, X, Award, Briefcase, GraduationCap, ChevronRight, ArrowUp, Send, 
  CheckCircle, AlertCircle, BookOpen, Users, Target
} from 'lucide-react';

import profileImg from '../assets/images/profilesaya.png';
import heroImg from '../assets/images/profilesayautama.png';

export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      id: '1',
      title: 'Sistem Informasi Akademik',
      description: 'Aplikasi manajemen akademik untuk universitas dengan fitur pendaftaran mahasiswa, jadwal kuliah, dan nilai',
      technologies: ['Laravel', 'MySQL', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      github: 'https://github.com/reylighpsf',
      category: 'Web Development'
    },
    {
      id: '2',
      title: 'E-Learning Platform',
      description: 'Platform pembelajaran online dengan video courses, quiz interaktif, dan tracking progress',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
      github: 'https://github.com/reylighpsf',
      category: 'Web Development'
    },
    {
      id: '3',
      title: 'Mobile Attendance App',
      description: 'Aplikasi absensi mobile dengan GPS tracking dan face recognition untuk kehadiran mahasiswa',
      technologies: ['Flutter', 'Firebase', 'ML Kit'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      github: 'https://github.com/reylighpsf',
      category: 'Mobile Development'
    },
    {
      id: '4',
      title: 'Inventory Management System',
      description: 'Sistem manajemen inventori dengan fitur stock tracking, reporting, dan notifikasi stok menipis',
      technologies: ['PHP', 'MySQL', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      github: 'https://github.com/reylighpsf',
      category: 'Web Development'
    }
  ];

  const skills = [
    { name: 'Web Development', icon: <Code className="w-6 h-6" />, level: 85, color: 'from-blue-500 to-cyan-500' },
    { name: 'Mobile Development', icon: <Palette className="w-6 h-6" />, level: 75, color: 'from-purple-500 to-pink-500' },
    { name: 'Database Management', icon: <Database className="w-6 h-6" />, level: 80, color: 'from-green-500 to-emerald-500' }
  ];

  const experience = [
    {
      id: '1',
      title: 'Program Studi Magang',
      company: 'Universitas Negeri Surabaya',
      period: 'Semester 5 - Sekarang',
      description: 'Mengikuti program magang sebagai bagian dari kurikulum kampus, mengembangkan aplikasi web dan mobile untuk kebutuhan industri'
    },
    {
      id: '2',
      title: 'Mahasiswa Teknik Informatika',
      company: 'Universitas Negeri Surabaya',
      period: '2022 - Sekarang',
      description: 'Menempuh pendidikan S1 Teknik Informatika dengan fokus pada Software Engineering dan Web Development'
    }
  ];

  const education = [
    {
      id: 'edu1',
      institution: 'Universitas Negeri Surabaya',
      degree: 'Sarjana Teknik Informatika (S1)',
      period: '2022 - Sekarang',
      description: 'Menempuh pendidikan di Program Studi Teknik Informatika dengan fokus pada Software Engineering, Web Development, dan Mobile Development. Saat ini sedang menjalani semester 5 dengan program studi magang sebagai bagian dari kurikulum.',
      tags: ['Software Engineering', 'Web Development', 'Mobile Development']
    },
    {
      id: 'edu2',
      institution: 'SMA NEGERI 2 MAGETAN',
      degree: 'Jurusan IPA (ILMU PENGETAHUAN ALAM)',
      period: '2019 - 2022',
      description: 'Menempuh pendidikan di bangu menengah keatas dengan baik.',
      tags: ['Memuaskan']
    }
  ];

  const technologies = [
    'HTML/CSS', 'JavaScript', 'React', 'PHP', 'Laravel', 
    'MySQL', 'MongoDB', 'Flutter', 'Firebase', 'Git'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
      setShowScrollTop(scrollTop > 300);

      // Update active section
      const sections = ['home', 'about', 'services', 'skills', 'education', 'experience', 'work', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    alert('CV akan diunduh. Pastikan file CV sudah tersedia di server Anda.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 flex flex-col">
        {/* Profile Section */}
        <div className="p-8 text-center border-b border-gray-100">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <img
              src={profileImg}
              alt="Muhammad Fathur Rochman"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Muhammad Fathur Rochman</h1>
          <p className="text-blue-600 font-medium">MAHASISWA</p>
          <p className="text-gray-600 text-sm">DI UNIVERSITAS NEGERI SURABAYA</p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto py-6">
          {[
            { id: 'home', label: 'HOME' },
            { id: 'about', label: 'ABOUT' },
            { id: 'services', label: 'SERVICES' },
            { id: 'skills', label: 'SKILLS' },
            { id: 'education', label: 'EDUCATION' },
            { id: 'experience', label: 'EXPERIENCE' },
            { id: 'work', label: 'WORK' },
            { id: 'contact', label: 'CONTACT' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block px-8 py-3 text-sm font-medium transition-all ${
                activeSection === item.id
                  ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 text-center text-xs text-gray-500">
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-80">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Saya adalah<br />
                  <span className="text-gray-800">seorang Mahasiswa</span>
                </h2>
                <button
                  onClick={handleDownloadCV}
                  className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium rounded-none hover:bg-gray-800 transition-all shadow-lg"
                >
                  LIHAT PORTFOLIO
                  <ExternalLink className="w-5 h-5 ml-2" />
                </button>
              </div>

              <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <img
                  src={heroImg}
                  alt="Portfolio Hero"
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Slide Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
            <button className="w-3 h-3 rounded-full bg-gray-400"></button>
            <button className="w-3 h-3 rounded-full bg-blue-600"></button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Tentang Saya</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Saya adalah mahasiswa semester 5 di Universitas Negeri Surabaya, Program Studi Teknik Informatika. 
                  Saat ini sedang menjalani program studi magang sebagai bagian dari kurikulum akademik.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Memiliki passion yang besar dalam bidang pengembangan web dan mobile. Aktif mempelajari 
                  teknologi-teknologi terbaru dan mengimplementasikannya dalam berbagai proyek.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <p className="text-gray-500 mb-2">Nama:</p>
                    <p className="font-semibold text-gray-900">Muhammad Fathur Rochman</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-2">Email:</p>
                    <p className="font-semibold text-gray-900">rochmanf466@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-2">Universitas:</p>
                    <p className="font-semibold text-gray-900">UNESA</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-2">Status:</p>
                    <p className="font-semibold text-gray-900">Mahasiswa Aktif</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Akademik</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <GraduationCap className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Program Studi</p>
                      <p className="text-gray-600">Teknik Informatika</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <BookOpen className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Semester</p>
                      <p className="text-gray-600">Semester 5</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Target className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Program</p>
                      <p className="text-gray-600">Studi Magang</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Fokus Keahlian</p>
                      <p className="text-gray-600">Software Engineering & Web Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Berbagai layanan pengembangan software yang saya tawarkan
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code className="w-12 h-12" />,
                  title: 'Web Development',
                  description: 'Pembuatan website modern dan responsive dengan teknologi terkini seperti React, Laravel, dan PHP'
                },
                {
                  icon: <Palette className="w-12 h-12" />,
                  title: 'Mobile Development',
                  description: 'Pengembangan aplikasi mobile cross-platform menggunakan Flutter dengan performa optimal'
                },
                {
                  icon: <Database className="w-12 h-12" />,
                  title: 'Database Design',
                  description: 'Perancangan dan implementasi database yang efisien dengan MySQL dan MongoDB'
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
                >
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white">
          <div className="container mx-auto px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Keahlian</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Teknologi dan tools yang saya kuasai
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8 mb-12">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-600 text-white rounded-lg mr-4">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-gray-900">{skill.name}</span>
                          <span className="text-blue-600 font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies & Tools</h3>
                <div className="grid grid-cols-5 gap-4">
                  {technologies.map((tech) => (
                    <div 
                      key={tech}
                      className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md hover:scale-105 transition-all"
                    >
                      <span className="font-medium text-gray-700 text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-50">
          <div className="container mx-auto px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Pendidikan</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Riwayat pendidikan formal
              </p>
            </div>
        
            <div className="max-w-4xl mx-auto space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-600"
                >
                  <div className="flex items-start">
                    <GraduationCap className="w-12 h-12 text-blue-600 mr-6 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {edu.institution}
                          </h3>
                          <p className="text-lg font-semibold text-blue-600 mb-2">
                            {edu.degree}
                          </p>
                        </div>
                        <span className="text-gray-500 font-medium whitespace-nowrap">{edu.period}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {edu.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-white">
          <div className="container mx-auto px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Pengalaman</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Pengalaman akademik dan profesional
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {experience.map((exp) => (
                <div 
                  key={exp.id}
                  className="bg-gradient-to-r from-white to-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border-l-4 border-blue-600"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    </div>
                    <span className="text-gray-500 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-lg font-semibold text-blue-600 mb-3">{exp.company}</p>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work/Projects Section */}
        <section id="work" className="py-20 bg-gray-50">
          <div className="container mx-auto px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Projects</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Beberapa project yang telah saya kerjakan
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View on GitHub
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Saya</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Mari terhubung dan berkolaborasi!
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
                  <div className="space-y-6">
                    <a 
                      href="mailto:rochmanf466@gmail.com"
                      className="flex items-center group hover:bg-white p-4 rounded-lg transition-all"
                    >
                      <div className="p-3 bg-blue-600 text-white rounded-lg mr-4">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium text-gray-900 group-hover:text-blue-600">
                          rochmanf466@gmail.com
                        </p>
                      </div>
                    </a>

                    <a 
                      href="https://github.com/reylighpsf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center group hover:bg-white p-4 rounded-lg transition-all"
                    >
                      <div className="p-3 bg-gray-900 text-white rounded-lg mr-4">
                        <Github className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">GitHub</p>
                        <p className="font-medium text-gray-900 group-hover:text-blue-600">
                          github.com/reylighpsf
                        </p>
                      </div>
                    </a>

                    <div className="flex items-center group hover:bg-white p-4 rounded-lg transition-all">
                      <div className="p-3 bg-green-600 text-white rounded-lg mr-4">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Universitas</p>
                        <p className="font-medium text-gray-900">
                          Universitas Negeri Surabaya
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-4">Mari Berkolaborasi!</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Saya terbuka untuk diskusi mengenai project baru, magang, atau kolaborasi 
                    dalam pengembangan software. Jangan ragu untuk menghubungi saya!
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Tersedia untuk project freelance</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Terbuka untuk peluang magang</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Siap untuk kolaborasi project</span>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <a 
                      href="https://github.com/reylighpsf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                      title="GitHub"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a 
                      href="mailto:rochmanf466@gmail.com"
                      className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                      title="Email"
                    >
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Download CV Button */}
              <div className="mt-12 text-center">
                <button
                  onClick={handleDownloadCV}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
          <div className="container mx-auto px-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Muhammad Fathur Rochman</h3>
                <p className="text-gray-400">
                  Mahasiswa Teknik Informatika yang passionate dalam pengembangan web dan mobile applications.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  {['Home', 'About', 'Skills', 'Work', 'Contact'].map((link) => (
                    <li key={link}>
                      <a 
                        href={`#${link.toLowerCase()}`}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/reylighpsf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:rochmanf466@gmail.com"
                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    title="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2024 Muhammad Fathur Rochman. All rights reserved. Made with ❤️ using React & Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 z-40"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}