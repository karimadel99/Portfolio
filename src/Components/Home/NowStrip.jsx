const NOW = [
  { label: 'Building', value: 'Soficopharm clinic SaaS' },
  { label: 'Studying', value: 'Agents · RAG · Evals' },
  { label: 'Available', value: 'Q2 2026 · Remote' },
];

export default function NowStrip() {
  return (
    <div className="border-y border-rule bg-paper-2/50 dark:bg-[color:var(--paper-2)]/40">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-3 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8 text-[0.78rem] mono">
        <div className="flex items-center gap-2 text-ink-2">
          <span className="live-dot" aria-hidden="true" />
          <span className="uppercase tracking-[0.2em] text-ink-3">Now</span>
        </div>

        <ul className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6 flex-1 min-w-0">
          {NOW.map(({ label, value }) => (
            <li key={label} className="flex items-baseline gap-2 truncate">
              <span className="text-ink-3 uppercase tracking-[0.14em] text-[0.66rem]">{label}</span>
              <span className="text-ink truncate">{value}</span>
            </li>
          ))}
        </ul>

        <span className="hidden md:inline mono text-[0.7rem] text-ink-3 tracking-[0.18em]">
          {new Date().toISOString().slice(0, 10)}
        </span>
      </div>
    </div>
  );
}
