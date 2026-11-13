import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
const storageKey = 'portfolio-theme';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  );

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const applyTheme = (next: Theme) => {
      document.documentElement.dataset.theme = next;
      setTheme(next);
    };
    const followSystem = () => {
      let saved: string | null = null;
      try { saved = localStorage.getItem(storageKey); } catch { /* Storage may be unavailable. */ }
      if (saved !== 'light' && saved !== 'dark') applyTheme(media.matches ? 'dark' : 'light');
    };
    const syncTabs = (event: StorageEvent) => {
      if (event.key !== storageKey && event.key !== null) return;
      if (event.newValue === 'light' || event.newValue === 'dark') applyTheme(event.newValue);
      else followSystem();
    };
    media.addEventListener('change', followSystem);
    window.addEventListener('storage', syncTabs);
    return () => {
      media.removeEventListener('change', followSystem);
      window.removeEventListener('storage', syncTabs);
    };
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try { localStorage.setItem(storageKey, next); } catch { /* Keep the in-memory preference. */ }
  };

  return { theme, toggleTheme };
}
