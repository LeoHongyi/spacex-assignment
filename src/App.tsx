import ThemeSwitcher from './components/ThemeSwitcher';
import BackToTopButton from './components/BackToTopButton';
import AppRoute from './router';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher>
        <AppRoute />
        <BackToTopButton />
      </ThemeSwitcher>
    </ThemeProvider>
  );
}

export default App;
