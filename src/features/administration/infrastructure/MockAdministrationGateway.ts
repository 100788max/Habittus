import type { AuthUser } from '@/features/account/domain/auth';
import { accountAdministrationGateway } from '@/features/account/infrastructure/authGateway';
import type { AdministrationGateway } from '@/features/administration/application/AdministrationGateway';
import type {
  AdministrationSnapshot,
  ModerationAction,
} from '@/features/administration/domain/administration';
import type { Artwork } from '@/features/portfolio/domain/artwork';
import { portfolioGateway } from '@/features/portfolio/infrastructure/portfolioGateway';
import type { ProfessionalProfile } from '@/features/profile/domain/profile';
import { profileGateway } from '@/features/profile/infrastructure/profileGateway';

export class MockAdministrationGateway implements AdministrationGateway {
  private readonly actions: ModerationAction[] = [];

  async getSnapshot(): Promise<AdministrationSnapshot> {
    const [users, profiles, artworks] = await Promise.all([
      accountAdministrationGateway.listUsers(),
      profileGateway.listProfiles(),
      portfolioGateway.listArtworks(),
    ]);
    return { users, profiles, artworks, actions: await this.listActions() };
  }

  async setUserStatus(
    userId: string,
    status: AuthUser['status'],
    reason: string,
  ): Promise<AuthUser> {
    assertReason(reason);
    const user = await accountAdministrationGateway.setAccountStatus(userId, status);
    if (status === 'suspended') {
      const profiles = await profileGateway.listProfiles();
      const profile = profiles.find((candidate) => candidate.ownerUserId === userId);
      if (profile) await profileGateway.setModeration(profile.id, 'hidden', reason);
    }
    this.record('user', userId, status, reason);
    return user;
  }

  async setProfileModeration(
    profileId: string,
    status: ProfessionalProfile['moderationStatus'],
    reason: string,
  ): Promise<ProfessionalProfile> {
    assertReason(reason);
    const profile = await profileGateway.setModeration(profileId, status, reason);
    this.record('profile', profileId, status, reason);
    return profile;
  }

  async setArtworkModeration(
    artworkId: string,
    status: Artwork['moderationStatus'],
    reason: string,
  ): Promise<Artwork> {
    assertReason(reason);
    const artwork = await portfolioGateway.setModeration(artworkId, status, reason);
    this.record('artwork', artworkId, status, reason);
    return artwork;
  }

  async listActions(): Promise<ModerationAction[]> {
    return [...this.actions];
  }

  private record(
    targetType: ModerationAction['targetType'],
    targetId: string,
    action: string,
    reason: string,
  ) {
    this.actions.unshift({
      id: `moderation-${Date.now()}-${this.actions.length}`,
      targetType,
      targetId,
      action,
      reason: reason.trim(),
      createdAt: new Date().toISOString(),
    });
  }
}

function assertReason(reason: string) {
  if (reason.trim().length < 5) throw new Error('A moderation reason is required.');
}
