import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Errors from './PentagramComponents/Errors';
import Input from './PentagramComponents/Input';
import SubmitButton from './PentagramComponents/SubmitButton';
import Label from './PentagramComponents/Label';
import { useGeminiResult } from '../../context/GeminiResultContext';
import SuccessIcon from '../../icons/SuccessIcon';
import { ClearAll } from './PentagramComponents/ClearAll';
import { useValidators } from '../../utils/useValidators';
import { useState } from 'react';
import {
  fields,
  fieldDetails,
  initialValues,
  initialValidationStates,
} from '../../constants/formConfig.js';

const getValidationSchema = (validationStates) => {
  const schema = {};
  fields.forEach((field) => {
    schema[field] = Yup.string()
      .required(`Please fill out ${field}`)
      .test(
        'gemini-validation',
        'Click the bulb icon to validate with Gemini',
        () => {
          return validationStates[field] === true;
        }
      );
  });
  return Yup.object().shape(schema);
};

function PentagramForm() {
  const { fetchResult } = useGeminiResult();
  const [validationStates, setValidationStates] = useState(
    initialValidationStates
  );
  const validators = useValidators(setValidationStates);

  // Function to clear validation states and feedback
  const clearFeedback = () => {
    Object.keys(validators).forEach((field) => {
      validators[field].setFeedback(''); // Reset feedback
      validators[field].setIsValid(null); // Reset isValid
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={() => getValidationSchema(validationStates)}
      onSubmit={async (values, { setSubmitting, setStatus }) => {
        const prompt = `As ${values.Persona}, ${values.Context}, I need ${values.Task}.Please provide ${values.Output}, keeping ${values.Constraint}.`;
        await fetchResult(prompt);
        setSubmitting(false);
        setStatus('Your prompt has been successfully submitted!');
        setTimeout(() => setStatus(null), 6000);
      }}
      // Pass validators to Yup
      validateOnChange={true}
      validateOnBlur={true}
    >
      {({
        values,
        errors,
        touched,
        setFieldValue,
        setFieldError,
        status,
        resetForm,
        isSubmitting,
        validateForm,
      }) => {
        // Pass Formik helpers to validators
        Object.keys(validators).forEach((field) => {
          validators[field].setFieldError = setFieldError;
          validators[field].validateForm = validateForm;
        });

        return (
          <Form className="flex flex-col items-center gap-[24px] w-full md:w-3/4">
            <ul className="list-none flex flex-col gap-[15px] w-full">
              {Object.keys(fieldDetails).map((field) => (
                <li key={field} className="flex flex-col gap-[6px]">
                  <Label field={field} />
                  <Input
                    errors={errors}
                    touched={touched}
                    field={field}
                    fieldDetails={fieldDetails}
                    setFieldValue={setFieldValue}
                    validateField={validators[field].validateField}
                    values={values}
                    isValid={validators[field].isValid}
                    clearFeedback={clearFeedback}
                  />
                  <Errors
                    errors={errors}
                    touched={touched}
                    field={field}
                    fieldDetails={fieldDetails}
                    feedback={validators[field].feedback}
                    isValid={validators[field].isValid}
                  />
                </li>
              ))}
            </ul>
            <div className="flex w-full gap-4">
              <SubmitButton
                disabled={isSubmitting || Object.keys(errors).length > 0}
              />
              <ClearAll resetForm={resetForm} clearFeedback={clearFeedback} />
            </div>
            {status && (
              <div className="text-Green-700 dark:text-Green-500 text-[16px] tracking-[-0.2px] leading-[130%] flex items-center gap-[8px] transition-all duration-300">
                <SuccessIcon />
                <span>{status}</span>
              </div>
            )}
          </Form>
        );
      }}
    </Formik>
  );
}

export default PentagramForm;
