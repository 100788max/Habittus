export type AccountStatus = 'active' | 'suspended';

export type AuthUser = {
  id: string;
  email: string;
  role: 'artist' | 'admin';
  status: AccountStatus;
};

export type AuthSession = {
  user: AuthUser;
  accessToken: string;
};

export type SignInCredentials = {
  email: string;
  password: string;
};

export type RegistrationData = SignInCredentials & {
  acceptedTerms: boolean;
};
