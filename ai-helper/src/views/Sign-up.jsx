import Signupform from '../components/signupForm';
import { ThemeProvider } from '../context/ThemeContext';

export default function Signup() {
  return (
    // <main className="flex flex-col w-full items-center gap-[40px] max-xl:gap-[40px] pt-[32px] max-xl:pt-[16px] px-[225px] max-xl:px-[32px] max-sm:px-[16px]">
    //   <section className="  h-full w-full lg:w-3/4 flex flex-col justify-center items-center">
    //     <Signupform />
    //   </section>
    // </main>
    <ThemeProvider>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <section className=" md:w-6/12 h-full w-10/12 flex flex-col justify-center items-center">
          <Signupform />
        </section>
      </div>
    </ThemeProvider>
  );
}
