import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

type Props = { active: boolean };

export default function UrgentFlash({ active }: Props) {
  const opacity = useRef(new Animated.Value(0)).current;
  const loopRef = useRef<Animated.CompositeAnimation | null>(null);

  useEffect(() => {
    if (active) {
      loopRef.current = Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, { toValue: 0.35, duration: 350, useNativeDriver: true }),
          Animated.timing(opacity, { toValue: 0, duration: 350, useNativeDriver: true }),
        ])
      );
      loopRef.current.start();
    } else {
      loopRef.current?.stop();
      opacity.setValue(0);
    }
    return () => loopRef.current?.stop();
  }, [active, opacity]);

  return <Animated.View pointerEvents="none" style={[StyleSheet.absoluteFill, styles.overlay, { opacity }]} />;
}

const styles = StyleSheet.create({
  overlay: { backgroundColor: '#FF1E3C' },
});
