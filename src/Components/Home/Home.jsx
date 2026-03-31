import TypingEffect from 'react-typing-effect';
import { Link } from 'react-router-dom';
import myPic from '@/assets/me-Photoroom.png';
import devSvg from '@/assets/Developer activity-amico.png';
import { FaCode, FaBrain, FaGithub, FaLinkedin, FaRocket, FaLayerGroup, FaRobot } from 'react-icons/fa';

const cursorRenderer = cursor => <span>{cursor}</span>;

const displayTextRenderer = (text) => {
  const icon =
    text === 'Frontend Engineer'  ? <FaCode className="inline ml-2 opacity-70" /> :
    text === 'React.js Developer' ? <FaLayerGroup className="inline ml-2 opacity-70" /> :
    text === 'AI Integrations'    ? <FaBrain className="inline ml-2 opacity-70" /> :
    null;
  return <span>{text}{icon}</span>;
};

const stats = [
  { value: '2+',   label: 'Years Experience' },
  { value: '8+',   label: 'Projects Shipped' },
  { value: '250+', label: 'Students Taught' },
];

const pillars = [
  {
    icon: FaLayerGroup,
    title: 'React Ecosystem',
    desc: 'React, Next.js, TypeScript, Redux — production SaaS and MedTech platforms.',
  },
  {
    icon: FaRocket,
    title: 'UI Engineering',
    desc: 'Tailwind CSS, Framer Motion, and pixel-perfect interfaces that convert.',
  },
  {
    icon: FaRobot,
    title: 'AI Integrations',
    desc: 'LLM APIs (Groq / GPT), agents, and generative features baked into real products.',
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row items-center justify-evenly min-h-screen py-24 px-6">
        {/* Left: Text */}
        <div className="md:w-5/12 text-center md:text-left text-white space-y-5 animate-fade-in-up">
          <p className="section-eyebrow animate-fade-in-up">Frontend Engineer · React · AI</p>

          <h1 className="text-4xl md:text-6xl font-bold font-montserrat leading-tight animate-fade-in-up delay-100">
            I'm{' '}
            <span className="gradient-text-animate">Karim Adel</span>
          </h1>

          <div className="animate-fade-in-up delay-200">
            <TypingEffect
              text={['Frontend Engineer', 'React.js Developer', 'AI Integrations']}
              speed={120}
              eraseSpeed={50}
              eraseDelay={1400}
              typingDelay={500}
              className="text-lg md:text-xl text-slate-300 font-semibold"
              cursorRenderer={cursorRenderer}
              displayTextRenderer={displayTextRenderer}
            />
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start animate-fade-in-up delay-300">
            <Link
              to="/projects"
              className="relative bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-7 py-3 rounded-lg transition-all duration-200 text-center text-sm overflow-hidden group"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <a
              href="https://drive.google.com/file/d/1Oj5L3Co2xUr3ZcunFbHwMg-524lQqgwy/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-indigo-500/60 text-indigo-300 hover:border-indigo-400 hover:text-indigo-200 hover:bg-indigo-500/10 font-semibold px-7 py-3 rounded-lg transition-all duration-200 text-center text-sm"
            >
              Resume ↗
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 justify-center md:justify-start pt-2 animate-fade-in-up delay-400">
            {stats.map(({ value, label }, i) => (
              <div key={label} className={`stat-animate`} style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
                <div className="text-2xl font-bold gradient-text font-montserrat">{value}</div>
                <div className="text-xs text-slate-500 font-roboto mt-0.5 whitespace-nowrap">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Photo */}
        <div className="md:w-5/12 w-2/3 mt-12 md:mt-0 flex justify-center animate-fade-in-up delay-300">
          <div className="relative">
            {/* Glow ring behind photo */}
            <div className="absolute inset-0 rounded-full bg-indigo-600/20 blur-2xl scale-110" />
            <img
              src={myPic}
              alt="Karim Adel"
              width={380}
              height={380}
              className="relative rounded-full w-64 md:w-80 h-auto object-cover animate-float ring-2 ring-indigo-500/40 shadow-[0_0_60px_rgba(99,102,241,0.25)]"
            />
          </div>
        </div>
      </div>

      {/* ── What I Build ───────────────────────────────────────── */}
      <div className="relative py-24 px-6">
        <div className="absolute inset-0 bg-slate-300/5 backdrop-blur-sm -z-10" />
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Illustration */}
            <div className="md:w-2/5 w-2/3 flex-shrink-0">
              <img
                src={devSvg}
                alt="Developer illustration"
                width={400}
                height={400}
                loading="lazy"
                className="mx-auto w-full h-auto object-cover"
              />
            </div>

            {/* Pillars */}
            <div className="md:w-3/5 space-y-5">
              <p className="section-eyebrow">What I Build</p>
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white leading-snug">
                Full-stack frontend,{' '}
                <span className="gradient-text">AI-powered</span>
              </h2>
              <div className="space-y-4 pt-2">
                {pillars.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/30 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-indigo-500/15 flex items-center justify-center">
                      <Icon className="text-indigo-400 text-sm" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white font-montserrat">{title}</h3>
                      <p className="text-slate-400 text-sm mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Social / Connect ───────────────────────────────────── */}
      <div className="bg-slate-900/80 border-t border-slate-800 py-10 flex flex-col items-center gap-5">
        <p className="text-slate-400 text-sm tracking-widest uppercase font-semibold">Let's connect</p>
        <div className="flex gap-5">
          <a
            href="https://github.com/karimadel99"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-slate-300 hover:text-white transition-all duration-200 text-sm font-medium"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/karim-adel-961506222/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-blue-600/40 hover:border-blue-500/70 hover:bg-blue-600/10 text-blue-400 hover:text-blue-300 transition-all duration-200 text-sm font-medium"
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}
