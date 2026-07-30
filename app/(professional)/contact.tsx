import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';

import { useAuth } from '@/features/account/presentation/AuthProvider';
import { validateContactPreferences } from '@/features/contact/application/validation';
import {
  contactReasonLabels,
  createDefaultContactPreferences,
  type ContactPreferences,
  type ContactReason,
  type ContactRequest,
  type ContactRequestStatus,
} from '@/features/contact/domain/contact';
import { useContact } from '@/features/contact/presentation/ContactProvider';
import { ContactReasonSelector } from '@/features/contact/presentation/ContactReasonSelector';
import { FormField } from '@/shared/components/FormField';
import { LoadingScreen } from '@/shared/components/LoadingScreen';
import { PlaceholderScreen } from '@/shared/components/PlaceholderScreen';
import { SubmitButton } from '@/shared/components/SubmitButton';
import { colors, spacing } from '@/shared/theme/tokens';

const allReasons = Object.keys(contactReasonLabels) as ContactReason[];

export default function ProfessionalContactScreen() {
  const { session } = useAuth();
  const { getPreferences, savePreferences, listRequests, setRequestStatus, error } = useContact();
  const userId = session?.user.id ?? '';
  const [preferences, setPreferences] = useState<ContactPreferences>(
    createDefaultContactPreferences(userId),
  );
  const [requests, setRequests] = useState<ContactRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | undefined>();
  const [reasonError, setReasonError] = useState<string | undefined>();

  useEffect(() => {
    if (!userId) return;
    let active = true;
    Promise.all([getPreferences(userId), listRequests(userId)])
      .then(([nextPreferences, nextRequests]) => {
        if (!active) return;
        setPreferences(nextPreferences);
        setRequests(nextRequests);
      })
      .catch(() => undefined)
      .finally(() => active && setIsLoading(false));
    return () => {
      active = false;
    };
  }, [getPreferences, listRequests, userId]);

  if (!session) return <LoadingScreen label="Validando sesión" />;
  if (isLoading) return <LoadingScreen label="Cargando contacto profesional" />;

  const save = async () => {
    const errors = validateContactPreferences(preferences);
    setEmailError(errors.professionalEmail);
    setReasonError(errors.allowedReasons);
    if (Object.keys(errors).length > 0) return;
    setIsSaving(true);
    setSuccess(null);
    try {
      setPreferences(await savePreferences(preferences));
      setSuccess('Preferencias guardadas correctamente.');
    } catch {
      // The shared provider exposes the actionable error in the screen description.
    } finally {
      setIsSaving(false);
    }
  };

  const updateStatus = async (requestId: string, status: ContactRequestStatus) => {
    setUpdatingId(requestId);
    setSuccess(null);
    try {
      const updated = await setRequestStatus(userId, requestId, status);
      setRequests((current) =>
        current.map((request) => (request.id === updated.id ? updated : request)),
      );
      setSuccess('Solicitud actualizada.');
    } catch {
      // The shared provider exposes the actionable error in the screen description.
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <PlaceholderScreen
      description={error ?? 'Configurá cómo recibís solicitudes y administrá tu bandeja.'}
      title="Contacto profesional"
    >
      {success ? (
        <Text accessibilityRole="alert" style={styles.success}>
          {success}
        </Text>
      ) : null}
      <View style={styles.section}>
        <Text accessibilityRole="header" style={styles.heading}>
          Preferencias
        </Text>
        <View style={styles.switchRow}>
          <Switch
            accessibilityLabel="Aceptar solicitudes profesionales"
            onValueChange={(acceptsContacts) =>
              setPreferences((current) => ({ ...current, acceptsContacts }))
            }
            value={preferences.acceptsContacts}
          />
          <Text style={styles.switchLabel}>Aceptar solicitudes profesionales</Text>
        </View>
        <FormField
          autoCapitalize="none"
          error={emailError}
          inputMode="email"
          label="Email profesional"
          onChangeText={(professionalEmail) =>
            setPreferences((current) => ({ ...current, professionalEmail }))
          }
          value={preferences.professionalEmail}
        />
        <View style={styles.switchRow}>
          <Switch
            accessibilityLabel="Mostrar email públicamente"
            onValueChange={(isPublic) =>
              setPreferences((current) => ({
                ...current,
                emailVisibility: isPublic ? 'public' : 'private',
              }))
            }
            value={preferences.emailVisibility === 'public'}
          />
          <Text style={styles.switchLabel}>Mostrar email públicamente</Text>
        </View>
        <ContactReasonSelector
          allowedReasons={allReasons}
          multiple
          onChange={(allowedReasons) =>
            setPreferences((current) => ({
              ...current,
              allowedReasons: allowedReasons as ContactReason[],
            }))
          }
          value={preferences.allowedReasons}
        />
        {reasonError ? <Text style={styles.error}>{reasonError}</Text> : null}
        <SubmitButton isLoading={isSaving} label="Guardar preferencias" onPress={save} />
      </View>

      <View style={styles.section}>
        <Text accessibilityRole="header" style={styles.heading}>
          Solicitudes recibidas
        </Text>
        {requests.length === 0 ? (
          <Text style={styles.muted}>Todavía no recibiste solicitudes profesionales.</Text>
        ) : (
          requests.map((request) => (
            <View key={request.id} style={styles.card}>
              <Text style={styles.requestTitle}>{request.subject}</Text>
              <Text style={styles.meta}>
                {request.senderName} · {request.senderEmail}
              </Text>
              <Text style={styles.meta}>{contactReasonLabels[request.reason]}</Text>
              <Text style={styles.message}>{request.message}</Text>
              <Text style={styles.status}>Estado: {request.status}</Text>
              <View style={styles.actions}>
                {(['read', 'archived', 'rejected'] as ContactRequestStatus[]).map((status) => (
                  <Pressable
                    accessibilityRole="button"
                    disabled={updatingId === request.id}
                    key={status}
                    onPress={() => updateStatus(request.id, status)}
                  >
                    <Text style={status === 'rejected' ? styles.rejectAction : styles.action}>
                      {status === 'read'
                        ? 'Marcar leída'
                        : status === 'archived'
                          ? 'Archivar'
                          : 'Rechazar'}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>
          ))
        )}
      </View>
    </PlaceholderScreen>
  );
}

const styles = StyleSheet.create({
  success: {
    backgroundColor: '#E5F1EC',
    color: colors.action,
    marginTop: spacing.lg,
    padding: spacing.md,
  },
  section: { gap: spacing.md, marginTop: spacing.xl },
  heading: { color: colors.text, fontSize: 24, fontWeight: '600' },
  switchRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  switchLabel: { flex: 1, color: colors.text, fontSize: 15 },
  error: { color: '#8D2F28', fontSize: 14 },
  muted: { color: colors.textMuted, fontSize: 15 },
  card: {
    gap: spacing.sm,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: colors.surface,
    padding: spacing.md,
  },
  requestTitle: { color: colors.text, fontSize: 18, fontWeight: '600' },
  meta: { color: colors.textMuted, fontSize: 14 },
  message: { color: colors.text, fontSize: 15, lineHeight: 22 },
  status: { color: colors.action, fontSize: 14, fontWeight: '600' },
  actions: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.lg },
  action: { color: colors.action, fontWeight: '600' },
  rejectAction: { color: '#8D2F28', fontWeight: '600' },
});
