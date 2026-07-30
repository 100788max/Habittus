import { Link, router } from 'expo-router';
import { StyleSheet } from 'react-native';

import { AuthForm } from '@/features/account/presentation/AuthForm';
import { useAuth } from '@/features/account/presentation/AuthProvider';
import { PlaceholderScreen } from '@/shared/components/PlaceholderScreen';
import { colors, spacing } from '@/shared/theme/tokens';

export default function RegisterScreen() {
  const { register } = useAuth();

  return (
    <PlaceholderScreen
      description="Creá una cuenta privada. El perfil profesional se completará en una etapa posterior."
      title="Crear cuenta"
    >
      <AuthForm
        mode="register"
        onSubmit={async ({ acceptedTerms, email, password }) => {
          await register({ acceptedTerms, email, password });
          router.replace('/(professional)/dashboard');
        }}
      />
      <Link href="/(auth)/sign-in" style={styles.link}>
        Ya tengo una cuenta
      </Link>
    </PlaceholderScreen>
  );
}

const styles = StyleSheet.create({
  link: { color: colors.action, fontSize: 16, fontWeight: '600', marginTop: spacing.lg },
});
