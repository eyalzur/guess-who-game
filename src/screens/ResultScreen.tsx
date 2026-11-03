import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from '../components/Avatar';
import BigButton from '../components/BigButton';
import type { Character } from '../data/characters';
import { Outcome } from '../game/types';

type Props = {
  character: Character;
  outcome: Outcome;
  onNext: () => void;
  onMenu: () => void;
};

const OUTCOME_TEXT: Record<Outcome, { title: string; color: string }> = {
  win: { title: 'ניצחת! 🎉🏆', color: '#16A34A' },
  timeout: { title: 'נגמר הזמן... 😅', color: '#DC2626' },
  outOfQuestions: { title: 'נגמרו השאלות... 😅', color: '#DC2626' },
  stop: { title: 'לא הצלחתם הפעם, נסו שוב! 🙂', color: '#DC2626' },
};

export default function ResultScreen({ character, outcome, onNext, onMenu }: Props) {
  const { title, color } = OUTCOME_TEXT[outcome];

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color }]}>{title}</Text>
      <Avatar character={character} size={180} />
      <Text style={styles.name}>
        {character.gender === 'f' ? 'זו הייתה' : 'זה היה'} {character.name}!
      </Text>
      <BigButton label="➡️ סיבוב הבא" onPress={onNext} color="#7C3AED" />
      <BigButton label="🏠 תפריט" onPress={onMenu} color="#6B7280" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 34, fontWeight: '900', marginBottom: 16, textAlign: 'center' },
  name: { fontSize: 28, fontWeight: '700', marginVertical: 16 },
});
