import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const STORAGE_KEY = 'site-theme';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Initialize from localStorage (if present). Otherwise follow system preference.
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'dark') {
        document.documentElement.classList.add('dark');
        setTheme('dark');
      } else if (saved === 'light') {
        document.documentElement.classList.remove('dark');
        setTheme('light');
      } else {
        // No saved preference: follow system preference
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
          document.documentElement.classList.add('dark');
          setTheme('dark');
        } else {
          document.documentElement.classList.remove('dark');
          setTheme('light');
        }
      }
    } catch (e) {
      // If access to localStorage is blocked, fallback to system or light
      const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.documentElement.classList.add('dark');
        setTheme('dark');
      } else {
        document.documentElement.classList.remove('dark');
        setTheme('light');
      }
    }
  }, []);

  const toggle = () => {
    // Add a class to smoothly transition theme properties, then remove it
    try {
      document.documentElement.classList.add('theme-transition');
      window.setTimeout(() => document.documentElement.classList.remove('theme-transition'), 350);
    } catch (e) {
      // ignore
    }
    const next = theme === 'light' ? 'dark' : 'light';
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // ignore
    }

    if (next === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    setTheme(next);
  };

  return (
    <button
      type="button"
      aria-pressed={theme === 'dark'}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={toggle}
      className="inline-flex items-center justify-center p-2 rounded-md text-blue-200/90 hover:bg-[#1e3a8a]/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#60a5fa]"
    >
      {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggle;
