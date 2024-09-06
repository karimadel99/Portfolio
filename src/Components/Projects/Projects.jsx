import React from 'react';
import emarket from "../../assets/e-market.png"
import cloudy from "../../assets/cloudy.png"
import crud from "../../assets/crud.png"
import quotes from "../../assets/randomQuotes.png"
import meals from "../../assets/themealsite.png"
import games from "../../assets/gameReview.png"

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    {
      title: 'E-Market',
      image: emarket,
      repo: 'https://github.com/karimadel99/e-market',
      demo: 'https://e-market-blue.vercel.app/',
    },
    {
      title: 'Cloudy App',
      image: cloudy,
      repo: 'https://github.com/karimadel99/cloudy-app',
      demo: 'https://karimadel99.github.io/Cloudy-App/',
    },
    {
      title: 'Games Website',
      image: games,
      repo: 'https://github.com/karimadel99/Game-Review',
      demo: 'https://karimadel99.github.io/Game-Review/',
    },
    {
      title: 'The Meal Site',
      image: meals,
      repo: 'https://github.com/karimadel99/TheMealSite',
      demo: 'https://karimadel99.github.io/TheMealSite/',
    },
    {
      title: 'Store Crud',
      image: crud,
      repo: 'https://github.com/karimadel99/CRUD-Store-management-System',
      demo: 'https://karimadel99.github.io/CRUD-Store-management-System/',
    },
    {
      title: 'Random Quotes Generator',
      image: quotes,
      repo: 'https://github.com/karimadel99/Quote-Generator-',
      demo: 'https://karimadel99.github.io/Quote-Generator-/',
    },
  ];
  return (
    <div className="bg-slate-300/5 backdrop-blur-sm z-[-1] text-white py-20">
      <div className="text-center">
        <h3 className="text-4xl text-indigo-400 font-bold font-montserrat">Projects</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 w-4/5 mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 p-2 rounded-lg shadow-lg hover:shadow-indigo-400 transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover rounded-md"
            />
            <h4 className="text-xl font-semibold text-white mt-5 text-center">{project.title}</h4>
            <div className="mt-5 text-2xl flex justify-between p-3">
              <Link
                to={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-300 hover:text-indigo-400 flex items-center"
              >
                <FaGithub className="mr-2" />
                Repo
              </Link>
              <Link
                to={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-300 hover:text-indigo-400 flex items-center"
              >
                <FaExternalLinkAlt className="mr-2" />
                Live Demo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}