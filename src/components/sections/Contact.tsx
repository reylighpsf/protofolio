/**
 * Contact Section - Contact information and social links
 */
import { Button } from '../../components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Hubungi Saya
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-2">Mari Terhubung</h3>
            <p className="text-white/70 leading-relaxed">
              Saya selalu terbuka untuk peluang kerja, kolaborasi proyek, atau sekadar berdiskusi.
              Jangan ragu untuk menghubungi saya melalui kontak di bawah ini!
            </p> {/* ✅ Tambahkan penutup ini */}

            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span className="text-white/80 break-all">Rochmanf466@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span className="text-white/80">087857416347</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span className="text-white/80">Magetan, Indonesia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="bg-transparent border-white/20 hover:border-blue-400 hover:bg-blue-400/10 transform hover:scale-110 transition-all duration-300 group"
              >
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-white group-hover:text-blue-400 transition-colors" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="icon"
                className="bg-transparent border-white/20 hover:border-gray-400 hover:bg-gray-400/10 transform hover:scale-110 transition-all duration-300 group"
              >
                <a
                  href="https://github.com/reylighpsf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 text-white group-hover:text-gray-300 transition-colors" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="icon"
                className="bg-transparent border-white/20 hover:border-blue-400 hover:bg-blue-400/10 transform hover:scale-110 transition-all duration-300 group"
              >
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5 text-white group-hover:text-blue-400 transition-colors" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="icon"
                className="bg-transparent border-white/20 hover:border-pink-400 hover:bg-pink-400/10 transform hover:scale-110 transition-all duration-300 group"
              >
                <a
                  href="https://www.instagram.com/fathur.roch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5 text-white group-hover:text-pink-400 transition-colors" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <form className="space-y-6 bg-white/5 p-6 rounded-xl shadow-lg border border-white/10 backdrop-blur-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/90">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-white/40"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/90">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-white/40"
                    placeholder="email@contoh.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white/90">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-white/40"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/90">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-white/40 resize-none"
                  placeholder="Ceritakan tentang proyek Anda..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-md transition-all duration-300"
              >
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
