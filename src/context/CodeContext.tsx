import React, { createContext, useContext, useState } from 'react';
import { generateCode } from '../services/ai';
import { parseGeneratedCode } from '../utils/codeParser';
import toast from 'react-hot-toast';

interface CodeContextType {
  code: string;
  setCode: (code: string) => void;
  loading: boolean;
  generateCode: (prompt: string) => Promise<void>;
}

const CodeContext = createContext<CodeContextType | undefined>(undefined);

export const CodeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateCode = async (prompt: string) => {
    setLoading(true);
    try {
      const generatedCode = await generateCode(prompt);
      const parsedCode = parseGeneratedCode(generatedCode);
      setCode(parsedCode);
      toast.success('Code generated successfully!');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to generate code');
    } finally {
      setLoading(false);
    }
  };

  return (
    <CodeContext.Provider value={{ 
      code, 
      setCode, 
      loading, 
      generateCode: handleGenerateCode 
    }}>
      {children}
    </CodeContext.Provider>
  );
};

export const useCode = () => {
  const context = useContext(CodeContext);
  if (context === undefined) {
    throw new Error('useCode must be used within a CodeProvider');
  }
  return context;
};