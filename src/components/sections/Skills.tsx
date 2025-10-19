/**
 * Skills Section - Technical skills displayed in a modern table format
 */

interface Skill {
  name: string;
  level: number;
  category: string;
  experience: string;
}

const skills: Skill[] = [
  { name: 'JavaScript', level: 85, category: 'Frontend', experience: '2 Tahun' },
  { name: 'React', level: 80, category: 'Frontend', experience: '1.5 Tahun' },
  { name: 'TypeScript', level: 75, category: 'Frontend', experience: '1 Tahun' },
  { name: 'HTML/CSS', level: 90, category: 'Frontend', experience: '3 Tahun' },
  { name: 'Tailwind CSS', level: 85, category: 'Frontend', experience: '1 Tahun' },
  { name: 'Node.js', level: 70, category: 'Backend', experience: '1 Tahun' },
  { name: 'Express.js', level: 65, category: 'Backend', experience: '8 Bulan' },
  { name: 'PHP', level: 75, category: 'Backend', experience: '2 Tahun' },
  { name: 'MySQL', level: 70, category: 'Database', experience: '2 Tahun' },
  { name: 'MongoDB', level: 60, category: 'Database', experience: '6 Bulan' },
  { name: 'Python', level: 65, category: 'Programming', experience: '1 Tahun' },
  { name: 'Git', level: 80, category: 'Tools', experience: '2 Tahun' },
  { name: 'Figma', level: 75, category: 'Design', experience: '1 Tahun' },
];

export default function Skills() {
  const categories = [...new Set(skills.map(skill => skill.category))];

  const getLevelColor = (level: number) => {
    if (level >= 80) return 'from-green-500 to-emerald-400';
    if (level >= 70) return 'from-blue-500 to-cyan-400';
    if (level >= 60) return 'from-yellow-500 to-amber-400';
    return 'from-gray-500 to-gray-400';
  };

  const getLevelText = (level: number) => {
    if (level >= 80) return 'Mahir';
    if (level >= 70) return 'Lanjutan';
    if (level >= 60) return 'Menengah';
    return 'Pemula';
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skills & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Teknologi</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Teknologi dan tools yang saya kuasai dalam pengembangan web
            </p>
          </div>

          {/* Skills Table */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-white/10 border-b border-white/10">
              <div className="col-span-4 md:col-span-3">
                <span className="text-white font-semibold">Teknologi</span>
              </div>
              <div className="col-span-3 md:col-span-2 text-center">
                <span className="text-white font-semibold">Level</span>
              </div>
              <div className="col-span-3 md:col-span-2 text-center">
                <span className="text-white font-semibold">Kemahiran</span>
              </div>
              <div className="col-span-2 md:col-span-3 text-center hidden md:block">
                <span className="text-white font-semibold">Kategori</span>
              </div>
              <div className="col-span-2 md:col-span-2 text-center">
                <span className="text-white font-semibold">Pengalaman</span>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-white/10">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-white/5 transition-all duration-300 group cursor-pointer"
                >
                  {/* Technology Name */}
                  <div className="col-span-4 md:col-span-3 flex items-center">
                    <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="col-span-3 md:col-span-2 flex items-center justify-center">
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${getLevelColor(skill.level)} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>

                  {/* Level Text */}
                  <div className="col-span-3 md:col-span-2 flex items-center justify-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      skill.level >= 80 ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      skill.level >= 70 ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      skill.level >= 60 ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                      'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                    }`}>
                      {getLevelText(skill.level)}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="col-span-2 md:col-span-3 hidden md:flex items-center justify-center">
                    <span className="text-white/70 text-sm bg-white/10 px-3 py-1 rounded-full border border-white/20">
                      {skill.category}
                    </span>
                  </div>

                  {/* Experience */}
                  <div className="col-span-2 md:col-span-2 flex items-center justify-center">
                    <span className="text-white/80 text-sm">{skill.experience}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"></div>
              <span className="text-white/70 text-sm">Mahir (80-100%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
              <span className="text-white/70 text-sm">Lanjutan (70-79%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-amber-400 rounded-full"></div>
              <span className="text-white/70 text-sm">Menengah (60-69%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>
              <span className="text-white/70 text-sm">Pemula (0-59%)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}