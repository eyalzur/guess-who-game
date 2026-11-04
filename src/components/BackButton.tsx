import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text } from 'react-native';
import { COLORS } from '../theme';

type Props = {
  onPress: () => void;
  label?: string;
};

const SIZE = 50;
const DEPTH = 5;

export default function BackButton({ onPress, label = 'חזרה לתפריט' }: Props) {
  const translateY = useRef(new Animated.Value(0)).current;

  const animateTo = (toValue: number) => {
    Animated.timing(translateY, { toValue, duration: 90, useNativeDriver: true }).start();
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => animateTo(DEPTH)}
      onPressOut={() => animateTo(0)}
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={10}
      style={styles.wrapper}
    >
      <Animated.View style={[styles.shadow]} />
      <Animated.View style={[styles.button, { transform: [{ translateY }] }]}>
        <Text style={styles.icon}>🏠</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 14,
    right: 14,
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
