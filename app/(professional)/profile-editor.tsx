import { useEffect } from 'react';

import { ProfileForm } from '@/features/profile/presentation/ProfileForm';
import { useProfile } from '@/features/profile/presentation/ProfileProvider';
import { LoadingScreen } from '@/shared/components/LoadingScreen';
import { PlaceholderScreen } from '@/shared/components/PlaceholderScreen';

export default function ProfileEditorScreen() {
  const { profile, isLoading, error, loadProfile, saveProfile } = useProfile();

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  if (isLoading) return <LoadingScreen label="Cargando perfil" />;

  return (
    <PlaceholderScreen
      description={error ?? 'Completá la información que identifica tu práctica profesional.'}
      title="Editar perfil"
    >
      <ProfileForm onSave={saveProfile} profile={profile} />
    </PlaceholderScreen>
  );
}
