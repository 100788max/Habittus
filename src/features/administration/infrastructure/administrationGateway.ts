import type { AdministrationGateway } from '@/features/administration/application/AdministrationGateway';
import { MockAdministrationGateway } from '@/features/administration/infrastructure/MockAdministrationGateway';

export const administrationGateway: AdministrationGateway = new MockAdministrationGateway();
