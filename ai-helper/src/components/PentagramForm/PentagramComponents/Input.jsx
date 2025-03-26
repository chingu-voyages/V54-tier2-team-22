import { Field } from "formik";

function Input({ field, fieldDetails, touched, errors }) {
  return (
    <Field
      as="textarea"
      id={field}
      name={field}
      placeholder={fieldDetails[field].placeholder}
      className={`text-Neutral-700 dark:text-Neutral-200 cursor-pointer w-full h-[150px] p-[20px] dark:bg-Neutral-800 bg-Neutral-100 hover:dark:bg-Neutral-700 hover:bg-Neutral-200 rounded-[12px] border-2 dark:border-Neutral-700 border-Neutral-200 hover:dark:border-Neutral-600  hover:border-Neutral-200  text-[20px] font-normal tracking-[-0.6px] leading-[140%]
                    placeholder:text-[18px] placeholder:text-gray-500  placeholder:leading-[140%] placeholder:tracking-[-0.6px] focus:outline-none  resize-none 
                    ${
                      errors[field] && touched[field]
                        ? 'focus:dark:border-Orange-500 focus:border-Orange-800  focus:border-[1px] focus:dark:shadow-[0_0_8px_0_#FE8159] focus:shadow-[0_0_8px_0_#DA3701]'
                        : 'focus:border-Blue-400 focus:dark:border-Blue-500 focus:shadow-[0_0_10px_0_#C27CF8] focus:dark:shadow-[0_0_10px_0_#D3A0FA]'
                    } `}
      aria-label={`${field} input`}
    />
  );
}

export default Input;
