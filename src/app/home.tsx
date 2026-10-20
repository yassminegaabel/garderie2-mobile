// src/app/home.tsx
import { Stack } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { DrawerMenu, type MenuItem } from '../components/DrawerMenu';

export default function HomeScreen() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<MenuItem>('Accueil');

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Ma Garderie',
          headerLeft: () => (
            <Pressable onPress={() => setMenuOpen(true)} hitSlop={8} accessibilityRole="button" accessibilityLabel="Ouvrir le menu">
              <Text style={styles.burger}>☰</Text>
            </Pressable>
          ),
        }}
      />

      {/* Espace destiné à la liste d'activités */}
      <View style={styles.listArea}>
        <Text style={styles.empty}>La liste des activités s'affichera ici.</Text>
      </View>

      <Pressable style={styles.fab} onPress={() => {}} accessibilityRole="button" accessibilityLabel="Add activity">
        <Text style={styles.fabText}>+</Text>
      </Pressable>

      <DrawerMenu
        visible={menuOpen}
        selected={selected}
        onSelect={() => setMenuOpen(false)}
        onClose={() => setMenuOpen(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  burger: { fontSize: 24, marginRight: 16 },
  listArea: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  empty: { color: '#60646c' },
  fab: {
    position: 'absolute', right: 20, bottom: 28, width: 56, height: 56, borderRadius: 28,
    backgroundColor: '#208AEF', alignItems: 'center', justifyContent: 'center',
  },
  fabText: { color: '#fff', fontSize: 28, lineHeight: 32 },
});