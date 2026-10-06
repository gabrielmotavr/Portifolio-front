import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

// Tema inicial: preferência salva > preferência do sistema > escuro
function getInitialTheme() {
  try {
    const saved = localStorage.getItem('portfolio_theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // ignora navegadores sem localStorage
  }
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    document.documentElement.style.colorScheme = theme;
    try {
      localStorage.setItem('portfolio_theme', theme);
    } catch {
      // ignora navegadores sem localStorage
    }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
}
