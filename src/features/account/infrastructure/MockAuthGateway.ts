import type { AuthGateway } from '@/features/account/application/AuthGateway';
import { normalizeEmail } from '@/features/account/application/validation';
import { AuthError } from '@/features/account/domain/AuthError';
import type {
  AuthSession,
  AuthUser,
  RegistrationData,
  SignInCredentials,
} from '@/features/account/domain/auth';

type MockAccount = AuthUser & { password: string };

const wait = (milliseconds: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, milliseconds));

/**
 * Development-only adapter. It intentionally keeps data in memory so no
 * credential is persisted on the device before a secure provider is selected.
 */
export class MockAuthGateway implements AuthGateway {
  private readonly accounts = new Map<string, MockAccount>();
  private session: AuthSession | null = null;

  constructor() {
    this.accounts.set('artista@habittus.local', {
      id: 'mock-artist',
      email: 'artista@habittus.local',
      password: 'Habittus123!',
      role: 'artist',
      status: 'active',
    });
    this.accounts.set('admin@habittus.local', {
      id: 'mock-admin',
      email: 'admin@habittus.local',
      password: 'HabittusAdmin123!',
      role: 'admin',
      status: 'active',
    });
    this.accounts.set('lucia@example.com', {
      id: 'seed-lucia',
      email: 'lucia@example.com',
      password: 'SeedAccountOnly1!',
      role: 'artist',
      status: 'active',
    });
    this.accounts.set('mateo@example.com', {
      id: 'seed-mateo',
      email: 'mateo@example.com',
      password: 'SeedAccountOnly2!',
      role: 'artist',
      status: 'active',
    });
  }

  async restoreSession(): Promise<AuthSession | null> {
    await wait(150);
    return this.session;
  }

  async signIn(credentials: SignInCredentials): Promise<AuthSession> {
    await wait(500);
    const email = normalizeEmail(credentials.email);
    const account = this.accounts.get(email);

    if (!account || account.password !== credentials.password) {
      throw new AuthError('invalid_credentials');
    }

    if (account.status === 'suspended') {
      throw new AuthError('suspended_account');
    }

    return this.createSession(account);
  }

  async register(data: RegistrationData): Promise<AuthSession> {
    await wait(650);
    const email = normalizeEmail(data.email);

    if (this.accounts.has(email)) {
      throw new AuthError('email_in_use');
    }

    const account: MockAccount = {
      id: `mock-${Date.now()}`,
      email,
      password: data.password,
      role: 'artist',
      status: 'active',
    };

    this.accounts.set(email, account);
    return this.createSession(account);
  }

  async signOut(): Promise<void> {
    await wait(250);
    this.session = null;
  }

  async listUsers(): Promise<AuthUser[]> {
    await wait(250);
    return [...this.accounts.values()].map((account) => ({
      id: account.id,
      email: account.email,
      role: account.role,
      status: account.status,
    }));
  }

  async setAccountStatus(userId: string, status: AuthUser['status']): Promise<AuthUser> {
    await wait(350);
    const account = [...this.accounts.values()].find((candidate) => candidate.id === userId);
    if (!account) throw new Error('Account not found.');
    account.status = status;
    if (this.session?.user.id === userId && status === 'suspended') this.session = null;
    return { id: account.id, email: account.email, role: account.role, status: account.status };
  }

  private createSession(account: MockAccount): AuthSession {
    const user: AuthUser = {
      id: account.id,
      email: account.email,
      role: account.role,
      status: account.status,
    };
    this.session = {
      user,
      accessToken: `mock-session-${user.id}`,
    };
    return this.session;
  }
}
