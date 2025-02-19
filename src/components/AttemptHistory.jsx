const AttemptHistory = ({ attempts }) => {
  if (!attempts || attempts.length === 0) {
    return <p className="text-center mt-4 text-gray-600">No attempts recorded yet.</p>;
  }
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h3 className="text-xl font-semibold mb-4">Attempt History</h3>
      {attempts.map((attempt, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded shadow mb-4">
          <p className="font-bold mb-2">
            Quiz Attempt #{index + 1} — Score: {attempt.score}/{attempt.total} <br />
            <small>{new Date(attempt.timestamp).toLocaleString()}</small>
          </p>
          {attempt.details.map((qDetail, idx) => (
            <div key={idx} className="mb-2 border-b pb-2">
              <p className="font-medium">{qDetail.question}</p>
              <p className="text-sm text-gray-700">
                Attempts: {qDetail.attempts.length} time{qDetail.attempts.length > 1 ? "s" : ""}
              </p>
              <ul className="list-disc list-inside text-sm">
                {qDetail.attempts.map((att, i) => (
                  <li key={i}>
                    {att.answer} — {att.isCorrect ? "Correct" : "Incorrect"}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AttemptHistory;
