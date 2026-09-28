import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { navLinks } from '@/data/navLinks';

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/karimadel99', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/karim-adel-961506222/', icon: FaLinkedin },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t-2 border-ink mt-12 bg-paper">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">

        {/* Massive wordmark */}
        <div className="pt-12 pb-6">
          <p className="serif-display leading-[0.85] text-[18vw] md:text-[14vw] lg:text-[12vw] text-ink select-none whitespace-nowrap">
            karim<span className="italic text-orange">.</span>
          </p>
        </div>

        <div className="rule" />

        {/* Meta + columns */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 py-10">

          <div className="col-span-12 md:col-span-4 space-y-4">
            <p className="mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-3">Karim Adel · 2026</p>
            <p className="text-ink-2 text-sm leading-relaxed max-w-xs">
              Frontend Tech Lead & AI Integrations.
              Building real products in React, Next.js, and a growing list of LLMs.
            </p>
            <div className="flex items-center gap-2 mono text-[0.7rem] text-ink-3">
              <span className="live-dot" aria-hidden /> Available · Q2 2026
            </div>
          </div>

          <nav className="col-span-6 md:col-span-3" aria-label="Site map">
            <p className="mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-3 mb-4">Sitemap</p>
            <ul className="space-y-2">
              {navLinks.map(({ to, label }, i) => (
                <li key={to}>
                  <Link to={to} className="editorial-link mono text-sm text-ink">
                    <span className="text-ink-3 mr-2">{String(i + 1).padStart(2, '0')}</span>{label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-6 md:col-span-3">
            <p className="mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-3 mb-4">Elsewhere</p>
            <ul className="space-y-2">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mono text-sm text-ink hover:text-orange transition-colors"
                  >
                    <Icon size={13} /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-2 flex md:flex-col md:items-end md:justify-between gap-4 pt-2 md:pt-0">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-2 hover:text-orange flex items-center gap-1.5 transition-colors"
              aria-label="Back to top"
            >
              <FaArrowUp size={10} /> Top
            </button>
            <p className="mono text-[0.65rem] text-ink-3 tracking-[0.16em] uppercase">Built · React · Vite</p>
          </div>
        </div>

        <div className="rule" />

        <div className="py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 mono text-[0.7rem] text-ink-3 uppercase tracking-[0.14em]">
          <span>© {year} Karim Adel · All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-1 h-1 bg-orange rounded-full" />
            Cairo · Remote · {new Date().toISOString().slice(0, 10)}
          </span>
        </div>
      </div>
    </footer>
  );
}
