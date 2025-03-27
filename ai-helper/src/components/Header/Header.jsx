import Logo from './HeaderComponents/Logo';
import Theme from './HeaderComponents/Theme';
import Data from './HeaderComponents/Data';
import SignUpButton from './HeaderComponents/SignUpButton';
import SignInButton from './HeaderComponents/SignInButton';
import SignOutButton from './HeaderComponents/SignOutButton';
import { useLocation } from 'react-router-dom';
function Header() {
  const location = useLocation();
  const currentUrl = location.pathname;
  // console.log(currentUrl);

  return (
    <header className="flex justify-between items-center w-full pt-[32px] max-xl:pt-[16px]  px-[225px] max-xl:px-[32px] max-sm:px-[16px] ">
      <Logo />
      <div className="flex items-center gap-3">
        <Data />
        <Theme />
        {(currentUrl === '/signin' || currentUrl === '/home') && <SignUpButton />}
        {currentUrl === '/signup' && <SignInButton />}
        {currentUrl === '/' && <SignOutButton />}
      </div>
    </header>
  );
}

export default Header;
