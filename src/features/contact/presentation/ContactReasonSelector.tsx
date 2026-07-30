import { Pressable, StyleSheet, Text, View } from 'react-native';

import { contactReasonLabels, type ContactReason } from '@/features/contact/domain/contact';
import { colors, spacing } from '@/shared/theme/tokens';

export function ContactReasonSelector({
  allowedReasons,
  value,
  onChange,
  multiple = false,
}: {
  allowedReasons: ContactReason[];
  value: ContactReason | ContactReason[] | null;
  onChange(value: ContactReason | ContactReason[]): void;
  multiple?: boolean;
}) {
  const selectedValues = Array.isArray(value) ? value : value ? [value] : [];

  return (
    <View style={styles.group}>
      <Text style={styles.label}>{multiple ? 'Motivos admitidos' : 'Motivo de contacto'}</Text>
      <View style={styles.options}>
        {allowedReasons.map((reason) => {
          const selected = selectedValues.includes(reason);
          return (
            <Pressable
              accessibilityRole={multiple ? 'checkbox' : 'radio'}
              accessibilityState={multiple ? { checked: selected } : { checked: selected }}
              key={reason}
              onPress={() => {
                if (!multiple) return onChange(reason);
                onChange(
                  selected
                    ? selectedValues.filter((candidate) => candidate !== reason)
                    : [...selectedValues, reason],
                );
              }}
              style={[styles.option, selected ? styles.selected : null]}
            >
              <Text style={[styles.optionLabel, selected ? styles.selectedLabel : null]}>
                {contactReasonLabels[reason]}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  group: { gap: spacing.sm },
  label: { color: colors.text, fontSize: 14, fontWeight: '600' },
  options: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  option: {
    minHeight: 44,
    justifyContent: 'center',
    borderColor: colors.border,
    borderRadius: 999,
    borderWidth: 1,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.md,
  },
  selected: { borderColor: colors.action, backgroundColor: colors.action },
  optionLabel: { color: colors.text, fontSize: 14 },
  selectedLabel: { color: colors.surface, fontWeight: '600' },
});
