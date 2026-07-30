import type {
  AuthSession,
  AuthUser,
  RegistrationData,
  SignInCredentials,
} from '@/features/account/domain/auth';

export interface AuthGateway {
  restoreSession(): Promise<AuthSession | null>;
  signIn(credentials: SignInCredentials): Promise<AuthSession>;
  register(data: RegistrationData): Promise<AuthSession>;
  signOut(): Promise<void>;
  listUsers(): Promise<AuthUser[]>;
  setAccountStatus(userId: string, status: AuthUser['status']): Promise<AuthUser>;
}
