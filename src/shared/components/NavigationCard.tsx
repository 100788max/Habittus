import { Link, type Href } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';

import { colors, spacing } from '@/shared/theme/tokens';

type NavigationCardProps = {
  href: Href;
  label: string;
};

export function NavigationCard({ href, label }: NavigationCardProps) {
  return (
    <Link asChild href={href}>
      <Pressable accessibilityRole="button" style={styles.card}>
        <Text style={styles.label}>{label}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 48,
    justifyContent: 'center',
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  label: { color: colors.action, fontSize: 16, fontWeight: '600' },
});
