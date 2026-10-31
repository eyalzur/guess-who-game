import React from 'react';
import Svg, { Circle, Ellipse, Path, Polygon, Rect } from 'react-native-svg';

type PortraitProps = { size: number };

// ---------- drawn characters (no usable real photo/art found) ----------

function Pucho({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#FFE4B5" />
      <Circle cx="100" cy="110" r="70" fill="#F4813F" />
      <Path d="M45 80 Q60 20 100 25 Q140 20 155 80" stroke="#D9601F" strokeWidth="14" fill="none" strokeLinecap="round" />
      <Circle cx="78" cy="105" r="18" fill="#fff" />
      <Circle cx="122" cy="105" r="18" fill="#fff" />
      <Circle cx="78" cy="108" r="8" fill="#2B2118" />
      <Circle cx="122" cy="108" r="8" fill="#2B2118" />
      <Circle cx="100" cy="128" r="10" fill="#B9471F" />
      <Path d="M75 150 Q100 168 125 150" stroke="#7A2E0C" strokeWidth="5" fill="none" strokeLinecap="round" />
    </Svg>
  );
}

function Kofiko({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#DDEBFF" />
      <Ellipse cx="55" cy="95" rx="20" ry="24" fill="#8A5A3C" />
      <Ellipse cx="145" cy="95" rx="20" ry="24" fill="#8A5A3C" />
      <Circle cx="100" cy="105" r="62" fill="#A5703F" />
      <Ellipse cx="100" cy="120" rx="36" ry="28" fill="#E8C49B" />
      <Circle cx="82" cy="108" r="7" fill="#2B2118" />
      <Circle cx="118" cy="108" r="7" fill="#2B2118" />
      <Ellipse cx="100" cy="128" rx="9" ry="6" fill="#5C3A22" />
      <Path d="M85 142 Q100 150 115 142" stroke="#5C3A22" strokeWidth="4" fill="none" strokeLinecap="round" />
    </Svg>
  );
}

function Shmulikipod({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#F3E8D2" />
      <Path d="M55 110 Q50 60 100 55 Q150 60 145 110 Q150 150 100 160 Q50 150 55 110 Z" fill="#8B6A4A" />
      {[...Array(9)].map((_, i) => {
        const x = 55 + i * 11;
        return <Polygon key={i} points={`${x},80 ${x + 7},80 ${x + 3.5},45`} fill="#5C4328" />;
      })}
      <Ellipse cx="100" cy="125" rx="30" ry="24" fill="#E8C49B" />
      <Circle cx="88" cy="118" r="5" fill="#2B2118" />
      <Circle cx="112" cy="118" r="5" fill="#2B2118" />
      <Circle cx="100" cy="132" r="6" fill="#2B2118" />
    </Svg>
  );
}

function MoisheOofnik({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#DCEAD6" />
      <Path d="M50 130 Q45 170 70 180 L130 180 Q155 170 150 130 Z" fill="#6B6B6B" />
      <Path d="M50 130 Q100 115 150 130 L150 140 Q100 125 50 140 Z" fill="#8A8A8A" />
      <Circle cx="100" cy="100" r="58" fill="#6E8B3D" />
      <Path d="M55 70 Q65 20 85 50 Q95 15 100 55 Q110 15 118 50 Q135 20 145 70" stroke="#4E6329" strokeWidth="10" fill="none" strokeLinecap="round" />
      <Ellipse cx="80" cy="100" rx="10" ry="12" fill="#fff" />
      <Ellipse cx="120" cy="100" rx="10" ry="12" fill="#fff" />
      <Circle cx="80" cy="103" r="4" fill="#2B2118" />
      <Circle cx="120" cy="103" r="4" fill="#2B2118" />
      <Path d="M82 125 Q100 115 118 125" stroke="#3A4A20" strokeWidth="5" fill="none" strokeLinecap="round" />
    </Svg>
  );
}

