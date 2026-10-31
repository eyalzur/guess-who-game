import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BigButton from '../components/BigButton';
import { GameMode } from '../game/types';

type Props = {
  onSelectMode: (mode: GameMode) => void;
};

export default function MenuScreen({ onSelectMode }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>מי זה? 🎉</Text>
      <Text style={styles.subtitle}>איך נשחק?</Text>
      <BigButton label="⏱️ לפי זמן (60 שניות)" onPress={() => onSelectMode('time')} color="#2563EB" />
      <BigButton label="❓ לפי שאלות (10 שאלות)" onPress={() => onSelectMode('questions')} color="#059669" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 44, fontWeight: '900', marginBottom: 16, textAlign: 'center' },
  subtitle: { fontSize: 22, marginBottom: 24, color: '#444', textAlign: 'center' },
});
