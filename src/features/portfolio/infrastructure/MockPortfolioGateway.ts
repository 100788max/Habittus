import type { PortfolioGateway } from '@/features/portfolio/application/PortfolioGateway';
import type { Artwork, ArtworkDraft } from '@/features/portfolio/domain/artwork';

const wait = (milliseconds: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, milliseconds));

export class MockPortfolioGateway implements PortfolioGateway {
  private readonly portfolios = new Map<string, Artwork[]>();

  constructor() {
    this.portfolios.set('seed-lucia', [
      {
        id: 'artwork-cauce',
        ownerUserId: 'seed-lucia',
        title: 'Cauce persistente',
        description: 'Registro fotográfico sobre huellas de agua y memoria territorial.',
        category: 'Fotografía',
        technique: 'Fotografía digital',
        year: '2025',
        availability: 'contact',
        imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
        publicationStatus: 'published',
        moderationStatus: 'active',
        moderationReason: '',
        createdAt: '2026-01-10T12:00:00.000Z',
        updatedAt: '2026-01-10T12:00:00.000Z',
      },
    ]);
    this.portfolios.set('seed-mateo', [
      {
        id: 'artwork-estrato',
        ownerUserId: 'seed-mateo',
        title: 'Estrato II',
        description:
          'Pieza escultórica realizada con arcillas locales y cocción de alta temperatura.',
        category: 'Escultura',
        technique: 'Cerámica',
        year: '2024',
        availability: 'available',
        imageUrl: '',
        publicationStatus: 'published',
        moderationStatus: 'active',
        moderationReason: '',
        createdAt: '2026-02-04T15:30:00.000Z',
        updatedAt: '2026-02-04T15:30:00.000Z',
      },
    ]);
  }

  async listArtworks(userId: string): Promise<Artwork[]> {
    await wait(300);
    return [...(this.portfolios.get(userId) ?? [])];
  }

  async getArtwork(userId: string, artworkId: string): Promise<Artwork | null> {
    await wait(200);
    return this.portfolios.get(userId)?.find((artwork) => artwork.id === artworkId) ?? null;
  }

  async saveArtwork(userId: string, draft: ArtworkDraft, artworkId?: string): Promise<Artwork> {
    await wait(550);
    const artworks = [...(this.portfolios.get(userId) ?? [])];
    const existingIndex = artworkId
      ? artworks.findIndex((artwork) => artwork.id === artworkId)
      : -1;
    if (artworkId && existingIndex < 0) throw new Error('Artwork not found.');
    const now = new Date().toISOString();
    const artwork: Artwork = {
      ...draft,
      id: artworkId ?? `artwork-${Date.now()}`,
      ownerUserId: userId,
      moderationStatus: existingIndex >= 0 ? artworks[existingIndex]!.moderationStatus : 'active',
      moderationReason: existingIndex >= 0 ? artworks[existingIndex]!.moderationReason : '',
      createdAt: existingIndex >= 0 ? artworks[existingIndex]!.createdAt : now,
      updatedAt: now,
    };

    if (existingIndex >= 0) artworks[existingIndex] = artwork;
    else artworks.push(artwork);
    this.portfolios.set(userId, artworks);
    return artwork;
  }

  async deleteArtwork(userId: string, artworkId: string): Promise<void> {
    await wait(400);
    const artworks = this.portfolios.get(userId) ?? [];
    if (!artworks.some((artwork) => artwork.id === artworkId)) {
      throw new Error('Artwork not found.');
    }
    this.portfolios.set(
      userId,
      artworks.filter((artwork) => artwork.id !== artworkId),
    );
  }

  async setPublicationStatus(
    userId: string,
    artworkId: string,
    status: Artwork['publicationStatus'],
  ): Promise<Artwork> {
    await wait(350);
    const artworks = [...(this.portfolios.get(userId) ?? [])];
    const index = artworks.findIndex((artwork) => artwork.id === artworkId);
    if (index < 0) throw new Error('Artwork not found.');
    const updated = {
      ...artworks[index]!,
      publicationStatus: status,
      updatedAt: new Date().toISOString(),
    };
    artworks[index] = updated;
    this.portfolios.set(userId, artworks);
    return updated;
  }

  async listPublishedArtworks(): Promise<Artwork[]> {
    await wait(300);
    return [...this.portfolios.values()]
      .flat()
      .filter(
        (artwork) =>
          artwork.publicationStatus === 'published' && artwork.moderationStatus === 'active',
      );
  }

  async getPublishedArtwork(artworkId: string): Promise<Artwork | null> {
    await wait(200);
    return (
      [...this.portfolios.values()]
        .flat()
        .find(
          (artwork) =>
            artwork.id === artworkId &&
            artwork.publicationStatus === 'published' &&
            artwork.moderationStatus === 'active',
        ) ?? null
    );
  }

  async listArtworks(): Promise<Artwork[]> {
    await wait(250);
    return [...this.portfolios.values()].flat();
  }

  async setModeration(
    artworkId: string,
    moderationStatus: Artwork['moderationStatus'],
    moderationReason: string,
  ): Promise<Artwork> {
    await wait(350);
    for (const [userId, artworks] of this.portfolios.entries()) {
      const index = artworks.findIndex((artwork) => artwork.id === artworkId);
      if (index < 0) continue;
      const updated = {
        ...artworks[index]!,
        moderationStatus,
        moderationReason,
        updatedAt: new Date().toISOString(),
      };
      const next = [...artworks];
      next[index] = updated;
      this.portfolios.set(userId, next);
      return updated;
    }
    throw new Error('Artwork not found.');
  }
}
