import { Link, router } from 'expo-router';
import { StyleSheet } from 'react-native';

import { AuthForm } from '@/features/account/presentation/AuthForm';
import { useAuth } from '@/features/account/presentation/AuthProvider';
import { PlaceholderScreen } from '@/shared/components/PlaceholderScreen';
import { colors, spacing } from '@/shared/theme/tokens';

export default function SignInScreen() {
  const { signIn } = useAuth();

  return (
    <PlaceholderScreen
      description="Ingresá a tu cuenta profesional. Durante esta misión se utiliza una sesión simulada."
      title="Ingresar"
    >
      <AuthForm
        mode="sign-in"
        onSubmit={async ({ email, password }) => {
          const session = await signIn({ email, password });
          router.replace(
            session.user.role === 'admin' ? '/(admin)/dashboard' : '/(professional)/dashboard',
          );
        }}
      />
      <Link href="/(auth)/register" style={styles.link}>
        Crear una cuenta profesional
      </Link>
    </PlaceholderScreen>
  );
}

const styles = StyleSheet.create({
  link: { color: colors.action, fontSize: 16, fontWeight: '600', marginTop: spacing.lg },
});
