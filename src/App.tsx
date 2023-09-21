import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route part="Aps" element={<Aps />} />
      </Routes>
    </Router>
  );
}

export default App;
