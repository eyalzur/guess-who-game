import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { BACKGROUND_GRADIENT } from '../theme';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function ScreenBackground({ children, style }: Props) {
  return (
    <LinearGradient
      colors={BACKGROUND_GRADIENT}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.3, y: 1 }}
      style={[styles.base, style]}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});
