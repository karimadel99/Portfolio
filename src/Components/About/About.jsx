import coding from '@/assets/Programming-amico.png';
import { skills } from '@/data/skills';
import SkillIcon from './SkillIcon';
import { useInView } from '@/hooks/useInView';

const staggerClasses = ['stagger-1','stagger-2','stagger-3','stagger-4','stagger-5','stagger-6','stagger-7','stagger-8'];

export default function About() {
  const { ref: skillsRef, inView: skillsInView } = useInView();
  const { ref: forwardRef, inView: forwardInView } = useInView();

  return (
    <>
      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center justify-evenly min-h-screen">
        <div className="md:w-1/3 w-2/3 mt-10 md:mt-0">
          <img
            src={coding}
            alt="Coding illustration"
            width={400}
            height={400}
            loading="lazy"
            className="mx-auto w-3/4 h-auto object-cover"
          />
        </div>
        <div className="md:w-1/3 text-center md:text-left text-white space-y-4">
          <h1 className="text-2xl md:text-6xl font-semibold my-3">
            Who <span className="text-indigo-300">I am?</span>
          </h1>
          <p className="text-xl font-roboto">
            Hi, I'm Karim Adel — a Frontend Engineer and CS/AI graduate from Helwan
            University (2025). I specialize in React.js, Next.js, and Tailwind CSS,
            with production experience building SaaS and MedTech platforms with AI
            integrations. Currently expanding into generative AI, agents, and data science.
          </p>
        </div>
      </div>

      {/* Experience */}
      <div className="bg-slate-300/5 backdrop-blur-sm text-white py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-indigo-400 font-bold font-montserrat">Experience</h2>
        </div>
        <div className="w-4/5 mx-auto space-y-8">

          <div className="border-l-4 border-indigo-500 pl-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-1">
              <h3 className="text-xl font-semibold text-white">Front-End React.js Developer</h3>
              <span className="text-sm text-slate-400 font-roboto">Feb 2025 – Present</span>
            </div>
            <p className="text-indigo-400 font-medium font-roboto mb-2">MedTech Soficopharm · Fulltime, Hybrid</p>
            <p className="text-slate-300 font-roboto">
              Designed and implemented a SaaS clinic management platform enabling doctors to manage clinics,
              patients, and schedules. Integrated Google Maps API, multilingual support, and automated booking workflows.
            </p>
          </div>

          <div className="border-l-4 border-indigo-500/60 pl-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-1">
              <h3 className="text-xl font-semibold text-white">Front-End React.js Developer</h3>
              <span className="text-sm text-slate-400 font-roboto">Sep 2024 – Jan 2025</span>
            </div>
            <p className="text-indigo-400 font-medium font-roboto mb-2">Silicon Squire · Freelance, Remote</p>
            <p className="text-slate-300 font-roboto">
              Built a dynamic product showcase for Babil Agency using React.js and Tailwind CSS.
              Developed reusable components to handle variable data structures, enhancing maintainability.
            </p>
          </div>

          <div className="border-l-4 border-indigo-500/40 pl-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-1">
              <h3 className="text-xl font-semibold text-white">Coding Instructor</h3>
              <span className="text-sm text-slate-400 font-roboto">Jan 2023 – May 2024</span>
            </div>
            <p className="text-indigo-400 font-medium font-roboto mb-2">Mind Builders Academy</p>
            <p className="text-slate-300 font-roboto">
              Taught 250+ students across Scratch, Python, HTML, CSS, JavaScript, and Bootstrap.
              Created practical workshops improving student coding accuracy and project design quality.
            </p>
          </div>

        </div>
      </div>

      {/* Skills */}
      <div className="bg-slate-300/5 backdrop-blur-sm text-white py-20" ref={skillsRef}>
        <div className="text-center">
          <h2 className="text-4xl text-indigo-400 font-bold pb-5 font-montserrat">
            Professional Skillset
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mt-10 w-4/5 mx-auto">
          {skills.map(({ icon, label }, i) => (
            <div
              key={label}
              className={`reveal ${skillsInView ? 'in-view' : ''} ${staggerClasses[i % staggerClasses.length]}`}
            >
              <SkillIcon icon={icon} label={label} />
            </div>
          ))}
        </div>
      </div>

      {/* Looking Forward */}
      <div
        ref={forwardRef}
        className={`text-center bg-slate-300/5 backdrop-blur-sm text-white reveal ${forwardInView ? 'in-view' : ''}`}
      >
        <div className="w-3/5 mx-auto">
          <h2 className="text-4xl text-indigo-400 font-bold font-montserrat">Looking Forward</h2>
          <p className="mt-5 py-7 font-roboto text-2xl">
            I'm always eager to take on new challenges — building innovative products,
            collaborating with teams, and pushing into new territory. Currently diving
            deep into generative AI, agents, and data science. Excited to bring those
            capabilities into the products I build next.
          </p>
        </div>
      </div>
    </>
  );
}
