import TypingEffect from 'react-typing-effect';
import myPic from '@/assets/me-Photoroom.png';
import devSvg from '@/assets/Developer activity-amico.png';
import { FaCode, FaChalkboardTeacher, FaGithub, FaLinkedin } from 'react-icons/fa';

const cursorRenderer = cursor => <span>{cursor}</span>;

const displayTextRenderer = (text) => {
  const icon =
    text === 'Front-End Developer' ? <FaCode className="inline ml-2" /> :
    text === 'Coding Instructor'   ? <FaChalkboardTeacher className="inline ml-2" /> :
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
              text={['Front-End Developer', 'Coding Instructor']}
              speed={150}
              eraseSpeed={50}
              eraseDelay={1300}
              typingDelay={500}
              className="text-xl md:text-2xl text-indigo-400 py-7 font-semibold"
              cursorRenderer={cursorRenderer}
              displayTextRenderer={displayTextRenderer}
            />
          </div>
        </div>

        <div className="md:w-1/3 w-2/3 mt-10 md:mt-0 animate-fade-in-up delay-400">
          <img
            src={myPic}
            alt="Karim Adel"
            width={400}
            height={400}
            className="rounded-full shadow-lg shadow-slate-400 mx-auto w-3/4 h-auto object-cover animate-float"
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
          <p className="text-2xl font-roboto font-semibold capitalize">
            A highly motivated junior front-end developer and experienced coding instructor
            with a strong foundation in programming and web development.
          </p>
        </div>
      </div>

      {/* Social links */}
      <div className="bg-gray-800 py-8 flex flex-col items-center gap-y-5 text-2xl">
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
