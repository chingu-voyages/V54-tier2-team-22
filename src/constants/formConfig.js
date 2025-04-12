export const fieldDetails = {
    Persona: { description:  'Who the response is for (e.g., a beginner coder or an experienced designer).', placeholder: 'A student learning to code.' },
    Context: { description: 'Your situation or background (e.g., new to Python or working solo).', placeholder: 'I’m new to web design.' },
    Task: { description: 'What you need help with (e.g., list resources or explain a concept).', placeholder: 'List beginner coding tools.' },
    Output: { description:  'How you want the response (e.g., short list or detailed explanation).', placeholder: 'Simple list with names.' },
    Constraint: { description: 'Limits for the response (e.g., lists or tables).', placeholder: 'Use simple terms.' },
  };
  
  export const initialValues = {
    Persona: '',
    Context: '',
    Task: '',
    Output: '',
    Constraint: '',
  };
  
  export const fields = Object.keys(fieldDetails);
  
  export const initialValidationStates = {
    Persona: null,
    Context: null,
    Task: null,
    Output: null,
    Constraint: null,
  };