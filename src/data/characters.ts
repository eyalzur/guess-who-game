export type Character = {
  id: string;
  name: string;
  category: 'fictional' | 'real';
};

export const CHARACTERS: Character[] = [
  // fictional — Israeli kids' show / book characters
  { id: 'pucho', name: "פוצ'ו", category: 'fictional' },
  { id: 'kofiko', name: 'קופיקו', category: 'fictional' },
  { id: 'chafuzik', name: 'חפוזיק', category: 'fictional' },
  { id: 'shmulikipod', name: 'שמוליקיפוד', category: 'fictional' },
  { id: 'buki', name: 'בוקי', category: 'fictional' },
  { id: 'tuki', name: 'תוכי', category: 'fictional' },
  { id: 'klavlav', name: 'כלבלב', category: 'fictional' },
  { id: 'chatula', name: 'חתולה', category: 'fictional' },

  // real — recognizable Israeli public figures
  { id: 'netanyahu', name: 'בנימין נתניהו', category: 'real' },
  { id: 'herzog', name: 'יצחק הרצוג', category: 'real' },
  { id: 'eden-golan', name: 'עדן גולן', category: 'real' },
  { id: 'noa-kirel', name: 'נועה קירל', category: 'real' },
  { id: 'omer-adam', name: 'עומר אדם', category: 'real' },
  { id: 'static', name: 'סטטיק', category: 'real' },
  { id: 'ben-el', name: 'בן אל תבורי', category: 'real' },
];

export function randomCharacter(excludeId?: string): Character {
  const pool = excludeId ? CHARACTERS.filter((c) => c.id !== excludeId) : CHARACTERS;
  return pool[Math.floor(Math.random() * pool.length)];
}
