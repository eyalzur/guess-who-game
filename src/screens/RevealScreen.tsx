import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from '../components/Avatar';
import BigButton from '../components/BigButton';
import type { Character } from '../data/characters';
import { GameMode } from '../game/types';

type Props = {
  character: Character;
  mode: GameMode;
  onStart: () => void;
};

export default function RevealScreen({ character, mode, onStart }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.hint}>תראו למנחש/ת... ואז תסתירו!</Text>
      <Avatar character={character} size={220} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.mode}>
        {mode === 'time' ? 'מצב: 60 שניות ⏱️' : 'מצב: 10 שאלות ❓'}
      </Text>
      <BigButton label="התחל! 🚀" onPress={onStart} color="#DB2777" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  hint: { fontSize: 18, color: '#555', marginBottom: 12, textAlign: 'center' },
  name: { fontSize: 38, fontWeight: '900', marginTop: 16 },
  mode: { fontSize: 18, color: '#666', marginVertical: 12 },
});
