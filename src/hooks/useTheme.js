import { useEffect, useState, useCallback } from 'react';

const STORAGE_KEY = 'ka-theme';

function getInitial() {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const SYNC_EVENT = 'ka-theme-change';

export function useTheme() {
  // null until mounted: the prerendered HTML can't know the visitor's theme, so
  // the first client render must match the server. The inline script in
  // index.html has already applied the right class before paint.
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(getInitial());
  }, []);

  useEffect(() => {
    if (theme === null) return;
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  // Keep every useTheme() instance (Nav, CommandPalette, …) in sync.
  useEffect(() => {
    const onSync = (e) => setTheme(e.detail);
    window.addEventListener(SYNC_EVENT, onSync);
    return () => window.removeEventListener(SYNC_EVENT, onSync);
  }, []);

  const toggle = useCallback(() => {
    setTheme(prev => {
      const current = prev === null ? getInitial() : prev;
      const next = current === 'dark' ? 'light' : 'dark';
      queueMicrotask(() =>
        window.dispatchEvent(new CustomEvent(SYNC_EVENT, { detail: next }))
      );
      return next;
    });
  }, []);

  const current = theme === null ? 'light' : theme;
  return { theme: current, toggle: toggle };
}
