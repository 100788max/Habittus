import { Link, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';

import type { Artwork } from '@/features/portfolio/domain/artwork';
import { usePortfolio } from '@/features/portfolio/presentation/PortfolioProvider';
import { getAvailabilityLabel } from '@/shared/components/AvailabilitySelector';
import { LoadingScreen } from '@/shared/components/LoadingScreen';
import { PlaceholderScreen } from '@/shared/components/PlaceholderScreen';
import { colors, spacing } from '@/shared/theme/tokens';

export default function PortfolioScreen() {
  const { saved } = useLocalSearchParams<{ saved?: string }>();
  const { artworks, isLoading, error, loadArtworks, deleteArtwork, setPublicationStatus } =
    usePortfolio();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [publishingId, setPublishingId] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(
    saved === '1' ? 'Obra guardada correctamente.' : null,
  );

  useEffect(() => {
    loadArtworks();
  }, [loadArtworks]);

  if (isLoading) return <LoadingScreen label="Cargando portfolio" />;

  const confirmDelete = (artwork: Artwork) => {
    Alert.alert('Eliminar obra', `¿Querés eliminar “${artwork.title}”?`, [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Eliminar',
        style: 'destructive',
        onPress: async () => {
          setDeletingId(artwork.id);
          setSuccess(null);
          try {
            await deleteArtwork(artwork.id);
            setSuccess('Obra eliminada correctamente.');
          } catch {
            // The provider exposes the actionable error above the portfolio.
          } finally {
            setDeletingId(null);
          }
        },
      },
    ]);
  };

  return (
    <PlaceholderScreen
      description={error ?? 'Administrá las obras que forman parte de tu portfolio.'}
      title="Portfolio"
    >
      {success ? (
        <Text accessibilityRole="alert" style={styles.success}>
          {success}
        </Text>
      ) : null}
      <Link href="/(professional)/artwork-editor" style={styles.createLink}>
        Agregar obra
      </Link>
      {artworks.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>Todavía no agregaste obras</Text>
          <Text style={styles.muted}>Creá la primera obra para comenzar tu portfolio.</Text>
        </View>
      ) : (
        <View style={styles.list}>
          {artworks.map((artwork) => (
            <View key={artwork.id} style={styles.card}>
              {artwork.imageUrl ? (
                <Image
                  accessibilityLabel={`Imagen de ${artwork.title}`}
                  source={{ uri: artwork.imageUrl }}
                  style={styles.image}
                />
              ) : (
                <View style={styles.imagePlaceholder}>
                  <Text style={styles.muted}>Imagen simulada</Text>
                </View>
              )}
              <View style={styles.details}>
                <Text style={styles.title}>{artwork.title}</Text>
                <Text style={styles.meta}>
                  {artwork.year} · {artwork.category} · {artwork.technique}
                </Text>
                <Text style={styles.meta}>{getAvailabilityLabel(artwork.availability)}</Text>
                <Text style={styles.status}>
                  {artwork.publicationStatus === 'published' ? 'Publicada' : 'Borrador'}
                </Text>
                <View style={styles.actions}>
                  <Link
                    href={{
                      pathname: '/(professional)/artwork-editor',
                      params: { id: artwork.id },
                    }}
                    style={styles.editLink}
                  >
                    Editar
                  </Link>
                  <Pressable
                    accessibilityRole="button"
                    disabled={publishingId === artwork.id}
                    onPress={async () => {
                      setPublishingId(artwork.id);
                      setSuccess(null);
                      try {
                        const nextStatus =
                          artwork.publicationStatus === 'published' ? 'draft' : 'published';
                        await setPublicationStatus(artwork.id, nextStatus);
                        setSuccess(
                          nextStatus === 'published'
                            ? 'Obra publicada correctamente.'
                            : 'Obra retirada de la vista pública.',
                        );
                      } catch {
                        // The provider exposes the actionable error above the portfolio.
                      } finally {
                        setPublishingId(null);
                      }
                    }}
                  >
                    <Text style={styles.editLink}>
                      {publishingId === artwork.id
                        ? 'Actualizando…'
                        : artwork.publicationStatus === 'published'
                          ? 'Ocultar'
                          : 'Publicar'}
                    </Text>
                  </Pressable>
                  <Pressable
                    accessibilityRole="button"
                    disabled={deletingId === artwork.id}
                    onPress={() => confirmDelete(artwork)}
                  >
                    <Text style={styles.deleteLink}>
                      {deletingId === artwork.id ? 'Eliminando…' : 'Eliminar'}
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          ))}
        </View>
      )}
    </PlaceholderScreen>
  );
}

const styles = StyleSheet.create({
  success: {
    backgroundColor: '#E5F1EC',
    color: colors.action,
    marginTop: spacing.lg,
    padding: spacing.md,
  },
  createLink: { color: colors.action, fontSize: 16, fontWeight: '600', marginTop: spacing.lg },
  empty: { gap: spacing.xs, marginTop: spacing.xl },
  emptyTitle: { color: colors.text, fontSize: 20, fontWeight: '600' },
  muted: { color: colors.textMuted, fontSize: 14 },
  list: { gap: spacing.md, marginTop: spacing.lg },
  card: {
    overflow: 'hidden',
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: colors.surface,
  },
  image: { width: '100%', aspectRatio: 4 / 3, backgroundColor: colors.background },
  imagePlaceholder: {
    aspectRatio: 4 / 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  details: { gap: spacing.sm, padding: spacing.md },
  title: { color: colors.text, fontSize: 20, fontWeight: '600' },
  meta: { color: colors.textMuted, fontSize: 14 },
  status: { color: colors.action, fontSize: 14, fontWeight: '600' },
  actions: { flexDirection: 'row', gap: spacing.lg, marginTop: spacing.sm },
  editLink: { color: colors.action, fontSize: 15, fontWeight: '600' },
  deleteLink: { color: '#8D2F28', fontSize: 15, fontWeight: '600' },
});
