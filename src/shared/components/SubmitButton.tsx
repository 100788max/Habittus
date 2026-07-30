import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';

import { colors, spacing } from '@/shared/theme/tokens';

export function SubmitButton({
  label,
  isLoading,
  onPress,
  variant = 'primary',
}: {
  label: string;
  isLoading: boolean;
  onPress(): void;
  variant?: 'primary' | 'danger';
}) {
  const isDanger = variant === 'danger';
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ busy: isLoading, disabled: isLoading }}
      disabled={isLoading}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isDanger ? styles.danger : styles.primary,
        pressed ? styles.pressed : null,
        isLoading ? styles.disabled : null,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator color={isDanger ? '#8D2F28' : colors.surface} />
      ) : (
        <Text style={[styles.label, isDanger ? styles.dangerLabel : null]}>{label}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: spacing.md,
  },
  primary: { borderColor: colors.action, backgroundColor: colors.action },
  danger: { borderColor: '#A33A32', backgroundColor: colors.surface },
  pressed: { opacity: 0.85 },
  disabled: { opacity: 0.65 },
  label: { color: colors.surface, fontSize: 16, fontWeight: '600' },
  dangerLabel: { color: '#8D2F28' },
});
