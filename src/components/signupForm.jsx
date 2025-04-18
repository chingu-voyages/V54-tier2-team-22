import GenericBtn from './genericBtn';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, githubProvider, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import GitHub from '../icons/GitHub';
import google from '/assets/images/icons8-google.svg';

export default function Signupform() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleCreateUserWithEmailAndPassword = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // alert('User created successfully');
      navigate('/', { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // console.log(result.user);
      // alert("Signed in successfully");
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  const signInWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      // console.log(result.user);
      // alert("Signed in successfully");
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error signing in with Github:', error.message);
    }
  };

  return (
    // <div className="mt-[5%] flex flex-col justify-start p-12 md:pl-5 md:pt-14 md:pb-4 md:pr-28 gap-4">
    <div className="flex md:w-[65%] w-[85%] h-full flex-col justify-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl dark:text-Neutral-100 text-Neutral-900 mx-auto">
          Create an Account
        </h1>

        <div className="">
          <button
            onClick={signInWithGoogle}
            className="flex justify-center gap-2 border dark:border-Neutral-100 border-Neutral-900 px-3 py-2 rounded-xl w-full"
            target="_blank"
          >
            <img src={google} alt="google icon" />
            <p>Sign up with Google</p>
          </button>
        </div>
        <div className="">
          <button
            onClick={signInWithGithub}
            className="flex justify-center gap-2 border dark:border-Neutral-100 border-Neutral-900 px-3 py-2 rounded-xl w-full"
            target="_blank"
          >
            <GitHub />
            <p>Sign up with Github</p>
          </button>
        </div>

        <div className="flex justify-center dark:text-Neutral-100 text-Neutral-900 text-2xl">
          <p>OR</p>
        </div>

        <form
          onSubmit={handleCreateUserWithEmailAndPassword}
          action=""
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col gap-2">
            <label
              className="text-2xl dark:text-Neutral-100 text-Neutral-900"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="name"
              className="border border-[#878787] p-2 rounded-xl bg-[#EDEDED] dark:text-Neutral-900 text-Neutral-100"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              id="name"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-2xl dark:text-Neutral-100 text-Neutral-900"
              htmlFor="email"
            >
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

          <div className="flex flex-col gap-2">
            <label
              className="text-2xl dark:text-Neutral-100 text-Neutral-900"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              className="border border-[#878787] p-2 rounded-xl bg-[#EDEDED] dark:text-Neutral-900 text-Neutral-100"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              required
            />
          </div>

          <GenericBtn text={'Sign up'} type={'submit'} />
        </form>
        <div className="flex justify-center">
          <Link to="/signin">
            <p className="font-semibold">
              Have an account?{' '}
              <span className="text-[#bf7df1] font-semibold cursor-pointer">
                Sign in
              </span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
