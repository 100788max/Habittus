import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import '@/config/env';
import { AuthProvider } from '@/features/account/presentation/AuthProvider';
import { ContactProvider } from '@/features/contact/presentation/ContactProvider';
import { DiscoveryProvider } from '@/features/discovery/presentation/DiscoveryProvider';

export default function RootLayout() {
  return (
    <AuthProvider>
      <DiscoveryProvider>
        <ContactProvider>
          <StatusBar style="dark" />
          <Stack screenOptions={{ headerBackTitle: 'Atrás' }}>
            <Stack.Screen name="(public)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(professional)" options={{ headerShown: false }} />
            <Stack.Screen name="(admin)" options={{ headerShown: false }} />
          </Stack>
        </ContactProvider>
      </DiscoveryProvider>
    </AuthProvider>
  );
}
