import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { I18nManager, Platform, SafeAreaView, StyleSheet } from 'react-native';
import GuessingScreen from './src/screens/GuessingScreen';
import MenuScreen from './src/screens/MenuScreen';
import RevealScreen from './src/screens/RevealScreen';
import ResultScreen from './src/screens/ResultScreen';
import { randomCharacter } from './src/data/characters';
import type { Character } from './src/data/characters';
import { GameMode, Outcome, Screen } from './src/game/types';

if (Platform.OS === 'web') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const doc = (globalThis as any).document;
  if (doc?.documentElement) {
    doc.documentElement.dir = 'rtl';
    doc.documentElement.lang = 'he';
  }
} else if (!I18nManager.isRTL) {
  I18nManager.allowRTL(true);
  I18nManager.forceRTL(true);
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('menu');
  const [mode, setMode] = useState<GameMode>('time');
  const [character, setCharacter] = useState<Character>(() => randomCharacter());
  const [outcome, setOutcome] = useState<Outcome>('win');

  const selectMode = (m: GameMode) => {
    setMode(m);
    setCharacter(randomCharacter());
    setScreen('reveal');
  };

  const startGuessing = () => setScreen('guessing');

  const finishRound = (o: Outcome) => {
    setOutcome(o);
    setScreen('result');
  };

  const nextRound = () => {
    setCharacter((prev) => randomCharacter(prev.id));
    setScreen('reveal');
  };

  const backToMenu = () => setScreen('menu');

  return (
    <SafeAreaView style={styles.container}>
      {screen === 'menu' && <MenuScreen onSelectMode={selectMode} />}
      {screen === 'reveal' && (
        <RevealScreen character={character} mode={mode} onStart={startGuessing} />
      )}
      {screen === 'guessing' && <GuessingScreen mode={mode} onFinish={finishRound} />}
      {screen === 'result' && (
        <ResultScreen character={character} outcome={outcome} onNext={nextRound} onMenu={backToMenu} />
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7ED',
  },
});
