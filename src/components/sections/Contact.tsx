/**
 * Contact Section - Contact information and social links
 */
import { Button } from '../../components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Hubungi Kami
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Mari Terhubung</h3>
            <p className="text-foreground/70 mb-8">
              Saya selalu tertarik dengan peluang dan kolaborasi baru.
              Baik Anda memiliki proyek yang direncanakan atau hanya ingin menyapa,
              jangan ragu untuk menghubungi saya!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-foreground/80">Rochmanf466@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-foreground/80">087857416347</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-foreground/80">Magetan, Indonesia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {/* LinkedIn */}
              <Button
                asChild
                variant="outline"
                size="icon"
                className="bg-transparent transform hover:scale-110 transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 group"
              >
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 transition-transform duration-300 group-hover:scale-125" />
                </a>
              </Button>

              {/* GitHub */}
              <Button
                asChild
                variant="outline"
                size="icon"
                className="bg-transparent transform hover:scale-110 transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 group"
              >
                <a
                  href="https://github.com/reylighpsf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 transition-transform duration-300 group-hover:scale-125" />
                </a>
              </Button>

              {/* Twitter */}
              <Button
                asChild
                variant="outline"
                size="icon"
                className="bg-transparent transform hover:scale-110 transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 group"
              >
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-4 w-4 transition-transform duration-300 group-hover:scale-125" />
                </a>
              </Button>

              {/* Instagram */}
              <Button
                asChild
                variant="outline"
                size="icon"
                className="bg-transparent transform hover:scale-110 transition-all duration-300 hover:bg-pink-50 hover:border-pink-300 group"
              >
                <a
                  href="https://www.instagram.com/fathur.roch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4 transition-transform duration-300 group-hover:scale-125" />
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nama Anda"
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
                    placeholder="email@contoh.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subjek
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
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Ceritakan tentang proyek Anda..."
                />
              </div>
              <Button type="submit" className="w-full">
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
