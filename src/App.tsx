import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog"; 
import Label from './components/Label';
import Posts from "./components/Posts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< Updated upstream
=======
        <Route path="blog" element={<Blog />}/>
        <Route path="/label" element={<Label />} /> 
        <Route path="/posts" element={<Posts />} /> 
>>>>>>> Stashed changes
      </Routes>
    </Router>
  );
}

export default App;
