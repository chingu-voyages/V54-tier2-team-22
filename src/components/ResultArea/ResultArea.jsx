import { useGeminiResult } from '../../context/GeminiResultContext';
import { useState } from 'react';
import { MarkdownRenderer } from './MarkdownRenderer';
import { PromptSection } from './PromptSection';

export function ResultArea() {
  const { result, isLoading, error, prompt, history } = useGeminiResult();
  const [showHistory, setShowHistory] = useState(false);

  const containerClass =
    'bg-[#e4e4ef6e] dark:bg-[#12131a12] border border-Neutral-200 dark:border-Neutral-800 py-5 px-4 rounded-lg';

  return (
    <div className="markdown flex flex-col gap-[30px] w-full md:w-3/4">
      <h3>Result</h3>
      <div className={containerClass}>
        {prompt && <PromptSection prompt={prompt} result={result} />}
        {isLoading ? (
          <p className="italic">Loading your result...</p>
        ) : error ? (
          <p className="text-Orange-800 dark:text-Orange-500">{error}</p>
        ) : result ? (
          <MarkdownRenderer content={result} />
        ) : (
          <p>Submit the form to see your AI-generated result here!</p>
        )}
      </div>
      {history.length > 0 && (
        <div className="mt-[10px]">
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="text-Neutral-700 dark:text-Neutral-300 font-medium text-[16px]
              hover:underline"
          >
            {showHistory ? 'Hide History' : 'Show History'} ({history.length})
          </button>
          {showHistory && (
            <div className="mt-[10px] flex flex-col gap-[30px]">
              {history.map((entry, index) => (
                <div key={index} className={containerClass}>
                  <p
                    className="text-sm tracking-[-0.6px] dark:bg-Neutral-900
                      bg-Neutral-0 w-fit px-2 py-1 rounded-lg"
                  >
                    {new Date(entry.timestamp).toLocaleString()}
                  </p>
                  <PromptSection
                    prompt={entry.prompt}
                    result={entry.result}
                    title="Prompt:"
                  />
                  <MarkdownRenderer content={entry.result} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
