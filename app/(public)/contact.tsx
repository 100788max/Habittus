import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';

import type { ContactPreferences, NewContactRequest } from '@/features/contact/domain/contact';
import { useContact } from '@/features/contact/presentation/ContactProvider';
import { PublicContactForm } from '@/features/contact/presentation/PublicContactForm';
import type { PublicProfileDetail } from '@/features/discovery/domain/discovery';
import { useDiscovery } from '@/features/discovery/presentation/DiscoveryProvider';
import { LoadingScreen } from '@/shared/components/LoadingScreen';
import { PlaceholderScreen } from '@/shared/components/PlaceholderScreen';

export default function PublicContactScreen() {
  const { profileId } = useLocalSearchParams<{ profileId: string }>();
  const { getPublicProfile } = useDiscovery();
  const { getPublicPreferences, submitRequest } = useContact();
  const [profile, setProfile] = useState<PublicProfileDetail | null>(null);
  const [preferences, setPreferences] = useState<ContactPreferences | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setIsLoading(true);
    getPublicProfile(profileId)
      .then(async (detail) => {
        if (!detail) throw new Error('Profile is not public.');
        const nextPreferences = await getPublicPreferences(detail.profile.ownerUserId);
        if (!active) return;
        setProfile(detail);
        setPreferences(nextPreferences);
      })
      .catch(() => active && setError('El contacto profesional no está disponible.'))
      .finally(() => active && setIsLoading(false));
    return () => {
      active = false;
    };
  }, [getPublicPreferences, getPublicProfile, profileId]);

  if (isLoading) return <LoadingScreen label="Cargando contacto profesional" />;

  return (
    <PlaceholderScreen
      description={
        error ?? `Enviá una solicitud profesional a ${profile?.profile.professionalName}.`
      }
      title="Contacto profesional"
    >
      {preferences?.acceptsContacts && profile ? (
        <>
          {preferences.emailVisibility === 'public' && preferences.professionalEmail ? (
            <Text selectable>Email profesional: {preferences.professionalEmail}</Text>
          ) : null}
          <PublicContactForm
            onSubmit={(request: NewContactRequest) => submitRequest(request).then(() => undefined)}
            preferences={preferences}
            profileId={profile.profile.id}
          />
        </>
      ) : !error ? (
        <Text>Este artista no acepta solicitudes profesionales en este momento.</Text>
      ) : null}
    </PlaceholderScreen>
  );
}
