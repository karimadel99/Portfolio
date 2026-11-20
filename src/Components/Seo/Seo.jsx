import { Head } from 'vite-react-ssg';
import { SITE_URL, PERSON, OG_IMAGE, PAGES } from '@/data/site';

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: PERSON.name,
  url: `${SITE_URL}/`,
  image: OG_IMAGE.url,
  jobTitle: PERSON.jobTitle,
  worksFor: [
    { '@type': 'Organization', name: 'Soficopharm' },
    { '@type': 'Organization', name: 'Datalentech' },
  ],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Helwan University' },
  address: { '@type': 'PostalAddress', addressLocality: 'Cairo', addressCountry: 'EG' },
  knowsAbout: [
    'React', 'TypeScript', 'Next.js', 'Turborepo', 'Tailwind CSS',
    'LLM integration', 'Applicant tracking systems',
  ],
  sameAs: PERSON.sameAs,
};

const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: PERSON.name,
  publisher: { '@id': PERSON_ID },
};

// Extra nodes for specific routes.
const EXTRA = {
  '/about': [
    {
      '@type': 'ProfilePage',
      url: `${SITE_URL}/about`,
      mainEntity: { '@id': PERSON_ID },
      isPartOf: { '@id': WEBSITE_ID },
    },
  ],
  '/projects': [
    {
      '@type': 'SoftwareApplication',
      name: 'ResuForge',
      url: 'https://resu-forge.vercel.app/',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      inLanguage: ['en', 'ar'],
      description: 'AI resume builder for English and Arabic CVs, with an ATS score check.',
      creator: { '@id': PERSON_ID },
    },
  ],
};

/**
 * Per-route <head>: title, description, canonical, Open Graph, Twitter and
 * JSON-LD. Rendered into static HTML at build time by vite-react-ssg.
 */
export default function Seo({ path, noindex = false }) {
  const page = PAGES[path] ?? PAGES['/'];
  const url = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [person, website, ...(EXTRA[path] ?? [])],
  };

  return (
    <Head>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      {noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={url} />}

      <meta property="og:type" content={path === '/about' ? 'profile' : 'website'} />
      <meta property="og:site_name" content={PERSON.name} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:image" content={OG_IMAGE.url} />
      <meta property="og:image:width" content={String(OG_IMAGE.width)} />
      <meta property="og:image:height" content={String(OG_IMAGE.height)} />
      <meta property="og:image:alt" content={OG_IMAGE.alt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
      <meta name="twitter:image" content={OG_IMAGE.url} />

      {!noindex && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Head>
  );
}
