import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

import type { PublicArtwork } from '@/features/discovery/domain/discovery';
import { colors, spacing } from '@/shared/theme/tokens';

export function PublicArtworkCard({ artwork }: { artwork: PublicArtwork }) {
  return (
    <View style={styles.card}>
      {artwork.imageUrl ? (
        <Image
          accessibilityLabel={`Imagen de ${artwork.title}`}
          source={{ uri: artwork.imageUrl }}
          style={styles.image}
        />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.muted}>Imagen simulada</Text>
        </View>
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{artwork.title}</Text>
        <Text style={styles.muted}>
          {artwork.year} · {artwork.category} · {artwork.technique}
        </Text>
        <Link
          href={{ pathname: '/(public)/artwork/[id]', params: { id: artwork.id } }}
          style={styles.link}
        >
          Ver obra
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: colors.surface,
  },
  image: { width: '100%', aspectRatio: 4 / 3, backgroundColor: colors.background },
  placeholder: {
    aspectRatio: 4 / 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  content: { gap: spacing.xs, padding: spacing.md },
  title: { color: colors.text, fontSize: 20, fontWeight: '600' },
  muted: { color: colors.textMuted, fontSize: 14 },
  link: { color: colors.action, fontSize: 15, fontWeight: '600', marginTop: spacing.sm },
});
