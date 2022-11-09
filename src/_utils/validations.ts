const validateName = (nome: string): boolean => {
  return nome.length > 2;
};

const validateEmail = (email: string): boolean => {
  return email.length > 5 && email.includes('@') && email.includes('.');
};

const validatePassword = (password: string): boolean => {
  return password.length > 3;
};

const validateConfirmPassword = (
  password: string,
  confirmPassword: string
): boolean => {
  return password === confirmPassword;
};

export {
  validateEmail,
  validateName,
  validatePassword,
  validateConfirmPassword
};
