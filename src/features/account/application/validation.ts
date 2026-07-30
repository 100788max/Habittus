import { AuthError } from '@/features/account/domain/AuthError';
import type { RegistrationData, SignInCredentials } from '@/features/account/domain/auth';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type FieldErrors = Partial<Record<'email' | 'password' | 'acceptedTerms', string>>;

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function validateCredentials(credentials: SignInCredentials): FieldErrors {
  const errors: FieldErrors = {};
  const email = normalizeEmail(credentials.email);

  if (!emailPattern.test(email)) {
    errors.email = 'Ingresá un email válido.';
  }

  if (credentials.password.length < 8) {
    errors.password = 'La contraseña debe tener al menos 8 caracteres.';
  }

  return errors;
}

export function validateRegistration(data: RegistrationData): FieldErrors {
  const errors = validateCredentials(data);

  if (!data.acceptedTerms) {
    errors.acceptedTerms = 'Debés aceptar los términos y reconocer la política de privacidad.';
  }

  return errors;
}

export function assertValid(errors: FieldErrors): void {
  if (Object.keys(errors).length > 0) {
    throw new AuthError('invalid_input');
  }
}
