/**
 * Bagian Hero - Section utama dengan layout modern dan asimetris
 */
import { Button } from '../../components/ui/button';
import { Download, ArrowRight, Sparkles } from 'lucide-react';
import photoprofile from '../../assets/images/profilesayautama.png';
export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Konten Kiri - Teks (lebar 2/3) */}
          <div className="lg:col-span-2 text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-white/80">Sedang Magang</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Halo, Saya
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Muhammad Fathur Rochman
              </span>
            </h1>
            
            <p className="text-xl text-white/70 max-w-2xl">
              Mahasiswa Teknik Informatika Universitas Negeri Surabaya semester 5 
              yang sedang menjalani magang. Berpengalaman dalam pengembangan web 
              dan teknologi modern.
            </p>

            {/* Statistik */}
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">5</div>
                <div className="text-white/60 text-sm">Semester</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">UNESA</div>
                <div className="text-white/60 text-sm">Kampus</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Magang</div>
                <div className="text-white/60 text-sm">Status</div>
              </div>
            </div>

            {/* Tombol Aksi */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-cyan-500 text-white hover:bg-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg group">
                Jelajahi Karya Saya 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300 group">
                <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
                Unduh CV
              </Button>
            </div>
          </div>

          {/* Konten Kanan - Foto Profil Kasual (lebar 1/3) */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="w-250 h-2500 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src={photoprofile}
                alt="Muhammad Fathur Rochman - Foto Kasual"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}