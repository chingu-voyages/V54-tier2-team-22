import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Errors from './PentagramComponents/Errors';
import Input from './PentagramComponents/Input';
import SubmitButton from './PentagramComponents/SubmitButton';
import Label from './PentagramComponents/Label';
import ResetButton from './PentagramComponents/ResetButton';
import { useGeminiResult } from '../../context/GeminiResultContext';
import SuccessIcon from '../../icons/SuccessIcon';

// Validation schema with Yup
const pentagramSchema = Yup.object().shape({
  Persona: Yup.string().required('Please fill out Persona'),
  Context: Yup.string().required('Please fill out Context'),
  Task: Yup.string().required('Please fill out Task'),
  Output: Yup.string().required('Please fill out Output'),
  Constraint: Yup.string().required('Please fill out Constraint'),
});

// Descriptions and placeholders
const fieldDetails = {
  Persona: {
    description: 'A persona describes who the result will be tailored for.',
    placeholder:
      'You are a Web Developer at the beginning of your career looking to build practical experience.',
  },
  Context: {
    description: 'This provides background info to fit your needs.',
    placeholder:
      'I’m a Frontend Web Developer who knows technical aspects but hasn’t worked in team projects.',
  },
  Task: {
    description: 'The task defines what information you need.',
    placeholder:
      'Provide a list of websites for programs to turn my learning into unique job experience.',
  },
  Output: {
    description: 'The output defines how the AI should respond.',
    placeholder: 'Informal tone, list with site names, links, and cost info.',
  },
  Constraint: {
    description: 'Constraints set boundaries for the AI’s results.',
    placeholder: 'Short summary only, high school level, no technical jargon.',
  },
};

function PentagramForm() {
  const { fetchResult } = useGeminiResult();

  return (
    <Formik
      initialValues={{
        Persona: '',
        Context: '',
        Task: '',
        Output: '',
        Constraint: '',
      }}
      validationSchema={pentagramSchema}
      onSubmit={async (values, { setSubmitting , setStatus  }) => {
        const prompt = `As ${values.Persona}, ${values.Context}, I need ${values.Task}. Please provide ${values.Output}, keeping ${values.Constraint}.`;
        console.log(prompt);
        await fetchResult(prompt);
        setSubmitting(false);
        setStatus("Your prompt has been successfully submitted!");
        setTimeout(() => setStatus(null), 6000);
      }}
    >
      {({ errors, touched, setFieldValue , status }) => (
        <Form className=" flex flex-col items-center gap-[24px] w-full md:w-3/4">
          <ul className="list-none flex flex-col  gap-[24px] w-full ">
            {Object.keys(fieldDetails).map((field) => (
              <li key={field} className="flex flex-col gap-[12px] ">
                <div className="flex justify-between items-center">
                  <Label field={field} />
                  <ResetButton setFieldValue={setFieldValue} field={field} />
                </div>

                <Input
                  errors={errors}
                  touched={touched}
                  field={field}
                  fieldDetails={fieldDetails}
                />

                <Errors
                  errors={errors}
                  touched={touched}
                  field={field}
                  fieldDetails={fieldDetails}
                />
              </li>
            ))}
          </ul>
          <SubmitButton />
          {status && (
                <div className="text-Green-700 dark:text-Green-500 text-[16px] racking-[-0.2px] leading-[130%]  flex items-center gap-[8px] transition-all duration-300">
                  <SuccessIcon />
                  <span>{status}</span>
                </div>
              )}
        </Form>
      )}
    </Formik>
  );
}

export default PentagramForm;
