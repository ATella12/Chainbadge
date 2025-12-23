import { describe, expect, it } from 'vitest';
import { canMint, pickUniqueQuestions } from '~/lib/quiz';

const sampleQuestions = Array.from({ length: 20 }, (_, index) => ({
  id: `q-${index}`,
  topic: 'bitcoin',
  difficulty: 'easy',
  prompt: `Question ${index}`,
  answer: index % 2 === 0,
  explanation: 'Test',
}));

describe('pickUniqueQuestions', () => {
  it('selects 10 unique questions', () => {
    let seed = 0.123;
    const rng = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    const picked = pickUniqueQuestions(sampleQuestions, 10, rng);
    const ids = new Set(picked.map((item) => item.id));
    expect(picked).toHaveLength(10);
    expect(ids.size).toBe(10);
  });
});

describe('canMint', () => {
  it('allows minting at 6 or higher', () => {
    expect(canMint(6)).toBe(true);
    expect(canMint(10)).toBe(true);
  });

  it('blocks minting below 6', () => {
    expect(canMint(5)).toBe(false);
    expect(canMint(0)).toBe(false);
  });
});
