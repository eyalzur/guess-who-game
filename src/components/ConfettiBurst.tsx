import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Easing, StyleSheet, View } from 'react-native';
import { COLORS } from '../theme';

const PIECE_COLORS = [COLORS.pink, COLORS.yellow, COLORS.blue, COLORS.green, COLORS.purple, COLORS.orange];
const COUNT = 28;
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
};

function makePieces(): Piece[] {
  return Array.from({ length: COUNT }).map(() => ({
    x: Math.random() * Math.min(SCREEN_W, 420),
    delay: Math.random() * 250,
    duration: 1600 + Math.random() * 900,
    rotateStart: Math.random() * 360,
    rotateEnd: Math.random() * 720 - 360,
    size: 7 + Math.random() * 7,
    color: PIECE_COLORS[Math.floor(Math.random() * PIECE_COLORS.length)],
    drift: Math.random() * 60 - 30,
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

  const translateY = progress.interpolate({ inputRange: [0, 1], outputRange: [-20, 520] });
  const translateX = progress.interpolate({ inputRange: [0, 1], outputRange: [0, piece.drift] });
  const rotate = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [`${piece.rotateStart}deg`, `${piece.rotateStart + piece.rotateEnd}deg`],
  });
  const opacity = progress.interpolate({ inputRange: [0, 0.85, 1], outputRange: [1, 1, 0] });

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
