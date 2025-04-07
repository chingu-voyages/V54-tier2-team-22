export function ClearAll({ resetForm }) {
  return (
    <button
      type="button"
      onClick={() => resetForm()}
      className="flex items-center font-semibold  bg-Orange-500  text-neutral-700 dark:text-neutral-200 px-4 py-2 rounded-[12px] hover:bg-orange-500 hover:dark:bg-orange-600 hover:text-neutral-0  dark:hover:text-neutral-100 transition-colors"
    >
      Clear All
    </button>
  );
}
