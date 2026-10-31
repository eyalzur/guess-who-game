export type Character = {
  id: string;
  name: string;
  skin: string;
  hair: string;
  hairStyle: 'short' | 'long' | 'curly' | 'bald' | 'spiky';
  bg: string;
  accessory?: 'glasses' | 'bow' | 'cap';
};

const skins = ['#F7D7B5', '#E8B98A', '#C68863', '#8D5524', '#FFE0C2'];
const hairs = ['#2B2118', '#6B4226', '#D4A017', '#8B2E2E', '#1C1C1C', '#B5651D'];
const bgs = ['#FDE68A', '#A7F3D0', '#BFDBFE', '#FBCFE8', '#FECACA', '#DDD6FE', '#FFEDD5', '#C7F9CC'];
const styles: Character['hairStyle'][] = ['short', 'long', 'curly', 'bald', 'spiky'];
const accessories: Array<Character['accessory']> = [undefined, 'glasses', 'bow', 'cap'];

const names = [
  'דני', 'נועה', 'איתי', 'מאיה', 'יוסי', 'שירה', 'עומר', 'תמר',
  'אלון', 'רותם', 'גיל', 'נויה', 'ליאור', 'הדר', 'אסף', 'קרן',
  'יובל', 'שני', 'עידו', 'אביגיל',
];

function pick<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length];
}

export const CHARACTERS: Character[] = names.map((name, i) => ({
  id: `char-${i}`,
  name,
  skin: pick(skins, i * 3 + 1),
  hair: pick(hairs, i * 5 + 2),
  hairStyle: pick(styles, i * 7 + 3),
  bg: pick(bgs, i * 2 + 1),
  accessory: pick(accessories, i * 11 + 4),
}));

export function randomCharacter(excludeId?: string): Character {
  const pool = excludeId ? CHARACTERS.filter((c) => c.id !== excludeId) : CHARACTERS;
  return pool[Math.floor(Math.random() * pool.length)];
}
