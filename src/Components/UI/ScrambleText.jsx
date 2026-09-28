import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const GLYPHS = '!<>-_\\/[]{}—=+*^?#λΔ01';

/**
 * Cycles through phrases with a terminal-style "decoder" scramble:
 * characters flicker through random glyphs before resolving.
 * Falls back to a simple swap when the user prefers reduced motion.
 */
export default function ScrambleText({ phrases, hold = 2200, className = '' }) {
  const reduced = useReducedMotion();
  const [chars, setChars] = useState(() =>
    phrases[0].split('').map((c) => ({ c, scrambling: false }))
  );
  const indexRef = useRef(0);

  useEffect(() => {
    if (reduced) {
      const id = setInterval(() => {
        indexRef.current = (indexRef.current + 1) % phrases.length;
        setChars(phrases[indexRef.current].split('').map((c) => ({ c, scrambling: false })));
      }, hold + 900);
      return () => clearInterval(id);
    }

    let rafId = 0;
    let timeoutId = 0;
    let queue = [];
    let frame = 0;

    const update = () => {
      let done = 0;
      const out = queue.map((q) => {
        if (frame >= q.end) {
          done++;
          return { c: q.to, scrambling: false };
        }
        if (frame >= q.start) {
          if (!q.glyph || Math.random() < 0.28) {
            q.glyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }
          return { c: q.glyph, scrambling: true };
        }
        return { c: q.from, scrambling: false };
      });
      setChars(out);

      if (done === queue.length) {
        timeoutId = setTimeout(next, hold);
      } else {
        frame++;
        rafId = requestAnimationFrame(update);
      }
    };

    const next = () => {
      const prev = phrases[indexRef.current];
      indexRef.current = (indexRef.current + 1) % phrases.length;
      const target = phrases[indexRef.current];
      const len = Math.max(prev.length, target.length);

      queue = Array.from({ length: len }, (_, i) => {
        const start = Math.floor(Math.random() * 22);
        return {
          from: prev[i] || '',
          to: target[i] || '',
          start,
          end: start + 8 + Math.floor(Math.random() * 22),
          glyph: '',
        };
      });
      frame = 0;
      update();
    };

    timeoutId = setTimeout(next, hold);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [phrases, hold, reduced]);

  return (
    <span className={className} aria-label={phrases[indexRef.current]} role="text">
      {chars.map((ch, i) => (
        <span key={i} aria-hidden="true" className={ch.scrambling ? 'text-ink-3' : undefined}>
          {ch.c}
        </span>
      ))}
    </span>
  );
}
