
 // src/app/index.tsx
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  // Attendre 3 secondes puis aller à la page principale
  useEffect(() => {
    const timer = setTimeout(() => router.replace('/home'), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/garderie.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Ma Garderie</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: 240,
    height: 240,
    borderRadius: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
