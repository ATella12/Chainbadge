'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { questions } from '~/data/questions';
import { initMiniAppSdk } from '~/lib/farcaster';
import { canMint, filterQuestions, pickUniqueQuestions } from '~/lib/quiz';
import {
  DIFFICULTIES,
  DIFFICULTY_LABELS,
  Difficulty,
  TOPIC_LABELS,
  TOPICS,
  Topic,
} from '~/lib/types';
import MintPanel from '~/components/MintPanel';
import { APP_NAME } from '~/lib/constants';

const SCORE_MESSAGES: Array<{ min: number; message: string }> = [
  { min: 9, message: 'Outstanding! You are a chain whisperer.' },
  { min: 7, message: 'Great job. Your on-chain instincts are sharp.' },
  { min: 6, message: 'Nice work. You cleared the mint threshold.' },
  { min: 4, message: 'Solid effort. A little more studying will do it.' },
  { min: 0, message: 'Keep going. The next round will be better.' },
];

type Phase = 'landing' | 'quiz' | 'results';

type Feedback = {
  correct: boolean;
  explanation: string;
};

export default function QuizApp() {
  const [topic, setTopic] = useState<Topic>('bitcoin');
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [phase, setPhase] = useState<Phase>('landing');
  const [sessionQuestions, setSessionQuestions] = useState(questions.slice(0, 0));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [isMiniApp, setIsMiniApp] = useState(false);
  const [sdkChecked, setSdkChecked] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    let mounted = true;
    initMiniAppSdk()
      .then((ready) => {
        if (mounted) {
          setIsMiniApp(ready);
          setSdkChecked(true);
        }
      })
      .catch(() => {
        if (mounted) {
          setIsMiniApp(false);
          setSdkChecked(true);
        }
      });

    return () => {
      mounted = false;
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const scoreMessage = useMemo(() => {
    return SCORE_MESSAGES.find((entry) => score >= entry.min)?.message ?? '';
  }, [score]);

  const startQuiz = () => {
    const pool = filterQuestions(questions, topic, difficulty);
    const selected = pickUniqueQuestions(pool, 10);
    setSessionQuestions(selected);
    setCurrentIndex(0);
    setScore(0);
    setFeedback(null);
    setPhase('quiz');
  };

  const handleAnswer = (answer: boolean) => {
    if (feedback) return;
    const current = sessionQuestions[currentIndex];
    if (!current) return;

    const correct = current.answer === answer;
    setScore((prev) => prev + (correct ? 1 : 0));
    setFeedback({ correct, explanation: current.explanation });

    timerRef.current = window.setTimeout(() => {
      setFeedback(null);
      if (currentIndex >= sessionQuestions.length - 1) {
        setPhase('results');
        return;
      }
      setCurrentIndex((prev) => prev + 1);
    }, 900);
  };

  const resetToLanding = () => {
    setPhase('landing');
    setSessionQuestions(questions.slice(0, 0));
    setCurrentIndex(0);
    setScore(0);
    setFeedback(null);
  };

  const currentQuestion = sessionQuestions[currentIndex];
  const progressLabel = `${Math.min(currentIndex + 1, 10)} / 10`;

  return (
    <div className="app-shell">
      <header className="mb-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {APP_NAME}
            </h1>
          </div>
          <div className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
            Base Mainnet Badge
          </div>
        </div>
        {sdkChecked && !isMiniApp && (
          <div className="mt-4 rounded-lg border border-slate-200 bg-white/80 px-4 py-3 text-xs text-slate-600">
            Open this in Farcaster for the in-app wallet. Minting still works on the open web with standard wallets.
          </div>
        )}
      </header>

      {phase === 'landing' && (
        <section className="glass rounded-2xl p-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Blockchain Topic
              </label>
              <div className="mt-2 grid gap-2">
                {TOPICS.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setTopic(value)}
                    className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                      topic === value
                        ? 'border-amber-400 bg-amber-100 text-amber-900'
                        : 'border-slate-200 bg-white hover:border-amber-300'
                    }`}
                  >
                    {TOPIC_LABELS[value]}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Difficulty
              </label>
              <div className="mt-2 grid gap-2">
                {DIFFICULTIES.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setDifficulty(value)}
                    className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                      difficulty === value
                        ? 'border-sky-400 bg-sky-100 text-sky-900'
                        : 'border-slate-200 bg-white hover:border-sky-300'
                    }`}
                  >
                    {DIFFICULTY_LABELS[value]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={startQuiz}
            className="mt-6 w-full rounded-xl bg-slate-900 px-4 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            Start Quiz
          </button>
        </section>
      )}

      {phase === 'quiz' && currentQuestion && (
        <section className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {TOPIC_LABELS[topic]} • {DIFFICULTY_LABELS[difficulty]}
            </div>
            <div className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
              Question {progressLabel}
            </div>
          </div>

          <p className="mt-6 text-xl font-semibold text-slate-900">{currentQuestion.prompt}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              disabled={!!feedback}
              onClick={() => handleAnswer(true)}
              className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm font-semibold text-emerald-800 transition hover:border-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 disabled:opacity-60"
            >
              TRUE
            </button>
            <button
              type="button"
              disabled={!!feedback}
              onClick={() => handleAnswer(false)}
              className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-4 text-sm font-semibold text-rose-800 transition hover:border-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400 disabled:opacity-60"
            >
              FALSE
            </button>
          </div>

          {feedback && (
            <div
              className={`mt-6 rounded-xl border px-4 py-3 text-sm ${
                feedback.correct
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                  : 'border-rose-200 bg-rose-50 text-rose-800'
              }`}
            >
              <p className="font-semibold">
                {feedback.correct ? 'Correct!' : 'Incorrect.'}
              </p>
              <p className="mt-1 text-xs">{feedback.explanation}</p>
            </div>
          )}
        </section>
      )}

      {phase === 'results' && (
        <section className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Final Score</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900">
                {score} / 10
              </p>
            </div>
            <div className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
              {TOPIC_LABELS[topic]} • {DIFFICULTY_LABELS[difficulty]}
            </div>
          </div>

          <p className="mt-3 text-sm text-slate-600">{scoreMessage}</p>

          {canMint(score) && (
            <div className="mt-6">
              <MintPanel />
            </div>
          )}

          <div className="mt-6">
            <button
              type="button"
              onClick={resetToLanding}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              Play Again
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

