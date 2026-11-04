import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, RADIUS } from '../theme';

type Props = {
  label: string;
  onPress: () => void;
  color?: string;
  shadowColor?: string;
  textColor?: string;
  disabled?: boolean;
  size?: 'md' | 'lg';
  pulse?: boolean;
};

const PRESS_DEPTH = 6;

// darken a #rrggbb color for the chunky 3D "shelf" under the button
function darken(hex: string, amount = 0.28): string {
  const n = hex.replace('#', '');
  const r = Math.max(0, Math.round(parseInt(n.slice(0, 2), 16) * (1 - amount)));
  const g = Math.max(0, Math.round(parseInt(n.slice(2, 4), 16) * (1 - amount)));
  const b = Math.max(0, Math.round(parseInt(n.slice(4, 6), 16) * (1 - amount)));
  return `#${[r, g, b].map((c) => c.toString(16).padStart(2, '0')).join('')}`;
}

export default function BigButton({
  label,
  onPress,
  color = COLORS.purple,
  shadowColor,
  textColor = COLORS.white,
  disabled = false,
  size = 'lg',
  pulse = false,
}: Props) {
  const translateY = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const resolvedShadow = shadowColor ?? darken(color);

  const animateTo = (toValue: number) => {
    Animated.timing(translateY, { toValue, duration: 90, useNativeDriver: true }).start();
  };

  useEffect(() => {
    if (!pulse || disabled) {
      scale.setValue(1);
      return;
    }
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.045,
          duration: 620,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 620,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [pulse, disabled]);

  const sizeStyle = size === 'lg' ? styles.lg : styles.md;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      onPressIn={() => !disabled && animateTo(PRESS_DEPTH)}
      onPressOut={() => !disabled && animateTo(0)}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled }}
      style={styles.wrapper}
    >
      <View
        style={[
          styles.shadow,
          sizeStyle,
          { backgroundColor: disabled ? '#C9CCDB' : resolvedShadow },
        ]}
      />
      <Animated.View
        style={[
          styles.button,
          sizeStyle,
          {
            backgroundColor: disabled ? COLORS.gray : color,
            opacity: disabled ? 0.75 : 1,
            transform: [{ translateY }, { scale }],
          },
        ]}
      >
        <Text style={[styles.label, size === 'md' && styles.labelMd, { color: textColor }]}>
          {label}
        </Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginVertical: 8 },
  shadow: {
    position: 'absolute',
    top: PRESS_DEPTH,
    left: 0,
    right: 0,
    borderRadius: RADIUS.lg,
  },
  button: {
    borderRadius: RADIUS.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lg: { minWidth: 230, paddingVertical: 18, paddingHorizontal: 32 },
  md: { minWidth: 160, paddingVertical: 12, paddingHorizontal: 20 },
  label: {
    fontSize: 22,
    fontFamily: FONTS.displayBold,
    textAlign: 'center',
  },
  labelMd: { fontSize: 16 },
});
