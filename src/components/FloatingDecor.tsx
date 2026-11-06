import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Easing, StyleSheet, Text, View } from 'react-native';

const EMOJI = ['⭐️', '✨', '🎈', '🎊', '💫', '🌟'];
const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');

type Piece = {
  emoji: string;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
};

// fractions of screen height (0..1) the pieces are allowed to appear in —
// lets a screen keep decor out of a busy content area by passing e.g.
// [[0, 0.1], [0.82, 1]] (just the header sliver and the bottom margin)
function makePieces(count: number, bands: Array<[number, number]>): Piece[] {
  return Array.from({ length: count }).map((_, i) => {
    const [bandFrom, bandTo] = bands[Math.floor(Math.random() * bands.length)];
    return {
      emoji: EMOJI[i % EMOJI.length],
      left: Math.random() * Math.min(SCREEN_W, 440),
      top: (bandFrom + Math.random() * (bandTo - bandFrom)) * SCREEN_H,
      size: 16 + Math.random() * 14,
      duration: 2600 + Math.random() * 1800,
      delay: Math.random() * 1200,
      drift: 10 + Math.random() * 14,
    };
  });
}

function DecorPiece({ piece }: { piece: Piece }) {
  const t = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(t, {
          toValue: 1,
          duration: piece.duration,
          delay: piece.delay,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(t, {
          toValue: 0,
          duration: piece.duration,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, []);

  const translateY = t.interpolate({ inputRange: [0, 1], outputRange: [0, -piece.drift] });
  const rotate = t.interpolate({ inputRange: [0, 1], outputRange: ['-8deg', '8deg'] });
  const opacity = t.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0.55, 0.9, 0.55] });

  return (
    <Animated.Text
      style={{
        position: 'absolute',
        left: piece.left,
        top: piece.top,
        fontSize: piece.size,
        opacity,
        transform: [{ translateY }, { rotate }],
      }}
    >
      {piece.emoji}
    </Animated.Text>
  );
}

type Props = { count?: number; verticalBands?: Array<[number, number]> };

export default function FloatingDecor({ count = 10, verticalBands = [[0, 1]] }: Props) {
  const pieces = useRef(makePieces(count, verticalBands)).current;
  return (
    <View pointerEvents="none" style={styles.container}>
      {pieces.map((p, i) => (
        <DecorPiece key={i} piece={p} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' },
});
