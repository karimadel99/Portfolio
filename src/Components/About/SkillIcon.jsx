const categoryClass = {
  core:    'skill-core',
  styling: 'skill-styling',
  tooling: 'skill-tooling',
};

export default function SkillIcon({ icon: Icon, label, category = 'core' }) {
  return (
    <div
      className={`skill-card skill-card ${categoryClass[category]} flex flex-col items-center gap-2.5 bg-slate-900/60 p-5 rounded-xl cursor-default`}
      aria-label={label}
    >
      <Icon size={36} className="skill-icon-color transition-transform duration-300 group-hover:scale-110" />
      <span className="text-xs font-semibold text-slate-300 text-center leading-tight tracking-wide">
        {label}
      </span>
    </div>
  );
}
