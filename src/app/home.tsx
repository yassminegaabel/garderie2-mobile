import { Stack } from 'expo-router';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { DrawerMenu, type MenuItem } from '../components/DrawerMenu';
import { activities } from '../data/activities';


export default function HomeScreen() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<MenuItem>("Accueil");

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Ma Garderie",
          headerLeft: () => (
            <Pressable
              onPress={() => setMenuOpen(true)}
              hitSlop={8}
              accessibilityRole="button"
              accessibilityLabel="Ouvrir le menu"
            >
              <Text style={styles.burger}>☰</Text>
            </Pressable>
          ),
        }}
      />

      <FlatList
        data={activities}
        keyExtractor={(activity) => String(activity.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable style={styles.card}>
            <Text style={styles.icon}>{item.icone}</Text>
            <View style={styles.body}>
              <Text style={styles.cardTitle}>{item.titre}</Text>
              <Text>{item.description}</Text>
            </View>
          </Pressable>
        )}
      />

      <Pressable
        style={styles.fab}
        onPress={() => {}}
        accessibilityRole="button"
        accessibilityLabel="Add activity"
      >
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
  container: { flex: 1, backgroundColor: "#fff" },
  burger: { fontSize: 24, marginRight: 16 },
  listArea: { flex: 1, alignItems: "center", justifyContent: "center" },
  empty: { color: "#60646c" },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 28,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#208AEF",
    alignItems: "center",
    justifyContent: "center",
  },
  fabText: { color: "#fff", fontSize: 28, lineHeight: 32 },
});
