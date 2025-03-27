import GenericBtn from "./genericBtn";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import GitHub from "../icons/GitHub";


export default function Signinform() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignInWithEmailAndPassword = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // alert('Signed in successfully');
            navigate('/', { replace: true });
        } catch (error) {
            console.error(error);
        }
    };

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            // console.log(result.user); 
            alert("Signed in successfully");
            navigate('/', { replace: true });
        } catch (error) {
            console.error("Error signing in with Google:", error.message);
        }
    };

    const signInWithGithub = async () => {
        try {
            const result = await signInWithPopup(auth, githubProvider);
            // console.log(result.user); 
            alert("Signed in successfully");
            navigate('/', { replace: true });
        } catch (error) {
            console.error("Error signing in with Github:", error.message);
        }
    };

    return (
        // <div className="mt-[5%] flex flex-col justify-start p-12 md:pl-5 md:pt-14 md:pb-4 md:pr-28 gap-4">
        <div className="flex md:w-[65%] w-[85%] h-full flex-col justify-center">

            <div className="flex flex-col gap-5">
                <h1 className="text-4xl dark:text-Neutral-100 text-Neutral-900 mx-auto">Welcome Back</h1>

                <div className="">
                    <button
                        onClick={signInWithGoogle}
                        className="flex justify-center gap-2 border dark:border-Neutral-100 border-Neutral-900 px-3 py-2 rounded-xl w-full"
                        target="_blank"
                    >
                        <img src="../../../src/assets/icons8-google.svg" alt="" />
                        <p>Sign in with Google</p>
                    </button>

                </div>
                <div className="">
                    <button
                        onClick={signInWithGithub}
                        className="flex justify-center gap-2 border dark:border-Neutral-100 border-Neutral-900 px-3 py-2 rounded-xl w-full"
                        target="_blank"
                    >
                        <GitHub />
                        <p>Sign in with Github</p>
                    </button>
                </div>

                <div className="flex justify-center dark:text-Neutral-100 text-Neutral-900 text-2xl">
                    <p>OR</p>
                </div>

                <form onSubmit={handleSignInWithEmailAndPassword} action="" className="flex flex-col gap-5">


                    <div className="flex flex-col gap-3">
                        <label className="text-2xl dark:text-Neutral-100 text-Neutral-900" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            className="border border-[#878787] p-2 rounded-xl bg-[#EDEDED] dark:text-Neutral-900 text-Neutral-100"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            id="email"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="text-2xl dark:text-Neutral-100 text-Neutral-900" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            className="border border-[#878787] p-2 rounded-xl bg-[#EDEDED] dark:text-Neutral-900 text-Neutral-100"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            id="password"
                            required
                        />
                    </div>

                    <GenericBtn text={"Sign in"} type={"submit"} />
                </form>
                <div className="flex justify-center dark:text-Neutral-100 text-Neutral-900">
                    <Link to="/signup" className="cursor-pointer">
                        <p className="font-semibold">
                            Don't have an account?{" "}
                            <span className="text-[#bf7df1] font-semibold">
                                {"   "}
                                Sign up
                            </span>
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
