export default function LoadingScreen() {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-50 gap-6"
      style={{ background: 'var(--paper)' }}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-baseline gap-2">
        <span className="serif-display text-7xl md:text-8xl text-ink">Karim</span>
        <span className="serif-display text-7xl md:text-8xl italic text-orange">Adel.</span>
      </div>
      <div className="flex items-center gap-3 mono text-[0.72rem] uppercase tracking-[0.22em] text-ink-3">
        <span className="inline-block w-8 h-px bg-orange animate-[caret_1.05s_steps(2)_infinite]" />
        Loading
        <span className="inline-block w-8 h-px bg-orange animate-[caret_1.05s_steps(2)_infinite]" />
      </div>
      <span className="sr-only">Loading the page</span>
    </div>
  );
}
