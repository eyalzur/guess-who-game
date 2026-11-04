import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Easing, StyleSheet, Text, View } from 'react-native';

const EMOJI = ['⭐️', '✨', '🎈', '🎊', '💫', '🌟'];
const { width: SCREEN_W } = Dimensions.get('window');

type Piece = {
  emoji: string;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
};

function makePieces(count: number): Piece[] {
  return Array.from({ length: count }).map((_, i) => ({
    emoji: EMOJI[i % EMOJI.length],
    left: Math.random() * Math.min(SCREEN_W, 440),
    top: Math.random() * 640,
    size: 16 + Math.random() * 14,
    duration: 2600 + Math.random() * 1800,
    delay: Math.random() * 1200,
    drift: 10 + Math.random() * 14,
  }));
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

export default function FloatingDecor({ count = 10 }: { count?: number }) {
  const pieces = useRef(makePieces(count)).current;
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
