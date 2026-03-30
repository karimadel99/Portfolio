import TypingEffect from 'react-typing-effect';
import { Link } from 'react-router-dom';
import myPic from '@/assets/me-Photoroom.png';
import devSvg from '@/assets/Developer activity-amico.png';
import { FaCode, FaChalkboardTeacher, FaGithub, FaLinkedin } from 'react-icons/fa';

const cursorRenderer = cursor => <span>{cursor}</span>;

const displayTextRenderer = (text) => {
  const icon =
    text === 'Frontend Engineer'  ? <FaCode className="inline ml-2" /> :
    text === 'React.js Developer' ? <FaCode className="inline ml-2" /> :
    text === 'AI Integrations'    ? <FaChalkboardTeacher className="inline ml-2" /> :
    null;
  return <span>{text}{icon}</span>;
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center justify-evenly min-h-screen py-24">
        <div className="md:w-1/3 text-center md:text-left text-white space-y-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold my-3 font-montserrat">
            I'm <span className="text-indigo-300">Karim Adel</span>
          </h1>
          <div className="animate-fade-in-up delay-200">
            <TypingEffect
              text={['Frontend Engineer', 'React.js Developer', 'AI Integrations']}
              speed={150}
              eraseSpeed={50}
              eraseDelay={1300}
              typingDelay={500}
              className="text-xl md:text-2xl text-indigo-400 py-7 font-semibold"
              cursorRenderer={cursorRenderer}
              displayTextRenderer={displayTextRenderer}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center md:justify-start animate-fade-in-up delay-400">
            <Link
              to="/projects"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200 text-center"
            >
              View Projects
            </Link>
            <a
              href="https://drive.google.com/file/d/1Oj5L3Co2xUr3ZcunFbHwMg-524lQqgwy/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200 text-center"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="md:w-1/3 w-2/3 mt-10 md:mt-0 animate-fade-in-up delay-400">
          <img
            src={myPic}
            alt="Karim Adel"
            width={400}
            height={400}
            className="rounded-full mx-auto w-3/4 h-auto object-cover animate-float ring-4 ring-indigo-500/40 shadow-[0_0_40px_rgba(99,102,241,0.3)]"
          />
        </div>
      </div>

      {/* About blurb */}
      <div className="relative flex flex-col md:flex-row items-center justify-evenly min-h-screen">
        <div className="absolute inset-0 bg-slate-300/5 backdrop-blur-sm -z-10" />
        <div className="md:w-1/3 w-2/3 mt-10 md:mt-0">
          <img
            src={devSvg}
            alt="Developer illustration"
            width={400}
            height={400}
            loading="lazy"
            className="mx-auto w-3/4 h-auto object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/3 text-center md:text-left text-white space-y-4">
          <p className="text-2xl font-roboto font-semibold">
            Frontend Engineer specializing in React.js, Next.js, and Tailwind CSS.
            Experienced building production SaaS and MedTech platforms with AI integrations.
            Currently expanding into generative AI, agents, and data science.
          </p>
        </div>
      </div>

      {/* Social links */}
      <div className="bg-slate-900/80 border-t border-slate-800 py-8 flex flex-col items-center gap-y-5 text-2xl">
        <p className="text-white">Feel free to connect with me</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/karimadel99"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub className="text-white text-3xl hover:text-orange-700 transition duration-150" />
          </a>
          <a
            href="https://www.linkedin.com/in/karim-adel-961506222/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className="text-white text-3xl hover:text-blue-600 transition duration-150" />
          </a>
        </div>
      </div>
    </>
  );
}
