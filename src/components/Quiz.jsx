import { useState, useEffect } from "react";
import Timer from "./Timer";

import QuestionInteger from "./QuestionInteger";
import QuestionMcq from "./QuestionMcq";

const Quiz = ({ questions, onQuizComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attemptDetails, setAttemptDetails] = useState([]);
  const [currentAttempts, setCurrentAttempts] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [integerSubmitted, setIntegerSubmitted] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [canProceed, setCanProceed] = useState(false);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (!currentQuestion) onQuizComplete(score, attemptDetails);
  }, [currentQuestion, score, attemptDetails, onQuizComplete]);

  const handleAnswer = (answer) => {
    if (canProceed) return;

    const isCorrect =
      currentQuestion.type === "mcq"
        ? answer === currentQuestion.answer
        : parseInt(answer, 10) === currentQuestion.answer;

    const attempt = { answer, isCorrect };
    const updatedAttempts = [...currentAttempts, attempt];

    setCurrentAttempts(updatedAttempts);
    setFeedback(isCorrect ? "correct" : "incorrect");
    setCanProceed(true);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion.type === "integer") setIntegerSubmitted(true); // Disable submit after integer answer
  };

  const handleTimeout = () => {
    if (canProceed) return;

    const updatedAttempts = currentAttempts.length
      ? currentAttempts
      : [{ answer: "No answer", isCorrect: false }];

    setCurrentAttempts(updatedAttempts);
    setFeedback("Time’s up!");
    setCanProceed(true);

    setTimeout(moveToNextQuestion, 1000); // Auto move to next question
  };

  const moveToNextQuestion = () => {
    setAttemptDetails((prev) => [
      ...prev,
      {
        question: currentQuestion.question,
        correctAnswer: currentQuestion.answer,
        attempts: currentAttempts,
      },
    ]);

    setCurrentAttempts([]);
    setSelectedOption(null);
    setIntegerSubmitted(false);
    setFeedback(null);
    setCanProceed(false);
    setCurrentIndex((prev) => prev + 1);
  };

  if (!currentQuestion) return null;

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-lg rounded">
      <Timer key={currentIndex} timeLimit={30} onTimeout={handleTimeout} />

      {currentQuestion.type === "mcq" ? (
        <QuestionMcq
          questionData={currentQuestion}
          onSelect={(option) => {
            setSelectedOption(option);
            handleAnswer(option);
          }}
          selectedOption={selectedOption}
          feedback={feedback}
        />
      ) : (
        <QuestionInteger
          questionData={currentQuestion}
          onSubmit={handleAnswer}
          feedback={feedback}
          integerSubmitted={integerSubmitted}
        />
      )}

      {feedback && (
        <p
          className={`mt-2 font-semibold ${
            feedback === "correct"
              ? "text-green-600"
              : feedback === "incorrect"
              ? "text-red-600"
              : "text-yellow-600"
          }`}
        >
          {feedback === "correct"
            ? "Correct!"
            : feedback === "incorrect"
            ? "Incorrect, try again."
            : "Time’s up!"}
        </p>
      )}

      <div className="mt-4 flex justify-between items-center">
        <p className="text-gray-500">
          Question {currentIndex + 1} of {questions.length}
        </p>
        <button
          onClick={moveToNextQuestion}
          disabled={!canProceed}
          className={`px-4 py-2 rounded ${
            canProceed
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
