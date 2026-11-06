import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet, Text, View } from 'react-native';
import ScreenBackground from './ScreenBackground';
import { COLORS, FONTS, GRADIENT_MENU } from '../theme';

function LoadingDot({ delay }: { delay: number }) {
  const t = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(t, {
          toValue: 1,
          duration: 380,
          delay,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(t, { toValue: 0, duration: 380, easing: Easing.in(Easing.quad), useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [delay]);

  const translateY = t.interpolate({ inputRange: [0, 1], outputRange: [0, -14] });
  return <Animated.View style={[styles.dot, { transform: [{ translateY }] }]} />;
}

export default function SplashOverlay() {
  const scale = useRef(new Animated.Value(0)).current;
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scale, { toValue: 1, friction: 5, tension: 120, useNativeDriver: true }).start(() => {
      const loop = Animated.loop(
        Animated.sequence([
          Animated.timing(pulse, {
            toValue: 1.08,
            duration: 520,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
          Animated.timing(pulse, {
            toValue: 1,
            duration: 520,
            easing: Easing.inOut(Easing.sin),
            useNativeDriver: true,
          }),
        ])
      );
      loop.start();
    });
  }, []);

  return (
    <ScreenBackground colors={GRADIENT_MENU}>
      <Animated.View style={{ transform: [{ scale: Animated.multiply(scale, pulse) }] }}>
        <Image source={require('../../assets/icon.png')} style={styles.icon} resizeMode="contain" />
      </Animated.View>
      <Text style={styles.title}>מי זה?</Text>
      <View style={styles.dotsRow}>
        <LoadingDot delay={0} />
        <LoadingDot delay={120} />
        <LoadingDot delay={240} />
      </View>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 160,
    height: 160,
    borderRadius: 36,
    shadowColor: '#5B3DA6',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 18,
    elevation: 10,
  },
  title: {
    fontSize: 38,
    fontFamily: FONTS.display,
    color: COLORS.ink,
    marginTop: 20,
    marginBottom: 28,
    textAlign: 'center',
  },
  dotsRow: { flexDirection: 'row', gap: 12 },
  dot: { width: 14, height: 14, borderRadius: 7, backgroundColor: COLORS.purple },
});
