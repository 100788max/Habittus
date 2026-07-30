import type { ContactGateway } from '@/features/contact/application/ContactGateway';
import { MockContactGateway } from '@/features/contact/infrastructure/MockContactGateway';

export const contactGateway: ContactGateway = new MockContactGateway();
