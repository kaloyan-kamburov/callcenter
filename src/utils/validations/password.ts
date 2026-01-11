export function isStrongPassword(password: string): boolean {
  const value = String(password);
  const hasMinLength = value.length >= 8;
  const hasUpper = /[A-Z]/.test(value);
  const hasLower = /[a-z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  return hasMinLength && hasUpper && hasLower && hasNumber;
}

