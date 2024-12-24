import { AIResponse } from '../types/ai';

const API_URL = 'https://api.openai.com/v1/chat/completions';

export async function generateCode(prompt: string): Promise<string> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  if (!apiKey || apiKey === 'your_openai_api_key_here') {
    throw new Error('OpenAI API key is not configured. Please add your API key to the .env file.');
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{
          role: "system",
          content: `You are a frontend code generator. Generate clean, modern, and responsive code using HTML, CSS, and JavaScript. 
                   Always return code in the following format:
                   \`\`\`html
                   <!-- HTML code here -->
                   \`\`\`
                   \`\`\`css
                   /* CSS code here */
                   \`\`\`
                   \`\`\`javascript
                   // JavaScript code here
                   \`\`\``
        }, {
          role: "user",
          content: prompt
        }],
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to generate code');
    }

    const data: AIResponse = await response.json();
    
    if (!data.choices?.[0]?.message?.content) {
      throw new Error('Invalid response from OpenAI API');
    }

    return data.choices[0].message.content;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to generate code. Please try again.');
  }
}