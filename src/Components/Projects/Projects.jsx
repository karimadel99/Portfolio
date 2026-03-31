import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { useInView } from '@/hooks/useInView';

const staggerClasses = ['stagger-1','stagger-2','stagger-3','stagger-4','stagger-5','stagger-6','stagger-7','stagger-8'];

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <div className="min-h-screen text-white py-20 px-6">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="section-eyebrow">Portfolio</p>
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat">
          <span className="gradient-text">{projects.length.toString().padStart(2, '0')}</span>{' '}
          Projects
        </h1>
        <p className="text-slate-400 text-sm mt-3 font-roboto max-w-md mx-auto">
          From AI-powered tools to full e-commerce flows — production apps shipped and deployed.
        </p>
      </div>

      {/* Grid */}
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {projects.map((project, i) => (
          <div
            key={project.title}
            className={`reveal ${inView ? 'in-view' : ''} ${staggerClasses[i % staggerClasses.length]}`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
