import React, { useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContext } from '../context/ThemeContext';
import { ThemeSwitcherProps } from '../types';

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ children }) => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null; //
  }

  const { darkMode } = themeContext;

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
    typography: {
      subtitle1: {
        fontWeight: 200,
      },
      h5: {
        fontWeight: 600,
      },
      body1: {
        marginTop: 10,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <IconButton onClick={toggleTheme} color="inherit">
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton> */}
      {children}
    </ThemeProvider>
  );
};

export default ThemeSwitcher;
