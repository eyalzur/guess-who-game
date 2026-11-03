import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import BigButton from '../components/BigButton';
import { ALL_CATEGORIES, CATEGORY_LABELS, Character } from '../data/characters';
import { GameMode } from '../game/types';

type Props = {
  selectedCategories: Character['category'][];
  onToggleCategory: (category: Character['category']) => void;
  onSelectAllCategories: () => void;
  onClearCategories: () => void;
  onSelectMode: (mode: GameMode) => void;
};

export default function MenuScreen({
  selectedCategories,
  onToggleCategory,
  onSelectAllCategories,
  onClearCategories,
  onSelectMode,
}: Props) {
  const canStart = selectedCategories.length > 0;
  const allSelected = selectedCategories.length === ALL_CATEGORIES.length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>מי זה? 🎉</Text>

      <View style={styles.categoryHeader}>
        <Text style={styles.subtitle}>אילו קטגוריות?</Text>
        <Pressable
          onPress={allSelected ? onClearCategories : onSelectAllCategories}
          accessibilityRole="button"
          hitSlop={8}
        >
          <Text style={styles.quickAction}>{allSelected ? 'נקה הכל' : 'בחר הכל'}</Text>
        </Pressable>
      </View>

      <View style={styles.chipsRow}>
        {ALL_CATEGORIES.map((cat) => {
          const selected = selectedCategories.includes(cat);
          return (
            <Pressable
              key={cat}
              onPress={() => onToggleCategory(cat)}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: selected }}
              accessibilityLabel={CATEGORY_LABELS[cat]}
              style={[styles.chip, selected ? styles.chipSelected : styles.chipUnselected]}
            >
              <Text style={[styles.chipText, selected && styles.chipTextSelected]}>
                {selected ? '✓ ' : ''}
                {CATEGORY_LABELS[cat]}
              </Text>
            </Pressable>
          );
        })}
      </View>
      {!canStart && (
        <View style={styles.warningBox}>
          <Text style={styles.warning}>בחרו לפחות קטגוריה אחת כדי להתחיל</Text>
        </View>
      )}

      <Text style={styles.subtitle}>איך נשחק?</Text>
      <BigButton
        label="⏱️ לפי זמן (60 שניות)"
        onPress={() => canStart && onSelectMode('time')}
        color={canStart ? '#2563EB' : '#9CA3AF'}
        disabled={!canStart}
      />
      <BigButton
        label="❓ לפי שאלות (10 שאלות)"
        onPress={() => canStart && onSelectMode('questions')}
        color={canStart ? '#059669' : '#9CA3AF'}
        disabled={!canStart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 44, fontWeight: '900', marginBottom: 16, textAlign: 'center' },
  categoryHeader: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 320,
  },
  subtitle: { fontSize: 22, marginTop: 8, marginBottom: 12, color: '#444', textAlign: 'center' },
  quickAction: { fontSize: 15, color: '#2563EB', fontWeight: '700' },
  chipsRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 8 },
  chip: { paddingHorizontal: 14, paddingVertical: 10, borderRadius: 20, borderWidth: 2 },
  chipSelected: { backgroundColor: '#2563EB', borderColor: '#2563EB' },
  chipUnselected: { backgroundColor: '#FFF', borderColor: '#D1D5DB' },
  chipText: { fontSize: 16, color: '#374151', fontWeight: '600' },
  chipTextSelected: { color: '#FFF' },
  warningBox: {
    backgroundColor: '#FEF2F2',
    borderColor: '#FCA5A5',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 12,
  },
  warning: { color: '#DC2626', fontSize: 14, textAlign: 'center' },
});
