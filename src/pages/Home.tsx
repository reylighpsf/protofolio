
/**
 * Portfolio Home Page
 * Main landing page for the portfolio website
 */
import React from 'react';
import { Mail, Github, Linkedin, Download, Code, Palette, Database } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function HomePage() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://pub-cdn.sider.ai/u/U09GHA636ZJ/web-coder/68f3620d394cd3cb5407ece0/resource/02824b70-c9b5-40b2-a73b-2b551d502cf2.jpg'
    },
    {
      title: 'Task Management App',
      description: 'Productivity application with real-time collaboration',
      technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
      image: 'https://pub-cdn.sider.ai/u/U09GHA636ZJ/web-coder/68f3620d394cd3cb5407ece0/resource/129b2351-c3b6-4e02-8d9d-590a85f0ccfa.jpg'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather monitoring with beautiful UI',
      technologies: ['React', 'API Integration', 'Charts'],
      image: 'https://pub-cdn.sider.ai/u/U09GHA636ZJ/web-coder/68f3620d394cd3cb5407ece0/resource/c06e97bc-45ad-4cb3-9def-c004c5ecd638.jpg'
    }
  ];

  const skills = [
    { name: 'Frontend Development', icon: <Code className="w-6 h-6" />, level: 90 },
    { name: 'UI/UX Design', icon: <Palette className="w-6 h-6" />, level: 85 },
    { name: 'Backend Development', icon: <Database className="w-6 h-6" />, level: 80 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm{' '}
                <span className="text-blue-600">Muhammad Fathur Rochman</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Full-Stack Developer & UI/UX Designer passionate about creating 
                beautiful and functional web applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
                <Button variant="outline" className="bg-transparent border-blue-600 text-blue-600 hover:bg-blue-50">
                  Liat Projects
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <img 
                  src="https://pub-cdn.sider.ai/u/U09GHA636ZJ/web-coder/68f3620d394cd3cb5407ece0/resource/6f6d1bcf-d67d-4406-8142-2bb56718e11d.jpg" 
                  alt="Profile" 
                  className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with 3+ years of experience 
                building web applications. I love turning complex problems into 
                simple, beautiful designs.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                My expertise includes React, TypeScript, Node.js, and modern 
                web technologies. I'm always eager to learn new technologies 
                and take on challenging projects.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      {skill.icon}
                      <span className="ml-2 font-semibold text-gray-800">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies</h3>
              <div className="grid grid-cols-3 gap-4">
                {['React', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 'Tailwind'].map((tech) => (
                  <div key={tech} className="bg-white p-3 rounded-lg text-center shadow-sm">
                    <span className="font-medium text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full bg-transparent border-blue-600 text-blue-600 hover:bg-blue-50">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">john.doe@email.com</span>
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="bg-transparent border-gray-300">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="bg-transparent border-gray-300">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
