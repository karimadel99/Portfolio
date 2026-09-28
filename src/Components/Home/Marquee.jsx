const STACK = [
  'React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion',
  'Redux', 'Node', 'Vite', 'Groq', 'Llama 3', 'OpenAI',
  'Python', 'REST', 'Git', 'Figma', 'Vercel',
];

export default function Marquee() {
  // Duplicate the list so the marquee loops seamlessly (track translates -50%).
  const items = [...STACK, ...STACK];

  return (
    <div
      className="relative overflow-hidden border-y border-rule py-5 select-none"
      role="presentation"
      aria-hidden="true"
    >
      <div className="marquee-track gap-12 px-6">
        {items.map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="serif-display italic text-3xl md:text-5xl text-ink-3 dark:text-ink-3 whitespace-nowrap flex items-center gap-12"
          >
            {s}
            <span className="text-orange not-italic text-2xl md:text-4xl">✦</span>
          </span>
        ))}
      </div>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent" />
    </div>
  );
}
