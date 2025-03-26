import { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../../context/ThemeContext';
import logoDark from '/assets/images/logo-dark-theme.png';
import logoLight from '/assets/images/logo-light-theme.png';
import { Link } from 'react-router-dom';

function Logo() {
  const { theme } = useContext(ThemeContext);
  const [logo, setLogo] = useState();
  useEffect(() => {
    if (theme === 'dark') {
      setLogo(logoDark);
    } else {
      setLogo(logoLight);
    }
  }, [theme]);
  return (
    <Link to="/" className="flex justify-start items-end gap-[14px]   tracking-[-0.5px]  ">
      <img src={logo}></img>
      <p className="text-[20px] text-Neutral-900  dark:text-Neutral-200 font-extrabold dark:font-bold">
        PentaGo
      </p>
    </Link>
  );
}

export default Logo;
