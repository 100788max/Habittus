import type { ProfessionalProfile } from '@/features/profile/domain/profile';

export interface ProfileGateway {
  getProfile(userId: string): Promise<ProfessionalProfile>;
  saveProfile(userId: string, profile: ProfessionalProfile): Promise<ProfessionalProfile>;
  listPublishedProfiles(): Promise<ProfessionalProfile[]>;
  getPublishedProfile(profileId: string): Promise<ProfessionalProfile | null>;
  listProfiles(): Promise<ProfessionalProfile[]>;
  setModeration(
    profileId: string,
    status: ProfessionalProfile['moderationStatus'],
    reason: string,
  ): Promise<ProfessionalProfile>;
}
