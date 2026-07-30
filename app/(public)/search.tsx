import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  emptyDiscoveryFilters,
  type DiscoveryFilters,
} from '@/features/discovery/domain/discovery';
import { useDiscovery } from '@/features/discovery/presentation/DiscoveryProvider';
import { PublicArtistCard } from '@/features/discovery/presentation/PublicArtistCard';
import { PublicArtworkCard } from '@/features/discovery/presentation/PublicArtworkCard';
import { FormField } from '@/shared/components/FormField';
import { PlaceholderScreen } from '@/shared/components/PlaceholderScreen';
import { SubmitButton } from '@/shared/components/SubmitButton';
import { colors, spacing } from '@/shared/theme/tokens';

export default function SearchScreen() {
  const { results, isLoading, error, search } = useDiscovery();
  const [filters, setFilters] = useState<DiscoveryFilters>(emptyDiscoveryFilters);
  const [hasSearched, setHasSearched] = useState(false);

  const update = (field: keyof DiscoveryFilters, value: string) => {
    setFilters((current) => ({ ...current, [field]: value }));
  };

  const submit = async () => {
    setHasSearched(true);
    await search(filters);
  };

  const hasResults = results.profiles.length > 0 || results.artworks.length > 0;

  return (
    <PlaceholderScreen
      description={error ?? 'Buscá información pública mediante criterios profesionales.'}
      title="Buscar"
    >
      <View style={styles.form}>
        <FormField
          label="Nombre o término"
          onChangeText={(value) => update('query', value)}
          value={filters.query}
        />
        <FormField
          label="Disciplina"
          onChangeText={(value) => update('discipline', value)}
          value={filters.discipline}
        />
        <FormField
          label="Categoría"
          onChangeText={(value) => update('category', value)}
          value={filters.category}
        />
        <FormField
          label="Técnica"
          onChangeText={(value) => update('technique', value)}
          value={filters.technique}
        />
        <FormField
          label="Ubicación general"
          onChangeText={(value) => update('location', value)}
          value={filters.location}
        />
        <SubmitButton isLoading={isLoading} label="Buscar" onPress={submit} />
      </View>

      {hasSearched && !isLoading && !hasResults ? (
        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>No encontramos resultados</Text>
          <Text style={styles.muted}>Probá retirar uno o más filtros.</Text>
        </View>
      ) : null}

      {hasSearched && hasResults ? (
        <View style={styles.results}>
          {results.profiles.length > 0 ? (
            <View style={styles.section}>
              <Text accessibilityRole="header" style={styles.heading}>
                Artistas
              </Text>
              {results.profiles.map((profile) => (
                <PublicArtistCard key={profile.id} profile={profile} />
              ))}
            </View>
          ) : null}
          {results.artworks.length > 0 ? (
            <View style={styles.section}>
              <Text accessibilityRole="header" style={styles.heading}>
                Obras
              </Text>
              {results.artworks.map((artwork) => (
                <PublicArtworkCard artwork={artwork} key={artwork.id} />
              ))}
            </View>
          ) : null}
        </View>
      ) : null}
    </PlaceholderScreen>
  );
}

const styles = StyleSheet.create({
  form: { gap: spacing.md, marginTop: spacing.xl },
  empty: { gap: spacing.xs, marginTop: spacing.xl },
  emptyTitle: { color: colors.text, fontSize: 20, fontWeight: '600' },
  muted: { color: colors.textMuted, fontSize: 15 },
  results: { gap: spacing.xl, marginTop: spacing.xl },
  section: { gap: spacing.md },
  heading: { color: colors.text, fontSize: 24, fontWeight: '600' },
});
