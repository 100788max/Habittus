import { accountDirectoryGateway } from '@/features/account/infrastructure/authGateway';
import type { DiscoveryGateway } from '@/features/discovery/application/DiscoveryGateway';
import type {
  DiscoveryFilters,
  DiscoveryResults,
  PublicArtworkDetail,
  PublicProfileDetail,
} from '@/features/discovery/domain/discovery';
import type { Artwork } from '@/features/portfolio/domain/artwork';
import { portfolioGateway } from '@/features/portfolio/infrastructure/portfolioGateway';
import type { ProfessionalProfile } from '@/features/profile/domain/profile';
import { profileGateway } from '@/features/profile/infrastructure/profileGateway';

export class CurrentDataDiscoveryGateway implements DiscoveryGateway {
  async search(filters: DiscoveryFilters): Promise<DiscoveryResults> {
    const [profiles, artworks, users] = await Promise.all([
      profileGateway.listPublishedProfiles(),
      portfolioGateway.listPublishedArtworks(),
      accountDirectoryGateway.listUsers(),
    ]);
    const activeOwnerIds = new Set(
      users
        .filter((user) => user.role === 'artist' && user.status === 'active')
        .map((user) => user.id),
    );
    const visibleProfiles = profiles.filter((profile) => activeOwnerIds.has(profile.ownerUserId));
    const publicOwnerIds = new Set(visibleProfiles.map((profile) => profile.ownerUserId));
    const visibleArtworks = artworks.filter((artwork) => publicOwnerIds.has(artwork.ownerUserId));

    const filteredArtworks = visibleArtworks.filter((artwork) => {
      const profile = visibleProfiles.find(
        (candidate) => candidate.ownerUserId === artwork.ownerUserId,
      );
      return profile ? artworkMatches(artwork, profile, filters) : false;
    });
    const filteredProfiles = visibleProfiles.filter((profile) => {
      const ownedArtworks = visibleArtworks.filter(
        (artwork) => artwork.ownerUserId === profile.ownerUserId,
      );
      return profileMatches(profile, filters, ownedArtworks);
    });

    return {
      profiles: filteredProfiles.map(toPublicProfile),
      artworks: filteredArtworks.map(toPublicArtwork),
    };
  }

  async getPublicProfile(profileId: string): Promise<PublicProfileDetail | null> {
    const profile = await profileGateway.getPublishedProfile(profileId);
    if (!profile) return null;
    if (!(await this.isActiveArtist(profile.ownerUserId))) return null;
    const artworks = (await portfolioGateway.listPublishedArtworks()).filter(
      (artwork) => artwork.ownerUserId === profile.ownerUserId,
    );
    return { profile: toPublicProfile(profile), artworks: artworks.map(toPublicArtwork) };
  }

  async getPublicArtwork(artworkId: string): Promise<PublicArtworkDetail | null> {
    const artwork = await portfolioGateway.getPublishedArtwork(artworkId);
    if (!artwork) return null;
    if (!(await this.isActiveArtist(artwork.ownerUserId))) return null;
    const profiles = await profileGateway.listPublishedProfiles();
    const profile = profiles.find((candidate) => candidate.ownerUserId === artwork.ownerUserId);
    return profile
      ? { artwork: toPublicArtwork(artwork), profile: toPublicProfile(profile) }
      : null;
  }

  private async isActiveArtist(userId: string): Promise<boolean> {
    const users = await accountDirectoryGateway.listUsers();
    return users.some(
      (user) => user.id === userId && user.role === 'artist' && user.status === 'active',
    );
  }
}

function toPublicProfile(profile: ProfessionalProfile): PublicProfileDetail['profile'] {
  const { moderationReason: _reason, moderationStatus: _status, ...publicData } = profile;
  return publicData;
}

function toPublicArtwork(artwork: Artwork): PublicArtworkDetail['artwork'] {
  const { moderationReason: _reason, moderationStatus: _status, ...publicData } = artwork;
  return publicData;
}

function profileMatches(
  profile: PublicProfileDetail['profile'],
  filters: DiscoveryFilters,
  artworks: Artwork[],
): boolean {
  const query = normalize(filters.query);
  const profileText = normalize(
    [profile.professionalName, profile.biography, profile.discipline, profile.location].join(' '),
  );
  const artworkText = normalize(
    artworks
      .map((artwork) =>
        [artwork.title, artwork.description, artwork.category, artwork.technique].join(' '),
      )
      .join(' '),
  );

  return (
    (!query || profileText.includes(query) || artworkText.includes(query)) &&
    includes(profile.discipline, filters.discipline) &&
    includes(profile.location, filters.location) &&
    (!filters.category ||
      artworks.some((artwork) => includes(artwork.category, filters.category))) &&
    (!filters.technique ||
      artworks.some((artwork) => includes(artwork.technique, filters.technique)))
  );
}

function artworkMatches(
  artwork: Artwork,
  profile: PublicProfileDetail['profile'],
  filters: DiscoveryFilters,
): boolean {
  const query = normalize(filters.query);
  const text = normalize(
    [
      artwork.title,
      artwork.description,
      artwork.category,
      artwork.technique,
      artwork.year,
      profile.professionalName,
      profile.discipline,
      profile.location,
    ].join(' '),
  );
  return (
    (!query || text.includes(query)) &&
    includes(profile.discipline, filters.discipline) &&
    includes(profile.location, filters.location) &&
    includes(artwork.category, filters.category) &&
    includes(artwork.technique, filters.technique)
  );
}

function includes(value: string, filter: string): boolean {
  return !filter.trim() || normalize(value).includes(normalize(filter));
}

function normalize(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase();
}
