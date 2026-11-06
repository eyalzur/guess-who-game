import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import BigButton from '../components/BigButton';
import BounceIn from '../components/BounceIn';
import ScreenBackground from '../components/ScreenBackground';
import { ALL_CATEGORIES, CATEGORY_LABELS, Character } from '../data/characters';
import { CURRENT_VERSION } from '../data/changelog';
import { COLORS, FONTS, GRADIENT_MENU, RADIUS } from '../theme';

type Props = {
  selectedCategories: Character['category'][];
  onToggleCategory: (category: Character['category']) => void;
  onSelectAllCategories: () => void;
  onClearCategories: () => void;
  onStart: () => void;
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
  onStart,
  onShowChangelog,
}: Props) {
  const canStart = selectedCategories.length > 0;
  const allSelected = selectedCategories.length === ALL_CATEGORIES.length;

  return (
    <ScreenBackground colors={GRADIENT_MENU} decorBands={[[0, 0.11], [0.88, 1]]}>
      <BounceIn style={styles.titleWrap}>
        <Text style={styles.titleEmoji}>🎉</Text>
        <Text style={styles.title}>מי זה?</Text>
      </BounceIn>

      <BounceIn delay={60} style={styles.panel}>
        <View style={styles.categoryHeader}>
          <Pressable
            onPress={allSelected ? onClearCategories : onSelectAllCategories}
            accessibilityRole="button"
            hitSlop={8}
          >
            <Text style={styles.quickAction}>{allSelected ? 'נקה הכל' : 'בחר הכל'}</Text>
          </Pressable>
          <Text style={styles.subtitle}>אילו קטגוריות?</Text>
        </View>

        <View style={styles.chipsGrid}>
          {ALL_CATEGORIES.map((cat, i) => {
            const selected = selectedCategories.includes(cat);
            const chipColor = CHIP_COLORS[cat];
            return (
              <BounceIn key={cat} delay={100 + i * 60} style={styles.chipSlot}>
                <Pressable
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
              </BounceIn>
            );
          })}
        </View>

        {!canStart && (
          <View style={styles.warningBox} accessibilityRole="alert" accessibilityLiveRegion="polite">
            <Text style={styles.warning}>בחרו לפחות קטגוריה אחת כדי להתחיל</Text>
          </View>
        )}
      </BounceIn>

      <BigButton
        label={'🎮 התחילו לשחק!'}
        onPress={() => canStart && onStart()}
        color={COLORS.blue}
        disabled={!canStart}
        pulse={canStart}
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
  panel: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: 'rgba(255,255,255,0.58)',
    borderRadius: RADIUS.xl,
    padding: 18,
    marginBottom: 18,
    shadowColor: '#5B3DA6',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 19,
    color: COLORS.inkSoft,
    fontFamily: FONTS.bodyBold,
    textAlign: 'center',
  },
  quickAction: { fontSize: 14, color: COLORS.purple, fontFamily: FONTS.bodyBold },
  chipsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  chipSlot: { flexBasis: '47%', flexGrow: 0 },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: RADIUS.pill,
    borderWidth: 2,
    minHeight: 48,
    width: '100%',
  },
  chipUnselected: { backgroundColor: COLORS.white, borderColor: COLORS.grayLight },
  chipEmoji: { fontSize: 16 },
  chipText: { fontSize: 14, color: COLORS.inkSoft, fontFamily: FONTS.bodyBold },
  chipTextSelected: { color: COLORS.white },
  warningBox: {
    backgroundColor: '#FFE4E7',
    borderColor: COLORS.red,
    borderWidth: 1.5,
    borderRadius: RADIUS.sm,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 12,
  },
  warning: { color: COLORS.redDark, fontSize: 14, fontFamily: FONTS.bodyMedium, textAlign: 'center' },
  versionLink: { marginTop: 18, padding: 8 },
  versionText: { fontSize: 13, color: COLORS.inkSoft, fontFamily: FONTS.body },
});
