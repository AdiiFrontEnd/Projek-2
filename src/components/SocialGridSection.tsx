import React from 'react';
import { SocialLink } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { ExternalLink, Sparkles, Heart, MessageCircle, Share2, Star, GitCommit } from 'lucide-react';
import { motion } from 'motion/react';

interface SocialGridSectionProps {
  socials: SocialLink[];
  lang: 'ID' | 'EN';
}

export const SocialGridSection: React.FC<SocialGridSectionProps> = ({ socials, lang }) => {
  // Mock Instagram visual feed items to demonstrate "feed instagram" integration
  const instaPosts = [
    { id: 1, img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=80', likes: '342', caption: 'Acid Pop Design Tokens in Tailwind v4 ⚡' },
    { id: 2, img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80', likes: '519', caption: 'Bento Grid UI Exploration #04' },
    { id: 3, img: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&auto=format&fit=crop&q=80', likes: '891', caption: 'Micro-interactions with React 19 Motion' },
  ];

  return (
    <section className="mt-12 pt-10 border-t border-white/10">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-[#FAFF00] font-mono text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles size={14} />
            <span>Social & Developer Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {lang === 'ID' ? 'Terhubung di Seluruh Platform' : 'Connected Across Platforms'}
          </h2>
        </div>
        <p className="text-sm text-gray-400 font-mono max-w-sm">
          {lang === 'ID' 
            ? 'Integrasi langsung ke ekosistem pengembangan dan dokumentasi UI harian.'
            : 'Live sync with developer activity, open-source repositories & daily UI experiments.'}
        </p>
      </div>

      {/* Social Bento Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {socials.map((soc) => (
          <a
            key={soc.id}
            href={soc.url}
            target="_blank"
            rel="noreferrer"
            className={`p-6 rounded-3xl flex flex-col justify-between shadow-xl transition-all hover:-translate-y-1 group relative overflow-hidden ${soc.bgClass} ${soc.textClass}`}
          >
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <DynamicIcon name={soc.iconName} size={24} />
              </div>
              {soc.badgeText && (
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md font-bold uppercase tracking-wider">
                  {soc.badgeText}
                </span>
              )}
            </div>

            <div className="mt-8">
              <span className="text-xs font-mono opacity-80">{soc.handle}</span>
              <h3 className="text-2xl font-black tracking-tight">{soc.platform}</h3>
              <div className="mt-3 pt-3 border-t border-white/20 flex items-baseline justify-between">
                <span className="text-xl font-extrabold font-mono tracking-tight">{soc.statValue}</span>
                <span className="text-xs opacity-75">{soc.statLabel}</span>
              </div>
            </div>

            <ExternalLink size={18} className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>

      {/* Deep Social Integration Showcase Grid (Instagram Feed + GitHub Live Commit Graph) */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Instagram Feed Embed Showcase */}
        <div className="lg:col-span-2 rounded-3xl bg-[#131822] border border-white/10 p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]" />
              <span className="font-bold text-white text-sm tracking-tight">Instagram UI Showcase Feed (@dev.kasi)</span>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-xs font-mono text-[#8CE7FF] hover:underline">
              {lang === 'ID' ? 'Ikuti Feed' : 'Follow Feed'} ↗
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {instaPosts.map((post) => (
              <div key={post.id} className="rounded-2xl overflow-hidden bg-[#0B0E14] border border-white/10 group relative">
                <div className="aspect-square overflow-hidden relative">
                  <img src={post.img} alt={post.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white font-bold text-sm">
                    <span className="flex items-center gap-1"><Heart size={16} className="fill-white text-white" /> {post.likes}</span>
                    <span className="flex items-center gap-1"><MessageCircle size={16} /> 12</span>
                  </div>
                </div>
                <div className="p-3 text-[11px] font-mono text-gray-300 truncate">
                  {post.caption}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Github Commit Pulse Card */}
        <div className="rounded-3xl bg-[#1E222B] border border-white/10 p-6 shadow-xl flex flex-col justify-between text-white">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 font-bold">
                <GitCommit size={16} /> GITHUB ACTIVITY
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">LIVE</span>
            </div>
            <h3 className="text-lg font-bold tracking-tight">1,248 Contributions</h3>
            <p className="text-xs text-gray-400 mt-1 font-mono">Recorded in the last year across public repositories.</p>

            {/* Mock Contribution Grid */}
            <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-12 gap-1.5">
              {Array.from({ length: 48 }).map((_, i) => {
                const intensities = ['bg-gray-800', 'bg-emerald-900', 'bg-emerald-700', 'bg-emerald-500', 'bg-[#FAFF00]'];
                const randomInt = intensities[(i * 7) % intensities.length];
                return (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.4 }}
                    className={`h-3 rounded-sm ${randomInt} transition-all`} 
                    title={`Day ${i+1}: Active commits`}
                  />
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
            <span className="text-gray-400">Top repo: <strong className="text-white">acid-ui-kit</strong></span>
            <span className="text-[#FAFF00] flex items-center gap-1"><Star size={12} className="fill-[#FAFF00]" /> 842</span>
          </div>
        </div>
      </div>
    </section>
  );
};
