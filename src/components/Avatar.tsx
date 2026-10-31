import React from 'react';
import Svg, { Circle, Ellipse, Path, Rect } from 'react-native-svg';
import type { Character } from '../data/characters';

type Props = {
  character: Character;
  size?: number;
};

export default function Avatar({ character, size = 180 }: Props) {
  const { skin, hair, hairStyle, bg, accessory } = character;

  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill={bg} />

      {hairStyle === 'long' && (
        <Path d="M45 95 Q40 170 55 185 L65 150 Q50 120 55 90 Z M155 95 Q160 170 145 185 L135 150 Q150 120 145 90 Z" fill={hair} />
      )}

      <Circle cx="100" cy="110" r="55" fill={skin} />

      {hairStyle === 'bald' ? null : hairStyle === 'curly' ? (
        <>
          <Circle cx="65" cy="65" r="16" fill={hair} />
          <Circle cx="85" cy="50" r="18" fill={hair} />
          <Circle cx="110" cy="48" r="18" fill={hair} />
          <Circle cx="132" cy="58" r="16" fill={hair} />
          <Circle cx="142" cy="78" r="14" fill={hair} />
        </>
      ) : hairStyle === 'spiky' ? (
        <Path d="M50 70 L58 35 L70 65 L80 30 L92 62 L100 28 L108 62 L120 30 L130 65 L142 35 L150 70 Z" fill={hair} />
      ) : (
        <Path d="M45 75 Q50 20 100 20 Q150 20 155 75 Q140 55 100 55 Q60 55 45 75 Z" fill={hair} />
      )}

      <Ellipse cx="78" cy="112" rx="7" ry="9" fill="#2B2118" />
      <Ellipse cx="122" cy="112" rx="7" ry="9" fill="#2B2118" />

      <Path d="M80 145 Q100 160 120 145" stroke="#8B4A3A" strokeWidth="4" fill="none" strokeLinecap="round" />

      <Ellipse cx="60" cy="125" rx="8" ry="6" fill="#F4A89C" opacity="0.6" />
      <Ellipse cx="140" cy="125" rx="8" ry="6" fill="#F4A89C" opacity="0.6" />

      {accessory === 'glasses' && (
        <Path
          d="M60 112 a14 14 0 1 0 28 0 a14 14 0 1 0 -28 0 M112 112 a14 14 0 1 0 28 0 a14 14 0 1 0 -28 0 M88 112 h12"
          stroke="#333"
          strokeWidth="4"
          fill="none"
        />
      )}
      {accessory === 'bow' && (
        <Path d="M85 60 L100 70 L115 60 L112 48 L100 55 L88 48 Z" fill="#E11D48" />
      )}
      {accessory === 'cap' && (
        <>
          <Path d="M45 65 Q50 18 100 18 Q150 18 155 65 Q140 48 100 48 Q60 48 45 65 Z" fill={hair} />
          <Rect x="95" y="15" width="40" height="14" rx="4" fill={hair} />
        </>
      )}
    </Svg>
  );
}
