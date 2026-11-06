import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text } from 'react-native';
import { COLORS } from '../theme';

type Props = {
  onPeekStart: () => void;
  onPeekEnd: () => void;
};

const SIZE = 50;
const DEPTH = 5;

// press-and-hold eye button: shows the photo while held, hides again on
// release, without touching the hide/reveal/next tap cycle on the card
export default function PeekButton({ onPeekStart, onPeekEnd }: Props) {
  const translateY = useRef(new Animated.Value(0)).current;

  const animateTo = (toValue: number) => {
    Animated.timing(translateY, { toValue, duration: 90, useNativeDriver: true }).start();
  };

  return (
    <Pressable
      onPressIn={() => {
        animateTo(DEPTH);
        onPeekStart();
      }}
      onPressOut={() => {
        animateTo(0);
        onPeekEnd();
      }}
      accessibilityRole="button"
      accessibilityLabel="הצצה בתמונה"
      hitSlop={10}
      style={styles.wrapper}
    >
      <Animated.View style={styles.shadow} />
      <Animated.View style={[styles.button, { transform: [{ translateY }] }]}>
        <Text style={styles.icon}>👁️</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 14,
    left: 14,
    width: SIZE,
    height: SIZE + DEPTH,
    zIndex: 10,
  },
  shadow: {
    position: 'absolute',
    top: DEPTH,
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: COLORS.purpleDark,
  },
  button: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.purple,
  },
  icon: { fontSize: 22 },
});
