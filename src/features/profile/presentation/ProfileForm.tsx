import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  parseLinks,
  type ProfileErrors,
  validateProfile,
} from '@/features/profile/application/validation';
import type { ProfessionalProfile } from '@/features/profile/domain/profile';
import { AvailabilitySelector } from '@/shared/components/AvailabilitySelector';
import { FormField } from '@/shared/components/FormField';
import { SubmitButton } from '@/shared/components/SubmitButton';
import { colors, spacing } from '@/shared/theme/tokens';

export function ProfileForm({
  profile,
  onSave,
}: {
  profile: ProfessionalProfile;
  onSave(profile: ProfessionalProfile): Promise<void>;
}) {
  const [draft, setDraft] = useState(profile);
  const [links, setLinks] = useState(profile.professionalLinks.join('\n'));
  const [errors, setErrors] = useState<ProfileErrors>({});
  const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');

  useEffect(() => {
    setDraft(profile);
    setLinks(profile.professionalLinks.join('\n'));
  }, [profile]);

  const save = async () => {
    const candidate = { ...draft, professionalLinks: parseLinks(links) };
    const nextErrors = validateProfile(candidate);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('saving');
    try {
      await onSave(candidate);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <View style={styles.form}>
      {status === 'success' ? (
        <Text accessibilityRole="alert" style={styles.success}>
          Perfil guardado correctamente.
        </Text>
      ) : null}
      {status === 'error' ? (
        <Text accessibilityRole="alert" style={styles.error}>
          No fue posible guardar el perfil.
        </Text>
      ) : null}
      <FormField
        error={errors.professionalName}
        label="Nombre profesional"
        onChangeText={(professionalName) =>
          setDraft((current) => ({ ...current, professionalName }))
        }
        value={draft.professionalName}
      />
      <FormField
        error={errors.biography}
        label="Biografía"
        multiline
        onChangeText={(biography) => setDraft((current) => ({ ...current, biography }))}
        value={draft.biography}
      />
      <FormField
        error={errors.discipline}
        label="Disciplina o categoría artística"
        onChangeText={(discipline) => setDraft((current) => ({ ...current, discipline }))}
        value={draft.discipline}
      />
      <FormField
        error={errors.location}
        label="Ubicación general"
        onChangeText={(location) => setDraft((current) => ({ ...current, location }))}
        value={draft.location}
      />
      <FormField
        autoCapitalize="none"
        error={errors.professionalLinks}
        label="Enlaces profesionales, uno por línea"
        multiline
        onChangeText={setLinks}
        value={links}
      />
      <AvailabilitySelector
        disabled={status === 'saving'}
        onChange={(availability) => setDraft((current) => ({ ...current, availability }))}
        value={draft.availability}
      />
      <SubmitButton isLoading={status === 'saving'} label="Guardar perfil" onPress={save} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: { gap: spacing.md, marginTop: spacing.xl },
  success: { backgroundColor: '#E5F1EC', color: colors.action, padding: spacing.md },
  error: { backgroundColor: '#F7E7E5', color: '#8D2F28', padding: spacing.md },
});
