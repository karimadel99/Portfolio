import { useState, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaArrowRight, FaThLarge, FaList, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [view, setView] = useState('index'); // 'index' | 'grid'
  const reduced = useReducedMotion();

  const featured = useMemo(() => projects.filter(p => p.featured), []);

  const fade = reduced
    ? { initial: { opacity: 0 }, whileInView: { opacity: 1 } }
    : { initial: { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 } };

  return (
    <>
      {/* ── Header ─────────────────────────────────────────────── */}
      <section className="relative">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 pt-10 md:pt-20 pb-12">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
            <div className="col-span-12 md:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="mono text-[0.7rem] tracking-[0.22em] uppercase text-ink-3">
                  Chapter 03 — Selected Work
                </span>
                <span className="flex-1 h-px bg-rule" />
              </div>
              <h1 className="serif-display text-[3rem] sm:text-[4.5rem] md:text-[6rem] leading-[0.92] text-ink">
                The <span className="italic text-orange">index.</span>
              </h1>
              <p className="text-ink-2 text-base md:text-lg leading-relaxed mt-6 max-w-[58ch]">
                {projects.length} shipped projects spanning AI tools, e-commerce,
                marketplaces, and small craft pieces. Sorted newest first.
              </p>
            </div>

            {/* View toggle */}
            <div className="col-span-12 md:col-span-4 flex md:justify-end">
              <div
                role="tablist"
                aria-label="View projects as"
                className="inline-flex border border-rule"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={view === 'index'}
                  onClick={() => setView('index')}
                  className={`px-4 py-2 mono text-[0.72rem] uppercase tracking-[0.14em] flex items-center gap-2 transition-colors ${
                    view === 'index' ? 'bg-ink text-paper' : 'text-ink-2 hover:bg-paper-2'
                  }`}
                >
                  <FaList size={11} /> Index
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={view === 'grid'}
                  onClick={() => setView('grid')}
                  className={`px-4 py-2 mono text-[0.72rem] uppercase tracking-[0.14em] flex items-center gap-2 transition-colors ${
                    view === 'grid' ? 'bg-ink text-paper' : 'text-ink-2 hover:bg-paper-2'
                  }`}
                >
                  <FaThLarge size={11} /> Grid
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured strip (only in index view) ────────────────── */}
      {view === 'index' && featured.length > 0 && (
        <section className="relative border-y border-rule bg-paper-2/40">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-12 md:py-16">
            <div className="flex items-baseline justify-between mb-8">
              <p className="eyebrow">Featured</p>
              <span className="mono text-[0.7rem] text-ink-3">{featured.length} entries</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {featured.map((p, i) => (
                <motion.div
                  key={p.title}
                  {...fade}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.06 }}
                >
                  <ProjectCard project={p} index={projects.indexOf(p)} accent={i === 0} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Projects body ──────────────────────────────────────── */}
      <section className="relative">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16 md:py-24">

          {view === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {projects.map((p, i) => (
                <motion.div
                  key={p.title}
                  {...fade}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                >
                  <ProjectCard project={p} index={i} />
                </motion.div>
              ))}
            </div>
          ) : (
            <ul className="border-t border-rule">
              {projects.map((p, i) => (
                <motion.li
                  key={p.title}
                  {...fade}
                  viewport={{ once: true, margin: '-5% 0px' }}
                  transition={{ duration: 0.55, delay: i * 0.04 }}
                  className="group border-b border-rule"
                >
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} — open live demo`}
                    className="grid grid-cols-12 gap-3 md:gap-6 items-center py-6 md:py-8 px-2 md:px-3 transition-colors duration-300 hover:bg-blue-ghost relative"
                  >
                    {/* Index */}
                    <span className="col-span-2 md:col-span-1 mono text-sm md:text-base text-ink-3 tracking-[0.18em] group-hover:text-orange transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Title + role */}
                    <div className="col-span-10 md:col-span-4">
                      <h2 className="serif-display text-2xl md:text-4xl text-ink leading-tight group-hover:text-blue dark:group-hover:text-blue-lit transition-colors">
                        {p.title}
                      </h2>
                      <p className="mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-3 mt-1.5">
                        {p.role}
                      </p>
                    </div>

                    {/* Stack */}
                    <div className="col-span-12 md:col-span-4 flex flex-wrap gap-1.5">
                      {p.tags.slice(0, 3).map(t => <span key={t} className="chip">{t}</span>)}
                    </div>

                    {/* Year + Arrow */}
                    <div className="col-span-12 md:col-span-3 flex items-center justify-between md:justify-end gap-4 md:gap-6">
                      <span className="mono text-sm text-ink-3">{p.year}</span>
                      <span className="mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-2 flex items-center gap-1.5 group-hover:text-orange transition-all">
                        Open
                        <FaArrowRight size={10} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>

                    {/* Hover preview image — desktop only */}
                    <span
                      className="hidden lg:block pointer-events-none absolute right-32 top-1/2 -translate-y-1/2 w-44 h-28 overflow-hidden border border-ink opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10"
                      aria-hidden="true"
                    >
                      <img src={p.image} alt="" className="w-full h-full object-cover" />
                    </span>
                  </a>

                  {/* Secondary links — visible always on mobile, on hover desktop */}
                  <div className="px-2 md:px-3 pb-4 md:pb-3 flex gap-5 md:opacity-0 md:group-hover:opacity-100 md:max-h-0 md:group-hover:max-h-12 md:overflow-hidden transition-all duration-300">
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-3 hover:text-orange transition-colors flex items-center gap-1.5"
                      >
                        <FaGithub size={11} /> Source
                      </a>
                    )}
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-3 hover:text-orange transition-colors flex items-center gap-1.5"
                    >
                      <FaExternalLinkAlt size={10} /> Demo
                    </a>
                  </div>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ── Outro ──────────────────────────────────────────────── */}
      <section className="border-t border-rule">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-20 md:py-24 grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow">More on the way</p>
            <h2 className="serif-display text-3xl md:text-5xl mt-3 leading-[1] text-ink">
              The next one is being <span className="italic text-orange">built right now.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <a
              href="https://github.com/karimadel99"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Follow on GitHub <FaArrowRight size={11} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
