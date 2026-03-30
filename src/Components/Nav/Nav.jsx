import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaFileAlt } from 'react-icons/fa';
import { navLinks } from '@/data/navLinks';

const activeClass =
  'block py-2 px-3 text-white bg-indigo-700 rounded md:bg-transparent md:text-indigo-700 md:p-0 md:dark:text-indigo-500';
const inactiveClass =
  'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-700 md:p-0 md:dark:hover:text-indigo-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700';
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
      className={`bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600 transition-shadow duration-300 ${
        scrolled ? 'shadow-lg backdrop-blur-sm' : ''
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          onClick={closeMenu}
          className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white font-montserrat hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          KA.
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            href="https://drive.google.com/file/d/1Oj5L3Co2xUr3ZcunFbHwMg-524lQqgwy/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-indigo-700 font-roboto hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 flex items-center gap-2"
          >
            <FaFileAlt />
            Resume
          </a>

          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          <ul className="flex font-roboto flex-col text-xl p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLinks.map(({ to, icon: Icon, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  <Icon className="inline mr-2" />
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
