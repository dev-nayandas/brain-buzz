import { useEffect, useState } from "react";
import { getQuizHistory } from "../utils/db";
import AttemptList from "../components/AttemptList";

const AttemptsPage = () => {
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const history = await getQuizHistory();
      setAttempts(history.reverse()); 
    };
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <h1 className="text-center text-3xl font-bold mb-6">Your Quiz Attempts</h1>
      <AttemptList attempts={attempts} />
    </div>
  );
};

export default AttemptsPage;
