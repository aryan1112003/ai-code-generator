import { GeneratedCode } from '../types/ai';

export function parseGeneratedCode(rawCode: string): string {
  try {
    // Extract HTML, CSS, and JavaScript sections from the generated code
    const htmlMatch = rawCode.match(/```html\n([\s\S]*?)\n```/);
    const cssMatch = rawCode.match(/```css\n([\s\S]*?)\n```/);
    const jsMatch = rawCode.match(/```javascript\n([\s\S]*?)\n```/);

    if (!htmlMatch && !cssMatch && !jsMatch) {
      throw new Error('Invalid code format received from AI');
    }

    const html = htmlMatch ? htmlMatch[1].trim() : '';
    const css = cssMatch ? cssMatch[1].trim() : '';
    const js = jsMatch ? jsMatch[1].trim() : '';

    // Combine the code sections into a complete HTML document
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Code</title>
    <style>
        /* Base styles for watermark */
        .watermark {
            position: fixed;
            bottom: 20px;
            right: 20px;
            font-family: system-ui, -apple-system, sans-serif;
            font-size: 12px;
            color: rgba(0, 0, 0, 0.3);
            pointer-events: none;
            z-index: 1000;
        }
        ${css}
    </style>
</head>
<body>
    ${html}
    <div class="watermark">Created by Aryan Acharya</div>
    <script>
        ${js}
    </script>
</body>
</html>`; 
  } catch (error) {
    console.error('Error parsing generated code:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to parse generated code');
  }
}