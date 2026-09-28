import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, summary';

/**
 * Trailing cursor ring + dot. Desktop (fine pointer) only, hidden for
 * reduced motion. The native cursor stays visible — this is an accent,
 * not a replacement.
 */
export default function CursorFollower() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      setActive(Boolean(e.target?.closest?.(INTERACTIVE)));
    };
    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [x, y]);

  if (!enabled || reduced) return null;

  return (
    <div aria-hidden="true" className="fixed inset-0 z-[70] pointer-events-none">
      {/* Dot — tracks instantly */}
      <motion.div
        className="absolute w-[5px] h-[5px] rounded-full bg-orange"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      {/* Ring — trails on a spring, grows over interactive elements */}
      <motion.div
        className="absolute w-8 h-8 rounded-full border border-orange"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: active ? 1.7 : 1,
          opacity: visible ? (active ? 0.9 : 0.45) : 0,
          backgroundColor: active ? 'rgb(var(--c-orange) / 0.08)' : 'rgb(var(--c-orange) / 0)',
        }}
        transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
      />
    </div>
  );
}
