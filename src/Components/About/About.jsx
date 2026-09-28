import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { skills } from '@/data/skills';
import { useInView } from '@/hooks/useInView';

const EXPERIENCES = [
  {
    no: '01',
    role: 'Frontend Tech Lead',
    company: 'Soficopharm — MedTech',
    type: 'Fulltime · Hybrid',
    date: 'Feb 2025 — Present',
    location: 'Cairo, EG',
    desc: 'Promoted from Frontend Engineer (Apr 2026). Architect and sole builder of 4 production portals for a patient-support platform — Turborepo monorepo, OpenAPI-typed client, MSW, Playwright. Own the API contract, auth design, and code reviews. Previously shipped a SaaS clinic-management platform with Google Maps, i18n, and automated booking.',
    stack: ['React', 'TypeScript', 'Turborepo', 'Tailwind', 'Playwright'],
  },
  {
    no: '02',
    role: 'Software Engineer',
    company: 'Datalentech',
    type: 'Part-time',
    date: 'Aug 2025 — Present',
    location: 'Remote',
    desc: 'Built a 6-screen supply-chain optimization dashboard over a Python backend — forecasting, SKU allocation, forecast evaluation (WAPE/MAPE). Audited and hardened a ~156k-line React recruiting platform: −58% bundle via route splitting, Chakra → Tailwind migration, data-layer collapse onto a generated OpenAPI client.',
    stack: ['React', 'TypeScript', 'Zod', 'Tailwind'],
  },
  {
    no: '03',
    role: 'Frontend Engineer',
    company: 'Silicon Squire',
    type: 'Freelance',
    date: 'Sep 2024 — Jan 2025',
    location: 'Remote',
    desc: 'Built a dynamic product showcase for Babil Agency. Designed reusable components handling variable data structures — clean handoff and maintainability.',
    stack: ['React', 'Tailwind'],
  },
  {
    no: '04',
    role: 'Coding Instructor',
    company: 'Mind Builders Academy',
    type: 'Part-time',
    date: 'Jan 2023 — May 2024',
    location: 'Cairo, EG',
    desc: 'Taught 250+ students — Scratch, Python, HTML/CSS, JavaScript, Bootstrap. Built workshops that lifted student project quality and accuracy noticeably.',
    stack: ['Python', 'JavaScript', 'HTML/CSS'],
  },
];

const TOOLKIT_GROUPS = [
  { key: 'core',    label: 'Core' },
  { key: 'styling', label: 'Styling' },
  { key: 'tooling', label: 'Tooling' },
];

