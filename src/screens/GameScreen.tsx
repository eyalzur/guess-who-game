import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import AnimatedPhoto from '../components/AnimatedPhoto';
import Avatar from '../components/Avatar';
import BackButton from '../components/BackButton';
import HiddenCover from '../components/HiddenCover';
import ScreenBackground from '../components/ScreenBackground';
import TimerRing from '../components/TimerRing';
import type { Character } from '../data/characters';
import { TIME_LIMIT_SECONDS } from '../game/types';
import { COLORS, FONTS, GRADIENT_GAME, RADIUS } from '../theme';

type Props = {
  character: Character;
  onNext: () => void;
  onMenu: () => void;
};

type Phase = 'shown' | 'hidden' | 'revealed';

const BADGE_TEXT: Record<Phase, string> = {
  shown: 'לחצו להסתיר 🙈',
  hidden: 'לחצו לחשוף 👀',
  revealed: 'לחצו לדמות הבאה ➡️',
};

function timerColor(secondsLeft: number): string {
  if (secondsLeft <= 10) return COLORS.red;
  if (secondsLeft <= 30) return COLORS.orange;
  return COLORS.green;
}

export default function GameScreen({ character, onNext, onMenu }: Props) {
  const [secondsLeft, setSecondsLeft] = useState(TIME_LIMIT_SECONDS);
  const [phase, setPhase] = useState<Phase>('shown');

  // every new character starts fresh: visible, full countdown
  useEffect(() => {
    setPhase('shown');
  }, [character.id]);

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

  const handleTap = () => {
    if (phase === 'shown') setPhase('hidden');
    else if (phase === 'hidden') setPhase('revealed');
    else onNext();
  };

  return (
    <ScreenBackground colors={GRADIENT_GAME}>
      <BackButton onPress={onMenu} />
      <AnimatedPhoto key={character.id}>
        <Pressable onPress={handleTap} accessibilityRole="button" accessibilityLabel={BADGE_TEXT[phase]}>
          {phase === 'hidden' ? <HiddenCover size={220} /> : <Avatar character={character} size={220} />}
        </Pressable>
      </AnimatedPhoto>
      <Text style={styles.name}>{phase === 'hidden' ? ' ' : character.name}</Text>
      <Pressable onPress={handleTap} accessibilityRole="button" style={styles.badge}>
        <Text style={styles.badgeText}>{BADGE_TEXT[phase]}</Text>
      </Pressable>
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
  badge: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.pill,
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginVertical: 14,
    shadowColor: '#5B3DA6',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  badgeText: {
    fontSize: 16,
    fontFamily: FONTS.bodyBold,
    color: COLORS.purpleDark,
    textAlign: 'center',
  },
});
