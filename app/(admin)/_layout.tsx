import { Redirect, Stack } from 'expo-router';

import { useAuth } from '@/features/account/presentation/AuthProvider';
import { AdministrationProvider } from '@/features/administration/presentation/AdministrationProvider';
import { LoadingScreen } from '@/shared/components/LoadingScreen';

export default function AdminLayout() {
  const { session, status } = useAuth();
  if (status === 'loading') return <LoadingScreen label="Recuperando sesión administrativa" />;
  if (status === 'anonymous') return <Redirect href="/(auth)/sign-in" />;
  if (session?.user.role !== 'admin') return <Redirect href="/(professional)/dashboard" />;

  return (
    <AdministrationProvider>
      <Stack screenOptions={{ headerTitleAlign: 'center' }} />
    </AdministrationProvider>
  );
}
