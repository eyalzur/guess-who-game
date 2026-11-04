import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

// gentle continuous float + tilt, used for the mystery card while guessing
export default function Bob({ children }: { children: React.ReactNode }) {
  const t = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(t, { toValue: 1, duration: 1400, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
        Animated.timing(t, { toValue: 0, duration: 1400, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, []);

  const translateY = t.interpolate({ inputRange: [0, 1], outputRange: [0, -10] });
  const rotate = t.interpolate({ inputRange: [0, 1], outputRange: ['-3deg', '3deg'] });

  return <Animated.View style={{ transform: [{ translateY }, { rotate }] }}>{children}</Animated.View>;
}
