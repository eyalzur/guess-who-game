import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from '../components/Avatar';
import BackButton from '../components/BackButton';
import BigButton from '../components/BigButton';
import ScreenBackground from '../components/ScreenBackground';
import type { Character } from '../data/characters';
import { GameMode } from '../game/types';
import { COLORS, FONTS, RADIUS } from '../theme';

type Props = {
  character: Character;
  mode: GameMode;
  onStart: () => void;
  onMenu: () => void;
};

export default function RevealScreen({ character, mode, onStart, onMenu }: Props) {
  const [photoReady, setPhotoReady] = useState(false);

  // reset the "wait for photo" gate whenever a new character is shown
  useEffect(() => {
    setPhotoReady(false);
  }, [character.id]);

  return (
    <ScreenBackground>
      <BackButton onPress={onMenu} />
      <View style={styles.hintBubble}>
        <Text style={styles.hint}>תראו למנחש/ת... ואז תסתירו! 🙈</Text>
      </View>
      <Avatar character={character} size={220} onLoadEnd={() => setPhotoReady(true)} />
      <Text style={styles.name}>{character.name}</Text>
      <View style={styles.modeBadge}>
        <Text style={styles.modeBadgeText}>
          {mode === 'time' ? '⏱️ 60 שניות' : '❓ 10 שאלות'}
        </Text>
      </View>
      <BigButton
        label={photoReady ? 'התחל! 🚀' : 'טוען תמונה...'}
        onPress={onStart}
        color={COLORS.pink}
        disabled={!photoReady}
      />
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  hintBubble: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.pill,
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginBottom: 18,
    shadowColor: '#5B3DA6',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  hint: { fontSize: 16, color: COLORS.inkSoft, fontFamily: FONTS.bodyMedium, textAlign: 'center' },
  name: {
    fontSize: 36,
    fontFamily: FONTS.display,
    marginTop: 20,
    textAlign: 'center',
    color: COLORS.ink,
  },
  modeBadge: {
    backgroundColor: COLORS.yellow,
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: RADIUS.pill,
    marginVertical: 14,
  },
  modeBadgeText: { fontSize: 15, fontFamily: FONTS.bodyBold, color: '#7A4B00' },
});
