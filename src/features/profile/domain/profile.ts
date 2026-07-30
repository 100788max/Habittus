export type ProfessionalAvailability = 'available' | 'unavailable' | 'contact';
export type ProfilePublicationStatus = 'draft' | 'published';
export type ModerationStatus = 'active' | 'hidden';

export type ProfessionalProfile = {
  id: string;
  ownerUserId: string;
  professionalName: string;
  biography: string;
  discipline: string;
  location: string;
  professionalLinks: string[];
  availability: ProfessionalAvailability;
  publicationStatus: ProfilePublicationStatus;
  moderationStatus: ModerationStatus;
  moderationReason: string;
  updatedAt: string | null;
};

export const emptyProfile: ProfessionalProfile = {
  id: '',
  ownerUserId: '',
  professionalName: '',
  biography: '',
  discipline: '',
  location: '',
  professionalLinks: [],
  availability: 'contact',
  publicationStatus: 'draft',
  moderationStatus: 'active',
  moderationReason: '',
  updatedAt: null,
};
