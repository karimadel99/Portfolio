import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { navLinks } from '@/data/navLinks';
import { useTheme } from '@/hooks/useTheme';

const linkBase =
  'mono text-[0.78rem] tracking-[0.08em] uppercase py-2 transition-colors duration-200';

const linkClass = ({ isActive }) =>
  isActive
    ? `${linkBase} text-blue dark:text-blue-lit relative after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-orange`
    : `${linkBase} text-ink-3 hover:text-ink`;

export default function Nav({ onOpenPalette }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/85 backdrop-blur-md border-b border-rule'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={{ color: 'var(--ink)' }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-baseline gap-2 group"
          aria-label="Karim Adel — Home"
        >
          <span className="serif-display text-2xl text-ink">Karim</span>
          <span className="serif-display text-2xl italic text-orange">Adel</span>
          <span className="mono text-[0.65rem] text-ink-3 tracking-[0.18em] hidden sm:inline ml-1">/ FE+AI</span>
        </Link>

        {/* Center links — desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink to={to} end={end} className={linkClass} onClick={closeMenu}>
                <span className="text-orange mr-1.5">·</span>{label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenPalette}
            aria-label="Open command palette"
            className="hidden md:inline-flex items-center gap-1.5 mono text-[0.65rem] tracking-[0.08em] text-ink-3 hover:text-ink border border-rule hover:border-ink px-2.5 py-1.5 transition-colors duration-200"
          >
            <kbd className="text-[0.6rem]">Ctrl</kbd>
            <kbd className="text-[0.6rem]">K</kbd>
          </button>

          <button
            type="button"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-11 h-11 flex items-center justify-center text-ink-2 hover:text-orange transition-colors duration-200"
          >
            {theme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex btn btn-primary !py-2 !px-3.5 !text-[0.7rem]"
          >
            Resume <span aria-hidden>↗</span>
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-controls="primary-menu"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="md:hidden w-11 h-11 flex items-center justify-center text-ink-2"
          >
            <div className="relative w-5 h-3.5">
              <span
                className={`absolute left-0 right-0 h-0.5 bg-current transition-transform duration-300 ${
                  isMenuOpen ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-0.5 bg-current transition-opacity duration-200 top-1.5 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-0.5 bg-current transition-transform duration-300 ${
                  isMenuOpen ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div
        id="primary-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out border-t ${
          isMenuOpen ? 'max-h-80 opacity-100 border-rule' : 'max-h-0 opacity-0 border-transparent'
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4 bg-paper/95 backdrop-blur-md">
          {navLinks.map(({ to, label, end }, i) => (
            <li key={to} className="flex items-baseline gap-3">
              <span className="mono text-[0.65rem] text-ink-3">{String(i + 1).padStart(2, '0')}</span>
              <NavLink to={to} end={end} className={linkClass} onClick={closeMenu}>
                {label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full justify-center"
              onClick={closeMenu}
            >
              Resume ↗
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
