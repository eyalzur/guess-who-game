import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import BigButton from '../components/BigButton';
import ScreenBackground from '../components/ScreenBackground';
import { ALL_CATEGORIES, CATEGORY_LABELS, Character } from '../data/characters';
import { CURRENT_VERSION } from '../data/changelog';
import { GameMode } from '../game/types';
import { COLORS, FONTS, RADIUS } from '../theme';

type Props = {
  selectedCategories: Character['category'][];
  onToggleCategory: (category: Character['category']) => void;
  onSelectAllCategories: () => void;
  onClearCategories: () => void;
  onSelectMode: (mode: GameMode) => void;
  onShowChangelog: () => void;
};

const CATEGORY_ICON: Record<Character['category'], string> = {
  'il-character': '🇮🇱',
  'intl-character': '🎬',
  cartoon: '🧸',
  singer: '🎤',
  politician: '🏛️',
};

const CHIP_COLORS: Record<Character['category'], string> = {
  'il-character': COLORS.blue,
  'intl-character': COLORS.purple,
  cartoon: COLORS.pink,
  singer: COLORS.orange,
  politician: COLORS.green,
};

export default function MenuScreen({
  selectedCategories,
  onToggleCategory,
  onSelectAllCategories,
  onClearCategories,
  onSelectMode,
  onShowChangelog,
}: Props) {
  const canStart = selectedCategories.length > 0;
  const allSelected = selectedCategories.length === ALL_CATEGORIES.length;

  return (
    <ScreenBackground>
      <View style={styles.titleWrap}>
        <Text style={styles.titleEmoji}>🎉</Text>
        <Text style={styles.title}>מי זה?</Text>
      </View>

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
          const chipColor = CHIP_COLORS[cat];
          return (
            <Pressable
              key={cat}
              onPress={() => onToggleCategory(cat)}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: selected }}
              accessibilityLabel={CATEGORY_LABELS[cat]}
              style={[
                styles.chip,
                selected
                  ? { backgroundColor: chipColor, borderColor: chipColor }
                  : styles.chipUnselected,
              ]}
            >
              <Text style={styles.chipEmoji}>{CATEGORY_ICON[cat]}</Text>
              <Text style={[styles.chipText, selected && styles.chipTextSelected]}>
                {CATEGORY_LABELS[cat]}
              </Text>
            </Pressable>
          );
        })}
      </View>
      {!canStart && (
        <View style={styles.warningBox} accessibilityRole="alert" accessibilityLiveRegion="polite">
          <Text style={styles.warning}>בחרו לפחות קטגוריה אחת כדי להתחיל</Text>
        </View>
      )}

      <Text style={styles.subtitle}>איך נשחק?</Text>
      <BigButton
        label={'⏱️ לפי זמן (60 שניות)'}
        onPress={() => canStart && onSelectMode('time')}
        color={COLORS.blue}
        disabled={!canStart}
      />
      <BigButton
        label={'❓ לפי שאלות (10 שאלות)'}
        onPress={() => canStart && onSelectMode('questions')}
        color={COLORS.green}
        disabled={!canStart}
      />

      <Pressable onPress={onShowChangelog} accessibilityRole="button" hitSlop={8} style={styles.versionLink}>
        <Text style={styles.versionText}>גרסה {CURRENT_VERSION} · מה חדש?</Text>
      </Pressable>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  titleWrap: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 18 },
  titleEmoji: { fontSize: 38 },
  title: { fontSize: 46, fontFamily: FONTS.display, color: COLORS.ink, textAlign: 'center' },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 340,
  },
  subtitle: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 12,
    color: COLORS.inkSoft,
    fontFamily: FONTS.bodyBold,
    textAlign: 'center',
  },
  quickAction: { fontSize: 15, color: COLORS.purple, fontFamily: FONTS.bodyBold },
  chipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 8,
    maxWidth: 360,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: RADIUS.pill,
    borderWidth: 2,
    minHeight: 44,
    justifyContent: 'center',
  },
  chipUnselected: { backgroundColor: COLORS.white, borderColor: COLORS.grayLight },
  chipEmoji: { fontSize: 16 },
  chipText: { fontSize: 15, color: COLORS.inkSoft, fontFamily: FONTS.bodyBold },
  chipTextSelected: { color: COLORS.white },
  warningBox: {
    backgroundColor: '#FFE4E7',
    borderColor: COLORS.red,
    borderWidth: 1.5,
    borderRadius: RADIUS.sm,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 12,
  },
  warning: { color: COLORS.redDark, fontSize: 14, fontFamily: FONTS.bodyMedium, textAlign: 'center' },
  versionLink: { marginTop: 18, padding: 8 },
  versionText: { fontSize: 13, color: COLORS.inkSoft, fontFamily: FONTS.body },
});
