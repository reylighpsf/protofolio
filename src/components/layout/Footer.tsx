
/**
 * Footer Component - Site footer with copyright and links
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-foreground/60 mb-4 md:mb-0">
            © {currentYear} Your Name. All rights reserved.
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6">
            <a
              href="#home"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
