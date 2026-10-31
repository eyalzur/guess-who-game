import React from 'react';
import type { Character } from '../data/characters';
import { GenericPortrait, PORTRAITS } from './portraits';

type Props = {
  character: Character;
  size?: number;
};

export default function Avatar({ character, size = 180 }: Props) {
  const Portrait = PORTRAITS[character.id] ?? GenericPortrait;
  return <Portrait size={size} />;
}
