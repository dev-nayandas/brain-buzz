import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import AttemptsPage from "./pages/AttemptsPage";
import AttemptDetails from "./components/AttemptDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizPage />} />
        <Route path="/attempts" element={<AttemptsPage />} />
        <Route path="/attempt/:id" element={<AttemptDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
