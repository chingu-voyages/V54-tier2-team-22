import { useContext, useEffect, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import logoDark from '/assets/images/logo-dark-theme.png';
import logoLight from '/assets/images/logo-light-theme.png';

function Header() {
  const { theme, setTheme, themeIcon } = useContext(ThemeContext);
  const [logo, setLogo] = useState();

  useEffect(() => {
    if (theme === 'dark') {
      setLogo(logoDark);
    } else {
      setLogo(logoLight);
    }
  }, [theme]);

  return (
    <header className="flex justify-between items-center w-full">
      <div className="flex justify-start items-end gap-[14px]   tracking-[-0.5px]  ">
        <img src={logo}></img>
        <p className="text-[20px] text-Neutral-900  dark:text-Neutral-200 font-extrabold dark:font-medium">
          AI Helper
        </p>
      </div>

      <button
        className={`h-[44px] w-[44px] max-sm:w-[32px] max-sm:h-[32px]  flex justify-center items-center rounded-[8px] cursor-pointer ${
          theme === 'dark' ? ' bg-Neutral-700' : 'bg-Neutral-100'
        }`}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <img
          src={themeIcon}
          alt="theme icon"
          className="max-sm:w-[20px] max-sm:h-[20px]"
        />
      </button>
    </header>
  );
}

export default Header;
