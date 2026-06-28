import React, { useState } from 'react';
import { Calculator, Clock, Plus, Zap, RefreshCw } from 'lucide-react';

interface InteractiveEstimatorWidgetProps {
  lang: 'ID' | 'EN';
}

export const InteractiveEstimatorWidget: React.FC<InteractiveEstimatorWidgetProps> = ({ lang }) => {
  const [pages, setPages] = useState(5);
  const [hasAnimations, setHasAnimations] = useState(true);
  const [hasCMS, setHasCMS] = useState(false);

  // Simple pricing algorithm
  const basePriceUSD = 400;
  const pageCost = pages * 80;
  const animCost = hasAnimations ? 250 : 0;
  const cmsCost = hasCMS ? 350 : 0;
  const totalUSD = basePriceUSD + pageCost + animCost + cmsCost;
  const estimatedDays = Math.ceil(pages * 0.8) + (hasAnimations ? 2 : 0) + (hasCMS ? 3 : 0);

  return (
    <div className="h-full min-h-[220px] rounded-3xl bg-[#6084FF] p-6 flex flex-col justify-between text-white relative overflow-hidden shadow-xl group">
      {/* Background Graphic matching reference clock / plus icons */}
      <div className="absolute -right-6 -bottom-6 opacity-20 pointer-events-none transform group-hover:rotate-45 transition-transform duration-500">
        <Plus size={160} className="stroke-[1]" />
      </div>

      {/* Top Header */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#0B0E14] text-[#FAFF00] flex items-center justify-center">
            <Calculator size={16} />
          </div>
          <span className="font-bold text-sm tracking-tight">
            {lang === 'ID' ? 'Kalkulator Proyek' : 'Project Estimator'}
          </span>
        </div>
        <span className="text-[10px] font-mono uppercase bg-white/20 px-2 py-0.5 rounded-full">
          INSTANT QUOTE
        </span>
      </div>

      {/* Interactive Sliders / Options */}
      <div className="my-3 space-y-3 relative z-10 bg-[#0B0E14]/30 backdrop-blur-md p-3.5 rounded-2xl border border-white/15">
        <div>
          <div className="flex justify-between text-xs font-mono mb-1">
            <span>{lang === 'ID' ? 'Jumlah Halaman:' : 'Page Count:'}</span>
            <span className="font-bold text-[#FAFF00]">{pages} {lang === 'ID' ? 'Halaman' : 'Pages'}</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="20" 
            value={pages}
            onChange={(e) => setPages(parseInt(e.target.value))}
            className="w-full accent-[#FAFF00] h-1.5 bg-white/20 rounded-lg cursor-pointer"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setHasAnimations(!hasAnimations)}
            className={`flex-1 py-1 px-2 rounded-xl text-[11px] font-mono border transition-all cursor-pointer flex items-center justify-center gap-1 ${
              hasAnimations ? 'bg-[#FAFF00] text-[#0B0E14] font-bold border-[#FAFF00]' : 'bg-white/10 border-white/20 text-gray-200'
            }`}
          >
            <Zap size={12} />
            {lang === 'ID' ? 'Animasi Fluid' : 'Motion UI'}
          </button>
          <button
            onClick={() => setHasCMS(!hasCMS)}
            className={`flex-1 py-1 px-2 rounded-xl text-[11px] font-mono border transition-all cursor-pointer flex items-center justify-center gap-1 ${
              hasCMS ? 'bg-[#FAFF00] text-[#0B0E14] font-bold border-[#FAFF00]' : 'bg-white/10 border-white/20 text-gray-200'
            }`}
          >
            <Clock size={12} />
            {lang === 'ID' ? 'Integrasi API/CMS' : 'API / CMS'}
          </button>
        </div>
      </div>

      {/* Result Footer */}
      <div className="flex items-center justify-between relative z-10 pt-2 border-t border-white/20">
        <div>
          <span className="text-[10px] font-mono text-gray-200 uppercase block">ESTIMATED INVESTMENT</span>
          <span className="text-2xl font-black tracking-tight text-[#FAFF00]">
            ~${totalUSD} <span className="text-xs font-normal text-white">USD</span>
          </span>
        </div>
        <div className="text-right font-mono text-xs">
          <span className="text-gray-200 block text-[10px]">TIMELINE</span>
          <span className="font-bold bg-[#0B0E14] px-2.5 py-1 rounded-lg text-white">
            {estimatedDays} {lang === 'ID' ? 'Hari Kerja' : 'Days'}
          </span>
        </div>
      </div>
    </div>
  );
};
