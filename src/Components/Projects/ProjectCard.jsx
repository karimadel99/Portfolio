import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white/10 rounded-lg shadow-lg hover:shadow-indigo-400 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          width={600}
          height={338}
          loading="lazy"
          className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h4 className="text-xl font-semibold text-white mt-2 text-center">
          {project.title}
        </h4>
        {project.description && (
          <p className="text-gray-300 text-sm mt-2 text-center leading-relaxed">
            {project.description}
          </p>
        )}
        <div className="mt-4 text-xl flex justify-between px-2">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-300 hover:text-indigo-400 flex items-center gap-2 transition-colors"
              aria-label={`${project.title} GitHub repository`}
            >
              <FaGithub />
              Repo
            </a>
          )}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-indigo-300 hover:text-indigo-400 flex items-center gap-2 transition-colors ${!project.repo ? 'mx-auto' : ''}`}
            aria-label={`${project.title} live demo`}
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
