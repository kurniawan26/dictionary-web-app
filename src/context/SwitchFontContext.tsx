import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type FontContextType = {
  font: string;
  switchFont: (font: string) => void;
};

const FontContext = createContext<FontContextType | undefined>(undefined);

export const FontProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [font, setFont] = useState<string>('default');

  const switchFont = (newFont: string) => {
    setFont(newFont);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('font-family', font);
  }, [font]);

  return (
    <FontContext.Provider value={{ font, switchFont }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = (): FontContextType => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error('useFont must be used within a FontProvider');
  }
  return context;
};