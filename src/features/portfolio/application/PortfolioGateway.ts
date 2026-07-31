import type { Artwork, ArtworkDraft } from '@/features/portfolio/domain/artwork';

export interface PortfolioGateway {
  listArtworks(userId?: string): Promise<Artwork[]>;
  getArtwork(userId: string, artworkId: string): Promise<Artwork | null>;
  saveArtwork(userId: string, draft: ArtworkDraft, artworkId?: string): Promise<Artwork>;
  deleteArtwork(userId: string, artworkId: string): Promise<void>;
  setPublicationStatus(
    userId: string,
    artworkId: string,
    status: Artwork['publicationStatus'],
  ): Promise<Artwork>;
  listPublishedArtworks(): Promise<Artwork[]>;
  getPublishedArtwork(artworkId: string): Promise<Artwork | null>;
  setModeration(
    artworkId: string,
    status: Artwork['moderationStatus'],
    reason: string,
  ): Promise<Artwork>;
}
