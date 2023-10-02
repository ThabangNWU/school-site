import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./components/Home";
import { Contact } from "./components/Contact";
import { Users } from "./components/Users";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Blog from "./components/Blog";
import About from "./components/About";;
import Gallery from "./components/Gallery";

export const MyContext = createContext({});

function App() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <MyContext.Provider value={{ id, setId, name, setName, email, setEmail }}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/portal" element={<Home />}>
            <Route index path="dashboard" element={<Dashboard />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
