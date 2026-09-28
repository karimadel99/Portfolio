import emarket from '@/assets/e-market.png';
import cloudy from '@/assets/cloudy.png';
import games from '@/assets/gameReview.png';
import resuforge from '@/assets/resuforge.png';
import jobconnect from '@/assets/jobconnect.png';
import supplychain from '@/assets/supplychain.svg';

export const projects = [
  {
    title: 'Supply-Chain Intelligence',
    image: supplychain,
    repo: null,
    demo: null,
    description: '6-screen optimization dashboard for a food-production client — demand forecasting, SKU allocation, frozen-inventory planning, and forecast-accuracy evaluation (WAPE/MAPE) over a Python optimization engine.',
    tags: ['React', 'TypeScript', 'Zod', 'Tailwind CSS'],
    role: 'Client Work · Frontend',
    year: 2026,
    featured: true,
    status: 'private',
  },
  {
    title: 'ResuForge',
    image: resuforge,
    repo: null,
    demo: 'https://resu-forge.vercel.app/',
    description: 'AI-powered resume builder using Groq / Llama 3.3 70B. Build a polished resume from scratch or from a sample — in seconds.',
    tags: ['React', 'Groq AI', 'Tailwind CSS', 'Vite'],
    role: 'Solo · Design + Build',
    year: 2025,
    featured: true,
    status: 'live',
  },
  {
    title: 'Job Connect',
    image: jobconnect,
    repo: 'https://github.com/karimadel99/Job-Connect',
    demo: 'https://job-connect-pink.vercel.app',
    description: 'Full-featured job board for seekers and employers. Browse listings, apply with validated forms, and manage postings.',
    tags: ['React', 'Redux', 'Tailwind CSS', 'REST API'],
    role: 'Frontend Lead',
    year: 2024,
    featured: true,
    status: 'live',
  },
  {
    title: 'E-Market',
    image: emarket,
    repo: 'https://github.com/karimadel99/e-market',
    demo: 'https://e-market-blue.vercel.app/',
    description: 'E-commerce storefront with product listing, cart management, and a clean checkout flow.',
    tags: ['React', 'Bootstrap', 'Context API'],
    role: 'Solo Build',
    year: 2024,
    status: 'live',
  },
  {
    title: 'Cloudy App',
    image: cloudy,
    repo: 'https://github.com/karimadel99/cloudy-app',
    demo: 'https://karimadel99.github.io/Cloudy-App/',
    description: 'Weather app that fetches real-time forecasts by city using the OpenWeatherMap API.',
    tags: ['JavaScript', 'OpenWeather API', 'CSS3'],
    role: 'Solo Build',
    year: 2023,
    status: 'live',
  },
  {
    title: 'Games Website',
    image: games,
    repo: 'https://github.com/karimadel99/Game-Review',
    demo: 'https://karimadel99.github.io/Game-Review/',
    description: 'Game review and discovery platform with search, filters, and detailed game pages.',
    tags: ['React', 'RAWG API', 'Bootstrap'],
    role: 'Solo Build',
    year: 2023,
    status: 'live',
  },
];
