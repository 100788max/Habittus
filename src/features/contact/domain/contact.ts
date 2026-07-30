export type ContactReason = 'exhibition' | 'commission' | 'collaboration' | 'press' | 'other';
export type ContactRequestStatus = 'unread' | 'read' | 'archived' | 'rejected';
export type EmailVisibility = 'public' | 'private';

export type ContactPreferences = {
  artistUserId: string;
  acceptsContacts: boolean;
  professionalEmail: string;
  emailVisibility: EmailVisibility;
  allowedReasons: ContactReason[];
  updatedAt: string | null;
};

export type ContactRequest = {
  id: string;
  profileId: string;
  artistUserId: string;
  senderName: string;
  senderEmail: string;
  subject: string;
  message: string;
  reason: ContactReason;
  status: ContactRequestStatus;
  createdAt: string;
  updatedAt: string;
};

export type NewContactRequest = Omit<ContactRequest, 'id' | 'status' | 'createdAt' | 'updatedAt'>;

export const contactReasonLabels: Record<ContactReason, string> = {
  exhibition: 'Exposición',
  commission: 'Encargo',
  collaboration: 'Colaboración',
  press: 'Prensa o publicación',
  other: 'Otro motivo profesional',
};

export function createDefaultContactPreferences(artistUserId: string): ContactPreferences {
  return {
    artistUserId,
    acceptsContacts: true,
    professionalEmail: '',
    emailVisibility: 'private',
    allowedReasons: ['exhibition', 'commission', 'collaboration'],
    updatedAt: null,
  };
}
