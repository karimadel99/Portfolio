import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import StarryBackground from '../StarryBackground/StarryBackground';

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <StarryBackground />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-700 focus:text-white focus:rounded"
      >
        Skip to main content
      </a>
      <header>
        <Nav />
      </header>
      <main id="main-content" key={pathname} className="animate-fade-in">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
