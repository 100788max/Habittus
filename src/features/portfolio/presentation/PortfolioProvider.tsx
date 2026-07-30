import { createContext, type ReactNode, useCallback, useContext, useMemo, useState } from 'react';

import { useAuth } from '@/features/account/presentation/AuthProvider';
import type { Artwork, ArtworkDraft } from '@/features/portfolio/domain/artwork';
import { portfolioGateway } from '@/features/portfolio/infrastructure/portfolioGateway';

type PortfolioContextValue = {
  artworks: Artwork[];
  isLoading: boolean;
  error: string | null;
  loadArtworks(): Promise<void>;
  getArtwork(id: string): Promise<Artwork | null>;
  saveArtwork(draft: ArtworkDraft, id?: string): Promise<Artwork>;
  deleteArtwork(id: string): Promise<void>;
  setPublicationStatus(id: string, status: Artwork['publicationStatus']): Promise<void>;
};

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const { session } = useAuth();
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const requireUserId = useCallback(() => {
    if (!session) throw new Error('No active session.');
    return session.user.id;
  }, [session]);

  const loadArtworks = useCallback(async () => {
    if (!session) return;
    setIsLoading(true);
    setError(null);
    try {
      setArtworks(await portfolioGateway.listArtworks(session.user.id));
    } catch {
      setError('No fue posible cargar el portfolio. Intentá nuevamente.');
    } finally {
      setIsLoading(false);
    }
  }, [session]);

  const getArtwork = useCallback(
    (id: string) => portfolioGateway.getArtwork(requireUserId(), id),
    [requireUserId],
  );

  const saveArtwork = useCallback(
    async (draft: ArtworkDraft, id?: string) => {
      setError(null);
      try {
        const saved = await portfolioGateway.saveArtwork(requireUserId(), draft, id);
        setArtworks((current) => {
          const index = current.findIndex((artwork) => artwork.id === saved.id);
          if (index < 0) return [...current, saved];
          return current.map((artwork) => (artwork.id === saved.id ? saved : artwork));
        });
        return saved;
      } catch (saveError) {
        setError('No fue posible guardar la obra. Intentá nuevamente.');
        throw saveError;
      }
    },
    [requireUserId],
  );

  const deleteArtwork = useCallback(
    async (id: string) => {
      setError(null);
      try {
        await portfolioGateway.deleteArtwork(requireUserId(), id);
        setArtworks((current) => current.filter((artwork) => artwork.id !== id));
      } catch (deleteError) {
        setError('No fue posible eliminar la obra. Intentá nuevamente.');
        throw deleteError;
      }
    },
    [requireUserId],
  );

  const setPublicationStatus = useCallback(
    async (id: string, status: Artwork['publicationStatus']) => {
      setError(null);
      try {
        const updated = await portfolioGateway.setPublicationStatus(requireUserId(), id, status);
        setArtworks((current) =>
          current.map((artwork) => (artwork.id === updated.id ? updated : artwork)),
        );
      } catch (publicationError) {
        setError('No fue posible cambiar la publicación de la obra.');
        throw publicationError;
      }
    },
    [requireUserId],
  );

  const value = useMemo(
    () => ({
      artworks,
      isLoading,
      error,
      loadArtworks,
      getArtwork,
      saveArtwork,
      deleteArtwork,
      setPublicationStatus,
    }),
    [
      artworks,
      deleteArtwork,
      error,
      getArtwork,
      isLoading,
      loadArtworks,
      saveArtwork,
      setPublicationStatus,
    ],
  );

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
}

export function usePortfolio(): PortfolioContextValue {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error('usePortfolio must be used inside PortfolioProvider.');
  return context;
}
