import React from "react";
import { FaReact, FaJs, FaPython, FaHtml5, FaCss3, FaBootstrap, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiPostman, SiSass, SiRedux, SiNextdotjs, SiPostgresql } from "react-icons/si";


import coding from "../../assets/Programming-amico.png"

export default function About() {
  return (
    <>
      <div className="flex shadow-gray-700 flex-col md:flex-row items-center justify-evenly min-h-screen inset-0 bg-slate-300/5 backdrop-blur-sm z-[-1]">

        {/* Storyset Image */}
        <div className="md:w-1/3 w-2/3 mt-10 md:mt-0">
          <img
            src={coding}
            alt="coding"
            className="mx-auto w-3/4 h-auto object-cover"
          />
        </div>
                {/* Text Section */}
                <div className="md:w-1/3 text-center md:text-left text-white space-y-4">
          <h1 className="text-2xl md:text-6xl font-semibold my-3">
            Who <span className="text-indigo-300">I am?</span>
          </h1>
          <p className="text-xl font-roboto">
            Hi, I’m Karim Adel, a passionate Front-End Developer and a Bachelor
            of Computer Science and Artificial Intelligence student at Helwan
            University, Cairo. With a strong foundation in programming and a
            love for crafting responsive, user-friendly web applications, I’m on
            a journey to build impactful digital experiences.
          </p>
        </div>
      </div>
      

     {/* Skills Section */}
     <div className="bg-slate-300/5 backdrop-blur-sm z-[-1] text-white py-20">
        <div className="text-center">
          <h3 className="text-4xl text-indigo-400 font-bold pb-5 font-montserrat">
            Professional Skillset
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mt-10 w-4/5 mx-auto">
          <div className="flex justify-center items-center border-2 border-indigo-400 p-5 rounded-lg glow-effect">
            <FaReact size={50} className="text-indigo-400" />
          </div>
          <div className="flex justify-center items-center border-2 border-indigo-400 p-5 rounded-lg glow-effect">
            <SiNextdotjs size={50} className="text-indigo-400" />
          </div>
          <div className="flex justify-center items-center border-2 border-indigo-400 p-5 rounded-lg glow-effect">
            <FaBootstrap size={50} className="text-indigo-400" />
          </div>
          <div className="flex justify-center items-center border-2 border-indigo-400 p-5 rounded-lg glow-effect">
            <FaJs size={50} className="text-indigo-400" />
          </div>
          <div className="flex justify-center items-center border-2 border-indigo-400 p-5 rounded-lg glow-effect">
            <SiTailwindcss size={50} className="text-indigo-400" />
          </div>
          <div className="flex justify-center items-center border-2 border-indigo-400 p-5 rounded-lg glow-effect">
            <SiPostman size={50} className="text-indigo-400" />
          </div>
          <div className="flex justify-center items-center border-2 border-indigo-400 p-5 rounded-lg glow-effect">
            <FaPython size={50} className="text-indigo-400" />
          </div>
          <div className="flex justify-center items-center border-2 border-indigo-400 p-5 rounded-lg glow-effect">
            <FaHtml5 size={50} className="text-indigo-400" />
          </div>
          <div className="flex justify-center items-center border-2 border-indigo-400 p-5 rounded-lg glow-effect">
            <FaCss3 size={50} className="text-indigo-400" />
          </div>
          <div className="flex justify-center items-center border-2 border-indigo-400 p-5 rounded-lg glow-effect">
            <SiSass size={50} className="text-indigo-400" />
          </div>

          <div className="flex justify-center items-center border-2 border-indigo-400 p-5 rounded-lg glow-effect">
            <SiRedux size={50} className="text-indigo-400" />
          </div>
          <div className="flex justify-center items-center border-2 border-indigo-400 p-5 rounded-lg glow-effect">
            <FaGithub size={50} className="text-indigo-400" />
          </div>
          <div className="flex justify-center items-center border-2 border-indigo-400 p-5 rounded-lg glow-effect">
            <SiPostgresql size={50} className="text-indigo-400" />
          </div>
        </div>
      </div>

      <div className="text-center inset-0 bg-slate-300/5 backdrop-blur-sm z-[-1] text-white">
        <div className="w-3/5 mx-auto">
          <h3 className="text-4xl text-indigo-400 font-bold font-montserrat">Looking Forward</h3>
          <p className="mt-5 py-7 font-roboto text-2xl">
            I’m always eager to take on new challenges, whether it’s working on
            innovative projects, collaborating with teams, or mentoring others
            in their coding journeys. I’m excited about the future of technology
            and am dedicated to making my mark in the industry by building
            cutting-edge, high-performance applications. When I’m not coding,
            you might find me exploring new tech, tinkering with design
            patterns, or simply enjoying a good game.
          </p>
        </div>
      </div>
    </>
  );
}
