import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaCopy, FaCheck, FaEnvelope } from 'react-icons/fa';

const EMAIL = 'karimadel.dev@gmail.com';

const CHANNELS = [
  {
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: FaEnvelope,
    primary: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/karimadel99',
    href: 'https://github.com/karimadel99',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/karim-adel-961506222',
    href: 'https://www.linkedin.com/in/karim-adel-961506222/',
    icon: FaLinkedin,
  },
];

const FAQ = [
  {
    q: 'Are you available for freelance?',
    a: 'Yes — selectively, for projects that need real frontend craft or AI integrations. I\'m best matched on React / Next.js with LLM features.',
  },
  {
    q: 'What\'s your typical engagement?',
    a: 'A focused 4–8 week build, or part-time embedded work alongside an existing team. I\'m clear on scope and ship on schedule.',
  },
  {
    q: 'Where are you based?',
    a: 'Cairo, Egypt — happy to work remote across most timezones with overlap on EU/MENA hours.',
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const reduced = useReducedMotion();

  const fade = reduced
    ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — fail quietly */
    }
  };

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 pt-10 md:pt-20 pb-16 md:pb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="mono text-[0.7rem] tracking-[0.22em] uppercase text-ink-3">
              Chapter 04 — Contact
            </span>
            <span className="flex-1 h-px bg-rule" />
          </div>

          <motion.h1
            {...fade}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
            className="serif-display text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[8.5rem] leading-[0.9] text-ink"
          >
            Let's
            <br />
            build <span className="italic text-orange">something</span>
            <br />
            <span className="text-ink-2">real.</span>
          </motion.h1>

          <motion.p
            {...fade}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-ink-2 dark:text-ink-2 text-lg md:text-xl leading-relaxed mt-10 max-w-[58ch]"
          >
            Got a problem worth building, a frontend that needs craft, or an
            AI feature stuck at the prototype stage? Drop a line — I read every email.
          </motion.p>

          <motion.div
            {...fade}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center gap-3 mt-6 mono text-sm text-ink-2"
          >
            <span className="live-dot" aria-hidden />
            <span className="uppercase tracking-[0.18em] text-ink-3">Available</span>
            <span>Q2 2026 onwards · Remote first</span>
          </motion.div>
        </div>
      </section>

      {/* ── Channels ───────────────────────────────────────────── */}
      <section className="relative border-t border-rule">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16 md:py-24">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-14">
            <div className="col-span-12 md:col-span-4">
              <p className="eyebrow">07 — Channels</p>
              <h2 className="serif-display text-3xl md:text-5xl mt-3 leading-[1]">
                Pick a <span className="italic text-orange">door.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <p className="text-ink-2 text-base leading-relaxed max-w-[55ch]">
                Email is fastest. LinkedIn is fine. Anywhere else, I'll see it eventually.
              </p>
            </div>
          </div>

          <ul className="border-t border-rule">
            {CHANNELS.map(({ label, value, href, icon: Icon, primary }, i) => (
              <li
                key={label}
                className="grid grid-cols-12 gap-4 items-center border-b border-rule py-6 md:py-8 group hover:bg-blue-ghost transition-colors duration-300"
              >
                <span className="col-span-2 md:col-span-1 mono text-sm text-ink-3 tracking-[0.2em]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="col-span-10 md:col-span-3 flex items-center gap-3">
                  <Icon size={16} className="text-ink-2 group-hover:text-orange transition-colors" />
                  <span className="serif-display text-2xl md:text-3xl text-ink">{label}</span>
                </div>
                <span className="col-span-12 md:col-span-5 mono text-sm text-ink-2 truncate">
                  {value}
                </span>
                <div className="col-span-12 md:col-span-3 flex items-center md:justify-end gap-3">
                  {primary && (
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-2 hover:text-orange flex items-center gap-1.5 transition-colors"
                      aria-live="polite"
                    >
                      {copied ? <><FaCheck size={11} className="text-success" /> Copied</> : <><FaCopy size={11} /> Copy</>}
                    </button>
                  )}
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="mono text-[0.7rem] uppercase tracking-[0.14em] text-blue dark:text-blue-lit hover:text-orange flex items-center gap-1.5 transition-colors"
                    aria-label={`${label} — ${value}`}
                  >
                    Open <FaArrowRight size={10} />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className="relative border-t border-rule">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16 md:py-24">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-4">
              <p className="eyebrow">08 — FAQ</p>
              <h2 className="serif-display text-3xl md:text-5xl mt-3 leading-[1]">
                Quick <span className="italic text-orange">answers.</span>
              </h2>
            </div>
            <ul className="col-span-12 md:col-span-7 md:col-start-6 border-t border-rule">
              {FAQ.map(({ q, a }) => (
                <li key={q} className="border-b border-rule py-5">
                  <p className="serif-display text-xl md:text-2xl text-ink leading-snug">{q}</p>
                  <p className="text-ink-2 text-base leading-relaxed mt-2 max-w-[58ch]">{a}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Outro CTA ──────────────────────────────────────────── */}
      <section className="border-t border-rule">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16 md:py-24 flex flex-col md:flex-row gap-6 md:items-end md:justify-between">
          <h2 className="serif-display text-3xl md:text-5xl text-ink leading-[1]">
            Ready when <span className="italic text-orange">you are.</span>
          </h2>
          <a href={`mailto:${EMAIL}`} className="btn btn-accent self-start">
            Send the first message <FaArrowRight size={11} />
          </a>
        </div>
      </section>
    </>
  );
}
