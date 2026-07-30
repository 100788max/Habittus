import type { AuthGateway } from '@/features/account/application/AuthGateway';
import { MockAuthGateway } from '@/features/account/infrastructure/MockAuthGateway';

const mockAuthGateway = new MockAuthGateway();

export const authGateway: AuthGateway = mockAuthGateway;
export const accountAdministrationGateway: Pick<AuthGateway, 'listUsers' | 'setAccountStatus'> =
  mockAuthGateway;
export const accountDirectoryGateway: Pick<AuthGateway, 'listUsers'> = mockAuthGateway;
