import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import BigButton from '../components/BigButton';
import { ALL_CATEGORIES, CATEGORY_LABELS, Character } from '../data/characters';
import { GameMode } from '../game/types';

type Props = {
  selectedCategories: Character['category'][];
  onToggleCategory: (category: Character['category']) => void;
  onSelectMode: (mode: GameMode) => void;
};

export default function MenuScreen({ selectedCategories, onToggleCategory, onSelectMode }: Props) {
  const canStart = selectedCategories.length > 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>מי זה? 🎉</Text>

      <Text style={styles.subtitle}>אילו קטגוריות?</Text>
      <View style={styles.chipsRow}>
        {ALL_CATEGORIES.map((cat) => {
          const selected = selectedCategories.includes(cat);
          return (
            <Pressable
              key={cat}
              onPress={() => onToggleCategory(cat)}
              style={[styles.chip, selected ? styles.chipSelected : styles.chipUnselected]}
            >
              <Text style={[styles.chipText, selected && styles.chipTextSelected]}>
                {CATEGORY_LABELS[cat]}
              </Text>
            </Pressable>
          );
        })}
      </View>
      {!canStart && <Text style={styles.warning}>בחרו לפחות קטגוריה אחת</Text>}

      <Text style={styles.subtitle}>איך נשחק?</Text>
      <BigButton
        label="⏱️ לפי זמן (60 שניות)"
        onPress={() => canStart && onSelectMode('time')}
        color={canStart ? '#2563EB' : '#9CA3AF'}
      />
      <BigButton
        label="❓ לפי שאלות (10 שאלות)"
        onPress={() => canStart && onSelectMode('questions')}
        color={canStart ? '#059669' : '#9CA3AF'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 44, fontWeight: '900', marginBottom: 16, textAlign: 'center' },
  subtitle: { fontSize: 22, marginTop: 8, marginBottom: 12, color: '#444', textAlign: 'center' },
  chipsRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 8 },
  chip: { paddingHorizontal: 14, paddingVertical: 10, borderRadius: 20, borderWidth: 2 },
  chipSelected: { backgroundColor: '#2563EB', borderColor: '#2563EB' },
  chipUnselected: { backgroundColor: '#FFF', borderColor: '#D1D5DB' },
  chipText: { fontSize: 16, color: '#374151', fontWeight: '600' },
  chipTextSelected: { color: '#FFF' },
  warning: { color: '#DC2626', marginBottom: 12, fontSize: 14 },
});
