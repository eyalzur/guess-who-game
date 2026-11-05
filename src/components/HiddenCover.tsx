import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../theme';

const ASPECT = 1.25; // matches Avatar's frame ratio so hide/reveal doesn't jump

export default function HiddenCover({ size = 180 }: { size?: number }) {
  const width = size;
  const height = size * ASPECT;
  return (
    <View style={[styles.frame, { width: width + 20, height: height + 20 }]}>
      <View style={[styles.inner, { width, height }]}>
        <Text style={styles.mark}>🙈</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    borderRadius: 28,
    backgroundColor: COLORS.purple,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#5B3DA6',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.22,
    shadowRadius: 14,
    elevation: 8,
  },
  inner: {
    borderRadius: 18,
    backgroundColor: COLORS.purpleDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mark: { fontSize: 64 },
});
