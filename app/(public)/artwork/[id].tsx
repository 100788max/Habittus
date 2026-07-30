import { Link, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import type { PublicArtworkDetail } from '@/features/discovery/domain/discovery';
import { useDiscovery } from '@/features/discovery/presentation/DiscoveryProvider';
import { getAvailabilityLabel } from '@/shared/components/AvailabilitySelector';
import { LoadingScreen } from '@/shared/components/LoadingScreen';
import { PlaceholderScreen } from '@/shared/components/PlaceholderScreen';
import { colors, spacing } from '@/shared/theme/tokens';

export default function ArtworkDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { getPublicArtwork } = useDiscovery();
  const [detail, setDetail] = useState<PublicArtworkDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setIsLoading(true);
    getPublicArtwork(id)
      .then((result) => {
        if (!active) return;
        setDetail(result);
        if (!result) setError('La obra no está disponible públicamente.');
      })
      .catch(() => active && setError('No fue posible cargar la obra.'))
      .finally(() => active && setIsLoading(false));
    return () => {
      active = false;
    };
  }, [getPublicArtwork, id]);

  if (isLoading) return <LoadingScreen label="Cargando obra pública" />;

  return (
    <PlaceholderScreen
      description={error ?? `Obra publicada por ${detail?.profile.professionalName}.`}
      title={detail?.artwork.title ?? 'Obra no disponible'}
    >
      {detail ? (
        <View style={styles.content}>
          {detail.artwork.imageUrl ? (
            <Image
              accessibilityLabel={`Imagen de ${detail.artwork.title}`}
              source={{ uri: detail.artwork.imageUrl }}
              style={styles.image}
            />
          ) : (
            <View style={styles.placeholder}>
              <Text style={styles.meta}>Imagen simulada</Text>
            </View>
          )}
          <Text style={styles.meta}>
            {detail.artwork.year} · {detail.artwork.category} · {detail.artwork.technique}
          </Text>
          <Text style={styles.description}>{detail.artwork.description}</Text>
          <Text style={styles.meta}>{getAvailabilityLabel(detail.artwork.availability)}</Text>
          <Link
            href={{ pathname: '/(public)/profile/[id]', params: { id: detail.profile.id } }}
            style={styles.link}
          >
            Ver perfil de {detail.profile.professionalName}
          </Link>
        </View>
      ) : null}
    </PlaceholderScreen>
  );
}

const styles = StyleSheet.create({
  content: { gap: spacing.md, marginTop: spacing.xl },
  image: { width: '100%', aspectRatio: 4 / 3, backgroundColor: colors.background },
  placeholder: {
    aspectRatio: 4 / 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  meta: { color: colors.textMuted, fontSize: 15 },
  description: { color: colors.text, fontSize: 16, lineHeight: 24 },
  link: { color: colors.action, fontSize: 16, fontWeight: '600' },
});
