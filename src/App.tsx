import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Portal from "./components/Portal";
import { Contact } from "./components/Contact";
import { Users } from "./components/Users";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AboutUsPortal from "./components/AboutUsPortal";;
import BlogPortal from "./components/BlogPortal";
import GalleryPortal from "./components/GalleryPortal";

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
          <Route path="/portal" element={<Portal />}>
            <Route index path="dashboard" element={<Dashboard />} />
            <Route path="blog" element={<BlogPortal />} />
            <Route path="about" element={<AboutUsPortal />} />
            <Route path="contact" element={<Contact />} />
            <Route path="gallery" element={<GalleryPortal />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
