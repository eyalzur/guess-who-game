import React from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

export default function CardBack({ size = 180 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Rect x="4" y="4" width="192" height="192" rx="24" fill="#6D28D9" />
      <Rect x="14" y="14" width="172" height="172" rx="18" fill="#7C3AED" />
      <Circle cx="100" cy="100" r="55" fill="#FDE68A" />
      <Path
        d="M85 85 q0 -18 18 -18 q18 0 18 16 q0 12 -10 16 q-8 3 -8 13"
        stroke="#7C3AED"
        strokeWidth="9"
        fill="none"
        strokeLinecap="round"
      />
      <Circle cx="100" cy="135" r="5" fill="#7C3AED" />
    </Svg>
  );
}
