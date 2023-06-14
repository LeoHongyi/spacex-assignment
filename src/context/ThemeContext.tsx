import React, { createContext, useState, ReactNode } from 'react';

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
};

type ThemeProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Function to handle toggling the dark mode
  const handleSetDarkMode = (mode: boolean) => {
    setDarkMode(mode);
  };

  // Value provided to the context
  const themeContextValue: ThemeContextType = {
    darkMode,
    setDarkMode: handleSetDarkMode,
  };

  return (
    // Theme context provider
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
