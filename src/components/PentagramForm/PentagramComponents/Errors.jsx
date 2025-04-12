import { InfoIcon } from '../../../icons/InfoIcon';

function Errors({ errors, touched, field, fieldDetails, feedback, isValid }) {
  const hasError = errors[field] && touched[field];
  const hasFeedback = !!feedback;

  const getTextColor = () => {
    if (hasFeedback) {
      return isValid
        ? 'dark:text-Neutral-300 text-Neutral-800'
        : 'dark:text-Orange-500 text-Orange-800';
    }
    return hasError
      ? 'dark:text-Orange-500 text-Orange-800'
      : 'dark:text-Neutral-300 text-Neutral-800';
  };

  const getContent = () => {
    if (hasFeedback) return feedback;
    if (hasError) return errors[field];
    return fieldDetails[field].description;
  };

  return (
    <p
      className={`${getTextColor()} tracking-[-0.2px] leading-[14.4px] text-[14px] flex items-start gap-[8px]`}
    >
      <InfoIcon />
      <span>{getContent()}</span>
    </p>
  );
}

export default Errors;