function HananHanagar({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#FDEAD2" />
      <Rect x="65" y="140" width="70" height="36" rx="6" fill="#4A7A9C" />
      <Circle cx="100" cy="108" r="54" fill="#E8B98A" />
      <Path d="M48 95 Q54 55 100 52 Q146 55 152 95 Q140 75 100 72 Q60 75 48 95 Z" fill="#6B4226" />
      <Rect x="55" y="60" width="90" height="18" rx="9" fill="#6B4226" />
      <Ellipse cx="82" cy="112" rx="6" ry="7" fill="#2B2118" />
      <Ellipse cx="118" cy="112" rx="6" ry="7" fill="#2B2118" />
      <Path d="M78 135 Q100 128 122 135" stroke="#5C3A22" strokeWidth="6" fill="none" strokeLinecap="round" />
    </Svg>
  );
}

function Aladdin({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#D6EFFF" />
      <Path d="M52 92 Q58 50 100 48 Q142 50 148 92 Q130 68 100 66 Q70 68 52 92 Z" fill="#241A14" />
      <Path d="M70 155 Q100 170 130 155 L126 180 L74 180 Z" fill="#6D2EB3" />
      <Rect x="86" y="150" width="28" height="18" fill="#fff" />
      <Circle cx="100" cy="112" r="52" fill="#E0AD7F" />
      <Ellipse cx="82" cy="114" rx="6" ry="7" fill="#2B2118" />
      <Ellipse cx="118" cy="114" rx="6" ry="7" fill="#2B2118" />
      <Path d="M86 142 Q100 149 114 142" stroke="#5C3A22" strokeWidth="4" fill="none" strokeLinecap="round" />
    </Svg>
  );
}

function AnnaFrozen({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#BFE3F5" />
      <Path d="M44 85 Q50 30 100 28 Q150 30 156 85 L150 170 L50 170 Z" fill="#A0522D" />
      <Path d="M58 110 Q40 140 52 175 L68 165 Q58 135 70 110 Z" fill="#8B3F1A" />
      <Circle cx="100" cy="112" r="50" fill="#F3CBA0" />
      <Ellipse cx="82" cy="112" rx="6" ry="8" fill="#3E6B52" />
      <Ellipse cx="118" cy="112" rx="6" ry="8" fill="#3E6B52" />
      <Circle cx="70" cy="128" r="5" fill="#D98B8B" opacity="0.7" />
      <Circle cx="130" cy="128" r="5" fill="#D98B8B" opacity="0.7" />
      <Path d="M86 142 Q100 150 114 142" stroke="#C0536B" strokeWidth="4" fill="none" strokeLinecap="round" />
      <Rect x="78" y="168" width="44" height="14" fill="#1F6B4D" />
    </Svg>
  );
}

function Blaze({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#FFE1B8" />
      <Rect x="35" y="95" width="130" height="60" rx="14" fill="#E8352B" />
      <Rect x="55" y="70" width="90" height="45" rx="10" fill="#F2503F" />
      <Polygon points="60,70 75,45 110,45 120,70" fill="#F2503F" />
      <Circle cx="65" cy="160" r="22" fill="#222" />
      <Circle cx="135" cy="160" r="22" fill="#222" />
      <Circle cx="65" cy="160" r="9" fill="#888" />
      <Circle cx="135" cy="160" r="9" fill="#888" />
      <Ellipse cx="82" cy="90" rx="10" ry="12" fill="#fff" />
      <Ellipse cx="118" cy="90" rx="10" ry="12" fill="#fff" />
      <Circle cx="84" cy="92" r="5" fill="#1B2A3A" />
      <Circle cx="116" cy="92" r="5" fill="#1B2A3A" />
      <Path d="M75 55 L85 40 L95 55 Z M105 55 L115 40 L125 55 Z" fill="#FFD23F" />
    </Svg>
  );
}

