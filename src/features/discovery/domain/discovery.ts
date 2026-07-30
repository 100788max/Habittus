import type { Artwork } from '@/features/portfolio/domain/artwork';
import type { ProfessionalProfile } from '@/features/profile/domain/profile';

export type DiscoveryFilters = {
  query: string;
  discipline: string;
  category: string;
  technique: string;
  location: string;
};

export type PublicProfessionalProfile = Omit<
  ProfessionalProfile,
  'moderationStatus' | 'moderationReason'
>;
export type PublicArtwork = Omit<Artwork, 'moderationStatus' | 'moderationReason'>;

export type DiscoveryResults = {
  profiles: PublicProfessionalProfile[];
  artworks: PublicArtwork[];
};

export type PublicProfileDetail = {
  profile: PublicProfessionalProfile;
  artworks: PublicArtwork[];
};

export type PublicArtworkDetail = {
  artwork: PublicArtwork;
  profile: PublicProfessionalProfile;
};

export const emptyDiscoveryFilters: DiscoveryFilters = {
  query: '',
  discipline: '',
  category: '',
  technique: '',
  location: '',
};
