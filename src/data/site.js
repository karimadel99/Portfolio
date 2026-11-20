// One place for the facts every page, the JSON-LD and the share cards repeat.
// Change SITE_URL here (and in public/robots.txt, public/sitemap.xml and the
// redirect in vercel.json) if the portfolio moves to a custom domain.
export const SITE_URL = 'https://karimadel.vercel.app';

export const PERSON = {
  name: 'Karim Adel',
  jobTitle: 'Software Engineering Tech Lead',
  location: 'Cairo, Egypt',
  email: 'karim.adel9922@gmail.com',
  sameAs: [
    'https://github.com/karimadel99',
    'https://www.linkedin.com/in/karim-adel-961506222/',
    'https://contra.com/karim_adel_dlbrna7h',
  ],
};

export const OG_IMAGE = {
  url: `${SITE_URL}/og-image.png`,
  width: 1200,
  height: 630,
  alt: 'Karim Adel, Software Engineering Tech Lead, Cairo',
};

// Per-route head copy. Titles stay under ~60 characters, descriptions ~155.
export const PAGES = {
  '/': {
    title: 'Karim Adel — Software Engineering Tech Lead, Cairo',
    description:
      'Karim Adel is a Software Engineering Tech Lead in Cairo building production React and TypeScript platforms, and ResuForge, an AI resume builder for English and Arabic CVs.',
  },
  '/about': {
    title: 'About Karim Adel — Tech Lead, React & AI Engineer',
    description:
      'Experience, skills and background of Karim Adel: Tech Lead on a 4-portal MedTech platform, part-time engineer at Datalentech, CS & AI graduate of Helwan University.',
  },
  '/projects': {
    title: 'Work — Karim Adel',
    description:
      'Selected projects by Karim Adel: ResuForge (AI resume builder), a supply-chain optimization dashboard, Job Connect and more, plus guides on CVs and ATS.',
  },
  '/contact': {
    title: 'Contact Karim Adel — Freelance & Collaboration',
    description:
      'Get in touch with Karim Adel for React, Next.js and AI-integration work. Based in Cairo, Egypt, working remotely with EU and MENA teams.',
  },
  '/404': {
    title: 'Page not found — Karim Adel',
    description: 'This page does not exist. Go back to the portfolio of Karim Adel.',
  },
};
