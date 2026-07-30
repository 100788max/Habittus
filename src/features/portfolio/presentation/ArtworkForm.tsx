import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { type ArtworkErrors, validateArtwork } from '@/features/portfolio/application/validation';
import type { ArtworkDraft } from '@/features/portfolio/domain/artwork';
import { AvailabilitySelector } from '@/shared/components/AvailabilitySelector';
import { FormField } from '@/shared/components/FormField';
import { SubmitButton } from '@/shared/components/SubmitButton';
import { spacing } from '@/shared/theme/tokens';

export function ArtworkForm({
  initialValue,
  onSave,
}: {
  initialValue: ArtworkDraft;
  onSave(draft: ArtworkDraft): Promise<void>;
}) {
  const [draft, setDraft] = useState(initialValue);
  const [errors, setErrors] = useState<ArtworkErrors>({});
  const [status, setStatus] = useState<'idle' | 'saving' | 'error'>('idle');

  useEffect(() => setDraft(initialValue), [initialValue]);

  const save = async () => {
    const nextErrors = validateArtwork(draft);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('saving');
    try {
      await onSave(draft);
    } catch {
      setStatus('error');
    }
  };

  return (
    <View style={styles.form}>
      {status === 'error' ? (
        <Text accessibilityRole="alert" style={styles.error}>
          No fue posible guardar la obra. Intentá nuevamente.
        </Text>
      ) : null}
      <FormField
        error={errors.title}
        label="Título"
        onChangeText={(title) => setDraft((current) => ({ ...current, title }))}
        value={draft.title}
      />
      <FormField
        error={errors.description}
        label="Descripción"
        multiline
        onChangeText={(description) => setDraft((current) => ({ ...current, description }))}
        value={draft.description}
      />
      <FormField
        error={errors.category}
        label="Categoría"
        onChangeText={(category) => setDraft((current) => ({ ...current, category }))}
        value={draft.category}
      />
      <FormField
        error={errors.technique}
        label="Técnica"
        onChangeText={(technique) => setDraft((current) => ({ ...current, technique }))}
        value={draft.technique}
      />
      <FormField
        error={errors.year}
        inputMode="numeric"
        label="Año"
        maxLength={4}
        onChangeText={(year) => setDraft((current) => ({ ...current, year }))}
        value={draft.year}
      />
      <FormField
        autoCapitalize="none"
        error={errors.imageUrl}
        inputMode="url"
        label="URL temporal de imagen (opcional)"
        onChangeText={(imageUrl) => setDraft((current) => ({ ...current, imageUrl }))}
        value={draft.imageUrl}
      />
      <AvailabilitySelector
        disabled={status === 'saving'}
        onChange={(availability) => setDraft((current) => ({ ...current, availability }))}
        value={draft.availability}
      />
      <SubmitButton isLoading={status === 'saving'} label="Guardar obra" onPress={save} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: { gap: spacing.md, marginTop: spacing.xl },
  error: { backgroundColor: '#F7E7E5', color: '#8D2F28', padding: spacing.md },
});
