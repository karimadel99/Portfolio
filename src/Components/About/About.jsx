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
            Hi, I'm Karim Adel, a passionate Front-End Developer and a Bachelor
            of Computer Science and Artificial Intelligence student at Helwan
            University, Cairo. With a strong foundation in programming and a
            love for crafting responsive, user-friendly web applications, I'm on
            a journey to build impactful digital experiences.
          </p>
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
            I'm always eager to take on new challenges, whether it's working on
            innovative projects, collaborating with teams, or mentoring others
            in their coding journeys. I'm excited about the future of technology
            and am dedicated to making my mark in the industry by building
            cutting-edge, high-performance applications. When I'm not coding,
            you might find me exploring new tech, tinkering with design
            patterns, or simply enjoying a good game.
          </p>
        </div>
      </div>
    </>
  );
}
