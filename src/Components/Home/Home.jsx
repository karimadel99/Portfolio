import React from 'react';
import TypingEffect from 'react-typing-effect';
import myPic from '../../assets/me-Photoroom.png';
import svg from '../../assets/Developer activity-amico.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';

<i class="fa-brands fa-github"></i>

export default function Home() {
  return <>

    <div className="flex  shadow-gray-700 flex-col md:flex-row items-center justify-evenly min-h-screen py-24">

      {/* Text Section */}
      <div className="md:w-1/3 text-center md:text-left text-white space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold my-3 font-montserrat">I'm <span className='text-indigo-300'>Karim Adel</span></h1>

        <TypingEffect
          text={['Front-End Developer', 'Coding Instructor']}
          speed={150}
          eraseSpeed={50}
          eraseDelay={1300}
          typingDelay={500}
          className="text-xl md:text-2xl text-indigo-400 py-7 font-semibold"
          cursorRenderer={cursor => <h2>{cursor}</h2>}
          displayTextRenderer={(text, i) => {
            let icon = null;
            if (text === 'Front-End Developer') {
              icon = <FontAwesomeIcon icon={faCode} className="ml-2" />;
            } else if (text === 'Coding Instructor') {
              icon = <FontAwesomeIcon icon={faChalkboardTeacher} className="ml-2" />;
            }
            return (
              <span>
                {text} {icon}
              </span>
            );
          }}
        />
      </div>

      {/* Profile Picture */}
      <div className="md:w-1/3 w-2/3 mt-10 md:mt-0">
        <img
          src={myPic}
          alt="Karim Adel"
          className="rounded-full shadow-lg shadow-slate-400 mx-auto w-3/4 h-auto object-cover"
        />
      </div>
    </div>

    <div className="relative flex flex-col md:flex-row items-center justify-evenly min-h-screen">
      {/* Background Blur */}
      <div className="absolute inset-0 bg-slate-300/5 backdrop-blur-sm z-[-1]" />

      {/* Picture */}
      <div className="md:w-1/3 w-2/3 mt-10 md:mt-0">
        <img
          src={svg}
          alt="coding"
          className="mx-auto w-3/4 h-auto object-cover rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/3 text-center md:text-left text-white space-y-4">
        <p className='text-2xl font-roboto font-semibold capitalize'>A highly motivated junior front-end developer and experienced coding instructor with a strong foundation in
          programming and web development.</p>
      </div>
    </div>

    {/* New section */}
    
    <div className=" bg-gray-800 py-8 flex flex-col items-center gap-y-5 text-2xl">
    <p className="text-white ml-2">Feel free to connect with me</p>
      <div className="flex space-x-4">
        <Link to="https://github.com/karimadel99" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-white text-3xl hover:text-orange-700  transition duration-150" />
        </Link>
        <Link to="https://www.linkedin.com/in/karim-adel-961506222/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-white text-3xl hover:text-blue-600 transition duration-150" />
        </Link>
      </div>
    </div>

  </>
}