import { useGeminiValidator } from './useGeminiValidator';

const handleFeedbackChange = (
  fieldName,
  response,
  setValidationStates,
  validators
) => {
  const isValid = response.startsWith('Yes');
  setValidationStates((prev) => ({ ...prev, [fieldName]: isValid }));
  if (!isValid) {
    validators[fieldName].setFieldError(fieldName, response);
  } else {
    validators[fieldName].setFieldError(fieldName, null);
    validators[fieldName].validateForm();
  }
};

export const useValidators = (setValidationStates) => {
  const validators = {
    Persona: useGeminiValidator({
      field: 'Persona',
      onFeedbackChange: (fieldName, response) =>
        handleFeedbackChange(
          fieldName,
          response,
          setValidationStates,
          validators
        ),
    }),
    Context: useGeminiValidator({
      field: 'Context',
      onFeedbackChange: (fieldName, response) =>
        handleFeedbackChange(
          fieldName,
          response,
          setValidationStates,
          validators
        ),
    }),
    Task: useGeminiValidator({
      field: 'Task',
      onFeedbackChange: (fieldName, response) =>
        handleFeedbackChange(
          fieldName,
          response,
          setValidationStates,
          validators
        ),
    }),
    Output: useGeminiValidator({
      field: 'Output',
      onFeedbackChange: (fieldName, response) =>
        handleFeedbackChange(
          fieldName,
          response,
          setValidationStates,
          validators
        ),
    }),
    Constraint: useGeminiValidator({
      field: 'Constraint',
      onFeedbackChange: (fieldName, response) =>
        handleFeedbackChange(
          fieldName,
          response,
          setValidationStates,
          validators
        ),
    }),
  };

  return validators;
};
