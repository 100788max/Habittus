import type { ProfileGateway } from '@/features/profile/application/ProfileGateway';
import { emptyProfile, type ProfessionalProfile } from '@/features/profile/domain/profile';

const wait = (milliseconds: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, milliseconds));

export class MockProfileGateway implements ProfileGateway {
  private readonly profiles = new Map<string, ProfessionalProfile>();

  constructor() {
    this.profiles.set('seed-lucia', {
      id: 'profile-lucia-ferrer',
      ownerUserId: 'seed-lucia',
      professionalName: 'Lucía Ferrer',
      biography: 'Artista visual enfocada en fotografía, territorio y memoria material.',
      discipline: 'Fotografía',
      location: 'Mendoza, Argentina',
      professionalLinks: ['https://example.com/lucia-ferrer'],
      availability: 'contact',
      publicationStatus: 'published',
      moderationStatus: 'active',
      moderationReason: '',
      updatedAt: '2026-01-10T12:00:00.000Z',
    });
    this.profiles.set('seed-mateo', {
      id: 'profile-mateo-rivas',
      ownerUserId: 'seed-mateo',
      professionalName: 'Mateo Rivas',
      biography: 'Escultor y ceramista que investiga volumen, oficio y materiales locales.',
      discipline: 'Escultura y cerámica',
      location: 'Córdoba, Argentina',
      professionalLinks: ['https://example.com/mateo-rivas'],
      availability: 'available',
      publicationStatus: 'published',
      moderationStatus: 'active',
      moderationReason: '',
      updatedAt: '2026-02-04T15:30:00.000Z',
    });
  }

  async getProfile(userId: string): Promise<ProfessionalProfile> {
    await wait(250);
    return (
      this.profiles.get(userId) ?? { ...emptyProfile, id: `profile-${userId}`, ownerUserId: userId }
    );
  }

  async saveProfile(userId: string, profile: ProfessionalProfile): Promise<ProfessionalProfile> {
    await wait(500);
    const existing = this.profiles.get(userId);
    const saved: ProfessionalProfile = {
      ...profile,
      id: existing?.id ?? `profile-${userId}`,
      ownerUserId: userId,
      moderationStatus: existing?.moderationStatus ?? 'active',
      moderationReason: existing?.moderationReason ?? '',
      professionalLinks: [...profile.professionalLinks],
      updatedAt: new Date().toISOString(),
    };
    this.profiles.set(userId, saved);
    return saved;
  }

  async listPublishedProfiles(): Promise<ProfessionalProfile[]> {
    await wait(300);
    return [...this.profiles.values()].filter(
      (profile) =>
        profile.publicationStatus === 'published' && profile.moderationStatus === 'active',
    );
  }

  async getPublishedProfile(profileId: string): Promise<ProfessionalProfile | null> {
    await wait(200);
    return (
      [...this.profiles.values()].find(
        (profile) =>
          profile.id === profileId &&
          profile.publicationStatus === 'published' &&
          profile.moderationStatus === 'active',
      ) ?? null
    );
  }

  async listProfiles(): Promise<ProfessionalProfile[]> {
    await wait(250);
    return [...this.profiles.values()];
  }

  async setModeration(
    profileId: string,
    moderationStatus: ProfessionalProfile['moderationStatus'],
    moderationReason: string,
  ): Promise<ProfessionalProfile> {
    await wait(350);
    const entry = [...this.profiles.entries()].find(([, profile]) => profile.id === profileId);
    if (!entry) throw new Error('Profile not found.');
    const [userId, profile] = entry;
    const updated = {
      ...profile,
      moderationStatus,
      moderationReason,
      updatedAt: new Date().toISOString(),
    };
    this.profiles.set(userId, updated);
    return updated;
  }
}
