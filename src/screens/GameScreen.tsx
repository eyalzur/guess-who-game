import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import AnimatedPhoto from '../components/AnimatedPhoto';
import Avatar from '../components/Avatar';
import BackButton from '../components/BackButton';
import BigButton from '../components/BigButton';
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

type Phase = 'shown' | 'hidden';

const BADGE_TEXT: Record<Phase, string> = {
  shown: 'לחצו להסתיר 🙈',
  hidden: 'לחצו להציץ שוב 👀',
};

function timerColor(secondsLeft: number): string {
  if (secondsLeft <= 10) return COLORS.red;
  if (secondsLeft <= 30) return COLORS.orange;
  return COLORS.green;
}

export default function GameScreen({ character, onNext, onMenu }: Props) {
  const [secondsLeft, setSecondsLeft] = useState(TIME_LIMIT_SECONDS);
  const [phase, setPhase] = useState<Phase>('shown');

  // every new character starts fresh: visible, full countdown, timer paused
  useEffect(() => {
    setPhase('shown');
    setSecondsLeft(TIME_LIMIT_SECONDS);
  }, [character.id]);

  // the countdown only ticks while the photo is hidden — looking at it
  // (shown) pauses the clock, so "take a look again" costs nothing
  useEffect(() => {
    if (phase !== 'hidden') return;
    const id = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          onNext();
          return TIME_LIMIT_SECONDS;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [phase, character.id]);

  const toggleHidden = () => setPhase((p) => (p === 'shown' ? 'hidden' : 'shown'));

  return (
    <ScreenBackground colors={GRADIENT_GAME}>
      <BackButton onPress={onMenu} />
      <AnimatedPhoto key={character.id}>
        <Pressable onPress={toggleHidden} accessibilityRole="button" accessibilityLabel={BADGE_TEXT[phase]}>
          {phase === 'hidden' ? <HiddenCover size={220} /> : <Avatar character={character} size={220} />}
        </Pressable>
      </AnimatedPhoto>
      <Text style={styles.name}>{phase === 'hidden' ? ' ' : character.name}</Text>
      <Pressable onPress={toggleHidden} accessibilityRole="button" style={styles.badge}>
        <Text style={styles.badgeText}>{BADGE_TEXT[phase]}</Text>
      </Pressable>
      <TimerRing
        secondsLeft={secondsLeft}
        totalSeconds={TIME_LIMIT_SECONDS}
        color={phase === 'hidden' ? timerColor(secondsLeft) : COLORS.gray}
        urgent={phase === 'hidden' && secondsLeft <= 10 && secondsLeft > 0}
      />
      {phase === 'shown' && <Text style={styles.pausedHint}>⏸ הטיימר רץ רק כשהתמונה מוסתרת</Text>}
      <BigButton label="➡️ דמות הבאה" onPress={onNext} color={COLORS.purple} size="md" />
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
  pausedHint: {
    fontSize: 13,
    fontFamily: FONTS.bodyMedium,
    color: COLORS.inkSoft,
    marginTop: 6,
    textAlign: 'center',
  },
});
