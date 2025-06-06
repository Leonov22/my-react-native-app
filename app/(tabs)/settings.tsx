import { logout } from '@/src/services/authNative';
import { router } from 'expo-router';
import { Button, StyleSheet, View } from 'react-native';

export default function Settings() {
  return (
    <View style={styles.container}>
      <Button
        title="Sign Out"
        color="#FF3B30"
        onPress={async () => {
          await logout();
          router.replace('/login' as any);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
}); 