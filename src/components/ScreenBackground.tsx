import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import FloatingDecor from './FloatingDecor';
import { BACKGROUND_GRADIENT } from '../theme';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  colors?: readonly string[];
  decor?: boolean;
  decorBands?: Array<[number, number]>;
};

export default function ScreenBackground({
  children,
  style,
  colors = BACKGROUND_GRADIENT,
  decor = true,
  decorBands,
}: Props) {
  return (
    <LinearGradient
      colors={colors as unknown as [string, string, ...string[]]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.3, y: 1 }}
      style={[styles.base, style]}
    >
      {decor && <FloatingDecor verticalBands={decorBands} />}
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
