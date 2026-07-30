import { createContext, type ReactNode, useCallback, useContext, useMemo, useState } from 'react';

import type {
  DiscoveryFilters,
  DiscoveryResults,
  PublicArtworkDetail,
  PublicProfileDetail,
} from '@/features/discovery/domain/discovery';
import { discoveryGateway } from '@/features/discovery/infrastructure/discoveryGateway';

const emptyResults: DiscoveryResults = { profiles: [], artworks: [] };

type DiscoveryContextValue = {
  results: DiscoveryResults;
  isLoading: boolean;
  error: string | null;
  search(filters: DiscoveryFilters): Promise<void>;
  getPublicProfile(id: string): Promise<PublicProfileDetail | null>;
  getPublicArtwork(id: string): Promise<PublicArtworkDetail | null>;
};

const DiscoveryContext = createContext<DiscoveryContextValue | null>(null);

export function DiscoveryProvider({ children }: { children: ReactNode }) {
  const [results, setResults] = useState<DiscoveryResults>(emptyResults);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (filters: DiscoveryFilters) => {
    setIsLoading(true);
    setError(null);
    try {
      setResults(await discoveryGateway.search(filters));
    } catch {
      setResults(emptyResults);
      setError('No fue posible cargar el contenido público. Intentá nuevamente.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getPublicProfile = useCallback((id: string) => discoveryGateway.getPublicProfile(id), []);
  const getPublicArtwork = useCallback((id: string) => discoveryGateway.getPublicArtwork(id), []);

  const value = useMemo(
    () => ({ results, isLoading, error, search, getPublicProfile, getPublicArtwork }),
    [error, getPublicArtwork, getPublicProfile, isLoading, results, search],
  );

  return <DiscoveryContext.Provider value={value}>{children}</DiscoveryContext.Provider>;
}

export function useDiscovery(): DiscoveryContextValue {
  const context = useContext(DiscoveryContext);
  if (!context) throw new Error('useDiscovery must be used inside DiscoveryProvider.');
  return context;
}
