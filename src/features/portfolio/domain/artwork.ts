export type ArtworkAvailability = 'available' | 'unavailable' | 'contact';
export type ArtworkPublicationStatus = 'draft' | 'published';
export type ArtworkModerationStatus = 'active' | 'hidden';

export type Artwork = {
  id: string;
  ownerUserId: string;
  title: string;
  description: string;
  category: string;
  technique: string;
  year: string;
  availability: ArtworkAvailability;
  imageUrl: string;
  publicationStatus: ArtworkPublicationStatus;
  moderationStatus: ArtworkModerationStatus;
  moderationReason: string;
  createdAt: string;
  updatedAt: string;
};

export type ArtworkDraft = Omit<
  Artwork,
  'id' | 'ownerUserId' | 'moderationStatus' | 'moderationReason' | 'createdAt' | 'updatedAt'
>;

export const emptyArtworkDraft: ArtworkDraft = {
  title: '',
  description: '',
  category: '',
  technique: '',
  year: '',
  availability: 'contact',
  imageUrl: '',
  publicationStatus: 'draft',
};
