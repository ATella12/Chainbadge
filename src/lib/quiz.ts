import { Difficulty, Question, Topic } from '~/lib/types';

export function filterQuestions(
  questions: Question[],
  topic: Topic,
  difficulty: Difficulty
): Question[] {
  return questions.filter(
    (question) => question.topic === topic && question.difficulty === difficulty
  );
}

export function pickUniqueQuestions(
  questions: Question[],
  count: number,
  rng: () => number = Math.random
): Question[] {
  const copy = [...questions];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

export function canMint(score: number) {
  return score >= 6;
}
