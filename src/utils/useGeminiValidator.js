import { useState, useCallback } from 'react';

const GEMINI_API_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export function useGeminiValidator({ field, onFeedbackChange }) {
  const [feedback, setFeedback] = useState('');
  const [isValid, setIsValid] = useState(null);

  const validateField = useCallback(
    async (value) => {
      if (!value) {
        setFeedback('');
        setIsValid(null);
        onFeedbackChange(field, '');
        return;
      }

      const prompt = `Validate if this is a ${field.toLowerCase()}. A ${field.toLowerCase()} should loosely relate to ${
        field === 'Persona'
          ? 'who it’s for (e.g., a group or role)'
          : field === 'Context'
          ? 'the user’s situation or background'
          : field === 'Task'
          ? 'what they need or want to do'
          : field === 'Output'
          ? 'how the response should look'
          : 'limits or rules for the response'
      }. Be very flexible—accept any input that feels meaningful and somewhat fits, even if it’s vague or broad. Don’t be strict; focus on the user’s intent to avoid annoying them. Respond in 2 lines max: Start with 'Yes' or 'No'. For 'Yes', say "Yes, this works well as a ${field.toLowerCase()}." For 'No', suggest a fix like "${
        field === 'Persona'
          ? "No, it’s unclear—maybe try 'A student learning to code'."
          : field === 'Context'
          ? "No, it’s unclear—maybe try 'I’m new to web design'."
          : field === 'Task'
          ? "No, it’s unclear—maybe try 'List beginner coding tools'."
          : field === 'Output'
          ? "No, it’s unclear—maybe try 'Simple list with names'."
          : "No, it’s unclear—maybe try 'Use simple terms'."
      }". Examples: Persona like "A student learning to code" or "Beginners", Context like "I’m new to web design" or "Learning phase", Task like "List beginner coding tools" or "Help with coding", Output like "Simple list with names" or "Short explanation", Constraint like "Use simple terms" or "Quick response". Input: "${value}"`;
      try {
        const response = await fetch(
          `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                { parts: [{ text: prompt + `\n\nInput: "${value}"` }] },
              ],
            }),
          }
        );
        if (!response.ok) {
          throw new Error(`Validation API error: ${response.status}`);
        }
        const data = await response.json();
        const result = data.candidates[0].content.parts[0].text;

        setFeedback(result);
        setIsValid(result.startsWith('Yes'));
        onFeedbackChange(field, result);
      } catch (error) {
        console.error(`Error validating ${field}:`, error);
        setFeedback('Validation failed—try again.');
        setIsValid(false);
        onFeedbackChange(field, 'Validation failed—try again.');
      }
    },
    [field, onFeedbackChange]
  );

  return { feedback, isValid, validateField, setFeedback , setIsValid };
}
