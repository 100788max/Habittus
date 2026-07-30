import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, spacing } from '@/shared/theme/tokens';

export function LoadingScreen({ label }: { label: string }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View accessibilityLiveRegion="polite" style={styles.content}>
        <ActivityIndicator color={colors.action} size="large" />
        <Text style={styles.label}>{label}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: spacing.md },
  label: { color: colors.textMuted, fontSize: 16 },
});
