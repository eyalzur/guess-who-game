import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Avatar from '../components/Avatar';
import BackButton from '../components/BackButton';
import Bob from '../components/Bob';
import BounceIn from '../components/BounceIn';
import ScreenBackground from '../components/ScreenBackground';
import TimerRing from '../components/TimerRing';
import type { Character } from '../data/characters';
import { TIME_LIMIT_SECONDS } from '../game/types';
import { COLORS, FONTS, GRADIENT_GAME } from '../theme';

type Props = {
  character: Character;
  onNext: () => void;
  onMenu: () => void;
};

function timerColor(secondsLeft: number): string {
  if (secondsLeft <= 10) return COLORS.red;
  if (secondsLeft <= 30) return COLORS.orange;
  return COLORS.green;
}

export default function GameScreen({ character, onNext, onMenu }: Props) {
  const [secondsLeft, setSecondsLeft] = useState(TIME_LIMIT_SECONDS);

  // every new character gets a fresh countdown; reaching zero moves on by itself
  useEffect(() => {
    setSecondsLeft(TIME_LIMIT_SECONDS);
    const start = Date.now();
    const id = setInterval(() => {
      const remaining = Math.max(0, TIME_LIMIT_SECONDS - Math.floor((Date.now() - start) / 1000));
      setSecondsLeft(remaining);
      if (remaining <= 0) onNext();
    }, 250);
    return () => clearInterval(id);
  }, [character.id]);

  return (
    <ScreenBackground colors={GRADIENT_GAME}>
      <BackButton onPress={onMenu} />
      <BounceIn key={character.id}>
        <Pressable onPress={onNext} accessibilityRole="button" accessibilityLabel="דמות הבאה">
          <Bob>
            <Avatar character={character} size={220} />
          </Bob>
        </Pressable>
      </BounceIn>
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.hint}>לחצו על התמונה לדמות הבאה 👆</Text>
      <TimerRing
        secondsLeft={secondsLeft}
        totalSeconds={TIME_LIMIT_SECONDS}
        color={timerColor(secondsLeft)}
        urgent={secondsLeft <= 10 && secondsLeft > 0}
      />
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 32,
    fontFamily: FONTS.display,
    marginTop: 16,
    textAlign: 'center',
    color: COLORS.ink,
  },
  hint: {
    fontSize: 15,
    fontFamily: FONTS.bodyMedium,
    color: COLORS.inkSoft,
    marginBottom: 14,
    textAlign: 'center',
  },
});
