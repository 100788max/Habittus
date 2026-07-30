import { createContext, type ReactNode, useCallback, useContext, useMemo, useState } from 'react';

import type {
  ContactPreferences,
  ContactRequest,
  ContactRequestStatus,
  NewContactRequest,
} from '@/features/contact/domain/contact';
import { contactGateway } from '@/features/contact/infrastructure/contactGateway';

type ContactContextValue = {
  isLoading: boolean;
  error: string | null;
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
};

const ContactContext = createContext<ContactContextValue | null>(null);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(async <T,>(operation: () => Promise<T>): Promise<T> => {
    setIsLoading(true);
    setError(null);
    try {
      return await operation();
    } catch (operationError) {
      setError('No fue posible completar la operación de contacto.');
      throw operationError;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getPreferences = useCallback(
    (artistUserId: string) => execute(() => contactGateway.getPreferences(artistUserId)),
    [execute],
  );
  const savePreferences = useCallback(
    (preferences: ContactPreferences) => execute(() => contactGateway.savePreferences(preferences)),
    [execute],
  );
  const getPublicPreferences = useCallback(
    (artistUserId: string) => execute(() => contactGateway.getPublicPreferences(artistUserId)),
    [execute],
  );
  const submitRequest = useCallback(
    (request: NewContactRequest) => execute(() => contactGateway.submitRequest(request)),
    [execute],
  );
  const listRequests = useCallback(
    (artistUserId: string) => execute(() => contactGateway.listRequests(artistUserId)),
    [execute],
  );
  const setRequestStatus = useCallback(
    (artistUserId: string, requestId: string, status: ContactRequestStatus) =>
      execute(() => contactGateway.setRequestStatus(artistUserId, requestId, status)),
    [execute],
  );

  const value = useMemo(
    () => ({
      isLoading,
      error,
      getPreferences,
      getPublicPreferences,
      savePreferences,
      submitRequest,
      listRequests,
      setRequestStatus,
    }),
    [
      error,
      getPreferences,
      getPublicPreferences,
      isLoading,
      listRequests,
      savePreferences,
      setRequestStatus,
      submitRequest,
    ],
  );

  return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>;
}

export function useContact(): ContactContextValue {
  const context = useContext(ContactContext);
  if (!context) throw new Error('useContact must be used inside ContactProvider.');
  return context;
}
