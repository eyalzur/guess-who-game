import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { FONTS } from '../theme';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type Props = {
  secondsLeft: number;
  totalSeconds: number;
  color: string;
  trackColor?: string;
  size?: number;
};

export default function TimerRing({
  secondsLeft,
  totalSeconds,
  color,
  trackColor = '#EDEAFB',
  size = 176,
}: Props) {
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = useRef(new Animated.Value(secondsLeft / totalSeconds)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: secondsLeft / totalSeconds,
      duration: 240,
      useNativeDriver: false,
    }).start();
  }, [secondsLeft, totalSeconds]);

  const dashoffset = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [circumference, 0],
  });

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
          rotation={-90}
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>
      <View style={styles.center} pointerEvents="none">
        <Text style={[styles.number, { color }]}>{secondsLeft}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center' },
  center: { position: 'absolute', alignItems: 'center', justifyContent: 'center' },
  number: { fontSize: 44, fontFamily: FONTS.display },
});
