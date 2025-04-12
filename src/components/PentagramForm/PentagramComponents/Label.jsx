function Label({ field }) {
  return (
    <label
      className="text-[20px] leading-[24px] tracking-[-0.5px] font-semibold dark:text-Neutral-0 text-Neutral-900"
      htmlFor={field}
    >
      {field}
    </label>
  );
}

export default Label;
