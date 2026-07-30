import { Redirect, Stack } from 'expo-router';

import { useAuth } from '@/features/account/presentation/AuthProvider';
import { LoadingScreen } from '@/shared/components/LoadingScreen';

export default function AuthLayout() {
  const { session, status } = useAuth();

  if (status === 'loading') return <LoadingScreen label="Recuperando sesión" />;
  if (status === 'authenticated') {
    return (
      <Redirect
        href={session?.user.role === 'admin' ? '/(admin)/dashboard' : '/(professional)/dashboard'}
      />
    );
  }

  return <Stack screenOptions={{ presentation: 'modal', headerTitleAlign: 'center' }} />;
}
