import  { useState, useEffect } from "react";

const QuestionInteger = ({ questionData, onSubmit, feedback, integerSubmitted }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setInput("");
    setError("");
  }, [questionData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const intVal = parseInt(input, 10);

    if (isNaN(intVal)) {
      setError("⚠️ Please enter a valid integer.");
      return;
    }

    setError("");
    onSubmit(intVal);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{questionData.question}</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`p-2 border rounded w-full ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your answer"
          disabled={integerSubmitted} // Disable input after submission
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={integerSubmitted}
          className={`w-full mt-2 px-4 py-2 rounded ${
            integerSubmitted
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {integerSubmitted ? "Submitted" : "Submit Answer"}
        </button>
      </form>
    </div>
  );
};

export default QuestionInteger;
