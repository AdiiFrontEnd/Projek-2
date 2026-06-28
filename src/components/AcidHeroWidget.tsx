import React from 'react';
import { Sparkles, ArrowUpRight, Code2, Copy, Check } from 'lucide-react';
import { DeveloperProfile } from '../types';
import { motion } from 'motion/react';

interface AcidHeroWidgetProps {
  profile: DeveloperProfile;
  onExploreProjects: () => void;
  lang: 'ID' | 'EN';
}

export const AcidHeroWidget: React.FC<AcidHeroWidgetProps> = ({ profile, onExploreProjects, lang }) => {
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="h-full min-h-[320px] rounded-3xl bg-[#FAFF00] text-[#0B0E14] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl group">
      {/* Background Subtle Watermark */}
      <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none select-none font-black text-9xl tracking-tighter">
        DEV
      </div>

      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 relative z-10">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B0E14] text-white text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{profile.statusText}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={copyEmail}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0B0E14]/10 hover:bg-[#0B0E14] hover:text-[#FAFF00] text-xs font-mono transition-all cursor-pointer"
            title="Copy Email Address"
          >
            {copiedEmail ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
            <span>{copiedEmail ? (lang === 'ID' ? 'Tersalin!' : 'Copied!') : profile.email}</span>
          </button>
        </div>
      </div>

      {/* Center Bold Logo / Title matching reference image: "TODO(x)" adapted to "KASI(✔)" */}
      <div className="my-auto py-6 flex flex-col items-center justify-center text-center relative z-10">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex items-center justify-center select-none"
        >
          <span className="font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter uppercase leading-none">
            KA
          </span>
          {/* Semicircle / Pill icon hybrid matching reference logo */}
          <div className="w-14 sm:w-24 md:w-28 h-14 sm:h-24 md:h-28 rounded-full bg-[#0B0E14] text-[#FAFF00] flex items-center justify-center mx-1 sm:mx-2 shadow-xl transform group-hover:rotate-12 transition-transform duration-300">
            <Code2 className="w-8 sm:w-14 md:w-16 h-8 sm:h-14 md:h-16" />
          </div>
          <span className="font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter uppercase leading-none">
            SI
          </span>
          <div className="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 rounded-full bg-[#6084FF] text-white flex items-center justify-center ml-1 sm:ml-2 shadow-lg">
            <span className="font-black text-2xl sm:text-4xl">★</span>
          </div>
        </motion.div>

        <p className="mt-4 text-sm sm:text-base md:text-lg font-bold tracking-tight max-w-xl text-[#0B0E14]/80">
          {lang === 'ID' 
            ? "Senior Front-End Web Developer & UI Architecture Specialist"
            : profile.role + " — Crafting Next-Gen Digital Interfaces"}
        </p>
      </div>

      {/* Bottom info stats & CTA */}
      <div className="flex flex-wrap items-end justify-between gap-4 pt-4 border-t border-[#0B0E14]/10 relative z-10">
        <div className="flex items-center gap-6 font-mono text-xs sm:text-sm">
          <div>
            <span className="text-[#0B0E14]/60 block text-[10px] uppercase">EXP</span>
            <span className="font-black text-lg">{profile.yearsExperience} Years</span>
          </div>
          <div>
            <span className="text-[#0B0E14]/60 block text-[10px] uppercase">PROJECTS</span>
            <span className="font-black text-lg">{profile.projectsCompleted} Shipped</span>
          </div>
          <div>
            <span className="text-[#0B0E14]/60 block text-[10px] uppercase">LOCATION</span>
            <span className="font-bold">{profile.location.split(',')[0]}</span>
          </div>
        </div>

        <button
          onClick={onExploreProjects}
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#0B0E14] text-white hover:bg-[#6084FF] hover:text-white font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer group/btn"
        >
          <span>{lang === 'ID' ? 'Lihat Portofolio' : 'Explore Works'}</span>
          <ArrowUpRight size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
