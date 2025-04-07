function ResetButton({setFieldValue , field}) {
    return (
      <button
      type="button"
      onClick={() => setFieldValue(field, '')}
       className="flex items-center  bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 px-4 py-2 rounded-full hover:bg-Orange-500 hover:text-neutral-0 dark:hover:bg-Orange-800 dark:hover:text-neutral-100 transition-colors"
      aria-label={`Reset ${field}`}
    >
      Reset
    </button>
    )
  }
  
  export default ResetButton