// Design system: "Candy Carnival" — soft pastel backdrop, bold saturated
// accents, chunky 3D buttons, playful display type. Keep this file as the
// single source of truth for color/spacing/type/shadow so every screen
// stays visually consistent.

export const COLORS = {
  // saturated "candy" accents — used for buttons, chips, badges, icons
  pink: '#FF4FA3',
  pinkDark: '#D62E7D',
  purple: '#8B5CF6',
  purpleDark: '#6D3FD1',
  blue: '#22C3EE',
  blueDark: '#0E9FCB',
  green: '#2ED573',
  greenDark: '#1FA85A',
  yellow: '#FFC93C',
  yellowDark: '#E6A300',
  orange: '#FF8C42',
  orangeDark: '#E06B1F',
  red: '#FF4D5E',
  redDark: '#D6283B',
  gray: '#8A8FA3',
  grayDark: '#5B5F72',
  grayLight: '#E7E5F3',

  // ink / surfaces
  ink: '#2B2250',
  inkSoft: '#5B5580',
  white: '#FFFFFF',
  cardSurface: '#FFFFFF',
} as const;

// background gradient stops — bold and saturated, one flavor per screen so
// the app reads as a game (lots of color) rather than a muted "app" look
export const BACKGROUND_GRADIENT = ['#FFE566', '#FF8FD6', '#8B5CF6'] as const;
export const GRADIENT_MENU = ['#FFE566', '#FF8FD6', '#8B5CF6'] as const;
export const GRADIENT_REVEAL = ['#5CE1E6', '#3DA9FC', '#8B5CF6'] as const;
export const GRADIENT_GUESS = ['#FFB199', '#FF4FA3', '#8B5CF6'] as const;
export const GRADIENT_WIN = ['#FFE566', '#7CF29C', '#22C3EE'] as const;
export const GRADIENT_LOSE = ['#FFB199', '#FF8FD6', '#8B5CF6'] as const;

// confetti / decoration accent rainbow
export const RAINBOW = ['#FF4FA3', '#FFC93C', '#22C3EE', '#2ED573', '#8B5CF6', '#FF8C42'] as const;

export const FONTS = {
  display: 'Rubik_900Black',
  displayBold: 'Rubik_800ExtraBold',
  body: 'Heebo_400Regular',
  bodyMedium: 'Heebo_600SemiBold',
  bodyBold: 'Heebo_700Bold',
} as const;

export const RADIUS = {
  sm: 12,
  md: 18,
  lg: 24,
  xl: 32,
  pill: 999,
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

// soft "sticker" drop shadow used on cards/avatars
export const CARD_SHADOW = {
  shadowColor: '#5B3DA6',
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.18,
  shadowRadius: 16,
  elevation: 8,
} as const;
