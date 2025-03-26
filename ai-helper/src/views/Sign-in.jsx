import Signinform from "../components/signinForm";
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from '../context/ThemeContext';

export default function Signin() {
    return (
        <ThemeProvider>
            <div className="w-screen h-screen flex flex-col justify-center items-center">
                <section className=" md:w-6/12 h-full w-10/12 flex flex-col justify-center items-center">
                    <Header />
                    <Signinform />
                </section>
            </div>
            {/* <Footer /> */}
        </ThemeProvider>
    );
}
