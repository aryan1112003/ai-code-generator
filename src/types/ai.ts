export interface AIResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export interface GeneratedCode {
  html: string;
  css: string;
  javascript: string;
}