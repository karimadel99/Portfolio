import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card shimmer-border group rounded-xl overflow-hidden flex flex-col">
      {/* Image with gradient overlay */}
      <div className="relative overflow-hidden h-44 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          width={600}
          height={338}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h4 className="text-base font-bold text-white font-montserrat tracking-wide">
          {project.title}
        </h4>

        {project.description && (
          <p className="text-slate-400 text-sm leading-relaxed flex-1">
            {project.description}
          </p>
        )}

        {/* Tech tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(tag => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex items-center gap-4 pt-3 border-t border-slate-800/80 mt-auto">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors duration-200"
              aria-label={`${project.title} GitHub repository`}
            >
              <FaGithub size={14} />
              Code
            </a>
          )}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-200 group/link ${!project.repo ? '' : 'ml-auto'}`}
            aria-label={`${project.title} live demo`}
          >
            <FaExternalLinkAlt size={11} />
            Live Demo
            <FaArrowRight
              size={10}
              className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
