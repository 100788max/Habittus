import { Redirect, Stack } from 'expo-router';

import { useAuth } from '@/features/account/presentation/AuthProvider';
import { PortfolioProvider } from '@/features/portfolio/presentation/PortfolioProvider';
import { ProfileProvider } from '@/features/profile/presentation/ProfileProvider';
import { LoadingScreen } from '@/shared/components/LoadingScreen';

export default function ProfessionalLayout() {
  const { session, status } = useAuth();

  if (status === 'loading') return <LoadingScreen label="Recuperando sesión" />;
  if (status === 'anonymous') return <Redirect href="/(auth)/sign-in" />;
  if (session?.user.role !== 'artist') return <Redirect href="/(admin)/dashboard" />;

  return (
    <ProfileProvider>
      <PortfolioProvider>
        <Stack screenOptions={{ headerTitleAlign: 'center' }} />
      </PortfolioProvider>
    </ProfileProvider>
  );
}
