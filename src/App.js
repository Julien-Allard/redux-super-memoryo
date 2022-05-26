import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MemoryGame from "./Containers/MemoryGame";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MemoryGame />} />
      </Routes>
    </Router>
  );
}

export default App;
