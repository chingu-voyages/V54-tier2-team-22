import { useGeminiResult } from '../context/GeminiResultContext';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function ResultArea() {
  const { result, isLoading, error } = useGeminiResult();

  return (
    <div className=" flex-start dark:text-Neutral-200 text-Neutral-900 flex flex-col gap-[20px]  w-full  md:w-3/4">
      <h2 className="font-semibold text-[24px] leading-[130%] tracking-[-1px]">
        Result
      </h2>
      <div className=" dark:text-Neutral-200 text-Neutral-600  text-[16px] leading-[130%] tracking-[-0.6px]">
        {isLoading ? (
          <p className=" italic">Loading your result...</p>
        ) : error ? (
          <p className="text-Orange-800 dark:text-Orange-500">{error}</p>
        ) : result ? (
          <div className="">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{result}</ReactMarkdown>
          </div>
        ) : (
          <p className="">
            Submit the form to see your AI-generated result here!
          </p>
        )}
      </div>
    </div>
  );
}
