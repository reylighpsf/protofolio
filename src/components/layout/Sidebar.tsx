/**
 * Sidebar Component - Responsive navigation sidebar with floating toggle button
 */
import { useState } from 'react';
import { Home, User, GraduationCap, Code, FolderOpen, Mail, Menu, X } from 'lucide-react';
import photoprofilenormal from '../../assets/images/profilesaya.png';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: FolderOpen },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <>
      {/* Tombol Floating Toggle (Buka/Tutup Sidebar) */}
      <button
        className={`
          md:hidden
          fixed
          bottom-6
          right-6
          z-[60]
          p-4
          rounded-full
          shadow-2xl
          border border-cyan-300/30
          backdrop-blur-md
          transition-all duration-300 ease-in-out
          ${isOpen ? 'bg-red-500/90 hover:bg-red-400' : 'bg-cyan-500/90 hover:bg-cyan-400'}
        `}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
      </button>

      {/* Overlay hitam saat sidebar terbuka */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar utama */}
      <aside
        className={`fixed left-0 top-0 h-full w-72 md:w-80 bg-gray-900/95 backdrop-blur-md border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <div className="flex flex-col h-full p-8 pt-16 md:pt-8">
          {/* Profile Section */}
          <div className="text-center mb-12">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-cyan-400/30 overflow-hidden shadow-2xl">
              <img
                src={photoprofilenormal}
                alt="Muhammad Fathur Rochman - Formal Photo"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-2xl font-bold text-white mb-2">
              Muhammad Fathur Rochman
            </h1>
            <div className="text-cyan-400 text-sm font-medium mb-1">
              Pengembang Web
            </div>
            <div className="text-white/60 text-sm flex items-center justify-center gap-1">
              <GraduationCap size={14} />
              UNESA - Semester 5
            </div>
            <div className="text-white/60 text-sm">Sedang Magang</div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900/30">
            <ul className="space-y-3">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)} // Tutup sidebar setelah klik (HP)
                      className="flex items-center gap-4 p-4 text-white/80 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-all duration-300 group"
                    >
                      <Icon
                        size={20}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="font-medium">{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="pt-8 border-t border-white/10">
            <div className="text-center text-white/40 text-sm">
              © 2024 Muhammad Fathur Rochman
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
