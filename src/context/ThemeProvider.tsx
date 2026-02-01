
import React, {useState, useEffect } from 'react'
import { ThemeContext, type Theme, type ThemeProviderProps } from './ThemeContext';

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    defaultTheme = 'dark'

}) => {
    const getInitialTheme = (): Theme => {
        if (typeof window === 'undefined') return defaultTheme;

        const savedTheme = localStorage.getItem('theme');
        const validThemes = new Set(['light', 'dark']);

        if (savedTheme && validThemes.has(savedTheme)) {
            return savedTheme as Theme;
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'light'
            : 'dark';
    };
    const [theme, setTheme] = useState<Theme>(getInitialTheme)
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme == 'dark' ? 'light' : 'dark')
    }

useEffect(() => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    document.body.classList.add('dark');
    document.body.classList.remove('light');
  } else {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
    document.body.classList.add('light');
    document.body.classList.remove('dark');
  }
}, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }} >
            {children}
        </ThemeContext.Provider>
    )
}