import type { ComponentProps } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { colors, spacing } from '@/shared/theme/tokens';

type FormFieldProps = ComponentProps<typeof TextInput> & {
  label: string;
  error?: string;
};

export function FormField({ label, error, style, ...inputProps }: FormFieldProps) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...inputProps}
        accessibilityLabel={label}
        style={[
          styles.input,
          inputProps.multiline ? styles.multiline : null,
          error ? styles.invalid : null,
          style,
        ]}
      />
      {error ? (
        <Text accessibilityLiveRegion="polite" accessibilityRole="alert" style={styles.error}>
          {error}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
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
    paddingVertical: spacing.sm,
  },
  multiline: { minHeight: 120, textAlignVertical: 'top' },
  invalid: { borderColor: '#A33A32' },
  error: { color: '#8D2F28', fontSize: 14, lineHeight: 20 },
});
