import GenericBtn from "./genericBtn";
import React from "react";
import { Link } from "react-router-dom";

export default function Signinform() {
    return (
        // <div className="mt-[5%] flex flex-col justify-start p-12 md:pl-5 md:pt-14 md:pb-4 md:pr-28 gap-4">
        <div className="flex md:w-[65%] w-full h-full flex-col justify-center">

            <div className="flex flex-col gap-5">
                <h1 className="text-4xl text-[#30865D] mx-auto">Welcome Back</h1>

                <div className="">
                    <a
                        href="https://google.com"
                        className="flex justify-center gap-2 border border-black px-3 py-2 rounded-xl"
                        target="_blank"
                    >
                        <img src="../../../src/assets/icons8-google.svg" alt="" />
                        <p>Sign in with Google</p>
                    </a>

                </div>
                <div className="">
                    <a
                        href="htps://apple.com"
                        className="flex justify-center gap-2 border border-black px-3 py-2 rounded-xl"
                        target="_blank"
                    >
                        <img src="../../../src/assets/icons8-apple.svg" alt="" />
                        <p>Sign in with Apple</p>
                    </a>
                </div>

                <div className="flex justify-center text-[#30865D] text-2xl">
                    <p>OR</p>
                </div>

                <form action="" className="flex flex-col gap-5">


                    <div className="flex flex-col gap-3">
                        <label className="text-2xl text-[#30865D]" htmlFor="">
                            Email
                        </label>
                        <input
                            type="email"
                            className="border border-[#878787] p-2 rounded-xl bg-[#EDEDED] text-black"
                            name=""
                            placeholder="Enter your email"
                            id=""
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="text-2xl text-[#30865D]" htmlFor="">
                            Password
                        </label>
                        <input
                            type="password"
                            className="border border-[#878787] p-2 rounded-xl bg-[#EDEDED] text-black"
                            name=""
                            placeholder="Enter your password"
                            id=""
                            required
                        />
                    </div>

                    <GenericBtn text={"Sign in"} />
                </form>
                <div className="flex justify-center">
                    <Link to="/signup">
                        <p className="font-semibold">
                            Have an account?{" "}
                            <a href="" className="text-[#0F3DDE] font-semibold">
                                {"   "}
                                Sign up
                            </a>
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
