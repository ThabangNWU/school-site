import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Contact } from "./components/Contact";
import { Users } from "./components/Users";
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/users" element={<Users/>} />
        </Routes>
      </Router>
  );
}

export default App;
