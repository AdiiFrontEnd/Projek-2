import React from 'react';
import { Globe, Code, Layers, Sparkles, Terminal, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

interface AppDockWidgetProps {
  onSelectTab: (tab: 'all' | 'saas' | 'skills' | 'socials') => void;
  activeTab: string;
  lang: 'ID' | 'EN';
}

export const AppDockWidget: React.FC<AppDockWidgetProps> = ({ onSelectTab, activeTab, lang }) => {
  const dockItems = [
    { id: 'all', name: lang === 'ID' ? 'Semua Karya' : 'Web Showcase', icon: Globe, bg: 'bg-[#00D1FF]', text: 'text-[#0B0E14]' },
    { id: 'saas', name: lang === 'ID' ? 'SaaS & AI' : 'SaaS / AI App', icon: Cpu, bg: 'bg-[#FAFF00]', text: 'text-[#0B0E14]' },
    { id: 'skills', name: lang === 'ID' ? 'Tech Stack' : 'Tech Stack', icon: Layers, bg: 'bg-[#6084FF]', text: 'text-white' },
    { id: 'socials', name: lang === 'ID' ? 'Sosial & Github' : 'Social Hub', icon: Terminal, bg: 'bg-[#ff0055]', text: 'text-white' },
  ];

  return (
    <div className="h-full min-h-[220px] rounded-3xl bg-[#8CE7FF] p-6 flex flex-col justify-between relative overflow-hidden shadow-xl">
      {/* Top hint text */}
      <div className="flex items-center justify-between text-[#0B0E14] font-mono text-xs font-bold">
        <span>// DEVELOPER_DOCK</span>
        <span className="px-2 py-0.5 rounded bg-white/40 text-[10px]">CLICK TO FILTER</span>
      </div>

      {/* Glass Dock Panel matching reference bottom left squircle dock! */}
      <div className="my-auto bg-white/60 backdrop-blur-md rounded-3xl p-3 border border-white shadow-lg">
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {dockItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <motion.button
                key={item.id}
                whileHover={{ y: -6, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSelectTab(item.id as any)}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl transition-all cursor-pointer relative ${
                  isActive ? `${item.bg} ${item.text} shadow-lg ring-2 ring-[#0B0E14]` : 'bg-[#0B0E14] text-white hover:bg-[#1f2635]'
                }`}
              >
                <Icon size={24} className="mb-1" />
                <span className="text-[10px] font-bold tracking-tight text-center leading-tight line-clamp-1">
                  {item.name}
                </span>
                {isActive && (
                  <motion.div 
                    layoutId="dock-dot"
                    className="w-1.5 h-1.5 rounded-full bg-[#0B0E14] absolute -bottom-1.5"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      <p className="text-center text-xs text-[#0B0E14]/80 font-medium">
        {lang === 'ID' ? '💡 Navigasi interaktif bergaya macOS Dock' : '💡 Interactive Bento Dock Navigation'}
      </p>
    </div>
  );
};
