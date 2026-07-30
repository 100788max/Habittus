import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  validateCredentials,
  validateRegistration,
} from '@/features/account/application/validation';
import type {
  AuthSession,
  RegistrationData,
  SignInCredentials,
} from '@/features/account/domain/auth';
import { authGateway } from '@/features/account/infrastructure/authGateway';

type AuthStatus = 'loading' | 'anonymous' | 'authenticated';

type AuthContextValue = {
  session: AuthSession | null;
  status: AuthStatus;
  signIn(credentials: SignInCredentials): Promise<AuthSession>;
  register(data: RegistrationData): Promise<AuthSession>;
  signOut(): Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [status, setStatus] = useState<AuthStatus>('loading');

  useEffect(() => {
    let active = true;

    authGateway
      .restoreSession()
      .then((restoredSession) => {
        if (!active) return;
        setSession(restoredSession);
        setStatus(restoredSession ? 'authenticated' : 'anonymous');
      })
      .catch(() => {
        if (!active) return;
        setSession(null);
        setStatus('anonymous');
      });

    return () => {
      active = false;
    };
  }, []);

  const signIn = useCallback(async (credentials: SignInCredentials) => {
    const fieldErrors = validateCredentials(credentials);
    if (Object.keys(fieldErrors).length > 0) throw fieldErrors;
    const nextSession = await authGateway.signIn(credentials);
    setSession(nextSession);
    setStatus('authenticated');
    return nextSession;
  }, []);

  const register = useCallback(async (data: RegistrationData) => {
    const fieldErrors = validateRegistration(data);
    if (Object.keys(fieldErrors).length > 0) throw fieldErrors;
    const nextSession = await authGateway.register(data);
    setSession(nextSession);
    setStatus('authenticated');
    return nextSession;
  }, []);

  const signOut = useCallback(async () => {
    await authGateway.signOut();
    setSession(null);
    setStatus('anonymous');
  }, []);

  const value = useMemo(
    () => ({ session, status, signIn, register, signOut }),
    [register, session, signIn, signOut, status],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider.');
  return context;
}
