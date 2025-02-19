import { Link } from "react-router-dom";

const AttemptList = ({ attempts }) => {
  if (!attempts.length) {
    return <p className="text-center mt-4 text-gray-600">No attempts yet.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h3 className="text-xl font-semibold mb-4">Past Attempts</h3>
      <ul className="space-y-4">
        {attempts.map((attempt) => (
          <li key={attempt.id} className="p-4 bg-gray-100 rounded shadow">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">
                  Attempt #{attempt.id} — Score: {attempt.score}/{attempt.total}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(attempt.timestamp).toLocaleString()}
                </p>
              </div>
              <Link
                to={`/attempt/${attempt.id}`}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                View Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttemptList;
