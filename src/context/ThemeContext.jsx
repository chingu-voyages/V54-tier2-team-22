import { createContext, useState, useEffect } from 'react';
import iconSun from '/assets/images/icon-sun.svg';
import iconMoon from '/assets/images/icon-moon.svg';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light')
  );

  const [themeIcon, setThemeIcon] = useState();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty(
        '--scrollbar-thumb-color',
        '#404254'
      );
      document.documentElement.style.setProperty(
        '----placeholder-color',
        '#E4E4EF'
      );
      setThemeIcon(iconSun);
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty(
        '--scrollbar-thumb-color',
        '#FFFFFF'
      );
      document.documentElement.style.setProperty(
        '----placeholder-color',
        '#2A2B37'
      );
      setThemeIcon(iconMoon);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeIcon }}>
      <div className=" transition-all duration-500  bg-[url(/public/assets/images/bg-light-theme.png)]  dark:bg-[url(/public/assets/images/bg-dark-theme.png)]  dark:text-Neutral-100 text-Neutral-900 flex flex-col gap-[48px] max-xl:gap-[40px] items-center ">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
