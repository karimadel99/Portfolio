import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

export default function ProjectCard({ project, index, accent = false }) {
  return (
    <article className={`frame-card ${accent ? 'accent' : ''} group flex flex-col h-full`}>
      <div className="relative overflow-hidden aspect-[16/10] bg-paper-2">
        <img
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute top-3 left-3 mono text-[0.65rem] uppercase tracking-[0.2em] bg-paper px-2 py-1 text-ink-2 border border-rule">
          {String(index + 1).padStart(2, '0')} / {project.year}
        </span>
        {project.featured && (
          <span className="absolute top-3 right-3 chip chip-orange !text-[0.6rem]">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5 md:p-6 gap-3">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="serif-display text-2xl md:text-3xl text-ink leading-tight">
            {project.title}
          </h3>
          <span className="mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-3 whitespace-nowrap">
            {project.role}
          </span>
        </div>

        {project.description && (
          <p className="text-ink-2 text-sm leading-relaxed flex-1">
            {project.description}
          </p>
        )}

        {project.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map(t => <span key={t} className="chip">{t}</span>)}
          </div>
        )}

        <div className="flex items-center gap-5 pt-4 border-t border-rule mt-auto">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-2 hover:text-orange transition-colors"
              aria-label={`${project.title} source code on GitHub`}
            >
              <FaGithub size={13} /> Code
            </a>
          )}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 mono text-[0.72rem] uppercase tracking-[0.14em] text-blue dark:text-blue-lit hover:text-orange transition-colors ${project.repo ? 'ml-auto' : ''}`}
            aria-label={`${project.title} live demo`}
          >
            <FaExternalLinkAlt size={11} /> Live
            <FaArrowRight
              size={10}
              className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
            />
          </a>
        </div>
      </div>
    </article>
  );
}
