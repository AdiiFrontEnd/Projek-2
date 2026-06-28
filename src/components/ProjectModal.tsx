import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  lang: 'ID' | 'EN';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, lang }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-[#0B0E14] border border-white/20 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative text-white my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#FAFF00] hover:text-black text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer"
          >
            <X size={20} />
          </button>

          {/* Banner Image */}
          <div className="h-64 sm:h-80 w-full relative overflow-hidden bg-gray-900">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 rounded-full bg-[#FAFF00] text-[#0B0E14] font-mono text-xs font-black uppercase tracking-wider">
                {project.category}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2 text-white">
                {project.title}
              </h2>
              <p className="text-base sm:text-lg text-[#8CE7FF] font-mono font-medium">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>

            {/* Metrics if available */}
            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 border-y border-white/10">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <span className="text-2xl sm:text-3xl font-black text-[#FAFF00] block font-mono">
                      {m.value}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Stack Tags */}
            <div>
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Layers size={14} className="text-[#6084FF]" /> Tech Stack Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-xl bg-white/10 text-white font-mono text-xs border border-white/10">
                    ⚡ {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-end gap-4 pt-4 border-t border-white/10">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all border border-white/10 cursor-pointer"
                >
                  <Github size={18} />
                  <span>Source Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#FAFF00] hover:bg-[#8CE7FF] text-[#0B0E14] font-black text-sm shadow-[0_0_25px_rgba(250,255,0,0.4)] transition-all cursor-pointer"
                >
                  <span>{lang === 'ID' ? 'Kunjungi Aplikasi Live' : 'Launch Live App'}</span>
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
