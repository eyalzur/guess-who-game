import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

type EntranceKind = 'pop' | 'drop' | 'spin' | 'slide' | 'zoom';
type IdleKind = 'float' | 'swing' | 'pulse' | 'wiggle' | 'drift';

const ENTRANCE_KINDS: EntranceKind[] = ['pop', 'drop', 'spin', 'slide', 'zoom'];
const IDLE_KINDS: IdleKind[] = ['float', 'swing', 'pulse', 'wiggle', 'drift'];

// base duration (ms, one leg of the loop) per idle style — wiggle is snappy,
// drift is lazy; the random `speed` multiplier then scales each one further
const IDLE_BASE_DURATION: Record<IdleKind, number> = {
  float: 1400,
  swing: 1600,
  pulse: 900,
  wiggle: 480,
  drift: 1900,
};

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function range(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

// Wraps a photo with a randomly-chosen entrance + idle-loop animation, with
// randomized speed/amplitude, so every round moves differently instead of
// always the same bob. Mount this with `key={character.id}` so a fresh
// pick happens every round.
export default function AnimatedPhoto({ children }: { children: React.ReactNode }) {
  const entranceKind = useRef(pick(ENTRANCE_KINDS)).current;
  const idleKind = useRef(pick(IDLE_KINDS)).current;
  const speed = useRef(range(0.7, 1.4)).current; // <1 = faster, >1 = slower
  const size = useRef(range(0.7, 1.6)).current; // amplitude multiplier
  const side = useRef(Math.random() < 0.5 ? -1 : 1).current;

  const enter = useRef(new Animated.Value(0)).current;
  const idle = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    enter.setValue(0);
    if (entranceKind === 'pop') {
      Animated.spring(enter, { toValue: 1, friction: 5, tension: 140, useNativeDriver: true }).start();
    } else if (entranceKind === 'zoom') {
      Animated.spring(enter, { toValue: 1, friction: 6, tension: 90, useNativeDriver: true }).start();
    } else {
      Animated.timing(enter, {
        toValue: 1,
        duration: 520,
        easing: Easing.out(Easing.back(1.6)),
        useNativeDriver: true,
      }).start();
    }
  }, [entranceKind]);

  useEffect(() => {
    const duration = IDLE_BASE_DURATION[idleKind] * speed;
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(idle, {
          toValue: 1,
          duration,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(idle, {
          toValue: 0,
          duration,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [idleKind, speed]);

  let entranceTransform: any[];
  switch (entranceKind) {
    case 'drop':
      entranceTransform = [
        { translateY: enter.interpolate({ inputRange: [0, 1], outputRange: [-260, 0] }) },
        { scale: enter.interpolate({ inputRange: [0, 1], outputRange: [0.6, 1] }) },
      ];
      break;
    case 'spin':
      entranceTransform = [
        { rotate: enter.interpolate({ inputRange: [0, 1], outputRange: ['200deg', '0deg'] }) },
        { scale: enter },
      ];
      break;
    case 'slide':
      entranceTransform = [
        { translateX: enter.interpolate({ inputRange: [0, 1], outputRange: [side * 320, 0] }) },
        { scale: enter },
      ];
      break;
    case 'zoom':
      entranceTransform = [{ scale: enter.interpolate({ inputRange: [0, 1], outputRange: [2.4, 1] }) }];
      break;
    case 'pop':
    default:
      entranceTransform = [{ scale: enter }];
  }

  let idleTransform: any[];
  switch (idleKind) {
    case 'swing':
      idleTransform = [
        { rotate: idle.interpolate({ inputRange: [0, 1], outputRange: [`${-7 * size}deg`, `${7 * size}deg`] }) },
      ];
      break;
    case 'pulse':
      idleTransform = [
        { scale: idle.interpolate({ inputRange: [0, 1], outputRange: [1, 1 + 0.06 * size] }) },
      ];
      break;
    case 'wiggle':
      // rotate only — mixing rotate with a translate here made it orbit
      // around a corner instead of spinning in place
      idleTransform = [
        { rotate: idle.interpolate({ inputRange: [0, 1], outputRange: [`${-6 * size}deg`, `${6 * size}deg`] }) },
      ];
      break;
    case 'drift':
      idleTransform = [
        { translateX: idle.interpolate({ inputRange: [0, 1], outputRange: [-10 * size, 10 * size] }) },
      ];
      break;
    case 'float':
    default:
      idleTransform = [
        { translateY: idle.interpolate({ inputRange: [0, 1], outputRange: [0, -10 * size] }) },
      ];
  }

  return (
    <Animated.View style={{ opacity: enter, transform: entranceTransform }}>
      <Animated.View style={{ transform: idleTransform }}>{children}</Animated.View>
    </Animated.View>
  );
}
