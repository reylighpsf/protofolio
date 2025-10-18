import React, { useState, useEffect, useCallback } from 'react';
import { 
  Mail, Github, Linkedin, Download, Code, Palette, Database, ExternalLink, 
  Menu, X, Award, Briefcase, GraduationCap, ChevronRight, ArrowUp, Send, 
  CheckCircle, AlertCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
}

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
}

export default function HomePage() {
  // State Management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });
  const [isScrolling, setIsScrolling] = useState(false);

  // Project Data
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Solusi e-commerce full-stack dengan payment gateway terintegrasi dan dashboard admin yang komprehensif',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      github: 'https://github.com/mfathurrochman/ecommerce',
      demo: 'https://example.com/ecommerce'
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Aplikasi produktivitas dengan real-time collaboration dan fitur kanban board',
      technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      github: 'https://github.com/mfathurrochman/task-app',
      demo: 'https://example.com/task-app'
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'Dashboard monitoring cuaca real-time dengan visualisasi data yang interaktif',
      technologies: ['React', 'API Integration', 'Charts.js'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
      github: 'https://github.com/mfathurrochman/weather',
      demo: 'https://example.com/weather'
    },
    {
      id: '4',
      title: 'Social Media Analytics',
      description: 'Platform analitik media sosial dengan machine learning insights',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      github: 'https://github.com/mfathurrochman/analytics',
      demo: 'https://example.com/analytics'
    },
    {
      id: '5',
      title: 'Healthcare Management',
      description: 'Sistem manajemen rumah sakit dengan appointment scheduling dan medical records',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      github: 'https://github.com/mfathurrochman/healthcare',
      demo: 'https://example.com/healthcare'
    },
    {
      id: '6',
      title: 'AI Chatbot Platform',
      description: 'Platform chatbot berbasis AI dengan natural language processing',
      technologies: ['Python', 'NLP', 'React', 'Docker'],
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
      github: 'https://github.com/mfathurrochman/chatbot',
      demo: 'https://example.com/chatbot'
    }
  ];

  const skills: Skill[] = [
    { name: 'Frontend Development', icon: <Code className="w-6 h-6" />, level: 95 },
    { name: 'UI/UX Design', icon: <Palette className="w-6 h-6" />, level: 88 },
    { name: 'Backend Development', icon: <Database className="w-6 h-6" />, level: 85 }
  ];

  const experience: Experience[] = [
    {
      id: '1',
      title: 'Senior Full-Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Memimpin tim development untuk berbagai proyek enterprise dengan metodologi Agile'
    },
    {
      id: '2',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Mengembangkan aplikasi web modern dengan React dan TypeScript'
    },
    {
      id: '3',
      title: 'Junior Developer',
      company: 'Startup Company',
      period: '2019 - 2020',
      description: 'Membangun fitur baru dan maintenance aplikasi existing'
    }
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 
    'PostgreSQL', 'Tailwind', 'Next.js', 'Docker'
  ];

  // Callbacks & Effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
      setShowScrollTop(scrollTop > 300);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setFormStatus({ type: 'error', message: 'Nama tidak boleh kosong' });
      return false;
    }
    if (!validateEmail(formData.email)) {
      setFormStatus({ type: 'error', message: 'Email tidak valid' });
      return false;
    }
    if (!formData.subject.trim()) {
      setFormStatus({ type: 'error', message: 'Subjek tidak boleh kosong' });
      return false;
    }
    if (!formData.message.trim()) {
      setFormStatus({ type: 'error', message: 'Pesan tidak boleh kosong' });
      return false;
    }
    return true;
  };

  const handleSubmitContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus({ type: 'loading', message: 'Mengirim pesan...' });

    try {
      // Ganti dengan endpoint API Anda
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: AbortSignal.timeout(10000) // 10 second timeout
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setFormStatus({ 
        type: 'success', 
        message: 'Pesan berhasil terkirim! Saya akan menghubungi Anda segera.' 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Auto hide success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: 'idle', message: '' });
      }, 5000);
    } catch (error) {
      console.error('Error:', error);
      setFormStatus({ 
        type: 'error', 
        message: 'Gagal mengirim pesan. Silakan coba lagi atau hubungi melalui email.' 
      });
    }
  };

  const handleDownloadCV = () => {
    try {
      // Ganti dengan URL CV yang sebenarnya
      const cvUrl = '/cv/Muhammad_Fathur_Rochman_CV.pdf';
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'Muhammad_Fathur_Rochman_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert('Gagal mengunduh CV. Silakan hubungi langsung via email.');
    }
  };

  const handleViewProjects = useCallback(() => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      setIsScrolling(true);
      projectsSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setIsScrolling(false), 1000);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeMenu = () => setIsMenuOpen(false);

  const parallaxOffset = {
    x: (mousePosition.x - window.innerWidth / 2) / 50,
    y: (mousePosition.y - window.innerHeight / 2) / 50
  };

  // Render Components
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Global Styles */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-from-top {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-in {
          animation: fade-in 0.3s ease-out, slide-in-from-top 0.3s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        html { 
          scroll-behavior: smooth;
        }
        ::-webkit-scrollbar { 
          width: 8px; 
        }
        ::-webkit-scrollbar-track { 
          background: #f1f1f1; 
        }
        ::-webkit-scrollbar-thumb { 
          background: #3b82f6; 
          border-radius: 4px; 
        }
        ::-webkit-scrollbar-thumb:hover { 
          background: #2563eb; 
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <a 
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              MFR Portfolio
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-in">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  onClick={closeMenu}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 min-h-screen flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 animate-slide-up">
              <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                👋 Halo, Selamat Datang!
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Saya{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Muhammad Fathur Rochman
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Full-Stack Developer & UI/UX Designer dengan passion untuk menciptakan 
                aplikasi web yang indah, fungsional, dan user-friendly. Berpengalaman 3+ tahun 
                dalam membangun solusi digital yang inovatif.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  onClick={handleDownloadCV}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
                <Button 
                  onClick={handleViewProjects}
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 flex items-center justify-center"
                >
                  Lihat Projects
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="https://github.com/mfathurrochman" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 bg-gray-900 text-white rounded-full hover:scale-110 transition-transform hover:bg-gray-800"
                  title="Visit GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/mfathurrochman" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform hover:bg-blue-700"
                  title="Visit LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:fathur.rochman@email.com"
                  aria-label="Email"
                  className="p-3 bg-red-500 text-white rounded-full hover:scale-110 transition-transform hover:bg-red-600"
                  title="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full max-w-md mx-auto">
                <div 
                  className="relative"
                  style={{
                    transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                  
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-2 bg-white rounded-full"></div>
                    <img 
                      src="https://pub-cdn.sider.ai/u/U09GHA636ZJ/web-coder/68f3620d394cd3cb5407ece0/resource/6f6d1bcf-d67d-4406-8142-2bb56718e11d.jpg" 
                      alt="Muhammad Fathur Rochman - Full-Stack Developer" 
                      className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] rounded-full object-cover shadow-2xl"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="absolute top-10 -left-4 bg-white p-3 rounded-xl shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                  <Award className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="absolute bottom-10 -right-4 bg-white p-3 rounded-xl shadow-lg animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Tentang Saya</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate developer dengan fokus pada kualitas kode dan user experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-6 animate-slide-up">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Saya adalah seorang full-stack developer dengan pengalaman 3+ tahun dalam membangun 
                aplikasi web modern. Saya memiliki keahlian khusus dalam React, TypeScript, dan Node.js, 
                serta passionate dalam menciptakan user interface yang intuitif dan menarik.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Selain technical skills, saya juga memiliki kemampuan problem-solving yang kuat dan 
                selalu eager untuk belajar teknologi baru. Saya percaya bahwa kombinasi antara 
                technical expertise dan creative thinking adalah kunci untuk menciptakan produk digital 
                yang outstanding.
              </p>

              {/* Skills */}
              <div className="grid gap-4 sm:gap-6 mt-8">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-blue-600 text-white rounded-lg">
                        {skill.icon}
                      </div>
                      <span className="ml-3 font-semibold text-gray-800 text-sm sm:text-base">
                        {skill.name}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 mt-1 block">
                      {skill.level}% Proficiency
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Technologies */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 shadow-lg animate-slide-up">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
                  Technologies & Tools
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {technologies.map((tech) => (
                    <div 
                      key={tech}
                      className="bg-white p-3 sm:p-4 rounded-lg text-center shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-default"
                      title={`Proficient in ${tech}`}
                    >
                      <span className="font-medium text-gray-700 text-sm sm:text-base">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 shadow-lg animate-slide-up">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-blue-600" />
                  Achievements
                </h3>
                <ul className="space-y-3">
                  {[
                    'Led 5+ successful enterprise projects',
                    'Certified React & Node.js Developer',
                    'Won 2 hackathon competitions',
                    'Open source contributor'
                  ].map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Pengalaman Kerja
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Journey karir saya dalam dunia software development
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {experience.map((exp, index) => (
              <div 
                key={exp.id}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-600 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
                  <div className="flex items-center">
                    <Briefcase className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {exp.title}
                    </h3>
                  </div>
                  <span className="text-sm sm:text-base text-gray-500 font-medium whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-base sm:text-lg font-semibold text-blue-600 mb-3">
                  {exp.company}
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Portfolio Projects
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Beberapa project terbaik yang menunjukkan skills dan pengalaman saya
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden bg-gray-200">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-3">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repository for ${project.title}`}
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      title="View on GitHub"
                    >
                      <Github className="w-5 h-5 text-gray-900" />
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo of ${project.title}`}
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-900" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-colors"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Hubungi Saya
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Tertarik untuk bekerja sama? Jangan ragu untuk menghubungi saya!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Informasi Kontak
              </h3>
              
              <div className="bg-white p-6 rounded-xl shadow-lg space-y-6">
                {[
                  {
                    icon: <Mail className="w-5 h-5" />,
                    label: 'Email',
                    value: 'fathur.rochman@email.com',
                    href: 'mailto:fathur.rochman@email.com',
                    bgClass: 'bg-blue-100 text-blue-600'
                  },
                  {
                    icon: <Github className="w-5 h-5" />,
                    label: 'GitHub',
                    value: 'github.com/mfathurrochman',
                    href: 'https://github.com/mfathurrochman',
                    bgClass: 'bg-gray-900 text-white'
                  },
                  {
                    icon: <Linkedin className="w-5 h-5" />,
                    label: 'LinkedIn',
                    value: 'linkedin.com/in/mfathurrochman',
                    href: 'https://linkedin.com/in/mfathurrochman',
                    bgClass: 'bg-blue-600 text-white'
                  }
                ].map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center group hover:bg-blue-50 p-3 rounded-lg transition-colors"
                  >
                    <div className={`p-3 ${contact.bgClass} rounded-lg group-hover:opacity-80 transition-opacity`}>
                      {contact.icon}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">{contact.label}</p>
                      <p className="text-gray-900 font-medium hover:text-blue-600">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white shadow-lg">
                <h4 className="font-bold text-lg mb-2">Open for Opportunities</h4>
                <p className="text-blue-100">
                  Saya terbuka untuk full-time positions, freelance projects, dan collaborations yang menarik!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl animate-slide-up">
              <form onSubmit={handleSubmitContact} className="space-y-6" noValidate>
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input 
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Nama Anda"
                    disabled={formStatus.type === 'loading'}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input 
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="email@example.com"
                    disabled={formStatus.type === 'loading'}
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek
                  </label>
                  <input 
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Perihal pesan Anda"
                    disabled={formStatus.type === 'loading'}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea 
                    id="message"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                    disabled={formStatus.type === 'loading'}
                  ></textarea>
                </div>

                {/* Status Message */}
                {formStatus.type !== 'idle' && (
                  <div className={`flex items-start gap-3 p-4 rounded-lg ${
                    formStatus.type === 'success' 
                      ? 'bg-green-50 text-green-800' 
                      : 'bg-red-50 text-red-800'
                  }`}>
                    {formStatus.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{formStatus.message}</p>
                  </div>
                )}

                {/* Submit Button */}
                <Button 
                  type="submit"
                  disabled={formStatus.type === 'loading'}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {formStatus.type === 'loading' ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      Kirim Pesan
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                MFR Portfolio
              </h3>
              <p className="text-gray-400 text-sm">
                Full-Stack Developer passionate about creating amazing digital experiences.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {['Home', 'About', 'Projects', 'Contact'].map((link) => (
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
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>UI/UX Design</li>
                <li>Consulting</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/mfathurrochman"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  title="Visit GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/mfathurrochman"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  title="Visit LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:fathur.rochman@email.com"
                  aria-label="Email"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  title="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Muhammad Fathur Rochman. All rights reserved. Made with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-40 animate-fade-in"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}