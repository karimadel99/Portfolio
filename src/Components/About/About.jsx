import coding from '@/assets/Programming-amico.png';
import { skills } from '@/data/skills';
import SkillIcon from './SkillIcon';
import { useInView } from '@/hooks/useInView';
import { FaBriefcase, FaGraduationCap, FaChalkboardTeacher, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const staggerClasses = ['stagger-1','stagger-2','stagger-3','stagger-4','stagger-5','stagger-6','stagger-7','stagger-8'];

const experiences = [
  {
    icon: FaBriefcase,
    role: 'Front-End React.js Developer',
    company: 'MedTech Soficopharm',
    type: 'Fulltime · Hybrid',
    date: 'Feb 2025 – Present',
    desc: 'Designed and implemented a SaaS clinic management platform enabling doctors to manage clinics, patients, and schedules. Integrated Google Maps API, multilingual support, and automated booking workflows.',
    accent: 'indigo',
  },
  {
    icon: FaBriefcase,
    role: 'Front-End React.js Developer',
    company: 'Silicon Squire',
    type: 'Freelance · Remote',
    date: 'Sep 2024 – Jan 2025',
    desc: 'Built a dynamic product showcase for Babil Agency using React.js and Tailwind CSS. Developed reusable components to handle variable data structures, enhancing maintainability.',
    accent: 'violet',
  },
  {
    icon: FaChalkboardTeacher,
    role: 'Coding Instructor',
    company: 'Mind Builders Academy',
    type: 'Part-time',
    date: 'Jan 2023 – May 2024',
    desc: 'Taught 250+ students across Scratch, Python, HTML, CSS, JavaScript, and Bootstrap. Created practical workshops improving student coding accuracy and project design quality.',
    accent: 'cyan',
  },
];

const skillCategories = [
  { key: 'core',    label: 'Core Stack',     color: 'text-indigo-400', dot: 'bg-indigo-500' },
  { key: 'styling', label: 'Styling & UI',   color: 'text-violet-400', dot: 'bg-violet-500' },
  { key: 'tooling', label: 'Tools & Other',  color: 'text-cyan-400',   dot: 'bg-cyan-500'   },
];

const accentMap = {
  indigo: { cardHover: 'hover:border-indigo-500/30', node: 'border-indigo-500 text-indigo-400', badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' },
  violet: { cardHover: 'hover:border-violet-500/30', node: 'border-violet-500 text-violet-400', badge: 'bg-violet-500/10 text-violet-300 border-violet-500/20' },
  cyan:   { cardHover: 'hover:border-cyan-500/30',   node: 'border-cyan-500   text-cyan-400',   badge: 'bg-cyan-500/10   text-cyan-300   border-cyan-500/20'   },
};

export default function About() {
  const { ref: skillsRef, inView: skillsInView } = useInView();
  const { ref: forwardRef, inView: forwardInView } = useInView();

  const grouped = skillCategories.map(cat => ({
    ...cat,
    items: skills.filter(s => s.category === cat.key),
  }));

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row items-center justify-evenly min-h-screen px-6 py-20">
        <div className="md:w-2/5 w-2/3 mt-10 md:mt-0">
          <img
            src={coding}
            alt="Coding illustration"
            width={400}
            height={400}
            loading="lazy"
            className="mx-auto w-3/4 h-auto object-cover"
          />
        </div>
        <div className="md:w-5/12 text-center md:text-left text-white space-y-4 animate-fade-in-up">
          <p className="section-eyebrow">About Me</p>
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat leading-tight">
            Who <span className="gradient-text">I am?</span>
          </h1>
          <p className="text-slate-300 text-base font-roboto leading-relaxed">
            I'm <strong className="text-white">Karim Adel</strong> — a Frontend Engineer and CS/AI graduate from Helwan University (2025).
            I specialize in React.js, Next.js, and Tailwind CSS, with production experience building
            SaaS and MedTech platforms with AI integrations.
            Currently expanding into generative AI, agents, and data science.
          </p>
        </div>
      </div>

      {/* ── Experience ─────────────────────────────────────────── */}
      <section className="bg-slate-300/5 backdrop-blur-sm text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-eyebrow text-center">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-14">
            Experience
          </h2>

          {/* Timeline */}
          <div className="relative pl-10">
            <div className="timeline-line" />

            {experiences.map(({ icon: Icon, role, company, type, date, desc, accent }, i) => {
              const a = accentMap[accent];
              return (
                <div key={company} className="relative mb-10 last:mb-0 animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
                  {/* Timeline node */}
                  <div className={`absolute -left-10 top-1 w-10 h-10 rounded-full bg-slate-900 border-2 ${a.node} flex items-center justify-center`}>
                    <Icon size={14} />
                  </div>

                  {/* Card */}
                  <div className={`bg-slate-900/60 border border-slate-800 rounded-xl p-5 ${a.cardHover} transition-colors duration-300`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                      <div>
                        <h3 className="text-base font-bold text-white font-montserrat">{role}</h3>
                        <p className={`text-sm font-semibold mt-0.5 ${a.node.split(' ')[1]}`}>{company}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                        <span className="text-xs text-slate-400 font-roboto bg-slate-800 px-2 py-0.5 rounded-full whitespace-nowrap">{date}</span>
                        <span className={`text-xs border px-2 py-0.5 rounded-full ${a.badge}`}>{type}</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mt-2">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Skills ─────────────────────────────────────────────── */}
      <section className="bg-slate-300/5 backdrop-blur-sm text-white py-20 px-6" ref={skillsRef}>
        <div className="max-w-4xl mx-auto">
          <p className="section-eyebrow text-center">Tech</p>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-4">
            Professional Skillset
          </h2>

          {/* Category legend */}
          <div className="flex justify-center gap-6 mb-10">
            {skillCategories.map(({ key, label, color, dot }) => (
              <div key={key} className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                <span className={`w-2 h-2 rounded-full ${dot}`} />
                <span className={color}>{label}</span>
              </div>
            ))}
          </div>

          {/* Grouped grids */}
          <div className="space-y-10">
            {grouped.map(({ key, label, items }) => (
              <div key={key}>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {items.map((skill, i) => (
                    <div
                      key={skill.label}
                      className={`reveal ${skillsInView ? 'in-view' : ''} ${staggerClasses[i % staggerClasses.length]}`}
                    >
                      <SkillIcon icon={skill.icon} label={skill.label} category={skill.category} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Looking Forward ────────────────────────────────────── */}
      <section
        ref={forwardRef}
        className={`text-white py-20 px-6 reveal ${forwardInView ? 'in-view' : ''}`}
      >
        <div className="max-w-2xl mx-auto text-center space-y-5">
          <p className="section-eyebrow">Next Chapter</p>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat">
            Looking <span className="gradient-text">Forward</span>
          </h2>
          <p className="text-slate-400 text-base font-roboto leading-relaxed">
            Always eager to take on new challenges — building innovative products,
            collaborating with strong teams, and pushing into new territory.
            Currently diving deep into generative AI, agents, and data science.
            Excited to bring those capabilities into the products I build next.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 text-sm"
            >
              See My Work <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
