export default function SkillIcon({ icon: Icon, label }) {
  return (
    <div
      className="flex flex-col items-center gap-2 border-2 border-indigo-400 p-5 rounded-lg glow-effect cursor-default"
      aria-label={label}
    >
      <Icon size={40} className="text-indigo-400" />
      <span className="text-xs text-slate-400 font-medium text-center leading-tight">
        {label}
      </span>
    </div>
  );
}
