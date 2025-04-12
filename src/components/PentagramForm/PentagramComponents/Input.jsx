import { Field } from 'formik';
import ResetButton from './ResetButton';
import { CheckButton } from './CheckButton';
import { useState, useEffect } from 'react';

function Input({
  field,
  fieldDetails,
  touched,
  errors,
  setFieldValue,
  validateField,
  values,
  isValid,
}) {
  const [bulbState, setBulbState] = useState('idle');

  const handleReset = () => {
    setFieldValue(field, ''); 
    validateField(''); 
  };

  const handleChange = (e) => {
    setFieldValue(field, e.target.value);
  };

  const handleBulbClick = () => {
    validateField(values[field]);
  };

  useEffect(() => {
    if (!values[field]) {
      setBulbState('idle');
    } else if (isValid === true) {
      setBulbState('valid');
    } else if (isValid === false) {
      setBulbState('invalid');
    } else {
      setBulbState('typing');
    }
  }, [field, isValid, values]);

  return (
    <div className="relative w-full">
      <Field
        as="textarea"
        id={field}
        name={field}
        onChange={handleChange}
        placeholder={fieldDetails[field].placeholder}
        className={`text-Neutral-700 dark:text-Neutral-200 cursor-pointer w-full h-[55px] p-[10px] pr-[20px] dark:bg-Neutral-800 bg-Neutral-100 hover:dark:bg-Neutral-700 hover:bg-Neutral-200 rounded-[12px] border-2 dark:border-Neutral-700 border-Neutral-200 hover:dark:border-Neutral-600  hover:border-Neutral-200  text-[16px] font-normal tracking-[-0.6px] leading-[140%]
                  placeholder:text-[16px] placeholder:opacity-80  placeholder:leading-[140%] placeholder:tracking-[-0.6px] focus:outline-none  resize-y-none 
                  ${
                    errors[field] && touched[field]
                      ? 'focus:dark:border-Orange-500 focus:border-Orange-800  focus:border-[1px] focus:dark:shadow-[0_0_8px_0_#FE8159] focus:shadow-[0_0_8px_0_#DA3701]'
                      : 'focus:border-Blue-400 focus:dark:border-Blue-500 focus:shadow-[0_0_10px_0_#C27CF8] focus:dark:shadow-[0_0_10px_0_#D3A0FA]'
                  } `}
        aria-label={`${field} input`}
      />
      <div className="absolute bottom-[10px] right-[10px] flex flex-col gap-1">
        <CheckButton state={bulbState} onClick={handleBulbClick} />
        <ResetButton  handleReset={ handleReset} />
      </div>
    </div>
  );
}

export default Input;
