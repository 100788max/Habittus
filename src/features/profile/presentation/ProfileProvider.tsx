import { createContext, type ReactNode, useCallback, useContext, useMemo, useState } from 'react';

import { useAuth } from '@/features/account/presentation/AuthProvider';
import { validateProfile } from '@/features/profile/application/validation';
import { emptyProfile, type ProfessionalProfile } from '@/features/profile/domain/profile';
import { profileGateway } from '@/features/profile/infrastructure/profileGateway';

type ProfileContextValue = {
  profile: ProfessionalProfile;
  isLoading: boolean;
  error: string | null;
  loadProfile(): Promise<void>;
  saveProfile(profile: ProfessionalProfile): Promise<void>;
  setPublicationStatus(status: ProfessionalProfile['publicationStatus']): Promise<void>;
};

const ProfileContext = createContext<ProfileContextValue | null>(null);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const { session } = useAuth();
  const [profile, setProfile] = useState<ProfessionalProfile>(emptyProfile);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadProfile = useCallback(async () => {
    if (!session) return;
    setIsLoading(true);
    setError(null);
    try {
      setProfile(await profileGateway.getProfile(session.user.id));
    } catch {
      setError('No fue posible cargar el perfil. Intentá nuevamente.');
    } finally {
      setIsLoading(false);
    }
  }, [session]);

  const saveProfile = useCallback(
    async (nextProfile: ProfessionalProfile) => {
      if (!session) throw new Error('No active session.');
      setError(null);
      try {
        setProfile(await profileGateway.saveProfile(session.user.id, nextProfile));
      } catch (saveError) {
        setError('No fue posible guardar el perfil. Intentá nuevamente.');
        throw saveError;
      }
    },
    [session],
  );

  const setPublicationStatus = useCallback(
    async (publicationStatus: ProfessionalProfile['publicationStatus']) => {
      if (publicationStatus === 'published' && Object.keys(validateProfile(profile)).length > 0) {
        throw new Error('Profile does not meet publication requirements.');
      }
      await saveProfile({ ...profile, publicationStatus });
    },
    [profile, saveProfile],
  );

  const value = useMemo(
    () => ({ profile, isLoading, error, loadProfile, saveProfile, setPublicationStatus }),
    [error, isLoading, loadProfile, profile, saveProfile, setPublicationStatus],
  );

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export function useProfile(): ProfileContextValue {
  const context = useContext(ProfileContext);
  if (!context) throw new Error('useProfile must be used inside ProfileProvider.');
  return context;
}
