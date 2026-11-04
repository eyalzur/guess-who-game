import { Heebo_400Regular, Heebo_600SemiBold, Heebo_700Bold } from '@expo-google-fonts/heebo';
import { Rubik_800ExtraBold, Rubik_900Black } from '@expo-google-fonts/rubik';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, I18nManager, Platform, SafeAreaView, StyleSheet } from 'react-native';
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

  const fade = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    fade.setValue(0);
    Animated.timing(fade, { toValue: 1, duration: 260, useNativeDriver: true }).start();
  }, [screen]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.fade, { opacity: fade }]}>
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
      </Animated.View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3D6',
  },
  fade: { flex: 1 },
});
