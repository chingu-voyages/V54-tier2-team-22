import { useState , useEffect } from 'react';
import { fetchGemini } from '../utils/fetchGemini';
import { GeminiResultContext } from './GeminiResultContext';

export function GeminiResultProvider({ children }) {
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [history, setHistory] = useState(() => {
    // Load history from localStorage on init
    const saved = localStorage.getItem('geminiHistory');
    return saved ? JSON.parse(saved) : [];
  });

  // Save history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('geminiHistory', JSON.stringify(history));
  }, [history]);

  const fetchResult = async (prompt) => {
    setIsLoading(true);
    setError(null);
    setResult('');
    setPrompt(prompt);
    try {
      const response = await fetchGemini(prompt);
      setResult(response);
      setHistory((prev) => [...prev, { prompt, result: response, timestamp: new Date().toISOString() }]);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GeminiResultContext.Provider
      value={{ result, isLoading, error, fetchResult , prompt , history }}
    >
      {children}
    </GeminiResultContext.Provider>
  );
}
