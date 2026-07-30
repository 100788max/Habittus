import { createContext, type ReactNode, useCallback, useContext, useMemo, useState } from 'react';

import type { AuthUser } from '@/features/account/domain/auth';
import type { AdministrationSnapshot } from '@/features/administration/domain/administration';
import { administrationGateway } from '@/features/administration/infrastructure/administrationGateway';
import type { Artwork } from '@/features/portfolio/domain/artwork';
import type { ProfessionalProfile } from '@/features/profile/domain/profile';

const emptySnapshot: AdministrationSnapshot = {
  users: [],
  profiles: [],
  artworks: [],
  actions: [],
};

type AdministrationContextValue = {
  snapshot: AdministrationSnapshot;
  isLoading: boolean;
  error: string | null;
  load(): Promise<void>;
  setUserStatus(id: string, status: AuthUser['status'], reason: string): Promise<void>;
  setProfileModeration(
    id: string,
    status: ProfessionalProfile['moderationStatus'],
    reason: string,
  ): Promise<void>;
  setArtworkModeration(
    id: string,
    status: Artwork['moderationStatus'],
    reason: string,
  ): Promise<void>;
};

const AdministrationContext = createContext<AdministrationContextValue | null>(null);

export function AdministrationProvider({ children }: { children: ReactNode }) {
  const [snapshot, setSnapshot] = useState(emptySnapshot);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      setSnapshot(await administrationGateway.getSnapshot());
    } catch {
      setError('No fue posible cargar la administración.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const mutate = useCallback(async (operation: () => Promise<unknown>) => {
    setIsLoading(true);
    setError(null);
    try {
      await operation();
      setSnapshot(await administrationGateway.getSnapshot());
    } catch (operationError) {
      setError('No fue posible aplicar la acción administrativa.');
      throw operationError;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const setUserStatus = useCallback(
    (id: string, status: AuthUser['status'], reason: string) =>
      mutate(() => administrationGateway.setUserStatus(id, status, reason)),
    [mutate],
  );
  const setProfileModeration = useCallback(
    (id: string, status: ProfessionalProfile['moderationStatus'], reason: string) =>
      mutate(() => administrationGateway.setProfileModeration(id, status, reason)),
    [mutate],
  );
  const setArtworkModeration = useCallback(
    (id: string, status: Artwork['moderationStatus'], reason: string) =>
      mutate(() => administrationGateway.setArtworkModeration(id, status, reason)),
    [mutate],
  );

  const value = useMemo(
    () => ({
      snapshot,
      isLoading,
      error,
      load,
      setUserStatus,
      setProfileModeration,
      setArtworkModeration,
    }),
    [error, isLoading, load, setArtworkModeration, setProfileModeration, setUserStatus, snapshot],
  );

  return <AdministrationContext.Provider value={value}>{children}</AdministrationContext.Provider>;
}

export function useAdministration(): AdministrationContextValue {
  const context = useContext(AdministrationContext);
  if (!context) throw new Error('useAdministration must be used inside AdministrationProvider.');
  return context;
}
