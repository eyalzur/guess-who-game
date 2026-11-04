import React from 'react';
import Svg, { Circle, Defs, LinearGradient, Path, Rect, Stop } from 'react-native-svg';

export default function CardBack({ size = 180 }: { size?: number }) {
  return (
    <Svg width={size} height={size * 1.1} viewBox="0 0 200 220">
      <Defs>
        <LinearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#9B5DE5" />
          <Stop offset="1" stopColor="#6D3FD1" />
        </LinearGradient>
      </Defs>
      {/* chunky offset shadow, matching the button style */}
      <Rect x="10" y="18" width="180" height="194" rx="26" fill="#4C2E94" />
      <Rect x="10" y="10" width="180" height="194" rx="26" fill="url(#cardGrad)" />
      <Rect x="24" y="24" width="152" height="166" rx="18" fill="#FFFFFF" opacity="0.12" />

      {/* sparkles */}
      <Path d="M36 44 l4 9 9 4 -9 4 -4 9 -4 -9 -9 -4 9 -4Z" fill="#FFD23F" />
      <Path d="M166 150 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3Z" fill="#FFD23F" />
      <Circle cx="162" cy="48" r="5" fill="#FF8FC7" />
      <Circle cx="40" cy="166" r="4" fill="#5CE1E6" />

      {/* friendly question mark */}
      <Circle cx="100" cy="106" r="54" fill="#FDE68A" />
      <Circle cx="100" cy="106" r="54" fill="none" stroke="#FFFFFF" strokeWidth="4" opacity="0.6" />
      <Path
        d="M82 92 q0 -20 20 -20 q20 0 20 18 q0 13 -11 18 q-9 4 -9 14"
        stroke="#9B5DE5"
        strokeWidth="11"
        fill="none"
        strokeLinecap="round"
      />
      <Circle cx="101" cy="144" r="6" fill="#9B5DE5" />
    </Svg>
  );
}
