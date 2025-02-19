const Scoreboard = ({ score, total }) => {
  return (
    <div className="text-center p-4 bg-gray-100 rounded shadow my-4">
      <h2 className="text-2xl font-bold">Quiz Completed</h2>
      <p className="text-xl mt-2">
        Your Score: {score} / {total}
      </p>
    </div>
  );
};

export default Scoreboard;
