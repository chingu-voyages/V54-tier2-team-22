import PentagramForm from '../components/PentagramForm/PentagramForm';
import { ResultArea } from '../components/ResultArea/ResultArea';

export function Home() {
  return (
    <main className="flex flex-col w-full items-center gap-[20px]  px-[225px] max-xl:px-[32px] max-sm:px-[16px]">
      <h1 className="dark:text-Neutral-100 text-Neutral-900 font-bold text-[64px] max-sm:text-[40px] tracking-[-1px] leading-[100%] max-w-[548px] max-sm:max-w-[343px] text-center">
        Get High-Quality AI Answers
      </h1>
      <PentagramForm />
      <ResultArea />
    </main>
  );
}
