import type { ContactPreferences, NewContactRequest } from '@/features/contact/domain/contact';

export type ContactRequestErrors = Partial<
  Record<'senderName' | 'senderEmail' | 'subject' | 'message' | 'reason', string>
>;
export type ContactPreferenceErrors = Partial<
  Record<'professionalEmail' | 'allowedReasons', string>
>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactRequest(request: NewContactRequest): ContactRequestErrors {
  const errors: ContactRequestErrors = {};
  if (request.senderName.trim().length < 2) errors.senderName = 'Ingresá tu nombre.';
  else if (request.senderName.trim().length > 100)
    errors.senderName = 'El nombre no puede superar 100 caracteres.';
  if (!emailPattern.test(request.senderEmail.trim()))
    errors.senderEmail = 'Ingresá un email válido.';
  if (request.subject.trim().length < 4)
    errors.subject = 'El asunto debe tener al menos 4 caracteres.';
  else if (request.subject.trim().length > 150)
    errors.subject = 'El asunto no puede superar 150 caracteres.';
  if (request.message.trim().length < 20)
    errors.message = 'El mensaje debe tener al menos 20 caracteres.';
  else if (request.message.trim().length > 3000)
    errors.message = 'El mensaje no puede superar 3000 caracteres.';
  if (!request.reason) errors.reason = 'Seleccioná un motivo profesional.';
  return errors;
}

export function validateContactPreferences(
  preferences: ContactPreferences,
): ContactPreferenceErrors {
  const errors: ContactPreferenceErrors = {};
  if (preferences.professionalEmail && !emailPattern.test(preferences.professionalEmail.trim())) {
    errors.professionalEmail = 'Ingresá un email profesional válido.';
  }
  if (preferences.acceptsContacts && preferences.allowedReasons.length === 0) {
    errors.allowedReasons = 'Seleccioná al menos un motivo de contacto.';
  }
  return errors;
}
