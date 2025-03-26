import { InfoIcon } from '../../../icons/InfoIcon';

function Errors({ errors, touched, field, fieldDetails }) {
  return (
    <p
      className={` tracking-[-0.2px] leading-[14.4px] text-[14px] flex items-center gap-[8px] ${
        errors[field] && touched[field] ? "dark:text-Orange-500  text-Orange-800 " : 'dark:text-neutral-300 text-Neutral-800'
      }`}
    >
      <InfoIcon />
      <span>
        {errors[field] && touched[field]
          ? errors[field]
          : fieldDetails[field].description}
      </span>
    </p>
  );
}

export default Errors;
