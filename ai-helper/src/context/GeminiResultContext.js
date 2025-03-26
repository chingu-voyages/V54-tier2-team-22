import { createContext, useContext } from 'react';

export const GeminiResultContext = createContext();

export function useGeminiResult() {
  const context = useContext(GeminiResultContext);
  if (!context) {
    throw new Error(
      'useGeminiResult must be used within a GeminiResultProvider'
    );
  }
  return context;
}
