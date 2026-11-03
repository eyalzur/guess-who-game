export type GameMode = 'time' | 'questions';

export type Screen = 'menu' | 'reveal' | 'guessing' | 'result';

export type Outcome = 'win' | 'timeout' | 'outOfQuestions' | 'stop';

export const TIME_LIMIT_SECONDS = 60;
export const QUESTIONS_LIMIT = 10;
