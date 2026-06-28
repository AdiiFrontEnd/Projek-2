import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeadlineWidgetProps {
  onOpenContact: () => void;
  lang: 'ID' | 'EN';
}

export const HeadlineWidget: React.FC<HeadlineWidgetProps> = ({ onOpenContact, lang }) => {
  return (
    <div className="rounded-3xl bg-[#0B0E14] border border-white/10 p-6 sm:p-8 flex items-start justify-between gap-4 shadow-xl hover:border-[#8CE7FF]/50 transition-all group">
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight font-sans">
          {lang === 'ID' ? (
            <>Tingkatkan Kualitas <span className="text-[#FAFF00]">Setiap Pixel</span> & Kode Web Anda.</>
          ) : (
            <>Elevate Your Every <span className="text-[#FAFF00]">Pixel Count</span> with Kasi.</>
          )}
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-gray-400 font-mono">
          {lang === 'ID' 
            ? 'Spesialisasi: Frontend Arsitektur, Micro-animations, Web Core Vitals.'
            : 'Specializing in high-performance Web Apps, Design Systems & React 19.'}
        </p>
      </div>

      <button
        onClick={onOpenContact}
        className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-[#6084FF] text-white flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-all cursor-pointer shadow-lg"
        title={lang === 'ID' ? "Mari Berdiskusi" : "Let's Talk"}
      >
        <ArrowUpRight size={24} className="text-[#8CE7FF] group-hover:text-white group-hover:rotate-45 transition-all" />
      </button>
    </div>
  );
};
