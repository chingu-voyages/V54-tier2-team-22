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
      setThemeIcon(iconSun);
    } else {
      document.documentElement.classList.remove('dark');
      setThemeIcon(iconMoon);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeIcon }}>
      <div className=" transition-all duration-500 min-h-screen bg-[url(/public/assets/images/bg-light-theme.png)]  dark:bg-[url(/public/assets/images/bg-dark-theme.png)] pt-[32px] max-xl:pt-[16px]  px-[225px] max-xl:px-[32px] max-sm:px-[16px]  dark:text-Neutral-100 text-Neutral-900 flex flex-col gap-[48px] max-xl:gap-[40px] items-center ">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
