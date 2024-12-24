import React, { useState } from 'react';
import { Editor as MonacoEditor } from '@monaco-editor/react';
import Split from 'react-split';
import { Wand2 } from 'lucide-react';
import { useCode } from '../context/CodeContext';
import toast from 'react-hot-toast';

const Editor = () => {
  const [prompt, setPrompt] = useState('');
  const { code, setCode, loading, generateCode } = useCode();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a description');
      return;
    }
    
    try {
      await generateCode(prompt);
      toast.success('Code generated successfully!');
    } catch (error) {
      toast.error('Failed to generate code');
    }
  };

  return (
    <div className="h-[calc(100vh-12rem)]">
      <div className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your design (e.g., 'Create a modern landing page with a hero section and animated cards')"
            className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50"
          >
            <Wand2 className="w-5 h-5" />
            {loading ? 'Generating...' : 'Generate'}
          </button>
        </div>
      </div>

      <Split
        className="split h-full"
        sizes={[50, 50]}
        minSize={100}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
      >
        <div className="h-full">
          <MonacoEditor
            height="100%"
            defaultLanguage="html"
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value || '')}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              wordWrap: 'on',
            }}
          />
        </div>
        <div className="h-full bg-white rounded-lg overflow-hidden">
          <iframe
            title="preview"
            srcDoc={code}
            className="w-full h-full border-0"
          />
        </div>
      </Split>
    </div>
  );
}

export default Editor;