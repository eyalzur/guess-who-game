import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

type Props = {
  children: React.ReactNode;
  delay?: number;
  style?: any;
};

// pops an element in with a playful overshoot spring, used for titles,
// avatars, and other "look at me" moments across the game
export default function BounceIn({ children, delay = 0, style }: Props) {
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    scale.setValue(0);
    Animated.spring(scale, {
      toValue: 1,
      delay,
      friction: 5,
      tension: 140,
      useNativeDriver: true,
    }).start();
  }, [delay]);

  return <Animated.View style={[style, { transform: [{ scale }] }]}>{children}</Animated.View>;
}
