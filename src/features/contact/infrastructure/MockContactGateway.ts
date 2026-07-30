import type { ContactGateway } from '@/features/contact/application/ContactGateway';
import type {
  ContactPreferences,
  ContactRequest,
  ContactRequestStatus,
  NewContactRequest,
} from '@/features/contact/domain/contact';
import { createDefaultContactPreferences } from '@/features/contact/domain/contact';
import {
  validateContactPreferences,
  validateContactRequest,
} from '@/features/contact/application/validation';
import { profileGateway } from '@/features/profile/infrastructure/profileGateway';
import { accountDirectoryGateway } from '@/features/account/infrastructure/authGateway';

const wait = (milliseconds: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, milliseconds));

export class MockContactGateway implements ContactGateway {
  private readonly preferences = new Map<string, ContactPreferences>();
  private readonly requests = new Map<string, ContactRequest[]>();

  constructor() {
    this.preferences.set('seed-lucia', {
      ...createDefaultContactPreferences('seed-lucia'),
      professionalEmail: 'contacto.lucia@example.com',
      emailVisibility: 'public',
      allowedReasons: ['exhibition', 'collaboration', 'press'],
    });
    this.preferences.set('seed-mateo', {
      ...createDefaultContactPreferences('seed-mateo'),
      professionalEmail: 'taller.mateo@example.com',
      emailVisibility: 'private',
      allowedReasons: ['commission', 'collaboration'],
    });
  }

  async getPreferences(artistUserId: string): Promise<ContactPreferences> {
    await wait(200);
    const preferences =
      this.preferences.get(artistUserId) ?? createDefaultContactPreferences(artistUserId);
    return { ...preferences, allowedReasons: [...preferences.allowedReasons] };
  }

  async getPublicPreferences(artistUserId: string): Promise<ContactPreferences> {
    const preferences = await this.getPreferences(artistUserId);
    return {
      ...preferences,
      professionalEmail:
        preferences.emailVisibility === 'public' ? preferences.professionalEmail : '',
    };
  }

  async savePreferences(preferences: ContactPreferences): Promise<ContactPreferences> {
    await wait(400);
    if (Object.keys(validateContactPreferences(preferences)).length > 0) {
      throw new Error('Invalid contact preferences.');
    }
    const saved = {
      ...preferences,
      professionalEmail: preferences.professionalEmail.trim().toLowerCase(),
      allowedReasons: [...preferences.allowedReasons],
      updatedAt: new Date().toISOString(),
    };
    this.preferences.set(preferences.artistUserId, saved);
    return saved;
  }

  async submitRequest(request: NewContactRequest): Promise<ContactRequest> {
    await wait(500);
    if (Object.keys(validateContactRequest(request)).length > 0) {
      throw new Error('Invalid contact request.');
    }
    const profile = await profileGateway.getPublishedProfile(request.profileId);
    const activeRecipient = (await accountDirectoryGateway.listUsers()).some(
      (user) =>
        user.id === request.artistUserId && user.role === 'artist' && user.status === 'active',
    );
    if (!profile || profile.ownerUserId !== request.artistUserId || !activeRecipient) {
      throw new Error('Public profile does not match the contact recipient.');
    }
    const preferences = await this.getPreferences(request.artistUserId);
    if (!preferences.acceptsContacts || !preferences.allowedReasons.includes(request.reason)) {
      throw new Error('Contact reason is not accepted.');
    }
    const now = new Date().toISOString();
    const saved: ContactRequest = {
      ...request,
      id: `contact-${Date.now()}`,
      senderEmail: request.senderEmail.trim().toLowerCase(),
      senderName: request.senderName.trim(),
      subject: request.subject.trim(),
      message: request.message.trim(),
      status: 'unread',
      createdAt: now,
      updatedAt: now,
    };
    this.requests.set(request.artistUserId, [
      saved,
      ...(this.requests.get(request.artistUserId) ?? []),
    ]);
    return saved;
  }

  async listRequests(artistUserId: string): Promise<ContactRequest[]> {
    await wait(250);
    return [...(this.requests.get(artistUserId) ?? [])];
  }

  async setRequestStatus(
    artistUserId: string,
    requestId: string,
    status: ContactRequestStatus,
  ): Promise<ContactRequest> {
    await wait(300);
    const requests = [...(this.requests.get(artistUserId) ?? [])];
    const index = requests.findIndex((request) => request.id === requestId);
    if (index < 0) throw new Error('Contact request not found.');
    const updated = { ...requests[index]!, status, updatedAt: new Date().toISOString() };
    requests[index] = updated;
    this.requests.set(artistUserId, requests);
    return updated;
  }
}
