import type { AuthUser } from '@/features/account/domain/auth';
import type {
  AdministrationSnapshot,
  ModerationAction,
} from '@/features/administration/domain/administration';
import type { Artwork } from '@/features/portfolio/domain/artwork';
import type { ProfessionalProfile } from '@/features/profile/domain/profile';

export interface AdministrationGateway {
  getSnapshot(): Promise<AdministrationSnapshot>;
  setUserStatus(userId: string, status: AuthUser['status'], reason: string): Promise<AuthUser>;
  setProfileModeration(
    profileId: string,
    status: ProfessionalProfile['moderationStatus'],
    reason: string,
  ): Promise<ProfessionalProfile>;
  setArtworkModeration(
    artworkId: string,
    status: Artwork['moderationStatus'],
    reason: string,
  ): Promise<Artwork>;
  listActions(): Promise<ModerationAction[]>;
}
