import  { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getAttemptById } from "../utils/db";

const AttemptDetails = () => {
  const { id } = useParams();
  const [attempt, setAttempt] = useState(null);

  useEffect(() => {
    const fetchAttempt = async () => {
      const data = await getAttemptById(Number(id));
      setAttempt(data);
    };
    fetchAttempt();
  }, [id]);

  if (!attempt) return <p>Loading attempt details...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">
        Attempt #{attempt.id} — Score: {attempt.score}/{attempt.total}
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Taken on: {new Date(attempt.timestamp).toLocaleString()}
      </p>

      {attempt.details.map((qDetail, idx) => (
        <div key={idx} className="mb-4 border-b pb-3">
          <p className="font-medium">{qDetail.question}</p>
          <ul className="list-disc ml-6 text-sm">
            {qDetail.attempts.map((att, i) => (
              <li key={i} className={att.isCorrect ? "text-green-600" : "text-red-600"}>
                Attempt {i + 1}: {att.answer} — {att.isCorrect ? "Correct" : "Incorrect"}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <Link to="/attempts" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Back to Attempts
      </Link>
    </div>
  );
};

export default AttemptDetails;
