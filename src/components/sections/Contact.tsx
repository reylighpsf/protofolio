
/**
 * Contact Section - Contact information and social links
 */
import { Button } from '../../components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-foreground/70 mb-8">
              I'm always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to say hello, 
              feel free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-foreground/80">hello@example.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-foreground/80">Your City, Country</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <Button variant="outline" size="icon" className="bg-transparent transform hover:scale-110 transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 group">
                <Linkedin className="h-4 w-4 transition-transform duration-300 group-hover:scale-125" />
              </Button>
              <Button variant="outline" size="icon" className="bg-transparent transform hover:scale-110 transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 group">
                <Github className="h-4 w-4 transition-transform duration-300 group-hover:scale-125" />
              </Button>
              <Button variant="outline" size="icon" className="bg-transparent transform hover:scale-110 transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 group">
                <Twitter className="h-4 w-4 transition-transform duration-300 group-hover:scale-125" />
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
