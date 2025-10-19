import { Button } from '../../components/ui/button';
import { Download, ArrowRight, Sparkles } from 'lucide-react';
import photoprofile from '../../assets/images/profilesayautama.png';

export default function Hero() {
  // Ganti dengan URL CV kamu
  const cvUrl =
    "https://drive.google.com/file/d/1L6ojzfkeVson-Pe8hQqdAjXbJ3Zw2-AM/view?usp=sharing";

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* ===================== LEFT CONTENT ===================== */}
          <div className="lg:col-span-2 space-y-8 text-center lg:text-left">
            {/* Status */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mx-auto lg:mx-0">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-white/80">Sedang Magang</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Halo, Saya
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Muhammad Fathur Rochman
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0">
              Mahasiswa Teknik Informatika Universitas Negeri Surabaya semester 5 
              yang sedang menjalani magang. Berpengetahuan dalam pengembangan web 
              dan teknologi modern.
            </p>

            {/* Info Cards */}
            <div className="flex justify-center lg:justify-start gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold">5</div>
                <div className="text-white/60 text-sm">Semester</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">UNESA</div>
                <div className="text-white/60 text-sm">Kampus</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Magang</div>
                <div className="text-white/60 text-sm">Status</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start">
              {/* Explore Button */}
              <Button className="bg-cyan-500 text-white hover:bg-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg group">
                Jelajahi Karya Saya
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              {/* Download CV */}
              <a
                href={cvUrl}
                download="CV_Muhammad_Fathur_Rochman.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300 group"
                >
                  <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
                  Unduh CV
                </Button>
              </a>
            </div>
          </div>

          {/* ===================== RIGHT IMAGE ===================== */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src={photoprofile}
                alt="Muhammad Fathur Rochman - Foto Profil"
                className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
