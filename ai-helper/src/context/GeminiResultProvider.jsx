import { useState } from 'react';
import { fetchGemini } from '../utils/fetchGemini';
import { GeminiResultContext } from './GeminiResultContext';

export function GeminiResultProvider({ children }) {
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchResult = async (prompt) => {
    setIsLoading(true);
    setError(null);
    setResult('');
    try {
      const response = await fetchGemini(prompt);
      setResult(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GeminiResultContext.Provider
      value={{ result, isLoading, error, fetchResult }}
    >
      {children}
    </GeminiResultContext.Provider>
  );
}
