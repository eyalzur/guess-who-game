import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from '../components/Avatar';
import BigButton from '../components/BigButton';
import ConfettiBurst from '../components/ConfettiBurst';
import ScreenBackground from '../components/ScreenBackground';
import type { Character } from '../data/characters';
import { Outcome } from '../game/types';
import { COLORS, FONTS } from '../theme';

type Props = {
  character: Character;
  outcome: Outcome;
  onNext: () => void;
  onMenu: () => void;
};

const OUTCOME_TEXT: Record<Outcome, { title: string; color: string }> = {
  win: { title: 'ניצחת! 🎉🏆', color: COLORS.greenDark },
  timeout: { title: 'נגמר הזמן... 😅', color: COLORS.redDark },
  outOfQuestions: { title: 'נגמרו השאלות... 😅', color: COLORS.redDark },
  stop: { title: 'לא הצלחתם הפעם, נסו שוב! 🙂', color: COLORS.redDark },
};

export default function ResultScreen({ character, outcome, onNext, onMenu }: Props) {
  const { title, color } = OUTCOME_TEXT[outcome];

  return (
    <ScreenBackground>
      {outcome === 'win' && <ConfettiBurst />}
      <Text style={[styles.title, { color }]}>{title}</Text>
      <Avatar character={character} size={180} />
      <Text style={styles.name}>
        {character.gender === 'f' ? 'זו הייתה' : 'זה היה'} {character.name}!
      </Text>
      <BigButton label="➡️ סיבוב הבא" onPress={onNext} color={COLORS.purple} />
      <BigButton label="🏠 תפריט" onPress={onMenu} color={COLORS.gray} />
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 32, fontFamily: FONTS.display, marginBottom: 16, textAlign: 'center' },
  name: { fontSize: 26, fontFamily: FONTS.bodyBold, color: COLORS.ink, marginVertical: 16, textAlign: 'center' },
});
