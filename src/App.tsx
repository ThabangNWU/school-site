import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Label from './components/Label';
import Posts from "./components/Posts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/label" element={<Label />} /> 
        <Route path="/posts" element={<Posts />} /> 
      </Routes>
    </Router>
  );
}

export default App;
