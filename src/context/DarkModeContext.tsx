import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface DarkModeContextType {
  mode: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);
export const DarkModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<string>(localStorage.theme || 'light');
  const isDarkMode = mode === 'dark';

  const toggleDarkMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    );

    document.documentElement.classList.toggle('dark', mode === 'dark');
    localStorage.setItem('theme', mode);
  }, [mode]);

  return (
    <DarkModeContext.Provider value={{ mode, isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
}
export default DarkModeContext;