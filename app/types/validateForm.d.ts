interface ValidationRule {
  regex: RegExp;
  messages: {
    required?: string;
    minLength?: string;
    maxLength?: string;
    format?: string;
    match?: string;
    invalidChars?: string;
  };
}

interface Validation {
  [key: string]: ValidationRule;
}
