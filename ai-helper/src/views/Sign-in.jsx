import Signinform from "../components/signinForm";

export default function Signin() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center md:flex-row bg-[#EDEDED]">
            {/* <section className="w-6/12 h-screen"> */}
            {/* <div className="">
                    <img src="../../src/assets/bankly-logo.svg" alt="" />
                </div> */}
            {/* <div className="hidden h-4/5 md:flex justify-center items-center">
                    <img src="../../src/assets/Savings-cuate.svg" alt="" />
                </div> */}
            {/* </section> */}
            <section className=" md:w-6/12 h-full w-full flex justify-center items-center">
                <Signinform />
            </section>
        </div>
    );
}
