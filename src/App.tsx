import React, { useState } from 'react';
import { ColorPalette, Project } from './types';
import { INITIAL_PROFILE, PROJECTS_DATA, SCHEDULE_DATA, SKILLS_DATA, SOCIALS_DATA } from './data';
import { Navbar } from './components/Navbar';
import { NotificationWidget } from './components/NotificationWidget';
import { AcidHeroWidget } from './components/AcidHeroWidget';
import { AppDockWidget } from './components/AppDockWidget';
import { HeadlineWidget } from './components/HeadlineWidget';
import { ProjectCardWidget } from './components/ProjectCardWidget';
import { InteractiveEstimatorWidget } from './components/InteractiveEstimatorWidget';
import { ScheduleWidget } from './components/ScheduleWidget';
import { SocialGridSection } from './components/SocialGridSection';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { Sparkles, Terminal, Code2, Layers, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [palette, setPalette] = useState<ColorPalette>('acid-navy');
  const [lang, setLang] = useState<'ID' | 'EN'>('ID'); // Default ID as requested
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  // Dynamic palette root class
  const paletteClasses: Record<ColorPalette, string> = {
    'acid-navy': 'bg-[#0B0E14] text-white',
    'cyberpunk': 'bg-[#0a0518] text-[#f0f0ff]',
    'monochrome': 'bg-[#111111] text-[#eeeeee]'
  };

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS_DATA 
    : activeFilter === 'saas' 
      ? PROJECTS_DATA.filter(p => p.category === 'SaaS / AI')
      : PROJECTS_DATA;

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 selection:bg-[#FAFF00] selection:text-[#0B0E14] ${paletteClasses[palette]}`}>
      {/* Top Navbar */}
      <Navbar 
        palette={palette} 
        setPalette={setPalette} 
        onOpenContact={() => setIsContactOpen(true)}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Bento Portfolio Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-6">
        
        {/* Senior Art Director Analysis Banner (Addressing the 5 points in prompt!) */}
        <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-md mb-8">
          <div className="flex items-center gap-2 text-[#8CE7FF] font-mono text-xs font-bold uppercase tracking-widest mb-2">
            <Terminal size={14} />
            <span>Senior Art Director & AI Design Specialist // Reference Analysis</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-4">
            {lang === 'ID' ? 'Adaptasi Visual: Acid Pop Bento Grid' : 'Visual Blueprint: Acid Pop Bento Grid'}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-2 border-t border-white/10 text-xs font-mono">
            <div className="bg-[#0B0E14]/60 p-3 rounded-2xl border border-white/10">
              <span className="text-[#FAFF00] font-bold block mb-1">1. Gaya Visual</span>
              <p className="text-gray-300 leading-relaxed">
                Modern Bento-grid dengan sentuhan <strong className="text-white">Neo-Brutalist & Acid Pop</strong>. Squircles tegas dan kontras tinggi.
              </p>
            </div>
            <div className="bg-[#0B0E14]/60 p-3 rounded-2xl border border-white/10">
              <span className="text-[#6084FF] font-bold block mb-1">2. Palet Warna</span>
              <p className="text-gray-300 leading-relaxed">
                Acid Yellow (#FAFF00), Cornflower Blue (#6084FF), Ice Cyan (#8CE7FF) di atas kanvas Deep Navy (#0B0E14).
              </p>
            </div>
            <div className="bg-[#0B0E14]/60 p-3 rounded-2xl border border-white/10">
              <span className="text-[#8CE7FF] font-bold block mb-1">3. Komposisi</span>
              <p className="text-gray-300 leading-relaxed">
                Asimetris Bento-grid. Kartu vertikal kiri mengimbangi kartu kuning ekstensif di kanan atas sebagai Focal Point.
              </p>
            </div>
            <div className="bg-[#0B0E14]/60 p-3 rounded-2xl border border-white/10">
              <span className="text-emerald-400 font-bold block mb-1">4. Tipografi</span>
              <p className="text-gray-300 leading-relaxed">
                Hierarki ganda: Sans-serif Display ekstrim untuk judul + Monospace untuk kredensial teknis & kode.
              </p>
            </div>
            <div className="bg-[#0B0E14]/60 p-3 rounded-2xl border border-white/10">
              <span className="text-pink-400 font-bold block mb-1">5. Tekstur</span>
              <p className="text-gray-300 leading-relaxed">
                Clean Flat Vector bersudut halus dengan bayangan dalam (inset shadow) serta aksen lencana bercahaya.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BENTO ROW 1: Exact layout geometry mirroring the uploaded reference image!
            Left: Vertical Notification Widget (Blue) | Right: Large Yellow Logo/Hero
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Top Left: Notification / Chat Card matching reference "ToDo Almost there!" */}
          <div className="lg:col-span-4">
            <NotificationWidget 
              onAccept={() => setIsContactOpen(true)}
              lang={lang}
            />
          </div>

          {/* Top Right: Large Yellow Hero Logo / Profile Card */}
          <div className="lg:col-span-8">
            <AcidHeroWidget 
              profile={INITIAL_PROFILE}
              onExploreProjects={() => {
                const projSection = document.getElementById('projects-section');
                projSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              lang={lang}
            />
          </div>
        </div>

        {/* =========================================================================
            BENTO ROW 2 & 3: Middle section matching dock, headline, white cards, and schedule
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column (Span 4): Bottom Left Dock Widget matching Safari/ToDo/Music dock */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <AppDockWidget 
              onSelectTab={(tab) => {
                if (tab === 'skills') {
                  document.getElementById('skills-section')?.scrollIntoView({ behavior: 'smooth' });
                } else if (tab === 'socials') {
                  document.getElementById('socials-section')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  setActiveFilter(tab);
                  document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              activeTab={activeFilter}
              lang={lang}
            />

            {/* Extra Skill Quick Preview card */}
            <div className="flex-1 rounded-3xl bg-[#131822] border border-white/10 p-6 flex flex-col justify-center shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[#FAFF00] font-bold uppercase tracking-wider">// CORE STACK</span>
                <span className="text-xs font-mono text-gray-400">100% TS</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React 19', 'Tailwind v4', 'TypeScript', 'Vite 6', 'Motion UI', 'Express'].map(tech => (
                  <span key={tech} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Center/Right Cluster (Span 8): Grid containing headline, white project card, blue squircle, and schedule pill stack */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Headline Banner spanning all 12 sub-columns matching "Elevate Your Every Moment Count with ToDo" */}
            <div className="md:col-span-12">
              <HeadlineWidget 
                onOpenContact={() => setIsContactOpen(true)}
                lang={lang}
              />
            </div>

            {/* White Project Feature Card matching reference "Your Life, Your Tasks, Your Way" */}
            <div className="md:col-span-5">
              <ProjectCardWidget 
                project={PROJECTS_DATA[0]}
                onSelectProject={setSelectedProject}
                lang={lang}
              />
            </div>

            {/* Blue Squircle Interactive Estimator matching reference blue "+" and clocks squircle */}
            <div className="md:col-span-3">
              <InteractiveEstimatorWidget lang={lang} />
            </div>

            {/* Pill Stack matching reference bottom right list widget ("Exercise in GYM", "Client Work", etc.) */}
            <div className="md:col-span-4">
              <ScheduleWidget schedule={SCHEDULE_DATA} lang={lang} />
            </div>

          </div>

        </div>

        {/* =========================================================================
            PROJECTS SHOWCASE SECTION
           ========================================================================= */}
        <section id="projects-section" className="pt-12 border-t border-white/10 space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#8CE7FF] uppercase tracking-widest">// PRODUCTION_WORKS</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                {lang === 'ID' ? 'Karya Pilihan & Studi Kasus' : 'Featured Projects Showcase'}
              </h2>
            </div>

            <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10 font-mono text-xs">
              <button 
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${activeFilter === 'all' ? 'bg-[#FAFF00] text-[#0B0E14] font-bold' : 'text-gray-400'}`}
              >
                All ({PROJECTS_DATA.length})
              </button>
              <button 
                onClick={() => setActiveFilter('saas')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${activeFilter === 'saas' ? 'bg-[#FAFF00] text-[#0B0E14] font-bold' : 'text-gray-400'}`}
              >
                SaaS & AI
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => (
              <div 
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="rounded-3xl bg-[#131822] border border-white/10 overflow-hidden shadow-xl hover:border-[#FAFF00]/50 hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131822] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono font-bold border border-white/20 uppercase">
                    {proj.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#FAFF00] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs font-mono text-[#8CE7FF] mt-1">{proj.subtitle}</p>
                    <p className="text-xs text-gray-400 mt-3 line-clamp-2 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex gap-1">
                      {proj.tags.slice(0, 2).map(t => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-mono text-[#FAFF00] font-bold">Studi Kasus →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SKILLS & ARCHITECTURE SECTION
           ========================================================================= */}
        <section id="skills-section" className="pt-12 border-t border-white/10">
          <div className="mb-8">
            <span className="text-xs font-mono text-[#FAFF00] uppercase tracking-widest">// COMPETENCY_MATRIX</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              {lang === 'ID' ? 'Arsitektur & Keahlian Teknis' : 'Core Engineering Skills'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILLS_DATA.map((skill) => (
              <div key={skill.name} className="p-5 rounded-2xl bg-[#1E222B] border border-white/10 shadow-lg flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-white tracking-tight">{skill.name}</span>
                  <span className="text-xs font-mono text-[#8CE7FF] font-black">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden p-0.5 mb-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-[#6084FF] to-[#FAFF00] rounded-full"
                  />
                </div>
                <span className="text-[10px] font-mono text-gray-400 truncate">{skill.highlight}</span>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SOCIAL MEDIA INTEGRATION SECTION
           ========================================================================= */}
        <div id="socials-section">
          <SocialGridSection socials={SOCIALS_DATA} lang={lang} />
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 pb-12 border-t border-white/10 text-center text-xs font-mono text-gray-500 space-y-2">
          <div className="flex items-center justify-center gap-3 text-white">
            <span className="font-bold text-sm">Kasi Muhammad</span>
            <span>•</span>
            <span>{INITIAL_PROFILE.email}</span>
            <span>•</span>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[#FAFF00] hover:underline">GitHub</a>
          </div>
          <p>
            {lang === 'ID'
              ? 'Didesain oleh AI Design Specialist & Senior Art Director berdasarkan referensi Bento Grid Pop Tech.'
              : 'Designed with Acid Pop Bento Grid aesthetics. All rights reserved © 2026.'}
          </p>
        </footer>

      </main>

      {/* Modals */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        lang={lang}
      />
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        email={INITIAL_PROFILE.email}
        lang={lang}
      />

    </div>
  );
}
