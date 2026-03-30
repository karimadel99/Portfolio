export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-950 z-50 gap-4">
      <span className="text-6xl font-bold font-montserrat text-indigo-400 animate-pulse-glow">
        KA.
      </span>
      <span className="text-gray-400 text-sm tracking-widest uppercase animate-pulse">
        Loading
      </span>
    </div>
  );
}
