/**
 * Projects Section - Modern card design with hover effects and gradients
 */
import { Button } from '../../components/ui/button';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

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
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with advanced features and seamless user experience',
    image: 'https://pub-cdn.sider.ai/u/U09GHA636ZJ/web-coder/68f4aa8607e60d14b9b2886d/resource/e08e7fc8-d532-44fc-8cfa-b5951f483bd1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Full Stack',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative platform with real-time updates and team features',
    image: 'https://pub-cdn.sider.ai/u/U09GHA636ZJ/web-coder/68f4aa8607e60d14b9b2886d/resource/8dc5191f-00cf-4f0f-9a98-8da74b957737.jpg',
    technologies: ['Next.js', 'TypeScript', 'Socket.io', 'PostgreSQL'],
    category: 'Web App',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Interactive weather application with beautiful data visualization',
    image: 'https://pub-cdn.sider.ai/u/U09GHA636ZJ/web-coder/68f4aa8607e60d14b9b2886d/resource/93056431-ffa5-4c8d-8763-7d63026fd3e8.jpg',
    technologies: ['React', 'Chart.js', 'API', 'Tailwind'],
    category: 'Frontend',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Social Media Platform',
    description: 'Modern social network with real-time messaging and media sharing',
    image: 'https://pub-cdn.sider.ai/u/U09GHA636ZJ/web-coder/68f4aa8607e60d14b9b2886d/resource/99b38792-32f9-41ca-bee4-f33a29dc37df.jpg',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    category: 'Mobile',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'AI Chat Application',
    description: 'Intelligent chatbot with natural language processing capabilities',
    image: 'https://pub-cdn.sider.ai/u/U09GHA636ZJ/web-coder/68f4aa8607e60d14b9b2886d/resource/789f9f96-e41a-464b-b82c-10a867e8c4d3.jpg',
    technologies: ['Python', 'React', 'OpenAI', 'FastAPI'],
    category: 'AI/ML',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'Modern portfolio with stunning animations and responsive design',
    image: 'https://pub-cdn.sider.ai/u/U09GHA636ZJ/web-coder/68f4aa8607e60d14b9b2886d/resource/a53b8fa4-ca36-4e60-bc98-8484dffecdb5.jpg',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind', 'TypeScript'],
    category: 'Design',
    demoUrl: '#',
    githubUrl: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A collection of my recent work that showcases my skills and creativity
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 transform hover:-translate-y-4 cursor-pointer"
            >
              {/* Project Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium border border-cyan-500/30">
                    {project.category}
                  </span>
                </div>

                {/* Hover Action */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Project Content */}
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

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.demoUrl && (
                    <Button size="sm" className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="bg-transparent border-white/20 text-white hover:bg-white/10 flex-1">
                      <Github className="mr-2 h-3 w-3" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="bg-transparent border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}