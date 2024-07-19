import validation from 'app/const/validation';

const validateForm = (formData: User): { [key: string]: string } => {
  const errors: { [key: string]: string } = {};

  const validateField = (field: string, value: string) => {
    const rule = validation[field];
    if (!rule) return;

    if (!value) {
      if (rule.messages.required) {
        errors[field] = rule.messages.required;
      }
      return;
    }

    if (!rule.regex.test(value)) {
      const minLength = rule.regex.source.match(/\{(\d+),/)?.[1];
      const maxLength = rule.regex.source.match(/,(\d+)\}/)?.[1];

      if (minLength && value.length < Number(minLength)) {
        errors[field] = rule.messages.minLength!;
      } else if (maxLength && value.length > Number(maxLength)) {
        errors[field] = rule.messages.maxLength!;
      } else if (field === 'email' && rule.messages.format) {
        errors[field] = rule.messages.format;
      } else if (rule.messages.invalidChars) {
        errors[field] = rule.messages.invalidChars;
      }
    }
  };

  Object.entries(formData).forEach(([field, value]) =>
    validateField(field, value)
  );

  if (formData.password !== formData['password-confirm']) {
    errors['password-confirm'] = validation['password-confirm'].messages.match!;
  }

  return errors;
};

export default validateForm;
