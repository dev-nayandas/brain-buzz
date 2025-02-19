import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import Quiz from "../components/Quiz";
import Scoreboard from "../components/Scoreboard";
import { questions } from "../data";
import { saveQuizHistory } from "../utils/db";

const QuizPage = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [attemptId, setAttemptId] = useState(null);
  const navigate = useNavigate();

  const handleQuizComplete = async (score, details) => {
    const attempt = {
      score,
      total: questions.length,
      details,
      timestamp: new Date().toISOString(),
    };
    const id = await saveQuizHistory(attempt);
    setAttemptId(id);
    setFinalScore(score);
    setQuizCompleted(true);
  };

  const restartQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setFinalScore(0);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <h1 className="text-center text-3xl font-bold mb-6">Brain Buzz Quiz</h1>

      {!quizStarted && !quizCompleted && (
        <div className="max-w-xl mx-auto bg-white p-6 rounded shadow text-center">
          <h2 className="text-2xl font-semibold mb-4">Instructions:</h2>
          <ul className="text-left list-disc list-inside mb-4 space-y-2">
            <li>The quiz has multiple-choice and integer-type questions.</li>
            <li>You have <strong>30 seconds</strong> per question.</li>
            <li>You can attempt the same question multiple times.</li>
            <li>Integer-type answers must be valid integers.</li>
            <li>Your attempts and scores will be recorded.</li>
          </ul>
          <button
            onClick={() => setQuizStarted(true)}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Start Quiz
          </button>
        </div>
      )}

      {quizStarted && !quizCompleted && (
        <Quiz questions={questions} onQuizComplete={handleQuizComplete} />
      )}

      {quizCompleted && (
        <div className="text-center">
          <Scoreboard score={finalScore} total={questions.length} />
          <div className="space-x-4 mt-6">
            <button
              onClick={restartQuiz}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Restart Quiz
            </button>
            <button
              onClick={() => navigate(`/attempt/${attemptId}`)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              View Attempt Details
            </button>
            <button
              onClick={() => navigate("/attempts")}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              View All Attempts
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
