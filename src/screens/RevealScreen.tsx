import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from '../components/Avatar';
import BackButton from '../components/BackButton';
import BigButton from '../components/BigButton';
import type { Character } from '../data/characters';
import { GameMode } from '../game/types';

type Props = {
  character: Character;
  mode: GameMode;
  onStart: () => void;
  onMenu: () => void;
};

export default function RevealScreen({ character, mode, onStart, onMenu }: Props) {
  return (
    <View style={styles.container}>
      <BackButton onPress={onMenu} />
      <Text style={styles.hint}>תראו למנחש/ת... ואז תסתירו!</Text>
      <Avatar character={character} size={220} />
      <Text style={styles.name}>{character.name}</Text>
      <View style={styles.modeBadge}>
        <Text style={styles.modeBadgeText}>
          {mode === 'time' ? '⏱️ 60 שניות' : '❓ 10 שאלות'}
        </Text>
      </View>
      <BigButton label="התחל! 🚀" onPress={onStart} color="#DB2777" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  hint: { fontSize: 18, color: '#555', marginBottom: 12, textAlign: 'center' },
  name: { fontSize: 38, fontWeight: '900', marginTop: 16, textAlign: 'center' },
  modeBadge: {
    backgroundColor: '#FDE68A',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    marginVertical: 14,
  },
  modeBadgeText: { fontSize: 16, fontWeight: '700', color: '#92400E' },
});
