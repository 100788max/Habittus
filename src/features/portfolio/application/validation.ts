import type { ArtworkDraft } from '@/features/portfolio/domain/artwork';

export type ArtworkField = keyof ArtworkDraft;
export type ArtworkErrors = Partial<Record<ArtworkField, string>>;

export function validateArtwork(draft: ArtworkDraft): ArtworkErrors {
  const errors: ArtworkErrors = {};
  const year = Number(draft.year);
  const maximumYear = new Date().getFullYear() + 1;

  if (draft.title.trim().length < 2) errors.title = 'Ingresá un título de al menos 2 caracteres.';
  if (draft.description.trim().length < 10)
    errors.description = 'La descripción debe tener al menos 10 caracteres.';
  if (!draft.category.trim()) errors.category = 'Ingresá una categoría.';
  if (!draft.technique.trim()) errors.technique = 'Ingresá una técnica.';
  if (!/^\d{4}$/.test(draft.year) || year < 1000 || year > maximumYear) {
    errors.year = `Ingresá un año válido hasta ${maximumYear}.`;
  }
  if (draft.imageUrl && !isValidImageUri(draft.imageUrl)) {
    errors.imageUrl = 'Seleccioná una imagen válida desde la cámara o la galería.';
  }

  return errors;
}

function isValidImageUri(value: string): boolean {
  if (/^(file|content):\/\//.test(value)) return true;
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
}
