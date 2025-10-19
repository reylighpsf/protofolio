/**
 * Sidebar Component - Navigation sidebar with profile photo and menu
 */
import { Home, User, Code, FolderOpen, Mail, GraduationCap } from 'lucide-react';

export default function Sidebar() {
  const navigation = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: FolderOpen },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-r border-white/10 z-50">
      <div className="flex flex-col h-full p-8">
        {/* Profile Section */}
        <div className="text-center mb-12">
          {/* Profile Photo - Formal Circle */}
          <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-cyan-400/30 overflow-hidden shadow-2xl">
            <img 
              src="https://pub-cdn.sider.ai/u/U09GHA636ZJ/web-coder/68f4aa8607e60d14b9b2886d/resource/f1328727-2fc6-48ab-807e-3359644fab06.jpg" 
              alt="Muhammad Fathur Rochman - Formal Photo"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Nama & Judul */}
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
          <div className="text-white/60 text-sm">
            Sedang Magang
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1">
          <ul className="space-y-3">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center gap-4 p-4 text-white/80 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-all duration-300 group"
                  >
                    <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
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
  );
}