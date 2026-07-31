import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import type { PublicProfessionalProfile } from '@/features/discovery/domain/discovery';
import { colors, spacing } from '@/shared/theme/tokens';

export function PublicArtistCard({ profile }: { profile: PublicProfessionalProfile }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{profile.professionalName}</Text>
      <Text style={styles.meta}>{profile.discipline}</Text>
      {profile.location ? <Text style={styles.meta}>{profile.location}</Text> : null}
      <Text numberOfLines={3} style={styles.biography}>
        {profile.biography}
      </Text>
      <Link
        href={{ pathname: '/(public)/profile/[id]', params: { id: profile.id } }}
        style={styles.link}
      >
        Ver perfil
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: spacing.xs,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: colors.surface,
    padding: spacing.md,
  },
  name: { color: colors.text, fontSize: 20, fontWeight: '600' },
  meta: { color: colors.textMuted, fontSize: 14 },
  biography: { color: colors.text, fontSize: 15, lineHeight: 22, marginVertical: spacing.xs },
  link: { color: colors.action, fontSize: 15, fontWeight: '600', marginTop: spacing.sm },
});
