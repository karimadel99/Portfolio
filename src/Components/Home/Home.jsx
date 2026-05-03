import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import TypingEffect from 'react-typing-effect';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import myPic from '@/assets/me-Photoroom.png';
import Marquee from './Marquee';
import NowStrip from './NowStrip';

const STATS = [
  { value: '02+', label: 'Years building' },
  { value: '08+', label: 'Projects shipped' },
  { value: '250+', label: 'Students taught' },
];

const PILLARS = [
  {
    no: '01',
    title: 'React Engineering',
    desc: 'Production React, Next.js, TypeScript and Redux. Component systems that hold up under real product weight — clinics, marketplaces, internal tools.',
  },
  {
    no: '02',
    title: 'Interface Craft',
    desc: 'Tailwind, Framer Motion, accessibility and the boring details — focus rings, reduced-motion paths, breakpoints. Interfaces that feel intentional.',
  },
  {
    no: '03',
    title: 'AI Integrations',
    desc: 'LLMs (Groq, GPT, Llama), agents, retrieval. ResuForge ships generative resume drafting in seconds — not as a demo, as a working tool.',
  },
];

export default function Home() {
  const reduced = useReducedMotion();
  const fade = reduced
    ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 } };

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 pt-10 md:pt-20 pb-16">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">

            {/* Left — text */}
            <div className="col-span-12 md:col-span-7 lg:col-span-7 space-y-6">
              <motion.div
                {...fade}
                transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
                className="flex items-center gap-3"
              >
                <span className="mono text-[0.7rem] tracking-[0.22em] uppercase text-ink-3">
                  Issue 01 · Folio · 2026
                </span>
                <span className="flex-1 h-px bg-rule" />
              </motion.div>

              <motion.h1
                {...fade}
                transition={{ duration: 0.7, delay: 0.05, ease: [0.2, 0.7, 0.2, 1] }}
                className="serif-display text-[3.2rem] sm:text-[4.5rem] md:text-[5.8rem] lg:text-[7rem] leading-[0.92] text-ink"
              >
                Karim
                <br />
                <span className="italic text-orange">Adel.</span>
              </motion.h1>

              <motion.div
                {...fade}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex flex-wrap items-center gap-2 mono text-sm md:text-base text-ink-2"
              >
                <span className="text-ink-3">{'>'}</span>
                <TypingEffect
                  text={[
                    'Frontend Engineer',
                    'React · Next · TypeScript',
                    'AI Integrations',
                    'Coding Instructor',
                  ]}
                  speed={80}
                  eraseSpeed={45}
                  eraseDelay={1600}
                  typingDelay={400}
                  cursorRenderer={(c) => <span className="text-orange">{c}</span>}
                  displayTextRenderer={(t) => <span className="text-ink">{t}</span>}
                />
              </motion.div>

              <motion.p
                {...fade}
                transition={{ duration: 0.6, delay: 0.22 }}
                className="text-ink-2 dark:text-ink-2 text-base md:text-lg max-w-[58ch] leading-relaxed"
              >
                I'm a CS/AI graduate from Helwan University building production React
                interfaces — currently a Frontend Engineer at <span className="text-ink font-semibold">Soficopharm MedTech</span>,
                shipping a clinic SaaS. On the side I'm pushing into generative AI
                and agents, and teaching the next 250 students after the last 250.
              </motion.p>

              <motion.div
                {...fade}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 pt-2"
              >
                <Link to="/projects" className="btn btn-accent">
                  See the work <FaArrowRight size={11} />
                </Link>
                <Link to="/contact" className="btn btn-ghost">
                  Hire / Collaborate
                </Link>
              </motion.div>

              {/* Stats — inline table-like */}
              <motion.dl
                {...fade}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-3 max-w-md pt-8 border-t border-rule"
              >
                {STATS.map(({ value, label }) => (
                  <div key={label} className="pt-4 pr-4">
                    <dt className="serif-display text-3xl md:text-4xl text-blue dark:text-blue-lit">{value}</dt>
                    <dd className="mono text-[0.65rem] text-ink-3 uppercase tracking-[0.14em] mt-1">{label}</dd>
                  </div>
                ))}
              </motion.dl>
            </div>

            {/* Right — editorial photo + meta */}
            <motion.aside
              {...fade}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
              className="col-span-12 md:col-span-5 lg:col-span-5 flex flex-col items-center md:items-end gap-6"
            >
              <div className="photo-editorial w-56 sm:w-64 md:w-full max-w-[320px]">
                <img
                  src={myPic}
                  alt="Karim Adel"
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>

              {/* Meta block */}
              <div className="w-full max-w-[320px] mono text-[0.72rem] text-ink-2 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 pt-2">
                <span className="text-ink-3">LOC</span>   <span>Cairo, EG · Remote</span>
                <span className="text-ink-3">ROLE</span>  <span>Frontend Engineer</span>
                <span className="text-ink-3">STACK</span> <span>React · Next · Tailwind</span>
                <span className="text-ink-3">EDU</span>   <span>BSc CS·AI · Helwan ’25</span>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* ── Now strip ──────────────────────────────────────────── */}
      <NowStrip />

      {/* ── Marquee ────────────────────────────────────────────── */}
      <Marquee />

      {/* ── What I Build ───────────────────────────────────────── */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-20 items-end">
            <div className="col-span-12 md:col-span-4">
              <p className="eyebrow">02 — Capabilities</p>
              <h2 className="serif-display text-4xl md:text-6xl mt-3 leading-[1] text-ink">
                What I <span className="italic text-orange">build.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <p className="text-ink-2 dark:text-ink-2 text-base md:text-lg leading-relaxed max-w-[55ch]">
                Three things, executed with attention. The boring side of frontend work
                — accessibility, performance, semantics — alongside the new side: LLMs that
                actually ship inside real products.
              </p>
            </div>
          </div>

          <ul className="border-t border-rule">
            {PILLARS.map(({ no, title, desc }) => (
              <li
                key={title}
                className="grid grid-cols-12 gap-4 md:gap-10 border-b border-rule py-8 md:py-12 group transition-colors duration-300 hover:bg-blue-ghost"
              >
                <span className="mono text-sm tracking-[0.2em] text-ink-3 col-span-2 md:col-span-1 pt-1">
                  {no}
                </span>
                <h3 className="serif-display text-2xl md:text-4xl text-ink col-span-10 md:col-span-4 group-hover:text-blue dark:group-hover:text-blue-lit transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-ink-2 dark:text-ink-2 text-base leading-relaxed col-span-12 md:col-span-7 max-w-[58ch]">
                  {desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Connect outro ──────────────────────────────────────── */}
      <section className="relative border-t border-rule">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
            <div className="col-span-12 md:col-span-7">
              <p className="eyebrow">03 — Connect</p>
              <h2 className="serif-display text-4xl md:text-6xl lg:text-7xl mt-3 leading-[0.95] text-ink">
                Got a problem worth <span className="italic text-orange">building?</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col gap-3 mono text-sm">
              <a
                href="mailto:karimadel.dev@gmail.com"
                className="editorial-link self-start"
              >
                karimadel.dev@gmail.com
              </a>
              <a
                href="https://github.com/karimadel99"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-ink-2 hover:text-orange transition-colors"
              >
                <FaGithub size={14} /> github.com/karimadel99
              </a>
              <a
                href="https://www.linkedin.com/in/karim-adel-961506222/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-ink-2 hover:text-orange transition-colors"
              >
                <FaLinkedin size={14} /> linkedin.com/in/karim-adel
              </a>
              <Link to="/contact" className="btn btn-primary mt-3 self-start">
                Start a conversation <FaArrowRight size={10} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
