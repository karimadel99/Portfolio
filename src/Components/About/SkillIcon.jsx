export default function SkillIcon({ icon: Icon, label }) {
  return (
    <div
      className="relative group flex justify-center items-center border-2 border-indigo-400 p-5 rounded-lg glow-effect cursor-default"
      aria-label={label}
    >
      <Icon size={50} className="text-indigo-400" />
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
        {label}
      </span>
    </div>
  );
}
