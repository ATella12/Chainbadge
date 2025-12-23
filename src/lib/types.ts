export type Topic = 'bitcoin' | 'ethereum' | 'bsc' | 'base' | 'solana';
export type Difficulty = 'easy' | 'medium' | 'difficult';

export type Question = {
  id: string;
  topic: Topic;
  difficulty: Difficulty;
  prompt: string;
  answer: boolean;
  explanation: string;
};

export const TOPICS: Topic[] = ['bitcoin', 'ethereum', 'bsc', 'base', 'solana'];

export const TOPIC_LABELS: Record<Topic, string> = {
  bitcoin: 'Bitcoin',
  ethereum: 'Ethereum',
  bsc: 'BSC',
  base: 'Base',
  solana: 'Solana',
};

export const DIFFICULTIES: Difficulty[] = ['easy', 'medium', 'difficult'];

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  easy: 'Easy',
  medium: 'Medium',
  difficult: 'Difficult',
};
