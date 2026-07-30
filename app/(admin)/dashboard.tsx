import { router } from 'expo-router';
import { type ReactNode, useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useAuth } from '@/features/account/presentation/AuthProvider';
import { useAdministration } from '@/features/administration/presentation/AdministrationProvider';
import { FormField } from '@/shared/components/FormField';
import { LoadingScreen } from '@/shared/components/LoadingScreen';
import { PlaceholderScreen } from '@/shared/components/PlaceholderScreen';
import { colors, spacing } from '@/shared/theme/tokens';

export default function AdminDashboardScreen() {
  const { signOut } = useAuth();
  const {
    snapshot,
    isLoading,
    error,
    load,
    setUserStatus,
    setProfileModeration,
    setArtworkModeration,
  } = useAdministration();
  const [reason, setReason] = useState('');
  const [actionError, setActionError] = useState<string | null>(null);

  useEffect(() => {
    load();
  }, [load]);

  if (isLoading && snapshot.users.length === 0) {
    return <LoadingScreen label="Cargando administración" />;
  }

  const execute = async (operation: () => Promise<void>) => {
    if (reason.trim().length < 5) {
      setActionError('Ingresá un motivo de moderación de al menos 5 caracteres.');
      return;
    }
    setActionError(null);
    try {
      await operation();
      setReason('');
    } catch {
      setActionError('No fue posible aplicar la acción.');
    }
  };

  return (
    <PlaceholderScreen
      description={error ?? 'Controles simulados de seguridad y moderación.'}
      title="Administración"
    >
      <View style={styles.section}>
        <FormField
          error={actionError ?? undefined}
          label="Motivo de moderación"
          multiline
          onChangeText={setReason}
          value={reason}
        />
      </View>

      <AdminSection title="Usuarios">
        {snapshot.users.map((user) => (
          <AdminCard key={user.id} title={user.email} subtitle={`${user.role} · ${user.status}`}>
            {user.role !== 'admin' ? (
              <AdminAction
                disabled={isLoading}
                label={user.status === 'active' ? 'Suspender' : 'Reactivar'}
                onPress={() =>
                  execute(() =>
                    setUserStatus(
                      user.id,
                      user.status === 'active' ? 'suspended' : 'active',
                      reason,
                    ),
                  )
                }
              />
            ) : null}
          </AdminCard>
        ))}
      </AdminSection>

      <AdminSection title="Perfiles">
        {snapshot.profiles.map((profile) => (
          <AdminCard
            key={profile.id}
            subtitle={`${profile.publicationStatus} · ${profile.moderationStatus}`}
            title={profile.professionalName || profile.id}
          >
            <AdminAction
              disabled={isLoading}
              label={profile.moderationStatus === 'active' ? 'Ocultar perfil' : 'Reactivar perfil'}
              onPress={() =>
                execute(() =>
                  setProfileModeration(
                    profile.id,
                    profile.moderationStatus === 'active' ? 'hidden' : 'active',
                    reason,
                  ),
                )
              }
            />
          </AdminCard>
        ))}
      </AdminSection>

      <AdminSection title="Obras">
        {snapshot.artworks.map((artwork) => (
          <AdminCard
            key={artwork.id}
            subtitle={`${artwork.publicationStatus} · ${artwork.moderationStatus}`}
            title={artwork.title}
          >
            <AdminAction
              disabled={isLoading}
              label={artwork.moderationStatus === 'active' ? 'Ocultar obra' : 'Reactivar obra'}
              onPress={() =>
                execute(() =>
                  setArtworkModeration(
                    artwork.id,
                    artwork.moderationStatus === 'active' ? 'hidden' : 'active',
                    reason,
                  ),
                )
              }
            />
          </AdminCard>
        ))}
      </AdminSection>

      <AdminSection title="Auditoría reciente">
        {snapshot.actions.length === 0 ? (
          <Text style={styles.muted}>No hay acciones registradas.</Text>
        ) : (
          snapshot.actions.map((action) => (
            <Text key={action.id} style={styles.audit}>
              {action.targetType} · {action.action} · {action.reason}
            </Text>
          ))
        )}
      </AdminSection>

      <Pressable
        accessibilityRole="button"
        onPress={async () => {
          await signOut();
          router.replace('/');
        }}
      >
        <Text style={styles.logout}>Cerrar sesión administrativa</Text>
      </Pressable>
    </PlaceholderScreen>
  );
}

function AdminSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View style={styles.section}>
      <Text accessibilityRole="header" style={styles.heading}>
        {title}
      </Text>
      {children}
    </View>
  );
}

function AdminCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.muted}>{subtitle}</Text>
      {children}
    </View>
  );
}

function AdminAction({
  label,
  disabled,
  onPress,
}: {
  label: string;
  disabled: boolean;
  onPress(): void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.action}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  section: { gap: spacing.md, marginTop: spacing.xl },
  heading: { color: colors.text, fontSize: 24, fontWeight: '600' },
  card: {
    gap: spacing.sm,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: colors.surface,
    padding: spacing.md,
  },
  cardTitle: { color: colors.text, fontSize: 17, fontWeight: '600' },
  muted: { color: colors.textMuted, fontSize: 14 },
  action: { color: colors.action, fontWeight: '600' },
  audit: { color: colors.text, fontSize: 14, lineHeight: 20 },
  logout: { color: '#8D2F28', fontSize: 16, fontWeight: '600', marginTop: spacing.xl },
});
