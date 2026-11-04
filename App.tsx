import { Heebo_400Regular, Heebo_600SemiBold, Heebo_700Bold } from '@expo-google-fonts/heebo';
import { Rubik_800ExtraBold, Rubik_900Black } from '@expo-google-fonts/rubik';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { I18nManager, Platform, SafeAreaView, StyleSheet } from 'react-native';
import ChangelogScreen from './src/screens/ChangelogScreen';
import GuessingScreen from './src/screens/GuessingScreen';
import MenuScreen from './src/screens/MenuScreen';
import RevealScreen from './src/screens/RevealScreen';
import ResultScreen from './src/screens/ResultScreen';
import { ACTIVE_CATEGORIES, ALL_CATEGORIES, randomCharacter } from './src/data/characters';
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
  const [fontsLoaded] = useFonts({
    Heebo_400Regular,
    Heebo_600SemiBold,
    Heebo_700Bold,
    Rubik_800ExtraBold,
    Rubik_900Black,
  });
  const [screen, setScreen] = useState<Screen>('menu');
  const [mode, setMode] = useState<GameMode>('time');
  const [categories, setCategories] = useState<Character['category'][]>(ACTIVE_CATEGORIES);
  const [character, setCharacter] = useState<Character>(() => randomCharacter(undefined, ACTIVE_CATEGORIES));
  const [outcome, setOutcome] = useState<Outcome>('win');

  const toggleCategory = (category: Character['category']) => {
    setCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const selectAllCategories = () => setCategories(ALL_CATEGORIES);
  const clearCategories = () => setCategories([]);

  const selectMode = (m: GameMode) => {
    setMode(m);
    setCharacter(randomCharacter(undefined, categories));
    setScreen('reveal');
  };

  const startGuessing = () => setScreen('guessing');

  const finishRound = (o: Outcome) => {
    setOutcome(o);
    setScreen('result');
  };

  const nextRound = () => {
    setCharacter((prev) => randomCharacter(prev.id, categories));
    setScreen('reveal');
  };

  const backToMenu = () => setScreen('menu');
  const showChangelog = () => setScreen('changelog');

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      {screen === 'menu' && (
        <MenuScreen
          selectedCategories={categories}
          onToggleCategory={toggleCategory}
          onSelectAllCategories={selectAllCategories}
          onClearCategories={clearCategories}
          onSelectMode={selectMode}
          onShowChangelog={showChangelog}
        />
      )}
      {screen === 'changelog' && <ChangelogScreen onMenu={backToMenu} />}
      {screen === 'reveal' && (
        <RevealScreen character={character} mode={mode} onStart={startGuessing} onMenu={backToMenu} />
      )}
      {screen === 'guessing' && (
        <GuessingScreen mode={mode} onFinish={finishRound} onMenu={backToMenu} />
      )}
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
    backgroundColor: '#FFF3D6',
  },
});
