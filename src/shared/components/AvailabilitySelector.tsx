import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, spacing } from '@/shared/theme/tokens';

type Availability = 'available' | 'unavailable' | 'contact';

const options: { label: string; value: Availability }[] = [
  { label: 'Disponible', value: 'available' },
  { label: 'No disponible', value: 'unavailable' },
  { label: 'Consultar', value: 'contact' },
];

export function AvailabilitySelector({
  value,
  onChange,
  disabled = false,
}: {
  value: Availability;
  onChange(value: Availability): void;
  disabled?: boolean;
}) {
  return (
    <View style={styles.group}>
      <Text style={styles.label}>Disponibilidad</Text>
      <View accessibilityRole="radiogroup" style={styles.options}>
        {options.map((option) => {
          const selected = option.value === value;
          return (
            <Pressable
              accessibilityRole="radio"
              accessibilityState={{ checked: selected, disabled }}
              disabled={disabled}
              key={option.value}
              onPress={() => onChange(option.value)}
              style={[styles.option, selected ? styles.selected : null]}
            >
              <Text style={[styles.optionLabel, selected ? styles.selectedLabel : null]}>
                {option.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export function getAvailabilityLabel(value: Availability): string {
  return options.find((option) => option.value === value)?.label ?? 'Consultar';
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
