import { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleDark: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleDark: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('isDarkMode');
    if (stored === 'true') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    requestAnimationFrame(() => {
      setReady(true);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDark = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleDark }}>
      <div
        className={`transition-opacity ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useDarkMode = () => useContext(ThemeContext);
