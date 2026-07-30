export type AuthErrorCode =
  | 'email_in_use'
  | 'invalid_credentials'
  | 'invalid_input'
  | 'suspended_account'
  | 'unexpected';

const messages: Record<AuthErrorCode, string> = {
  email_in_use: 'No fue posible crear la cuenta con los datos indicados.',
  invalid_credentials: 'No fue posible iniciar sesión con las credenciales indicadas.',
  invalid_input: 'Revisá los datos ingresados e intentá nuevamente.',
  suspended_account: 'La cuenta no puede iniciar sesión. Contactá al soporte de HABITTUS.',
  unexpected: 'Ocurrió un error inesperado. Intentá nuevamente.',
};

export class AuthError extends Error {
  constructor(public readonly code: AuthErrorCode) {
    super(messages[code]);
    this.name = 'AuthError';
  }
}

export function getAuthErrorMessage(error: unknown): string {
  return error instanceof AuthError ? error.message : messages.unexpected;
}
