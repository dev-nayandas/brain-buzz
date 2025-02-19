const QuestionMcq = ({ questionData, onSelect, selectedOption, feedback }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{questionData.question}</h2>
      <div className="space-y-2">
        {questionData.options.map((option) => {
          // Style option based on selection and feedback
          let labelClass = "flex items-center space-x-2 p-2 border rounded cursor-pointer hover:bg-gray-100";
          if (selectedOption === option) {
            labelClass += feedback === "correct" ? " bg-green-200 border-green-500" : " bg-red-200 border-red-500";
          }
          return (
            <label key={option} className={labelClass}>
              <input
                type="radio"
                name="mcq"
                value={option}
                onChange={() => onSelect(option)}
                checked={selectedOption === option}
                className="form-radio text-blue-600"
                disabled={!!selectedOption}
              />
              <span>{option}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionMcq;
