import  { useState, useEffect } from "react";

const Timer = ({ timeLimit, onTimeout }) => {
  const [time, setTime] = useState(timeLimit);

  useEffect(() => {
    if (time === 0) {
      onTimeout();
      return;
    }
    const interval = setInterval(() => setTime((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [time, onTimeout]);

  return <p className="text-red-600 font-bold">Time left: {time}s</p>;
};

export default Timer;
