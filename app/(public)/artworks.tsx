import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { emptyDiscoveryFilters } from '@/features/discovery/domain/discovery';
import { useDiscovery } from '@/features/discovery/presentation/DiscoveryProvider';
import { PublicArtworkCard } from '@/features/discovery/presentation/PublicArtworkCard';
import { LoadingScreen } from '@/shared/components/LoadingScreen';
import { PlaceholderScreen } from '@/shared/components/PlaceholderScreen';
import { colors, spacing } from '@/shared/theme/tokens';

export default function PublicArtworksScreen() {
  const { results, isLoading, error, search } = useDiscovery();

  useEffect(() => {
    search(emptyDiscoveryFilters);
  }, [search]);

  if (isLoading) return <LoadingScreen label="Cargando obras" />;

  return (
    <PlaceholderScreen
      description={error ?? 'Obras publicadas por artistas de HABITTUS.'}
      title="Explorar obras"
    >
      {results.artworks.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>No hay obras publicadas</Text>
          <Text style={styles.muted}>
            Las obras aparecerán cuando su perfil y estado sean públicos.
          </Text>
        </View>
      ) : (
        <View style={styles.list}>
          {results.artworks.map((artwork) => (
            <PublicArtworkCard artwork={artwork} key={artwork.id} />
          ))}
        </View>
      )}
    </PlaceholderScreen>
  );
}

const styles = StyleSheet.create({
  empty: { gap: spacing.xs, marginTop: spacing.xl },
  emptyTitle: { color: colors.text, fontSize: 20, fontWeight: '600' },
  muted: { color: colors.textMuted, fontSize: 15 },
  list: { gap: spacing.md, marginTop: spacing.lg },
});