export default function About() {
  const { ref: forwardRef, inView: forwardInView } = useInView();

  const grouped = TOOLKIT_GROUPS.map(g => ({
    ...g,
    items: skills.filter(s => s.category === g.key),
  }));

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 pt-10 md:pt-20 pb-20">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="mono text-[0.7rem] tracking-[0.22em] uppercase text-ink-3">
                  Chapter 02 — About
                </span>
                <span className="flex-1 h-px bg-rule" />
              </div>

              <h1 className="serif-display text-[2.8rem] sm:text-[4.2rem] md:text-[5.5rem] leading-[0.95] text-ink">
                Engineer.
                <br />
                <span className="italic text-orange">Teacher.</span>
                <br />
                <span className="text-ink-2">Builder.</span>
              </h1>
            </div>

            <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col gap-5 mt-2">
              <p className="serif-display text-xl md:text-2xl leading-snug text-ink-2 dark:text-ink-2">
                I'm <span className="text-ink font-semibold">Karim Adel</span> — a frontend tech lead
                and CS/AI graduate from Helwan University ('25). I work in React, TypeScript, and
                Tailwind, with production experience on MedTech, SaaS, and supply-chain
                platforms — and I'm pushing hard into generative AI and agents.
              </p>
              <p className="text-ink-2 text-base leading-relaxed max-w-[58ch]">
                Two and a half years of teaching shaped how I write code:
                if I can't explain it to a curious student, I rewrite it. I treat
                interfaces like instruments — accessibility, motion, and clarity are
                not extras, they're the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ─────────────────────────────────────────── */}
      <section className="relative border-t border-rule">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-4">
              <p className="eyebrow">04 — Career</p>
              <h2 className="serif-display text-4xl md:text-6xl mt-3 leading-[1]">
                Selected <span className="italic text-orange">work history.</span>
              </h2>
            </div>
          </div>

          <ul className="divide-y divide-[color:var(--rule)] border-t border-rule">
            {EXPERIENCES.map((e) => (
              <li
                key={e.company}
                className="grid grid-cols-12 gap-4 md:gap-10 py-8 md:py-12 group hover:bg-blue-ghost transition-colors duration-300"
              >
                <div className="col-span-2 md:col-span-1 mono text-sm text-ink-3 tracking-[0.2em] pt-1">
                  {e.no}
                </div>

                <div className="col-span-10 md:col-span-4">
                  <h3 className="serif-display text-2xl md:text-3xl text-ink leading-tight">
                    {e.role}
                  </h3>
                  <p className="mono text-[0.78rem] uppercase tracking-[0.14em] text-blue dark:text-blue-lit mt-2">
                    {e.company}
                  </p>
                  <p className="mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-3 mt-1">
                    {e.type} · {e.location}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-7 flex flex-col gap-3">
                  <span className="mono text-[0.72rem] uppercase tracking-[0.18em] text-ink-3">{e.date}</span>
                  <p className="text-ink-2 dark:text-ink-2 text-base leading-relaxed max-w-[58ch]">{e.desc}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {e.stack.map((t) => <span key={t} className="chip">{t}</span>)}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Toolkit ────────────────────────────────────────────── */}
      <section className="relative border-t border-rule">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-4">
              <p className="eyebrow">05 — Toolkit</p>
              <h2 className="serif-display text-4xl md:text-6xl mt-3 leading-[1]">
                Daily <span className="italic text-orange">stack.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <p className="text-ink-2 text-base leading-relaxed max-w-[55ch]">
                What I reach for. Grouped by where it lives in the stack — not as a buzzword
                cloud, as the actual tools that make my day.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {grouped.map(({ key, label, items }) => (
              <div key={key} className="border-t border-rule pt-6">
                <p className="mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-3 mb-5">
                  {label}
                </p>
                <ul className="flex flex-col gap-3">
                  {items.map(({ icon: Icon, label: name }, idx) => (
                    <li
                      key={name}
                      className="flex items-baseline gap-3 group cursor-default"
                    >
                      <span className="mono text-[0.65rem] text-ink-3 w-7">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <Icon size={18} className="text-ink-2 group-hover:text-orange transition-colors duration-200" aria-hidden />
                      <span className="serif-display text-xl md:text-2xl text-ink leading-none group-hover:text-blue dark:group-hover:text-blue-lit transition-colors duration-200">
                        {name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Looking forward ────────────────────────────────────── */}
      <section ref={forwardRef} className="relative border-t border-rule">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-20 md:py-32">
          <div
            className={`max-w-3xl transition-all duration-700 ${
              forwardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="eyebrow">06 — Next</p>
            <h2 className="serif-display text-4xl md:text-6xl lg:text-7xl mt-3 leading-[0.95]">
              Looking <span className="italic text-orange">forward.</span>
            </h2>
            <p className="text-ink-2 dark:text-ink-2 text-base md:text-lg leading-relaxed mt-8 max-w-[60ch]">
              Always eager for the next problem worth solving. Right now: deeper into
              generative AI, agent orchestration, evals, and bringing those into
              real products — not demos. If that overlaps with what you're working on,
              say hi.
            </p>
            <div className="flex flex-wrap gap-3 pt-8">
              <Link to="/projects" className="btn btn-accent">
                See selected work <FaArrowRight size={11} />
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
