/**
 * Projects Section - Modern card design with hover effects and gradients
 */
import { Button } from '../../components/ui/button';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import FindMyWork from '../../assets/images/FindMyWork.AI.png';
import Percetakan from '../../assets/images/PercetakanAkbar.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'FindMyWork.AI',
    description:
      'Platform pencocokan pekerjaan berbasis AI yang menganalisis CV pengguna untuk merekomendasikan lowongan kerja paling relevan menggunakan OpenAI dan algoritma pencocokan data canggih. Fitur-fiturnya meliputi pengunggahan CV, analisis berbasis AI, dan hasil pencarian kerja yang dipersonalisasi.',
    image: FindMyWork,
    technologies: ['Next.js', 'FastAPI', 'PostgreSQL', 'OpenAI API', 'Google Cloud Storage'],
    category: 'AI & Full Stack',
    demoUrl: 'https://findmywork.cloud',
    githubUrl: 'https://github.com/reylighpsf/FindMyWork.ai',
  },

    
  {
    id: 2,
    title: 'Website Percetakan dan Toko Alat Tulis',
    description: 
      'Website percetakan modern dan toko alat tulis online yang mendukung pemesanan produk, layanan cetak kustom, dan checkout online. Fitur termasuk katalog produk interaktif, filter kategori, keranjang belanja, preview cetak, manajemen stok, dan dashboard admin untuk pengelolaan produk serta pesanan.',
    image: Percetakan, 
    technologies: ['Next.js', 'Laravel', 'Postgresql', 'Tailwind CSS', 'Vercel', 'Midtrans / Stripe'],
    category: 'E-Commerce & Full Stack',
    demoUrl: 'https://github.com/reylighpsf/TokoAlatTulisOnline',
    githubUrl: 'https://github.com/reylighpsf/TokoAlatTulisOnline',
  }

];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden scroll-mt-20"
    >
      {/* Background Blur Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proyek{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Unggulan
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Kumpulan karya terbaru saya yang menampilkan keterampilan dan kreativitas saya
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.demoUrl || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 transform hover:-translate-y-4 cursor-pointer block"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                {/* Category */}
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium border border-cyan-500/30">
                    {project.category}
                  </span>
                </div>

                {/* Hover Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/60 mb-4 line-clamp-2 text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/10 text-white/80 px-2 py-1 rounded text-xs border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent border-white/20 text-white hover:bg-white/10"
                      >
                        <Github className="mr-2 h-3 w-3" />
                        Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="bg-transparent border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3"
          >
            Lihat Semua Project
          </Button>
        </div>
      </div>
    </section>
  );
}
