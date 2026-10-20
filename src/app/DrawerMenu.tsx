// src/components/DrawerMenu.tsx
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export const MENU_ITEMS = ['Accueil', 'Activités', 'À propos'] as const;
export type MenuItem = (typeof MENU_ITEMS)[number];

type Props = {
  visible: boolean;
  selected: MenuItem;
  onSelect: (item: MenuItem) => void;
  onClose: () => void;
};

export function DrawerMenu({ visible, selected, onSelect, onClose }: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <View style={styles.panel}>
          <Text style={styles.header}>Ma Garderie</Text>
          {MENU_ITEMS.map((item) => (
            <Pressable
              key={item}
              style={[styles.item, item === selected && styles.itemSelected]}
              onPress={() => onSelect(item)}
              accessibilityRole="button">
              <Text style={[styles.itemText, item === selected && styles.itemTextSelected]}>{item}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable style={styles.outside} onPress={onClose} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: { flex: 1, flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)' },
  panel: { width: 260, backgroundColor: '#fff', paddingTop: 60, paddingHorizontal: 12, gap: 4 },
  outside: { flex: 1 },
  header: { fontSize: 22, fontWeight: 'bold', padding: 12, marginBottom: 8 },
  item: { padding: 14, borderRadius: 8 },
  itemSelected: { backgroundColor: '#e6f0fd' },
  itemText: { fontSize: 16 },
  itemTextSelected: { color: '#208AEF', fontWeight: 'bold' },
});