import React from 'react';
import { ColorPalette } from '../types';
import { Sparkles, Send, Terminal, Globe } from 'lucide-react';

interface NavbarProps {
  palette: ColorPalette;
  setPalette: (p: ColorPalette) => void;
  onOpenContact: () => void;
  lang: 'ID' | 'EN';
  setLang: (l: 'ID' | 'EN') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  palette,
  setPalette,
  onOpenContact,
  lang,
  setLang
}) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0E14]/80 border-b border-white/10 py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#FAFF00] text-[#0B0E14] flex items-center justify-center font-black text-xl tracking-tighter shadow-[0_0_20px_rgba(250,255,0,0.3)]">
            K
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight text-white text-lg">KASI<span className="text-[#8CE7FF]">.dev</span></span>
              <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/10 text-white/80 font-mono">
                Senior Art Dir
              </span>
            </div>
            <p className="text-xs text-gray-400 font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {lang === 'ID' ? 'Tersedia untuk proyek baru' : 'Available for new projects'}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Language Switch */}
          <button
            onClick={() => setLang(lang === 'EN' ? 'ID' : 'EN')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 transition-all cursor-pointer font-mono"
            title="Switch Language (ID / EN)"
          >
            <Globe size={14} className="text-[#8CE7FF]" />
            <span className={lang === 'EN' ? 'text-white font-bold' : 'text-gray-400'}>EN</span>
            <span>/</span>
            <span className={lang === 'ID' ? 'text-white font-bold' : 'text-gray-400'}>ID</span>
          </button>

          {/* Theme Palette Switcher */}
          <div className="hidden md:flex items-center bg-white/5 border border-white/10 p-1 rounded-xl gap-1">
            <button
              onClick={() => setPalette('acid-navy')}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                palette === 'acid-navy' ? 'bg-[#FAFF00] text-[#0B0E14] font-bold shadow-md' : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#6084FF]"></span>
              Acid Pop
            </button>
            <button
              onClick={() => setPalette('cyberpunk')}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                palette === 'cyberpunk' ? 'bg-[#ff0055] text-white font-bold shadow-md' : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#00ffff]"></span>
              Neon
            </button>
            <button
              onClick={() => setPalette('monochrome')}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                palette === 'monochrome' ? 'bg-white text-black font-bold shadow-md' : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-gray-500"></span>
              Nordic
            </button>
          </div>

          {/* Hire Me CTA */}
          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#6084FF] to-[#8CE7FF] text-[#0B0E14] font-bold text-sm shadow-[0_4px_20px_rgba(96,132,255,0.4)] hover:shadow-[0_6px_25px_rgba(96,132,255,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Send size={15} />
            {lang === 'ID' ? 'Hubungi Saya' : "Let's Connect"}
          </button>
        </div>
      </div>
    </header>
  );
};
