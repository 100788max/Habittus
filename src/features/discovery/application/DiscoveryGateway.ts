import type {
  DiscoveryFilters,
  DiscoveryResults,
  PublicArtworkDetail,
  PublicProfileDetail,
} from '@/features/discovery/domain/discovery';

export interface DiscoveryGateway {
  search(filters: DiscoveryFilters): Promise<DiscoveryResults>;
  getPublicProfile(profileId: string): Promise<PublicProfileDetail | null>;
  getPublicArtwork(artworkId: string): Promise<PublicArtworkDetail | null>;
}
