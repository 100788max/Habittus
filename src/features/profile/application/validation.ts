import type { ProfessionalProfile } from '@/features/profile/domain/profile';

export type ProfileField =
  | 'professionalName'
  | 'biography'
  | 'discipline'
  | 'location'
  | 'professionalLinks';
export type ProfileErrors = Partial<Record<ProfileField, string>>;

export function validateProfile(profile: ProfessionalProfile): ProfileErrors {
  const errors: ProfileErrors = {};

  if (profile.professionalName.trim().length < 2) {
    errors.professionalName = 'Ingresá un nombre profesional de al menos 2 caracteres.';
  }
  if (profile.biography.trim().length < 20) {
    errors.biography = 'La biografía debe tener al menos 20 caracteres.';
  }
  if (!profile.discipline.trim()) {
    errors.discipline = 'Ingresá una disciplina o categoría artística.';
  }
  if (profile.location.trim().length > 100) {
    errors.location = 'La ubicación no puede superar 100 caracteres.';
  }
  if (profile.professionalLinks.some((link) => !isValidUrl(link))) {
    errors.professionalLinks = 'Cada enlace debe ser una URL completa con https://.';
  }

  return errors;
}

export function parseLinks(value: string): string[] {
  return value
    .split(/\n|,/)
    .map((link) => link.trim())
    .filter(Boolean);
}

function isValidUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'https:';
  } catch {
    return false;
  }
}
