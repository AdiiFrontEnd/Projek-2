import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

interface ProjectCardWidgetProps {
  project: Project;
  onSelectProject: (p: Project) => void;
  lang: 'ID' | 'EN';
}

export const ProjectCardWidget: React.FC<ProjectCardWidgetProps> = ({ project, onSelectProject, lang }) => {
  return (
    <div 
      onClick={() => onSelectProject(project)}
      className="h-full min-h-[200px] rounded-3xl bg-white text-[#0B0E14] p-6 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer border border-gray-100 relative group overflow-hidden"
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.colorTheme}`} />

      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="px-2.5 py-1 rounded-full bg-gray-100 text-[#0B0E14] font-mono text-[11px] font-bold tracking-wider uppercase">
            {project.category}
          </span>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {project.githubUrl && <Github size={16} className="text-gray-500 hover:text-black" />}
            <ExternalLink size={16} className="text-[#6084FF]" />
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
          {project.title}
        </h3>
        <p className="text-xs text-gray-500 font-medium mt-1 font-mono">
          {project.subtitle}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-mono">
              {tag}
            </span>
          ))}
        </div>
        <span className="text-xs font-bold text-[#6084FF] group-hover:underline flex items-center gap-1">
          {lang === 'ID' ? 'Detail' : 'View'} →
        </span>
      </div>
    </div>
  );
};
