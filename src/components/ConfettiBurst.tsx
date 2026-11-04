import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Easing, StyleSheet, Text, View } from 'react-native';
import { RAINBOW } from '../theme';

const EMOJI = ['🎉', '⭐️', '🎊', '✨'];
const COUNT = 50;
const { width: SCREEN_W } = Dimensions.get('window');

type Piece = {
  x: number;
  delay: number;
  duration: number;
  rotateStart: number;
  rotateEnd: number;
  size: number;
  color: string;
  drift: number;
  emoji?: string;
};

function makePieces(): Piece[] {
  return Array.from({ length: COUNT }).map((_, i) => ({
    x: Math.random() * Math.min(SCREEN_W, 440),
    delay: Math.random() * 900,
    duration: 1800 + Math.random() * 1200,
    rotateStart: Math.random() * 360,
    rotateEnd: Math.random() * 720 - 360,
    size: 8 + Math.random() * 9,
    color: RAINBOW[Math.floor(Math.random() * RAINBOW.length)],
    drift: Math.random() * 90 - 45,
    emoji: i % 6 === 0 ? EMOJI[Math.floor(Math.random() * EMOJI.length)] : undefined,
  }));
}

function ConfettiPiece({ piece }: { piece: Piece }) {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: piece.duration,
      delay: piece.delay,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, []);

  const translateY = progress.interpolate({ inputRange: [0, 1], outputRange: [-30, 620] });
  const translateX = progress.interpolate({ inputRange: [0, 1], outputRange: [0, piece.drift] });
  const rotate = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [`${piece.rotateStart}deg`, `${piece.rotateStart + piece.rotateEnd}deg`],
  });
  const opacity = progress.interpolate({ inputRange: [0, 0.85, 1], outputRange: [1, 1, 0] });

  if (piece.emoji) {
    return (
      <Animated.Text
        style={{
          position: 'absolute',
          left: piece.x,
          top: 0,
          fontSize: piece.size * 1.8,
          opacity,
          transform: [{ translateY }, { translateX }, { rotate }],
        }}
      >
        {piece.emoji}
      </Animated.Text>
    );
  }

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: piece.x,
        top: 0,
        width: piece.size,
        height: piece.size * 0.4,
        backgroundColor: piece.color,
        borderRadius: 2,
        opacity,
        transform: [{ translateY }, { translateX }, { rotate }],
      }}
    />
  );
}

export default function ConfettiBurst() {
  const pieces = useRef(makePieces()).current;
  return (
    <View pointerEvents="none" style={styles.container}>
      {pieces.map((p, i) => (
        <ConfettiPiece key={i} piece={p} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { ...StyleSheet.absoluteFill, overflow: 'hidden' },
});
