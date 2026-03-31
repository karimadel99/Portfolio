import emarket from '@/assets/e-market.png';
import cloudy from '@/assets/cloudy.png';
import crud from '@/assets/crud.png';
import quotes from '@/assets/randomQuotes.png';
import meals from '@/assets/themealsite.png';
import games from '@/assets/gameReview.png';
import resuforge from '@/assets/resuforge.png';
import jobconnect from '@/assets/jobconnect.png';

export const projects = [
  {
    title: 'ResuForge',
    image: resuforge,
    repo: null,
    demo: 'https://resu-forge.vercel.app/',
    description: 'AI-powered resume builder using Groq / Llama 3.3 70B. Build a polished resume from scratch or from a sample — in seconds.',
    tags: ['React', 'Groq AI', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Job Connect',
    image: jobconnect,
    repo: 'https://github.com/karimadel99/Job-Connect',
    demo: 'https://job-connect-pink.vercel.app',
    description: 'Full-featured job board for seekers and employers. Browse listings, apply with validated forms, and manage postings.',
    tags: ['React', 'Redux', 'Tailwind CSS', 'REST API'],
  },
  {
    title: 'E-Market',
    image: emarket,
    repo: 'https://github.com/karimadel99/e-market',
    demo: 'https://e-market-blue.vercel.app/',
    description: 'E-commerce storefront with product listing, cart management, and a clean checkout flow.',
    tags: ['React', 'Bootstrap', 'Context API'],
  },
  {
    title: 'Cloudy App',
    image: cloudy,
    repo: 'https://github.com/karimadel99/cloudy-app',
    demo: 'https://karimadel99.github.io/Cloudy-App/',
    description: 'Weather app that fetches real-time forecasts by city using the OpenWeatherMap API.',
    tags: ['JavaScript', 'OpenWeather API', 'CSS3'],
  },
  {
    title: 'Games Website',
    image: games,
    repo: 'https://github.com/karimadel99/Game-Review',
    demo: 'https://karimadel99.github.io/Game-Review/',
    description: 'Game review and discovery platform with search, filters, and detailed game pages.',
    tags: ['React', 'RAWG API', 'Bootstrap'],
  },
  {
    title: 'The Meal Site',
    image: meals,
    repo: 'https://github.com/karimadel99/TheMealSite',
    demo: 'https://karimadel99.github.io/TheMealSite/',
    description: 'Recipe search app powered by TheMealDB API — browse by category or search any dish.',
    tags: ['JavaScript', 'MealDB API', 'CSS3'],
  },
  {
    title: 'Store Crud',
    image: crud,
    repo: 'https://github.com/karimadel99/CRUD-Store-management-System',
    demo: 'https://karimadel99.github.io/CRUD-Store-management-System/',
    description: 'Store inventory management system with full Create, Read, Update, Delete operations.',
    tags: ['JavaScript', 'Bootstrap', 'LocalStorage'],
  },
  {
    title: 'Random Quotes Generator',
    image: quotes,
    repo: 'https://github.com/karimadel99/Quote-Generator-',
    demo: 'https://karimadel99.github.io/Quote-Generator-/',
    description: 'Generates random inspirational quotes with one-click copy and Twitter share support.',
    tags: ['JavaScript', 'CSS3', 'Clipboard API'],
  },
];
