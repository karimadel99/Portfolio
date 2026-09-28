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
  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
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
      const next = prev === 'dark' ? 'light' : 'dark';
      queueMicrotask(() =>
        window.dispatchEvent(new CustomEvent(SYNC_EVENT, { detail: next }))
      );
      return next;
    });
  }, []);

  return { theme, toggle };
}
