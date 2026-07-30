import { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

import type { FieldErrors } from '@/features/account/application/validation';
import { getAuthErrorMessage } from '@/features/account/domain/AuthError';
import { colors, spacing } from '@/shared/theme/tokens';

type FormValues = { email: string; password: string; acceptedTerms: boolean };

type AuthFormProps = {
  mode: 'sign-in' | 'register';
  onSubmit(values: FormValues): Promise<void>;
};

export function AuthForm({ mode, onSubmit }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    setErrors({});
    setFormError(null);
    setIsSubmitting(true);

    try {
      await onSubmit({ email, password, acceptedTerms });
    } catch (error) {
      if (isFieldErrors(error)) setErrors(error);
      else setFormError(getAuthErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  const isRegistration = mode === 'register';

  return (
    <View style={styles.form}>
      {formError ? (
        <Text accessibilityRole="alert" style={styles.formError}>
          {formError}
        </Text>
      ) : null}

      <View style={styles.field}>
        <Text nativeID="email-label" style={styles.label}>
          Email
        </Text>
        <TextInput
          accessibilityLabelledBy="email-label"
          autoCapitalize="none"
          autoComplete="email"
          editable={!isSubmitting}
          inputMode="email"
          onChangeText={setEmail}
          style={[styles.input, errors.email ? styles.inputError : null]}
          value={email}
        />
        {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}
      </View>

      <View style={styles.field}>
        <Text nativeID="password-label" style={styles.label}>
          Contraseña
        </Text>
        <TextInput
          accessibilityLabelledBy="password-label"
          autoComplete={isRegistration ? 'new-password' : 'current-password'}
          editable={!isSubmitting}
          onChangeText={setPassword}
          secureTextEntry
          style={[styles.input, errors.password ? styles.inputError : null]}
          value={password}
        />
        {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}
      </View>

      {isRegistration ? (
        <View style={styles.switchRow}>
          <Switch
            accessibilityLabel="Aceptar términos y reconocer la política de privacidad"
            disabled={isSubmitting}
            onValueChange={setAcceptedTerms}
            value={acceptedTerms}
          />
          <Text style={styles.switchLabel}>
            Acepto los términos y reconozco la política de privacidad.
          </Text>
        </View>
      ) : null}
      {errors.acceptedTerms ? <Text style={styles.error}>{errors.acceptedTerms}</Text> : null}

      <Pressable
        accessibilityRole="button"
        accessibilityState={{ busy: isSubmitting, disabled: isSubmitting }}
        disabled={isSubmitting}
        onPress={submit}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
          isSubmitting ? styles.buttonDisabled : null,
        ]}
      >
        {isSubmitting ? (
          <ActivityIndicator color={colors.surface} />
        ) : (
          <Text style={styles.buttonLabel}>{isRegistration ? 'Crear cuenta' : 'Ingresar'}</Text>
        )}
      </Pressable>
    </View>
  );
}

function isFieldErrors(error: unknown): error is FieldErrors {
  return typeof error === 'object' && error !== null && !(error instanceof Error);
}

const styles = StyleSheet.create({
  form: { gap: spacing.md, marginTop: spacing.xl },
  field: { gap: spacing.xs },
  label: { color: colors.text, fontSize: 14, fontWeight: '600' },
  input: {
    minHeight: 48,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: colors.surface,
    color: colors.text,
    fontSize: 16,
    paddingHorizontal: spacing.md,
  },
  inputError: { borderColor: '#A33A32' },
  error: { color: '#8D2F28', fontSize: 14, lineHeight: 20 },
  formError: {
    borderRadius: 8,
    backgroundColor: '#F7E7E5',
    color: '#6F251F',
    padding: spacing.md,
  },
  switchRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  switchLabel: { flex: 1, color: colors.text, fontSize: 14, lineHeight: 20 },
  button: {
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: colors.action,
    paddingHorizontal: spacing.md,
  },
  buttonPressed: { opacity: 0.85 },
  buttonDisabled: { opacity: 0.65 },
  buttonLabel: { color: colors.surface, fontSize: 16, fontWeight: '600' },
});
