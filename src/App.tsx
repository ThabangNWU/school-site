import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Label from './components/Label';
import Posts from "./components/Posts";
import Aps from "./components/Aps";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/label" element={<Label />} /> 
        <Route path="/posts" element={<Posts />} /> 
        <Route path="/apscalculator" element={<Aps/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
