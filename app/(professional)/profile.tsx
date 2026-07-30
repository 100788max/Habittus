import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useProfile } from '@/features/profile/presentation/ProfileProvider';
import { getAvailabilityLabel } from '@/shared/components/AvailabilitySelector';
import { LoadingScreen } from '@/shared/components/LoadingScreen';
import { PlaceholderScreen } from '@/shared/components/PlaceholderScreen';
import { SubmitButton } from '@/shared/components/SubmitButton';
import { colors, spacing } from '@/shared/theme/tokens';

export default function ProfileScreen() {
  const { profile, isLoading, error, loadProfile, setPublicationStatus } = useProfile();
  const [isPublishing, setIsPublishing] = useState(false);
  const [publicationError, setPublicationError] = useState<string | null>(null);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  if (isLoading) return <LoadingScreen label="Cargando perfil" />;

  const isEmpty = !profile.professionalName;

  return (
    <PlaceholderScreen
      description={error ?? 'Vista privada de tu información profesional.'}
      title="Perfil profesional"
    >
      {isEmpty ? (
        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>Tu perfil todavía está vacío</Text>
          <Text style={styles.muted}>Agregá información profesional para comenzar.</Text>
        </View>
      ) : (
        <View style={styles.card}>
          <Text style={styles.name}>{profile.professionalName}</Text>
          <Text style={styles.meta}>{profile.discipline}</Text>
          {profile.location ? <Text style={styles.meta}>{profile.location}</Text> : null}
          <Text style={styles.biography}>{profile.biography}</Text>
          <Text style={styles.meta}>{getAvailabilityLabel(profile.availability)}</Text>
          <Text style={styles.status}>
            {profile.publicationStatus === 'published' ? 'Perfil publicado' : 'Perfil en borrador'}
          </Text>
          {profile.professionalLinks.map((link) => (
            <Text key={link} selectable style={styles.linkText}>
              {link}
            </Text>
          ))}
        </View>
      )}
      <Link href="/(professional)/profile-editor" style={styles.link}>
        {isEmpty ? 'Crear perfil profesional' : 'Editar perfil'}
      </Link>
      {!isEmpty ? (
        <View style={styles.publication}>
          {publicationError ? (
            <Text accessibilityRole="alert" style={styles.error}>
              {publicationError}
            </Text>
          ) : null}
          <SubmitButton
            isLoading={isPublishing}
            label={profile.publicationStatus === 'published' ? 'Ocultar perfil' : 'Publicar perfil'}
            onPress={async () => {
              setIsPublishing(true);
              setPublicationError(null);
              try {
                await setPublicationStatus(
                  profile.publicationStatus === 'published' ? 'draft' : 'published',
                );
              } catch {
                setPublicationError('Completá los campos obligatorios antes de publicar.');
              } finally {
                setIsPublishing(false);
              }
            }}
            variant={profile.publicationStatus === 'published' ? 'danger' : 'primary'}
          />
        </View>
      ) : null}
    </PlaceholderScreen>
  );
}

const styles = StyleSheet.create({
  empty: { gap: spacing.xs, marginTop: spacing.xl },
  emptyTitle: { color: colors.text, fontSize: 20, fontWeight: '600' },
  muted: { color: colors.textMuted, fontSize: 16 },
  card: {
    gap: spacing.sm,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: colors.surface,
    marginTop: spacing.xl,
    padding: spacing.lg,
  },
  name: { color: colors.text, fontSize: 28, fontWeight: '600' },
  meta: { color: colors.textMuted, fontSize: 14 },
  biography: { color: colors.text, fontSize: 16, lineHeight: 24, marginVertical: spacing.sm },
  linkText: { color: colors.action, fontSize: 14 },
  status: { color: colors.action, fontSize: 14, fontWeight: '600' },
  link: { color: colors.action, fontSize: 16, fontWeight: '600', marginTop: spacing.lg },
  publication: { gap: spacing.sm, marginTop: spacing.lg },
  error: { color: '#8D2F28', fontSize: 14 },
});
