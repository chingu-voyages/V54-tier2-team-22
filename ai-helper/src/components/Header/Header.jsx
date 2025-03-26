import Logo from './HeaderComponents/Logo';
import Theme from './HeaderComponents/Theme';
import Data from './HeaderComponents/Data';
import SignUpButton from './HeaderComponents/SignUpButton';
function Header() {
  return (
    <header className="flex justify-between items-center w-full pt-[32px] max-xl:pt-[16px]  px-[225px] max-xl:px-[32px] max-sm:px-[16px] ">
      <Logo />
      <div className="flex items-center gap-3">
        <Data />
        <Theme />
        <SignUpButton/>
      </div>
    </header>
  );
}

export default Header;
