import type { AuthUser } from '@/features/account/domain/auth';
import type { Artwork } from '@/features/portfolio/domain/artwork';
import type { ProfessionalProfile } from '@/features/profile/domain/profile';

export type ModerationAction = {
  id: string;
  targetType: 'user' | 'profile' | 'artwork';
  targetId: string;
  action: string;
  reason: string;
  createdAt: string;
};

export type AdministrationSnapshot = {
  users: AuthUser[];
  profiles: ProfessionalProfile[];
  artworks: Artwork[];
  actions: ModerationAction[];
};
