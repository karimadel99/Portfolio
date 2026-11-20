import Layout from './Components/Layout/Layout';

// Each page module exports `Component` (react-router lazy route API), so
// vite-react-ssg can prerender every route to its own HTML file at build time.
export const routes = [
  {
    path: '/',
    element: <Layout />,
    entry: 'src/Components/Layout/Layout.jsx',
    children: [
      { index: true,      lazy: () => import('./Components/Home/Home') },
      { path: 'about',    lazy: () => import('./Components/About/About') },
      { path: 'projects', lazy: () => import('./Components/Projects/Projects') },
      { path: 'contact',  lazy: () => import('./Components/Contact/Contact') },
      // Prerendered as 404.html, which Vercel serves for unknown paths.
      { path: '404',      lazy: () => import('./Components/NotFound/NotFound') },
      { path: '*',        lazy: () => import('./Components/NotFound/NotFound') },
    ],
  },
];
