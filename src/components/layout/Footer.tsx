/**
 * Footer Component - Responsive site footer with copyright and quick links
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/90 border-t border-white/10 backdrop-blur-md">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Copyright */}
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} <span className="text-white font-semibold">Muhammad Fathur Rochman</span>. All rights reserved.
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm">
            <a
              href="#home"
              className="text-white/60 hover:text-cyan-400 transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white/60 hover:text-cyan-400 transition-all duration-300"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-white/60 hover:text-cyan-400 transition-all duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-white/60 hover:text-cyan-400 transition-all duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white/60 hover:text-cyan-400 transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Optional: garis pemisah halus */}
        <div className="mt-6 border-t border-white/10"></div>

        {/* Optional: Credit kecil */}
        <div className="text-center mt-4 text-xs text-white/40">
          Built with ❤️ using React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
