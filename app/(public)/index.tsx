import { StyleSheet, View } from 'react-native';

import { NavigationCard } from '@/shared/components/NavigationCard';
import { PlaceholderScreen } from '@/shared/components/PlaceholderScreen';
import { spacing } from '@/shared/theme/tokens';

export default function HomeScreen() {
  return (
    <PlaceholderScreen
      description="Base inicial de la plataforma profesional para artistas visuales y creativos."
      title="HABITTUS"
    >
      <View style={styles.links}>
        <NavigationCard href="/(public)/explore" label="Explorar artistas" />
        <NavigationCard href="/(auth)/sign-in" label="Ingresar" />
        <NavigationCard href="/(auth)/register" label="Crear cuenta profesional" />
      </View>
    </PlaceholderScreen>
  );
}

const styles = StyleSheet.create({ links: { gap: spacing.sm, marginTop: spacing.xl } });
