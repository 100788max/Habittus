import { Link } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { emptyDiscoveryFilters } from '@/features/discovery/domain/discovery';
import { useDiscovery } from '@/features/discovery/presentation/DiscoveryProvider';
import { PublicArtistCard } from '@/features/discovery/presentation/PublicArtistCard';
import { LoadingScreen } from '@/shared/components/LoadingScreen';
import { PlaceholderScreen } from '@/shared/components/PlaceholderScreen';
import { colors, spacing } from '@/shared/theme/tokens';

export default function ExploreScreen() {
  const { results, isLoading, error, search } = useDiscovery();

  useEffect(() => {
    search(emptyDiscoveryFilters);
  }, [search]);

  if (isLoading) return <LoadingScreen label="Cargando artistas" />;

  return (
    <PlaceholderScreen
      description={error ?? 'Perfiles profesionales publicados dentro de HABITTUS.'}
      title="Explorar artistas"
    >
      <View style={styles.actions}>
        <Link href="/(public)/search" style={styles.link}>
          Buscar y filtrar
        </Link>
        <Link href="/(public)/artworks" style={styles.link}>
          Explorar obras
        </Link>
      </View>
      {results.profiles.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>No hay perfiles publicados</Text>
          <Text style={styles.muted}>
            Los perfiles aparecerán cuando sus artistas los publiquen.
          </Text>
        </View>
      ) : (
        <View style={styles.list}>
          {results.profiles.map((profile) => (
            <PublicArtistCard key={profile.id} profile={profile} />
          ))}
        </View>
      )}
    </PlaceholderScreen>
  );
}

const styles = StyleSheet.create({
  actions: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.lg, marginTop: spacing.lg },
  link: { color: colors.action, fontSize: 16, fontWeight: '600' },
  empty: { gap: spacing.xs, marginTop: spacing.xl },
  emptyTitle: { color: colors.text, fontSize: 20, fontWeight: '600' },
  muted: { color: colors.textMuted, fontSize: 15 },
  list: { gap: spacing.md, marginTop: spacing.lg },
});
