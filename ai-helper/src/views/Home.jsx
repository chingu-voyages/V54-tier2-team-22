import PentagramForm from '../components/PentagramForm/PentagramForm';
import { ResultArea } from '../components/ResultArea';

export function Home() {
  // const loginWithEmailLink = async () => {
  //   if (isSignInWithEmailLink(auth, window.location.href)) {
  //     try {
  //       const result = await signInWithEmailLink(auth, email, window.location.href);
  //       window.localStorage.removeItem("emailForSignIn");
  //       alert(`Signed in as ${result.user.email}`);
  //       return result.user;
  //     } catch (error) {
  //       console.error("Error signing in:", error);
  //       alert("Failed to sign in. Please try again.");
  //     }
  //   } else {
  //     alert("Invalid sign-in link. Please request a new one.");
  //   }
  // };
  return (
    <main className="flex flex-col w-full items-center gap-[40px] max-xl:gap-[40px] pt-[32px] max-xl:pt-[16px] px-[225px] max-xl:px-[32px] max-sm:px-[16px]">
      <h1 className="dark:text-Neutral-100 text-Neutral-900 font-bold text-[64px] max-sm:text-[40px] tracking-[-1px] leading-[100%] max-w-[548px] max-sm:max-w-[343px] text-center">
        Get High-Quality AI Answers
      </h1>
      <PentagramForm />
      <ResultArea />
    </main>
  );
}
