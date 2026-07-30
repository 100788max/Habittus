import { router } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';

import { getAuthErrorMessage } from '@/features/account/domain/AuthError';
import { useAuth } from '@/features/account/presentation/AuthProvider';
import { NavigationCard } from '@/shared/components/NavigationCard';
import { PlaceholderScreen } from '@/shared/components/PlaceholderScreen';
import { colors, spacing } from '@/shared/theme/tokens';

export default function DashboardScreen() {
  const { session, signOut } = useAuth();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const closeSession = async () => {
    setError(null);
    setIsSigningOut(true);
    try {
      await signOut();
      router.replace('/');
    } catch (signOutError) {
      setError(getAuthErrorMessage(signOutError));
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <PlaceholderScreen
      description="Administrá tu presencia profesional, portfolio y solicitudes de contacto."
      title="Resumen profesional"
    >
      <View style={styles.sessionCard}>
        <Text style={styles.label}>Sesión activa</Text>
        <Text selectable style={styles.email}>
          {session?.user.email}
        </Text>
      </View>
      <View style={styles.navigation}>
        <NavigationCard href="/(professional)/profile" label="Ver perfil profesional" />
        <NavigationCard href="/(professional)/portfolio" label="Gestionar portfolio" />
        <NavigationCard href="/(professional)/contact" label="Contacto y solicitudes" />
      </View>
      {error ? (
        <Text accessibilityRole="alert" style={styles.error}>
          {error}
        </Text>
      ) : null}
      <Pressable
        accessibilityRole="button"
        disabled={isSigningOut}
        onPress={closeSession}
        style={styles.button}
      >
        {isSigningOut ? (
          <ActivityIndicator color={colors.action} />
        ) : (
          <Text style={styles.buttonLabel}>Cerrar sesión</Text>
        )}
      </Pressable>
    </PlaceholderScreen>
  );
}

const styles = StyleSheet.create({
  sessionCard: {
    gap: spacing.xs,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: colors.surface,
    marginTop: spacing.xl,
    padding: spacing.md,
  },
  label: { color: colors.textMuted, fontSize: 14 },
  email: { color: colors.text, fontSize: 16, fontWeight: '600' },
  error: { color: '#8D2F28', marginTop: spacing.md },
  navigation: { gap: spacing.sm, marginTop: spacing.lg },
  button: {
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.action,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: spacing.lg,
  },
  buttonLabel: { color: colors.action, fontSize: 16, fontWeight: '600' },
});
