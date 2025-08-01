'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';
import { Progress } from '@/shared/ui/progress';
import { Check, X, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { questionData, QuestionType } from '../lib/data';

type SelectedAnswers = {
  [index: number]: string;
};

const getRandomizedQuestions = (
  questions: QuestionType[],
  count: number = 10,
): QuestionType[] => {
  const shuffled = [...questions]
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
  return shuffled.map((q) => {
    const allAnswers = [...q.options].sort(() => 0.5 - Math.random());
    return { ...q, allAnswers };
  });
};

export default function QuizApp() {
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20 * 60);
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<SelectedAnswers>({});
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (started && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setShowResult(true);
    }
    return () => clearInterval(timer);
  }, [started, timeLeft]);

  const startQuiz = () => {
    const randomQuestions = getRandomizedQuestions(questionData);
    setQuestions(randomQuestions);
    setStarted(true);
    setTimeLeft(20 * 60);
    setSelected({});
    setCurrentIndex(0);
    setShowResult(false);
  };

  const selectAnswer = (index: number, answer: string) => {
    if (!(index in selected)) {
      setSelected((prev) => ({ ...prev, [index]: answer }));
    }
  };

  const calculateScore = (): number => {
    return questions.reduce(
      (acc, q, i) => acc + (selected[i] === q.correctAnswer ? 1 : 0),
      0,
    );
  };

  if (!started) {
    return (
      <div className="w-full flex flex-col items-center gap-6 mt-16">
        <h1 className="text-[24px] font-semibold text-center">
          🚀 Kosmos bo‘yicha test
        </h1>
        <p className="text-gray-500">10 ta savol, 20 daqiqa ichida yeching</p>
        <Button
          className="text-lg px-6 py-3 w-full max-w-xs"
          onClick={startQuiz}
        >
          Boshlash
        </Button>
      </div>
    );
  }

  if (showResult) {
    const score = calculateScore();
    return (
      <div className="w-full flex flex-col items-center gap-6 mt-16">
        <h1 className="text-[24px] font-semibold text-center">Natijalar</h1>
        <p className="text-xl">
          To‘g‘ri javoblar: {score} / {questions.length}
        </p>
        <Button onClick={startQuiz} className="w-full max-w-xs">
          Qayta boshlash
        </Button>
      </div>
    );
  }

  const question = questions[currentIndex];

  return (
    <div className="w-full mx-auto p-2 space-y-6">
      <div className="flex justify-between items-center text-sm text-gray-600">
        <div>
          ⏳ Vaqt: {Math.floor(timeLeft / 60)}:
          {String(timeLeft % 60).padStart(2, '0')}
        </div>
        <div>
          {currentIndex + 1} / {questions.length}
        </div>
      </div>

      <Progress
        value={((currentIndex + 1) / questions.length) * 100}
        className="h-2"
      />

      <Card className="shadow-sm rounded-md">
        <CardContent className="space-y-6 p-6">
          <h2 className="text-xl font-semibold">{question.question}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.allAnswers?.map((answer) => {
              const isSelected = selected[currentIndex] === answer;
              const isCorrect = answer === question.correctAnswer;
              const isAnswered = currentIndex in selected;

              let borderColor = 'border-gray-300';
              let textColor = 'text-gray-700';
              let icon = null;

              if (isAnswered) {
                if (isSelected && isCorrect) {
                  borderColor = 'border-green-500';
                  textColor = 'text-green-600';
                  icon = <Check className="ml-2 text-green-600 w-5 h-5" />;
                } else if (isSelected && !isCorrect) {
                  borderColor = 'border-red-500';
                  textColor = 'text-red-600';
                  icon = <X className="ml-2 text-red-600 w-5 h-5" />;
                } else if (!isSelected && isCorrect) {
                  borderColor = 'border-green-500';
                  textColor = 'text-green-600';
                }
              } else if (isSelected) {
                borderColor = 'border-blue-500';
              }

              return (
                <button
                  key={answer}
                  onClick={() => selectAnswer(currentIndex, answer)}
                  disabled={isAnswered}
                  className={`w-full flex items-center justify-between border ${borderColor} ${textColor} px-4 py-3 rounded-md text-base text-left bg-white hover:bg-gray-50 transition-colors duration-200 disabled:opacity-80`}
                >
                  <span>{answer}</span>
                  {icon}
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Button
          className="w-full sm:w-auto"
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((i) => i - 1)}
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Oldingi
        </Button>
        {currentIndex < questions.length - 1 ? (
          <Button
            className="w-full sm:w-auto"
            onClick={() => setCurrentIndex((i) => i + 1)}
          >
            Keyingi <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        ) : (
          <Button
            className="w-full sm:w-auto"
            onClick={() => setShowResult(true)}
          >
            Yakunlash <CheckCircle className="ml-2 w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
