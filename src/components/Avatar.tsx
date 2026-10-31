import React from 'react';
import { Image, View } from 'react-native';
import type { Character } from '../data/characters';
import { GenericPortrait, PORTRAITS } from './portraits';

type Props = {
  character: Character;
  size?: number;
};

const PHOTOS: Record<string, number> = {
  netanyahu: require('../../assets/characters/netanyahu.png'),
  herzog: require('../../assets/characters/herzog.png'),
  'eden-golan': require('../../assets/characters/eden-golan.png'),
  'noa-kirel': require('../../assets/characters/noa-kirel.png'),
  'omer-adam': require('../../assets/characters/omer-adam.png'),
  static: require('../../assets/characters/static.png'),
  'ben-el': require('../../assets/characters/ben-el.png'),
};

export default function Avatar({ character, size = 180 }: Props) {
  const photo = PHOTOS[character.id];

  if (photo) {
    return (
      <View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          overflow: 'hidden',
          backgroundColor: '#FAF5E9',
        }}
      >
        <Image source={photo} style={{ width: size, height: size }} resizeMode="cover" />
      </View>
    );
  }

  const Portrait = PORTRAITS[character.id] ?? GenericPortrait;
  return <Portrait size={size} />;
}
