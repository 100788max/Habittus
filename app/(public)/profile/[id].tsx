import { Link, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { PublicProfileDetail } from '@/features/discovery/domain/discovery';
import { useDiscovery } from '@/features/discovery/presentation/DiscoveryProvider';
import { PublicArtworkCard } from '@/features/discovery/presentation/PublicArtworkCard';
import { getAvailabilityLabel } from '@/shared/components/AvailabilitySelector';
import { LoadingScreen } from '@/shared/components/LoadingScreen';
import { PlaceholderScreen } from '@/shared/components/PlaceholderScreen';
import { colors, spacing } from '@/shared/theme/tokens';

export default function PublicProfileScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { getPublicProfile } = useDiscovery();
  const [detail, setDetail] = useState<PublicProfileDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setIsLoading(true);
    getPublicProfile(id)
      .then((result) => {
        if (!active) return;
        setDetail(result);
        if (!result) setError('El perfil no está disponible públicamente.');
      })
      .catch(() => active && setError('No fue posible cargar el perfil.'))
      .finally(() => active && setIsLoading(false));
    return () => {
      active = false;
    };
  }, [getPublicProfile, id]);

  if (isLoading) return <LoadingScreen label="Cargando perfil público" />;

  return (
    <PlaceholderScreen
      description={error ?? 'Perfil profesional publicado en HABITTUS.'}
      title={detail?.profile.professionalName ?? 'Perfil no disponible'}
    >
      {detail ? (
        <>
          <View style={styles.profile}>
            <Text style={styles.discipline}>{detail.profile.discipline}</Text>
            {detail.profile.location ? (
              <Text style={styles.meta}>{detail.profile.location}</Text>
            ) : null}
            <Text style={styles.biography}>{detail.profile.biography}</Text>
            <Text style={styles.meta}>{getAvailabilityLabel(detail.profile.availability)}</Text>
            {detail.profile.professionalLinks.map((link) => (
              <Text key={link} selectable style={styles.link}>
                {link}
              </Text>
            ))}
          </View>
          <Link
            href={{ pathname: '/(public)/contact', params: { profileId: detail.profile.id } }}
            style={styles.contactLink}
          >
            Contactar profesionalmente
          </Link>
          <Text accessibilityRole="header" style={styles.heading}>
            Portfolio publicado
          </Text>
          {detail.artworks.length === 0 ? (
            <Text style={styles.meta}>Este perfil todavía no tiene obras publicadas.</Text>
          ) : (
            <View style={styles.list}>
              {detail.artworks.map((artwork) => (
                <PublicArtworkCard artwork={artwork} key={artwork.id} />
              ))}
            </View>
          )}
        </>
      ) : null}
    </PlaceholderScreen>
  );
}

const styles = StyleSheet.create({
  profile: { gap: spacing.sm, marginTop: spacing.xl },
  discipline: { color: colors.text, fontSize: 20, fontWeight: '600' },
  meta: { color: colors.textMuted, fontSize: 15 },
  biography: { color: colors.text, fontSize: 16, lineHeight: 24, marginVertical: spacing.sm },
  link: { color: colors.action, fontSize: 15 },
  contactLink: { color: colors.action, fontSize: 16, fontWeight: '600', marginTop: spacing.lg },
  heading: { color: colors.text, fontSize: 24, fontWeight: '600', marginTop: spacing.xl },
  list: { gap: spacing.md, marginTop: spacing.md },
});
