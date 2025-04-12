import { TrashIcon } from '../../../icons/TrashIcon';

function ResetButton({ field, handleReset }) {
  return (
    <button
      type="button"
      onClick={handleReset}
      className="flex flex-col items-center cursor-pointer   text-neutral-400 dark:text-Neutral-600   hover:text-Red-600  dark:hover:text-Red-400  transition-colors"
      aria-label={`Reset ${field}`}
    >
      <TrashIcon />
    </button>
  );
}

export default ResetButton;
