import Signupform from "../components/signupForm";
// import '../App.css'
export default function Signup() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center md:flex-row bg-[#EDEDED]">

            {/* <section className="">
            </section> */}
            <section className=" md:w-6/12 h-full w-full flex justify-center items-center">
                <Signupform />
            </section>
        </div>
    );
}
