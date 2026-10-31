import React from 'react';
import Svg, { Circle, Ellipse, Path, Polygon, Rect } from 'react-native-svg';

type PortraitProps = { size: number };

// ---------- fictional / puppet & animal characters ----------

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

function Chafuzik({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#D6F5E3" />
      <Circle cx="100" cy="112" r="60" fill="#3FB4E8" />
      <Polygon points="85,45 100,15 115,45" fill="#2E91C2" />
      <Circle cx="82" cy="108" r="14" fill="#fff" />
      <Circle cx="118" cy="108" r="14" fill="#fff" />
      <Circle cx="82" cy="110" r="6" fill="#1B2A3A" />
      <Circle cx="118" cy="110" r="6" fill="#1B2A3A" />
      <Path d="M80 140 Q100 158 120 140" stroke="#1B2A3A" strokeWidth="5" fill="none" strokeLinecap="round" />
    </Svg>
  );
}

function Shmulikipod({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#F3E8D2" />
      <Path
        d="M55 110 Q50 60 100 55 Q150 60 145 110 Q150 150 100 160 Q50 150 55 110 Z"
        fill="#8B6A4A"
      />
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

function Buki({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#FFF0D8" />
      <Path d="M50 70 Q35 110 55 135 L68 110 Z" fill="#C8894A" />
      <Path d="M150 70 Q165 110 145 135 L132 110 Z" fill="#C8894A" />
      <Circle cx="100" cy="112" r="58" fill="#E3A866" />
      <Ellipse cx="100" cy="128" rx="34" ry="24" fill="#FBE4C4" />
      <Circle cx="84" cy="108" r="7" fill="#2B2118" />
      <Circle cx="116" cy="108" r="7" fill="#2B2118" />
      <Ellipse cx="100" cy="132" rx="8" ry="6" fill="#4A2E18" />
      <Path d="M86 145 Q100 155 114 145" stroke="#4A2E18" strokeWidth="4" fill="none" strokeLinecap="round" />
    </Svg>
  );
}

function Tuki({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#DFF5E1" />
      <Path d="M100 40 Q150 45 150 100 Q150 150 100 160 Q85 120 95 100 Q85 70 100 40 Z" fill="#2FA84F" />
      <Path d="M100 40 Q60 55 65 95 Q68 130 95 100 Q90 70 100 40 Z" fill="#4BC96E" />
      <Circle cx="112" cy="85" r="9" fill="#fff" />
      <Circle cx="114" cy="85" r="4" fill="#1B2A3A" />
      <Path d="M135 95 L160 100 L135 108 Z" fill="#F2B705" />
      <Path d="M100 155 Q95 175 85 180 M100 155 Q105 175 115 180" stroke="#C9820C" strokeWidth="5" strokeLinecap="round" />
    </Svg>
  );
}

function Klavlav({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#FFE9D6" />
      <Ellipse cx="58" cy="95" rx="16" ry="30" fill="#B5733A" />
      <Ellipse cx="142" cy="95" rx="16" ry="30" fill="#B5733A" />
      <Circle cx="100" cy="112" r="58" fill="#D8975C" />
      <Ellipse cx="100" cy="130" rx="32" ry="22" fill="#F4DCB8" />
      <Circle cx="85" cy="110" r="6" fill="#2B2118" />
      <Circle cx="115" cy="110" r="6" fill="#2B2118" />
      <Ellipse cx="100" cy="128" rx="8" ry="6" fill="#2B2118" />
      <Path d="M86 144 Q100 152 114 144" stroke="#5C3A22" strokeWidth="4" fill="none" strokeLinecap="round" />
    </Svg>
  );
}

function Chatula({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#F0E4FF" />
      <Polygon points="55,75 70,35 90,70" fill="#E8893F" />
      <Polygon points="145,75 130,35 110,70" fill="#E8893F" />
      <Circle cx="100" cy="115" r="58" fill="#F2A35C" />
      <Path d="M100 115 l-70 -10 M100 115 l-70 10 M100 125 l-70 -5 M100 125 l-70 15 M100 115 l70 -10 M100 115 l70 10 M100 125 l70 -5 M100 125 l70 15" stroke="#fff" strokeWidth="2" opacity="0.6" />
      <Ellipse cx="85" cy="110" rx="6" ry="9" fill="#2B2118" />
      <Ellipse cx="115" cy="110" rx="6" ry="9" fill="#2B2118" />
      <Polygon points="94,128 106,128 100,138" fill="#D9586B" />
    </Svg>
  );
}

// ---------- real people (stylized caricature, not photos) ----------

function Netanyahu({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#D6E4F0" />
      <Rect x="55" y="150" width="90" height="40" rx="10" fill="#1F3A5F" />
      <Path d="M90 150 L100 180 L110 150 Z" fill="#B91C2B" />
      <Circle cx="100" cy="110" r="52" fill="#E8C49B" />
      <Path d="M52 95 Q60 55 100 52 Q140 55 148 95 Q130 72 100 70 Q70 72 52 95 Z" fill="#D9D9D9" />
      <Ellipse cx="82" cy="112" rx="6" ry="7" fill="#2B2118" />
      <Ellipse cx="118" cy="112" rx="6" ry="7" fill="#2B2118" />
      <Path d="M86 140 Q100 146 114 140" stroke="#8B4A3A" strokeWidth="4" fill="none" strokeLinecap="round" />
    </Svg>
  );
}

function Herzog({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#E8F0E0" />
      <Rect x="58" y="152" width="84" height="38" rx="10" fill="#2E4A3A" />
      <Path d="M92 152 L100 178 L108 152 Z" fill="#DBA93B" />
      <Circle cx="100" cy="110" r="52" fill="#E8C49B" />
      <Path d="M55 90 Q62 58 100 55 Q138 58 145 90 Q128 75 100 73 Q72 75 55 90 Z" fill="#9C9C9C" />
      <Path
        d="M66 108 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0 M110 108 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0 M90 108 h10"
        stroke="#333"
        strokeWidth="4"
        fill="none"
      />
      <Path d="M86 140 Q100 146 114 140" stroke="#8B4A3A" strokeWidth="4" fill="none" strokeLinecap="round" />
    </Svg>
  );
}

function EdenGolan({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#FCE4EC" />
      <Path d="M40 100 Q35 175 55 190 L68 150 Q50 120 55 90 Z M160 100 Q165 175 145 190 L132 150 Q150 120 145 90 Z" fill="#241A14" />
      <Circle cx="100" cy="112" r="54" fill="#F0C49E" />
      <Path d="M44 85 Q50 25 100 25 Q150 25 156 85 Q136 55 100 55 Q64 55 44 85 Z" fill="#241A14" />
      <Ellipse cx="82" cy="112" rx="6" ry="8" fill="#2B2118" />
      <Ellipse cx="118" cy="112" rx="6" ry="8" fill="#2B2118" />
      <Path d="M85 142 Q100 152 115 142" stroke="#C0536B" strokeWidth="4" fill="none" strokeLinecap="round" />
    </Svg>
  );
}

function NoaKirel({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#FFF3D1" />
      <Path d="M42 95 Q36 165 58 185 L70 145 Q52 115 58 85 Z M158 95 Q164 165 142 185 L130 145 Q148 115 142 85 Z" fill="#E8C14A" />
      <Circle cx="100" cy="112" r="54" fill="#F3CBA0" />
      <Path d="M44 85 Q50 24 100 24 Q150 24 156 85 Q138 58 100 58 Q62 58 44 85 Z" fill="#EFCB52" />
      <Ellipse cx="82" cy="112" rx="6" ry="8" fill="#2B2118" />
      <Ellipse cx="118" cy="112" rx="6" ry="8" fill="#2B2118" />
      <Path d="M85 142 Q100 152 115 142" stroke="#C0536B" strokeWidth="4" fill="none" strokeLinecap="round" />
    </Svg>
  );
}

function OmerAdam({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#DDF4FF" />
      <Circle cx="100" cy="112" r="54" fill="#E8B98A" />
      <Path d="M46 88 Q52 28 100 28 Q148 28 154 88 Q136 60 100 60 Q64 60 46 88 Z" fill="#1C1C1C" />
      <Path d="M80 150 Q100 160 120 150 L118 160 Q100 168 82 160 Z" fill="#3A3A3A" />
      <Ellipse cx="82" cy="115" rx="6" ry="8" fill="#2B2118" />
      <Ellipse cx="118" cy="115" rx="6" ry="8" fill="#2B2118" />
      <Path d="M86 142 Q100 150 114 142" stroke="#8B4A3A" strokeWidth="4" fill="none" strokeLinecap="round" />
    </Svg>
  );
}

function Static({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#FFE8CC" />
      <Circle cx="100" cy="112" r="54" fill="#8D5524" />
      <Circle cx="63" cy="68" r="16" fill="#1C1C1C" />
      <Circle cx="83" cy="52" r="18" fill="#1C1C1C" />
      <Circle cx="108" cy="48" r="18" fill="#1C1C1C" />
      <Circle cx="132" cy="56" r="17" fill="#1C1C1C" />
      <Circle cx="145" cy="78" r="15" fill="#1C1C1C" />
      <Path d="M66 110 a16 16 0 1 0 32 0 a16 16 0 1 0 -32 0 M104 110 a16 16 0 1 0 32 0 a16 16 0 1 0 -32 0 M98 110 h4" stroke="#1C1C1C" strokeWidth="4" fill="none" />
      <Path d="M86 143 Q100 151 114 143" stroke="#4A2E18" strokeWidth="4" fill="none" strokeLinecap="round" />
    </Svg>
  );
}

function BenEl({ size }: PortraitProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <Circle cx="100" cy="100" r="100" fill="#E3DDFF" />
      <Circle cx="100" cy="112" r="54" fill="#E0AD7F" />
      <Path d="M48 90 Q54 30 100 30 Q146 30 152 90 Q134 62 100 62 Q66 62 48 90 Z" fill="#241A14" />
      <Rect x="78" y="140" width="44" height="12" rx="6" fill="#4A2E18" opacity="0.7" />
      <Ellipse cx="82" cy="113" rx="6" ry="8" fill="#2B2118" />
      <Ellipse cx="118" cy="113" rx="6" ry="8" fill="#2B2118" />
      <Path d="M86 142 Q100 149 114 142" stroke="#5C3A22" strokeWidth="4" fill="none" strokeLinecap="round" />
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
  chafuzik: Chafuzik,
  shmulikipod: Shmulikipod,
  buki: Buki,
  tuki: Tuki,
  klavlav: Klavlav,
  chatula: Chatula,
  netanyahu: Netanyahu,
  herzog: Herzog,
  'eden-golan': EdenGolan,
  'noa-kirel': NoaKirel,
  'omer-adam': OmerAdam,
  static: Static,
  'ben-el': BenEl,
};

export { Generic as GenericPortrait };