function PawPatrolPup({
  size,
  helmet,
  fur,
  spots,
}: PortraitProps & { helmet: string; fur: string; spots?: boolean }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#DFF0FF" />
      <Ellipse cx="60" cy="90" rx="18" ry="26" fill={fur} />
      <Ellipse cx="140" cy="90" rx="18" ry="26" fill={fur} />
      <Circle cx="100" cy="115" r="56" fill={fur} />
      {spots && (
        <>
          <Circle cx="78" cy="98" r="7" fill="#2B2118" opacity="0.5" />
          <Circle cx="128" cy="130" r="8" fill="#2B2118" opacity="0.5" />
        </>
      )}
      <Path d="M48 80 Q100 50 152 80 Q150 55 100 48 Q50 55 48 80 Z" fill={helmet} />
      <Rect x="46" y="62" width="108" height="22" rx="11" fill={helmet} />
      <Ellipse cx="100" cy="135" rx="30" ry="22" fill="#fff" />
      <Circle cx="84" cy="118" r="6" fill="#2B2118" />
      <Circle cx="116" cy="118" r="6" fill="#2B2118" />
      <Ellipse cx="100" cy="138" rx="8" ry="6" fill="#2B2118" />
    </Svg>
  );
}

function ChasePawPatrol(p: PortraitProps) {
  return <PawPatrolPup {...p} helmet="#2563EB" fur="#E8C9A0" />;
}
function MarshallPawPatrol(p: PortraitProps) {
  return <PawPatrolPup {...p} helmet="#DC2626" fur="#fff" spots />;
}
function SkyePawPatrol(p: PortraitProps) {
  return <PawPatrolPup {...p} helmet="#EC4899" fur="#F7E6D0" />;
}

function IronMan({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#FDE2C8" />
      <Path d="M48 95 Q48 30 100 25 Q152 30 152 95 Q152 150 100 165 Q48 150 48 95 Z" fill="#C8151F" />
      <Path d="M62 95 Q62 45 100 42 Q138 45 138 95 Q138 135 100 148 Q62 135 62 95 Z" fill="#8A0F17" />
      <Ellipse cx="82" cy="95" rx="14" ry="10" fill="#FFD23F" />
      <Ellipse cx="118" cy="95" rx="14" ry="10" fill="#FFD23F" />
      <Path d="M70 60 Q100 50 130 60 L130 72 Q100 62 70 72 Z" fill="#FFD23F" />
      <Rect x="90" y="125" width="20" height="16" rx="4" fill="#FFD23F" />
    </Svg>
  );
}

function PeppaPig({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#FDE2EC" />
      <Polygon points="55,65 72,35 85,65" fill="#F2879C" />
      <Circle cx="100" cy="112" r="56" fill="#F7A8BC" />
      <Ellipse cx="100" cy="118" rx="28" ry="22" fill="#F2879C" />
      <Ellipse cx="89" cy="118" rx="6" ry="8" fill="#B9465F" />
      <Ellipse cx="111" cy="118" rx="6" ry="8" fill="#B9465F" />
      <Circle cx="78" cy="98" r="7" fill="#2B2118" />
      <Circle cx="118" cy="92" r="7" fill="#2B2118" />
      <Path d="M55 150 Q100 165 145 150 L145 170 L55 170 Z" fill="#E8352B" />
    </Svg>
  );
}

function Piglet({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#FFE8F0" />
      <Circle cx="100" cy="110" r="54" fill="#F7B6CB" />
      <Ellipse cx="60" cy="88" rx="12" ry="16" fill="#F7B6CB" />
      <Ellipse cx="140" cy="88" rx="12" ry="16" fill="#F7B6CB" />
      <Ellipse cx="100" cy="118" rx="18" ry="14" fill="#F291AC" />
      <Ellipse cx="93" cy="118" rx="4" ry="5" fill="#B9465F" />
      <Ellipse cx="107" cy="118" rx="4" ry="5" fill="#B9465F" />
      <Circle cx="82" cy="100" r="5" fill="#2B2118" />
      <Circle cx="118" cy="100" r="5" fill="#2B2118" />
      <Rect x="70" y="155" width="60" height="22" rx="4" fill="#C9A3D4" />
      <Rect x="70" y="155" width="60" height="7" fill="#9C6BB0" />
      <Rect x="70" y="168" width="60" height="7" fill="#9C6BB0" />
    </Svg>
  );
}

