import type { ProfileGateway } from '@/features/profile/application/ProfileGateway';
import { MockProfileGateway } from '@/features/profile/infrastructure/MockProfileGateway';

export const profileGateway: ProfileGateway = new MockProfileGateway();
