export type Character = {
  id: string;
  name: string;
  category: 'singer' | 'politician' | 'il-character' | 'intl-character' | 'cartoon';
};

export const CHARACTERS: Character[] = [
  { id: 'eden-golan', name: 'עדן גולן', category: 'singer' },
  { id: 'noa-kirel', name: 'נועה קירל', category: 'singer' },
  { id: 'omer-adam', name: 'עומר אדם', category: 'singer' },
  { id: 'static', name: 'סטטיק', category: 'singer' },
  { id: 'ben-el', name: 'בן אל תבורי', category: 'singer' },
  { id: 'eyal-golan', name: 'אייל גולן', category: 'singer' },
  { id: 'sarit-hadad', name: 'שרית חדד', category: 'singer' },
  { id: 'eden-ben-zaken', name: 'עדן בן זקן', category: 'singer' },
  { id: 'nasrin-qadri', name: 'נסרין קדרי', category: 'singer' },
  { id: 'ishay-ribo', name: 'ישי ריבו', category: 'singer' },
  { id: 'idan-raichel', name: 'עידן רייכל', category: 'singer' },
  { id: 'aviv-geffen', name: 'אביב גפן', category: 'singer' },
  { id: 'shlomo-artzi', name: 'שלמה ארצי', category: 'singer' },
  { id: 'netta-barzilai', name: 'נטע ברזילי', category: 'singer' },
  { id: 'dana-international', name: 'דנה אינטרנשיונל', category: 'singer' },
  { id: 'harel-skaat', name: 'הראל סקעת', category: 'singer' },
  { id: 'idan-amedi', name: 'עידן עמדי', category: 'singer' },
  { id: 'gali-atari', name: 'גלי עטרי', category: 'singer' },
  { id: 'shlomi-shabat', name: 'שלומי שבת', category: 'singer' },
  { id: 'etti-ankri', name: 'אתי אנקרי', category: 'singer' },
  { id: 'netanyahu', name: 'בנימין נתניהו', category: 'politician' },
  { id: 'herzog', name: 'יצחק הרצוג', category: 'politician' },
  { id: 'ben-gurion', name: 'דוד בן גוריון', category: 'politician' },
  { id: 'golda-meir', name: 'גולדה מאיר', category: 'politician' },
  { id: 'yitzhak-rabin', name: 'יצחק רבין', category: 'politician' },
  { id: 'shimon-peres', name: 'שמעון פרס', category: 'politician' },
  { id: 'menachem-begin', name: 'מנחם בגין', category: 'politician' },
  { id: 'yitzhak-shamir', name: 'יצחק שמיר', category: 'politician' },
  { id: 'ariel-sharon', name: 'אריאל שרון', category: 'politician' },
  { id: 'ehud-barak', name: 'אהוד ברק', category: 'politician' },
  { id: 'ehud-olmert', name: 'אהוד אולמרט', category: 'politician' },
  { id: 'naftali-bennett', name: 'נפתלי בנט', category: 'politician' },
  { id: 'yair-lapid', name: 'יאיר לפיד', category: 'politician' },
  { id: 'benny-gantz', name: 'בני גנץ', category: 'politician' },
  { id: 'ayelet-shaked', name: 'איילת שקד', category: 'politician' },
  { id: 'reuven-rivlin', name: 'ראובן ריבלין', category: 'politician' },
  { id: 'gideon-saar', name: 'גדעון סער', category: 'politician' },
  { id: 'miri-regev', name: 'מירי רגב', category: 'politician' },
  { id: 'moshe-yaalon', name: 'משה יעלון', category: 'politician' },
  { id: 'tzachi-hanegbi', name: 'צחי הנגבי', category: 'politician' },
  { id: 'kofiko', name: 'קופיקו', category: 'il-character' },
  { id: 'moishe-oofnik', name: 'מוישה אופניק', category: 'il-character' },
  { id: 'topol', name: 'חיים טופול', category: 'il-character' },
  { id: 'yehoram-gaon', name: 'יהורם גאון', category: 'il-character' },
  { id: 'lior-raz', name: 'ליאור רז', category: 'il-character' },
  { id: 'michael-aloni', name: 'מייקל אלוני', category: 'il-character' },
  { id: 'avi-kushnir', name: 'אבי קושניר', category: 'il-character' },
  { id: 'shlomo-bar-aba', name: 'שלמה בר אבא', category: 'il-character' },
  { id: 'shaike-levi', name: 'שייקה לוי', category: 'il-character' },
  { id: 'dudu-topaz', name: 'דודו טופז', category: 'il-character' },
  { id: 'tuvia-tzafir', name: 'טוביה צפיר', category: 'il-character' },
  { id: 'yossi-banai', name: 'יוסי בנאי', category: 'il-character' },
  { id: 'arik-einstein', name: 'אריק איינשטיין', category: 'il-character' },
  { id: 'shmulikipod', name: 'שמוליקיפוד', category: 'il-character' },
  { id: 'chaim-yavin', name: 'חיים יבין', category: 'il-character' },
  { id: 'yaakov-ben-sira', name: 'יעקב בן סירא', category: 'il-character' },
  { id: 'asi-cohen', name: 'אסי כהן', category: 'il-character' },
  { id: 'miri-mesika', name: 'מירי מסיקה', category: 'il-character' },
  { id: 'ido-rosenblum', name: 'עידו רוזנבלום', category: 'il-character' },
  { id: 'yehuda-barkan', name: 'יהודה ברקן', category: 'il-character' },
  { id: 'harry-potter', name: 'הארי פוטר', category: 'intl-character' },
  { id: 'hermione', name: 'הרמיוני גריינג\'ר', category: 'intl-character' },
  { id: 'spider-man', name: 'ספיידרמן', category: 'intl-character' },
  { id: 'iron-man', name: 'איירון מן', category: 'intl-character' },
  { id: 'batman', name: 'באטמן', category: 'intl-character' },
  { id: 'superman', name: 'סופרמן', category: 'intl-character' },
  { id: 'wolverine', name: 'וולברין', category: 'intl-character' },
  { id: 'mickey-mouse', name: 'מיקי מאוס', category: 'intl-character' },
  { id: 'shrek', name: 'שרק', category: 'intl-character' },
  { id: 'donkey-shrek', name: 'חמור (שרק)', category: 'intl-character' },
  { id: 'woody', name: 'וודי', category: 'intl-character' },
  { id: 'buzz-lightyear', name: 'באז לייטייר', category: 'intl-character' },
  { id: 'elsa', name: 'אלזה', category: 'intl-character' },
  { id: 'anna-frozen', name: 'אנה', category: 'intl-character' },
  { id: 'simba', name: 'סימבה', category: 'intl-character' },
  { id: 'jack-sparrow', name: 'ג\'ק ספארו', category: 'intl-character' },
  { id: 'darth-vader', name: 'דארת\' ויידר', category: 'intl-character' },
  { id: 'rapunzel', name: 'רפונזל', category: 'intl-character' },
  { id: 'aladdin', name: 'אלאדין', category: 'intl-character' },
  { id: 'moana', name: 'מואנה', category: 'intl-character' },
  { id: 'spongebob', name: 'ספוג\'בוב', category: 'cartoon' },
  { id: 'patrick-star', name: 'פטריק כוכב ים', category: 'cartoon' },
  { id: 'winnie-the-pooh', name: 'פו הדוב', category: 'cartoon' },
  { id: 'piglet', name: 'פיגלט', category: 'cartoon' },
  { id: 'pikachu', name: 'פיקאצ\'ו', category: 'cartoon' },
  { id: 'peppa-pig', name: 'פפה פיג', category: 'cartoon' },
  { id: 'dora', name: 'דורה החוקרת', category: 'cartoon' },
  { id: 'marshall-paw-patrol', name: 'מרשל', category: 'cartoon' },
  { id: 'chase-paw-patrol', name: 'צ\'ייס', category: 'cartoon' },
  { id: 'skye-paw-patrol', name: 'סקיי', category: 'cartoon' },
  { id: 'tom-cat', name: 'טום', category: 'cartoon' },
  { id: 'jerry-mouse', name: 'ג\'רי', category: 'cartoon' },
  { id: 'bugs-bunny', name: 'באגס באני', category: 'cartoon' },
  { id: 'daffy-duck', name: 'דאפי דאק', category: 'cartoon' },
  { id: 'scooby-doo', name: 'סקובי דו', category: 'cartoon' },
  { id: 'ben-10', name: 'בן 10', category: 'cartoon' },
  { id: 'finn-the-human', name: 'פין', category: 'cartoon' },
  { id: 'gumball', name: 'גמבול', category: 'cartoon' },
  { id: 'doraemon', name: 'דורעמון', category: 'cartoon' },
  { id: 'blaze', name: 'בלייז', category: 'cartoon' },
];

// Default categories played. 'singer' and 'politician' are real people, not
// characters from a movie/show/game, so they default off, but stay selectable
// via the category picker.
export const ACTIVE_CATEGORIES: Character['category'][] = ['il-character', 'intl-character', 'cartoon'];

export const ALL_CATEGORIES: Character['category'][] = [
  'il-character',
  'intl-character',
  'cartoon',
  'singer',
  'politician',
];

export const CATEGORY_LABELS: Record<Character['category'], string> = {
  'il-character': 'דמויות ישראליות',
  'intl-character': 'דמויות מסרטים',
  cartoon: 'דמויות מצוירות',
  singer: 'זמרים',
  politician: 'פוליטיקאים',
};

export function charactersInCategories(categories: Character['category'][]): Character[] {
  return CHARACTERS.filter((c) => categories.includes(c.category));
}

export function activeCharacters(): Character[] {
  return charactersInCategories(ACTIVE_CATEGORIES);
}

export function randomCharacter(excludeId?: string, categories: Character['category'][] = ACTIVE_CATEGORIES): Character {
  const pool = charactersInCategories(categories).filter((c) => c.id !== excludeId);
  return pool[Math.floor(Math.random() * pool.length)];
}
