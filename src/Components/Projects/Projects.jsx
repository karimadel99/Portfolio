import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { useInView } from '@/hooks/useInView';

const staggerClasses = ['stagger-1','stagger-2','stagger-3','stagger-4','stagger-5','stagger-6','stagger-7','stagger-8'];

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <div className="bg-slate-300/5 backdrop-blur-sm text-white py-20">
      <div className="text-center">
        <h1 className="text-4xl text-indigo-400 font-bold font-montserrat">Projects</h1>
      </div>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 w-4/5 mx-auto"
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
