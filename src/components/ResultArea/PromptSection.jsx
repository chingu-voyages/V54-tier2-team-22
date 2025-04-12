import { downloadAsPDF } from "./DownloadPDF";
import { DownloadIcon } from '../../icons/DownloadIcon';

export const PromptSection = ({ prompt, result, title = 'Your Prompt:' }) => (
  <div className="border-b border-Neutral-200 dark:border-Neutral-800 pb-4 mb-4">
    <div className="flex justify-between items-center mb-3">
      <h4>{title}</h4>
      <div
        onClick={() => downloadAsPDF(prompt, result)}
        className="cursor-pointer bg-Neutral-300 dark:bg-Neutral-800 p-2 rounded-full
            hover:bg-Neutral-200 hover:dark:bg-Neutral-700"
      >
        <DownloadIcon />
      </div>
    </div>
    <p>{prompt}</p>
  </div>
);
