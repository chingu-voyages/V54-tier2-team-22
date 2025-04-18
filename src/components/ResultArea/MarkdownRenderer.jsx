import React from 'react';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';
import tip from '/assets/images/icon-tip.svg';
import warning from '/assets/images/icon-warning.svg';
import information from '/assets/images/icon-info.svg';
import ReactMarkdown from 'react-markdown';

export const MarkdownRenderer = ({ content }) => {
  const getTextContent = (children) =>
    React.Children.toArray(children)
      .flatMap((child) => {
        if (typeof child === 'string') return child;
        if (React.isValidElement(child) && child.props?.children) {
          return getTextContent(child.props.children);
        }
        return '';
      })
      .join('')
      .trim();

  return (
    <div className="markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}
        components={{
          br: () => (
            <span className="block border-Neutral-200 dark:border-Neutral-700" />
          ),
          table: ({ ...props }) => (
            <div
              className="overflow-x-auto rounded-[8px] border
                  border-Neutral-200 dark:border-Neutral-800"
            >
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
        {content}
      </ReactMarkdown>
    </div>
  );
};
