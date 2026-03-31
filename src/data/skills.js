import { FaReact, FaJs, FaPython, FaHtml5, FaCss3, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiPostman, SiSass, SiRedux, SiNextdotjs, SiTypescript, SiJquery } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';

// categories: 'core' (indigo) | 'styling' (violet) | 'tooling' (cyan)
export const skills = [
  { icon: FaReact,             label: 'React',          category: 'core' },
  { icon: SiNextdotjs,         label: 'Next.js',        category: 'core' },
  { icon: SiTypescript,        label: 'TypeScript',     category: 'core' },
  { icon: FaJs,                label: 'JavaScript',     category: 'core' },
  { icon: SiRedux,             label: 'Redux',          category: 'core' },
  { icon: SiJquery,            label: 'jQuery',         category: 'core' },
  { icon: SiTailwindcss,       label: 'Tailwind CSS',   category: 'styling' },
  { icon: FaBootstrap,         label: 'Bootstrap',      category: 'styling' },
  { icon: SiSass,              label: 'Sass',           category: 'styling' },
  { icon: TbBrandFramerMotion, label: 'Framer Motion',  category: 'styling' },
  { icon: FaHtml5,             label: 'HTML5',          category: 'styling' },
  { icon: FaCss3,              label: 'CSS3',           category: 'styling' },
  { icon: FaPython,            label: 'Python',         category: 'tooling' },
  { icon: SiPostman,           label: 'Postman',        category: 'tooling' },
  { icon: FaGithub,            label: 'GitHub',         category: 'tooling' },
];
