import { Link } from "react-router-dom";
import GenericBtn from "../components/genericBtn";

// export function Landing() {
//     return (
//         <main className="flex flex-col w-full items-center gap-[40px] max-xl:gap-[40px] pt-[32px] max-xl:pt-[16px] px-[225px] max-xl:px-[32px] max-sm:px-[16px]">
//             <h1 className="dark:text-Neutral-100 text-Neutral-900 font-bold text-[64px] max-sm:text-[40px] tracking-[-1px] leading-[100%] max-w-[548px] max-sm:max-w-[343px] text-center">
//                 Get High-Quality AI Answers
//             </h1>
//             {/* <PentagramForm />
//       <ResultArea /> */}
//         </main>
//     );
// }

export function Landing() {
    return (
        <main className="flex flex-col w-full items-center gap-[40px] max-xl:gap-[40px] pt-[32px] max-xl:pt-[16px] px-[225px] max-xl:px-[32px] max-sm:px-[16px]">
            <h1 className="dark:text-Neutral-100 text-Neutral-900 font-bold text-[64px] max-sm:text-[40px] tracking-[-1px] leading-[100%] max-w-[548px] max-sm:max-w-[343px] text-center">
                Build the Perfect AI Prompt
            </h1>
            <p className="text-Neutral-700 dark:text-Neutral-300 text-lg max-w-[600px] text-center">
                Craft high-quality AI prompts effortlessly with our advanced AI-powered prompt builder. Using the Pentagram Method, our tool helps you structure your inputs with precision, ensuring more accurate, relevant, and insightful AI responses. Whether you're generating content, brainstorming ideas, or fine-tuning AI interactions, our system guides you step by step to create the perfect prompt—so you get the best results, every time.
            </p>
            <Link className="bg-Primary-500  font-semibold  px-6 py-3  shadow-md hover:bg-Primary-600 transition bg-[#bf7df1] p-2 text-white text-lg rounded-lg mx-1" to={"/signup"}>
                Start Building Now
            </Link>

        </main>
    );
}