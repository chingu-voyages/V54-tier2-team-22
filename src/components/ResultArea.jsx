import React from 'react';
import { useGeminiResult } from '../context/GeminiResultContext';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';
import tip from '/assets/images/icon-tip.svg';
import warning from '/assets/images/icon-warning.svg';
import information from '/assets/images/icon-info.svg';

export function ResultArea() {
  const { result, isLoading, error } = useGeminiResult();

  // Helper to extract plain text from React elements
  const getTextContent = (children) => {
    return React.Children.toArray(children)
      .flatMap((child) => {
        if (typeof child === 'string') return child; // Plain text like "\n"
        if (
          React.isValidElement(child) &&
          child.props &&
          child.props.children
        ) {
          return getTextContent(child.props.children); // Recurse into nested children
        }
        return ''; // Ignore non-text
      })
      .join('')
      .trim();
  };

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
          <div className="markdown">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}
              components={{
                br: () => (
                  <span className="block border-Neutral-200 dark:border-Neutral-700" />
                ),
                table: ({ ...props }) => (
                  <div className="overflow-x-auto rounded-[8px]  border border-Neutral-200 dark:border-Neutral-700">
                    <table {...props} />
                  </div>
                ),

                p: ({ children }) => {
                  const text = getTextContent(children);

                  let icon = null;
                  let className = '';

                  if (text.startsWith('Tip:')) {
                    icon = (
                      <img
                        src={tip}
                        alt="Tip Icon"
                        className="mr-[10px] w-[13px] h-[19px] mt-[3px]"
                      />
                    );
                    className = 'tip';
                  } else if (text.startsWith('Warning:')) {
                    icon = (
                      <img
                        src={warning}
                        alt="Warning Icon"
                        className="mr-[10px] w-[21px] h-[19px] mt-[3px]"
                      />
                    );
                    className = 'warning';
                  } else if (text.startsWith('Information:')) {
                    icon = (
                      <img
                        src={information}
                        alt="Info Icon"
                        className="mr-[10px] w-[19px] h-[19px] mt-[3px]"
                      />
                    );
                    className = 'information';
                  }

                  if (className) {
                    return (
                      <div className={`flex items-start ${className}`}>
                        {icon}
                        <p>{children}</p>
                      </div>
                    );
                  }

                  return <p>{children}</p>;
                },
              }}
            >
              {result}
            </ReactMarkdown>
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
