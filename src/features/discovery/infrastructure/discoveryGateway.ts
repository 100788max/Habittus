import type { DiscoveryGateway } from '@/features/discovery/application/DiscoveryGateway';
import { CurrentDataDiscoveryGateway } from '@/features/discovery/infrastructure/CurrentDataDiscoveryGateway';

export const discoveryGateway: DiscoveryGateway = new CurrentDataDiscoveryGateway();
