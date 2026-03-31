import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaFileAlt } from 'react-icons/fa';
import { navLinks } from '@/data/navLinks';

const activeClass =
  'block py-2 px-3 text-indigo-400 font-semibold md:p-0 nav-active-underline';
const inactiveClass =
  'block py-2 px-3 text-slate-400 rounded hover:text-white hover:bg-slate-800 md:hover:bg-transparent md:hover:text-slate-200 md:p-0 transition-colors duration-200';
const navLinkClass = ({ isActive }) => (isActive ? activeClass : inactiveClass);

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`bg-slate-900/95 backdrop-blur-md border-b border-slate-800/80 fixed w-full z-20 top-0 start-0 transition-shadow duration-300 ${
        scrolled ? 'shadow-lg shadow-black/30' : ''
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          onClick={closeMenu}
          className="self-center text-2xl font-bold whitespace-nowrap text-white font-montserrat hover:text-indigo-400 transition-colors duration-200"
        >
          KA<span className="text-indigo-400">.</span>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            href="https://drive.google.com/drive/folders/11qfTX5ReRnbUlhDDoTM_RNf57vKKKU3W"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-indigo-600 hover:bg-indigo-500 font-roboto font-medium rounded-lg text-sm px-4 py-2 text-center flex items-center gap-2 transition-colors duration-200"
          >
            <FaFileAlt size={12} />
            Resume
          </a>

          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-slate-400 rounded-lg md:hidden hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-700 transition-colors"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div
          id="navbar-sticky"
          className={`w-full md:flex md:w-auto md:order-1 overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'
          }`}
        >
          <ul className="flex font-roboto flex-col p-4 md:p-0 mt-4 font-medium border border-slate-700 rounded-lg bg-slate-800 md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            {navLinks.map(({ to, icon: Icon, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  <Icon className="inline mr-1.5 opacity-70" size={13} />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
