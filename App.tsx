import { Heebo_400Regular, Heebo_600SemiBold, Heebo_700Bold } from '@expo-google-fonts/heebo';
import { Rubik_800ExtraBold, Rubik_900Black } from '@expo-google-fonts/rubik';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, I18nManager, Platform, SafeAreaView, StyleSheet } from 'react-native';
import ChangelogScreen from './src/screens/ChangelogScreen';
import GameScreen from './src/screens/GameScreen';
import MenuScreen from './src/screens/MenuScreen';
import SplashOverlay from './src/components/SplashOverlay';
import { ACTIVE_CATEGORIES, ALL_CATEGORIES, buildDeck } from './src/data/characters';
import type { Character } from './src/data/characters';
import { Screen } from './src/game/types';

if (Platform.OS === 'web') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const doc = (globalThis as any).document;
  if (doc?.documentElement) {
    doc.documentElement.dir = 'rtl';
    doc.documentElement.lang = 'he';
  }
  // it's a touch game, not a text page — a long-press (e.g. holding the
  // peek eye button) must not trigger the browser's text-selection highlight
  if (doc?.head && !doc.getElementById('no-select-style')) {
    const style = doc.createElement('style');
    style.id = 'no-select-style';
    style.textContent = `
      * { -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; }
      img { -webkit-user-drag: none; user-drag: none; }
    `;
    doc.head.appendChild(style);
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
  const [categories, setCategories] = useState<Character['category'][]>(ACTIVE_CATEGORIES);
  const initialDeck = useRef(buildDeck(ACTIVE_CATEGORIES)).current;
  const [character, setCharacter] = useState<Character>(initialDeck[0]);
  // remaining shuffled cards for the current game — never repeats a
  // character until every one in the selected categories has shown once
  const [deck, setDeck] = useState<Character[]>(initialDeck.slice(1));

  const toggleCategory = (category: Character['category']) => {
    setCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const selectAllCategories = () => setCategories(ALL_CATEGORIES);
  const clearCategories = () => setCategories([]);

  const startGame = () => {
    const [first, ...rest] = buildDeck(categories);
    setCharacter(first);
    setDeck(rest);
    setScreen('game');
  };

  const nextCharacter = () => {
    setDeck((prevDeck) => {
      const d = prevDeck.length > 0 ? prevDeck : buildDeck(categories, character.id);
      const [next, ...rest] = d;
      setCharacter(next);
      return rest;
    });
  };

  const backToMenu = () => setScreen('menu');
  const showChangelog = () => setScreen('changelog');

  const fade = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    fade.setValue(0);
    Animated.timing(fade, { toValue: 1, duration: 260, useNativeDriver: true }).start();
  }, [screen]);

  // splash stays up at least 1.5s (even once fonts are ready) so it always
  // reads as a deliberate "loading" beat, not a flash
  const [minSplashElapsed, setMinSplashElapsed] = useState(false);
  const [splashMounted, setSplashMounted] = useState(true);
  const appOpacity = useRef(new Animated.Value(0)).current;
  const splashOpacity = useRef(new Animated.Value(1)).current;
  const appReady = fontsLoaded && minSplashElapsed;

  useEffect(() => {
    const id = setTimeout(() => setMinSplashElapsed(true), 1500);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!appReady) return;
    Animated.timing(appOpacity, { toValue: 1, duration: 400, useNativeDriver: true }).start();
    Animated.timing(splashOpacity, { toValue: 0, duration: 400, useNativeDriver: true }).start(() => {
      setSplashMounted(false);
    });
  }, [appReady]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.fill, { opacity: appOpacity }]} pointerEvents={appReady ? 'auto' : 'none'}>
        <Animated.View style={[styles.fade, { opacity: fade }]}>
          {screen === 'menu' && (
            <MenuScreen
              selectedCategories={categories}
              onToggleCategory={toggleCategory}
              onSelectAllCategories={selectAllCategories}
              onClearCategories={clearCategories}
              onStart={startGame}
              onShowChangelog={showChangelog}
            />
          )}
          {screen === 'changelog' && <ChangelogScreen onMenu={backToMenu} />}
          {screen === 'game' && (
            <GameScreen character={character} onNext={nextCharacter} onMenu={backToMenu} />
          )}
        </Animated.View>
      </Animated.View>
      {splashMounted && (
        <Animated.View style={[styles.fill, { opacity: splashOpacity }]} pointerEvents="none">
          <SplashOverlay />
        </Animated.View>
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
  fade: { flex: 1 },
  fill: StyleSheet.absoluteFill,
});
