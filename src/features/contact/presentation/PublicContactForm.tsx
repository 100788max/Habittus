import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  type ContactRequestErrors,
  validateContactRequest,
} from '@/features/contact/application/validation';
import type { ContactPreferences, ContactReason } from '@/features/contact/domain/contact';
import { ContactReasonSelector } from '@/features/contact/presentation/ContactReasonSelector';
import { FormField } from '@/shared/components/FormField';
import { SubmitButton } from '@/shared/components/SubmitButton';
import { colors, spacing } from '@/shared/theme/tokens';

export function PublicContactForm({
  profileId,
  preferences,
  onSubmit,
}: {
  profileId: string;
  preferences: ContactPreferences;
  onSubmit(request: {
    profileId: string;
    artistUserId: string;
    senderName: string;
    senderEmail: string;
    subject: string;
    message: string;
    reason: ContactReason;
  }): Promise<void>;
}) {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [reason, setReason] = useState<ContactReason | null>(null);
  const [errors, setErrors] = useState<ContactRequestErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const submit = async () => {
    const request = {
      profileId,
      artistUserId: preferences.artistUserId,
      senderName,
      senderEmail,
      subject,
      message,
      reason: reason ?? 'other',
    } as const;
    const nextErrors = validateContactRequest(request);
    if (!reason) nextErrors.reason = 'Seleccioná un motivo profesional.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('loading');
    try {
      await onSubmit(request);
      setStatus('success');
      setSubject('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <View style={styles.form}>
      {status === 'success' ? (
        <Text accessibilityRole="alert" style={styles.success}>
          Solicitud enviada correctamente.
        </Text>
      ) : null}
      {status === 'error' ? (
        <Text accessibilityRole="alert" style={styles.error}>
          No fue posible enviar la solicitud. Intentá nuevamente.
        </Text>
      ) : null}
      <FormField
        error={errors.senderName}
        label="Nombre"
        onChangeText={setSenderName}
        value={senderName}
      />
      <FormField
        autoCapitalize="none"
        error={errors.senderEmail}
        inputMode="email"
        label="Email"
        onChangeText={setSenderEmail}
        value={senderEmail}
      />
      <FormField error={errors.subject} label="Asunto" onChangeText={setSubject} value={subject} />
      <ContactReasonSelector
        allowedReasons={preferences.allowedReasons}
        onChange={(value) => setReason(value as ContactReason)}
        value={reason}
      />
      {errors.reason ? <Text style={styles.fieldError}>{errors.reason}</Text> : null}
      <FormField
        error={errors.message}
        label="Mensaje"
        multiline
        onChangeText={setMessage}
        value={message}
      />
      <SubmitButton isLoading={status === 'loading'} label="Enviar solicitud" onPress={submit} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: { gap: spacing.md, marginTop: spacing.xl },
  success: { backgroundColor: '#E5F1EC', color: colors.action, padding: spacing.md },
  error: { backgroundColor: '#F7E7E5', color: '#8D2F28', padding: spacing.md },
  fieldError: { color: '#8D2F28', fontSize: 14 },
});
