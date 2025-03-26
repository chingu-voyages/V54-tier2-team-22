import Signinform from '../components/signinForm';
import { ThemeProvider } from '../context/ThemeContext';

export default function Signin() {
  return (
    <ThemeProvider>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <section className=" md:w-6/12 h-full w-10/12 flex flex-col justify-center items-center">
          <Signinform />
        </section>
      </div>
    </ThemeProvider>
  );
}
