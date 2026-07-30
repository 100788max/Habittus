import type {
  ContactPreferences,
  ContactRequest,
  ContactRequestStatus,
  NewContactRequest,
} from '@/features/contact/domain/contact';

export interface ContactGateway {
  getPreferences(artistUserId: string): Promise<ContactPreferences>;
  getPublicPreferences(artistUserId: string): Promise<ContactPreferences>;
  savePreferences(preferences: ContactPreferences): Promise<ContactPreferences>;
  submitRequest(request: NewContactRequest): Promise<ContactRequest>;
  listRequests(artistUserId: string): Promise<ContactRequest[]>;
  setRequestStatus(
    artistUserId: string,
    requestId: string,
    status: ContactRequestStatus,
  ): Promise<ContactRequest>;
}
