export type Character = {
  id: string;
  name: string;
  category: 'singer' | 'politician' | 'il-character' | 'intl-character' | 'cartoon';
  gender: 'm' | 'f'; // for Hebrew grammatical agreement ("זה היה" vs "זו הייתה")
};

export const CHARACTERS: Character[] = [
  { id: 'eden-golan', name: 'עדן גולן', category: 'singer', gender: 'f' },
  { id: 'noa-kirel', name: 'נועה קירל', category: 'singer', gender: 'f' },
  { id: 'omer-adam', name: 'עומר אדם', category: 'singer', gender: 'm' },
  { id: 'static', name: 'סטטיק', category: 'singer', gender: 'm' },
  { id: 'ben-el', name: 'בן אל תבורי', category: 'singer', gender: 'm' },
  { id: 'eyal-golan', name: 'אייל גולן', category: 'singer', gender: 'm' },
  { id: 'sarit-hadad', name: 'שרית חדד', category: 'singer', gender: 'f' },
  { id: 'eden-ben-zaken', name: 'עדן בן זקן', category: 'singer', gender: 'f' },
  { id: 'nasrin-qadri', name: 'נסרין קדרי', category: 'singer', gender: 'f' },
  { id: 'ishay-ribo', name: 'ישי ריבו', category: 'singer', gender: 'm' },
  { id: 'idan-raichel', name: 'עידן רייכל', category: 'singer', gender: 'm' },
  { id: 'aviv-geffen', name: 'אביב גפן', category: 'singer', gender: 'm' },
  { id: 'shlomo-artzi', name: 'שלמה ארצי', category: 'singer', gender: 'm' },
  { id: 'netta-barzilai', name: 'נטע ברזילי', category: 'singer', gender: 'f' },
  { id: 'dana-international', name: 'דנה אינטרנשיונל', category: 'singer', gender: 'f' },
  { id: 'harel-skaat', name: 'הראל סקעת', category: 'singer', gender: 'm' },
  { id: 'idan-amedi', name: 'עידן עמדי', category: 'singer', gender: 'm' },
  { id: 'gali-atari', name: 'גלי עטרי', category: 'singer', gender: 'f' },
  { id: 'shlomi-shabat', name: 'שלומי שבת', category: 'singer', gender: 'm' },
  { id: 'etti-ankri', name: 'אתי אנקרי', category: 'singer', gender: 'f' },
  { id: 'netanyahu', name: 'בנימין נתניהו', category: 'politician', gender: 'm' },
  { id: 'herzog', name: 'יצחק הרצוג', category: 'politician', gender: 'm' },
  { id: 'ben-gurion', name: 'דוד בן גוריון', category: 'politician', gender: 'm' },
  { id: 'golda-meir', name: 'גולדה מאיר', category: 'politician', gender: 'f' },
  { id: 'yitzhak-rabin', name: 'יצחק רבין', category: 'politician', gender: 'm' },
  { id: 'shimon-peres', name: 'שמעון פרס', category: 'politician', gender: 'm' },
  { id: 'menachem-begin', name: 'מנחם בגין', category: 'politician', gender: 'm' },
  { id: 'yitzhak-shamir', name: 'יצחק שמיר', category: 'politician', gender: 'm' },
  { id: 'ariel-sharon', name: 'אריאל שרון', category: 'politician', gender: 'm' },
  { id: 'ehud-barak', name: 'אהוד ברק', category: 'politician', gender: 'm' },
  { id: 'ehud-olmert', name: 'אהוד אולמרט', category: 'politician', gender: 'm' },
  { id: 'naftali-bennett', name: 'נפתלי בנט', category: 'politician', gender: 'm' },
  { id: 'yair-lapid', name: 'יאיר לפיד', category: 'politician', gender: 'm' },
  { id: 'benny-gantz', name: 'בני גנץ', category: 'politician', gender: 'm' },
  { id: 'ayelet-shaked', name: 'איילת שקד', category: 'politician', gender: 'f' },
  { id: 'reuven-rivlin', name: 'ראובן ריבלין', category: 'politician', gender: 'm' },
  { id: 'gideon-saar', name: 'גדעון סער', category: 'politician', gender: 'm' },
  { id: 'miri-regev', name: 'מירי רגב', category: 'politician', gender: 'f' },
  { id: 'moshe-yaalon', name: 'משה יעלון', category: 'politician', gender: 'm' },
  { id: 'tzachi-hanegbi', name: 'צחי הנגבי', category: 'politician', gender: 'm' },
  { id: 'kofiko', name: 'קופיקו', category: 'il-character', gender: 'm' },
  { id: 'moishe-oofnik', name: 'מוישה אופניק', category: 'il-character', gender: 'm' },
  { id: 'topol', name: 'חיים טופול', category: 'il-character', gender: 'm' },
  { id: 'yehoram-gaon', name: 'יהורם גאון', category: 'il-character', gender: 'm' },
  { id: 'lior-raz', name: 'ליאור רז', category: 'il-character', gender: 'm' },
  { id: 'michael-aloni', name: 'מייקל אלוני', category: 'il-character', gender: 'm' },
  { id: 'avi-kushnir', name: 'אבי קושניר', category: 'il-character', gender: 'm' },
  { id: 'shlomo-bar-aba', name: 'שלמה בר אבא', category: 'il-character', gender: 'm' },
  { id: 'shaike-levi', name: 'שייקה לוי', category: 'il-character', gender: 'm' },
  { id: 'dudu-topaz', name: 'דודו טופז', category: 'il-character', gender: 'm' },
  { id: 'tuvia-tzafir', name: 'טוביה צפיר', category: 'il-character', gender: 'm' },
  { id: 'yossi-banai', name: 'יוסי בנאי', category: 'il-character', gender: 'm' },
  { id: 'arik-einstein', name: 'אריק איינשטיין', category: 'il-character', gender: 'm' },
  { id: 'shmulikipod', name: 'שמוליקיפוד', category: 'il-character', gender: 'm' },
  { id: 'chaim-yavin', name: 'חיים יבין', category: 'il-character', gender: 'm' },
  { id: 'yaakov-ben-sira', name: 'יעקב בן סירא', category: 'il-character', gender: 'm' },
  { id: 'asi-cohen', name: 'אסי כהן', category: 'il-character', gender: 'm' },
  { id: 'miri-mesika', name: 'מירי מסיקה', category: 'il-character', gender: 'f' },
  { id: 'ido-rosenblum', name: 'עידו רוזנבלום', category: 'il-character', gender: 'm' },
  { id: 'yehuda-barkan', name: 'יהודה ברקן', category: 'il-character', gender: 'm' },
  { id: 'harry-potter', name: 'הארי פוטר', category: 'intl-character', gender: 'm' },
  { id: 'hermione', name: 'הרמיוני גריינג\'ר', category: 'intl-character', gender: 'f' },
  { id: 'spider-man', name: 'ספיידרמן', category: 'intl-character', gender: 'm' },
  { id: 'iron-man', name: 'איירון מן', category: 'intl-character', gender: 'm' },
  { id: 'batman', name: 'באטמן', category: 'intl-character', gender: 'm' },
  { id: 'superman', name: 'סופרמן', category: 'intl-character', gender: 'm' },
  { id: 'wolverine', name: 'וולברין', category: 'intl-character', gender: 'm' },
  { id: 'mickey-mouse', name: 'מיקי מאוס', category: 'intl-character', gender: 'm' },
  { id: 'shrek', name: 'שרק', category: 'intl-character', gender: 'm' },
  { id: 'donkey-shrek', name: 'חמור (שרק)', category: 'intl-character', gender: 'm' },
  { id: 'woody', name: 'וודי', category: 'intl-character', gender: 'm' },
  { id: 'buzz-lightyear', name: 'באז לייטייר', category: 'intl-character', gender: 'm' },
  { id: 'elsa', name: 'אלזה', category: 'intl-character', gender: 'f' },
  { id: 'anna-frozen', name: 'אנה', category: 'intl-character', gender: 'f' },
  { id: 'simba', name: 'סימבה', category: 'intl-character', gender: 'm' },
  { id: 'jack-sparrow', name: 'ג\'ק ספארו', category: 'intl-character', gender: 'm' },
  { id: 'darth-vader', name: 'דארת\' ויידר', category: 'intl-character', gender: 'm' },
  { id: 'rapunzel', name: 'רפונזל', category: 'intl-character', gender: 'f' },
  { id: 'aladdin', name: 'אלאדין', category: 'intl-character', gender: 'm' },
  { id: 'moana', name: 'מואנה', category: 'intl-character', gender: 'f' },
  { id: 'spongebob', name: 'ספוג\'בוב', category: 'cartoon', gender: 'm' },
  { id: 'patrick-star', name: 'פטריק כוכב ים', category: 'cartoon', gender: 'm' },
  { id: 'winnie-the-pooh', name: 'פו הדוב', category: 'cartoon', gender: 'm' },
  { id: 'piglet', name: 'פיגלט', category: 'cartoon', gender: 'm' },
  { id: 'pikachu', name: 'פיקאצ\'ו', category: 'cartoon', gender: 'm' },
  { id: 'peppa-pig', name: 'פפה פיג', category: 'cartoon', gender: 'f' },
  { id: 'dora', name: 'דורה החוקרת', category: 'cartoon', gender: 'f' },
  { id: 'marshall-paw-patrol', name: 'מרשל', category: 'cartoon', gender: 'm' },
  { id: 'chase-paw-patrol', name: 'צ\'ייס', category: 'cartoon', gender: 'm' },
  { id: 'skye-paw-patrol', name: 'סקיי', category: 'cartoon', gender: 'f' },
  { id: 'tom-cat', name: 'טום', category: 'cartoon', gender: 'm' },
  { id: 'jerry-mouse', name: 'ג\'רי', category: 'cartoon', gender: 'm' },
  { id: 'bugs-bunny', name: 'באגס באני', category: 'cartoon', gender: 'm' },
  { id: 'daffy-duck', name: 'דאפי דאק', category: 'cartoon', gender: 'm' },
  { id: 'scooby-doo', name: 'סקובי דו', category: 'cartoon', gender: 'm' },
  { id: 'ben-10', name: 'בן 10', category: 'cartoon', gender: 'm' },
  { id: 'finn-the-human', name: 'פין', category: 'cartoon', gender: 'm' },
  { id: 'gumball', name: 'גמבול', category: 'cartoon', gender: 'm' },
  { id: 'doraemon', name: 'דורעמון', category: 'cartoon', gender: 'm' },
  { id: 'blaze', name: 'בלייז', category: 'cartoon', gender: 'm' },
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
  const fullPool = charactersInCategories(categories);
  const pool = fullPool.filter((c) => c.id !== excludeId);
  // if excluding the current character would empty the pool (e.g. a single
  // selected category with only one member), just allow a repeat
  const choices = pool.length > 0 ? pool : fullPool;
  return choices[Math.floor(Math.random() * choices.length)];
}