function Rapunzel({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#FFF4D6" />
      <Path d="M35 100 Q25 160 45 190 M165 100 Q175 160 155 190" stroke="#E8C14A" strokeWidth="18" fill="none" strokeLinecap="round" />
      <Circle cx="100" cy="112" r="52" fill="#F3CBA0" />
      <Path d="M44 85 Q50 24 100 24 Q150 24 156 85 Q138 55 100 55 Q62 55 44 85 Z" fill="#EFCB52" />
      <Ellipse cx="82" cy="112" rx="6" ry="8" fill="#3E6B9C" />
      <Ellipse cx="118" cy="112" rx="6" ry="8" fill="#3E6B9C" />
      <Path d="M85 142 Q100 150 115 142" stroke="#C0536B" strokeWidth="4" fill="none" strokeLinecap="round" />
      <Rect x="78" y="168" width="44" height="14" fill="#8D4FBF" />
    </Svg>
  );
}

function SpongeBob({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#BEE9FF" />
      <Rect x="40" y="40" width="120" height="120" rx="16" fill="#F2E23B" />
      <Circle cx="65" cy="65" r="5" fill="#D9C62E" />
      <Circle cx="135" cy="70" r="6" fill="#D9C62E" />
      <Circle cx="60" cy="130" r="5" fill="#D9C62E" />
      <Circle cx="140" cy="135" r="5" fill="#D9C62E" />
      <Ellipse cx="78" cy="95" rx="18" ry="22" fill="#fff" />
      <Ellipse cx="124" cy="100" rx="14" ry="18" fill="#fff" />
      <Circle cx="80" cy="98" r="7" fill="#2B2118" />
      <Circle cx="124" cy="102" r="6" fill="#2B2118" />
      <Path d="M70 135 Q100 155 130 130" stroke="#2B2118" strokeWidth="4" fill="none" strokeLinecap="round" />
      <Rect x="78" y="140" width="44" height="10" fill="#fff" />
      <Rect x="82" y="148" width="36" height="8" fill="#C8151F" />
    </Svg>
  );
}

function WinnieThePooh({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#FFF0D0" />
      <Ellipse cx="62" cy="75" rx="18" ry="18" fill="#E8B04A" />
      <Ellipse cx="138" cy="75" rx="18" ry="18" fill="#E8B04A" />
      <Circle cx="100" cy="112" r="58" fill="#E8B04A" />
      <Ellipse cx="100" cy="122" rx="32" ry="26" fill="#F7D89A" />
      <Circle cx="86" cy="108" r="6" fill="#2B2118" />
      <Circle cx="114" cy="108" r="6" fill="#2B2118" />
      <Circle cx="100" cy="124" r="7" fill="#2B2118" />
      <Path d="M85 140 Q100 148 115 140" stroke="#8B5A1A" strokeWidth="4" fill="none" strokeLinecap="round" />
      <Rect x="58" y="150" width="84" height="34" rx="6" fill="#C8151F" />
    </Svg>
  );
}

function Generic({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#E5E7EB" />
      <Circle cx="100" cy="112" r="54" fill="#F3D9B1" />
      <Ellipse cx="82" cy="112" rx="6" ry="8" fill="#2B2118" />
      <Ellipse cx="118" cy="112" rx="6" ry="8" fill="#2B2118" />
      <Path d="M85 142 Q100 150 115 142" stroke="#8B4A3A" strokeWidth="4" fill="none" strokeLinecap="round" />
    </Svg>
  );
}

export const PORTRAITS: Record<string, React.ComponentType<PortraitProps>> = {
  pucho: Pucho,
  kofiko: Kofiko,
  shmulikipod: Shmulikipod,
  'moishe-oofnik': MoisheOofnik,
  'hanan-hanagar': HananHanagar,
  aladdin: Aladdin,
  'anna-frozen': AnnaFrozen,
  blaze: Blaze,
  'chase-paw-patrol': ChasePawPatrol,
  'marshall-paw-patrol': MarshallPawPatrol,
  'skye-paw-patrol': SkyePawPatrol,
  'iron-man': IronMan,
  'peppa-pig': PeppaPig,
  piglet: Piglet,
  rapunzel: Rapunzel,
  spongebob: SpongeBob,
  'winnie-the-pooh': WinnieThePooh,
};

export { Generic as GenericPortrait };
