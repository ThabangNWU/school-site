import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { useContext } from "react";
import { MyContext } from "../App";

interface LoginFormProps {}

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const Login: React.FC<LoginFormProps> = () => {
  
  
  const auth = getAuth();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { setId, setEmail } = useContext(MyContext);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then(async (cred) => {
        console.log(cred);
        setId(cred.user.uid);
        setEmail(cred.user.email);
        navigate("/portal");
      })
      .catch((error) => setError(error));
  };

  return (
    <div className="login">
      <div className="login__content">
        <h2>Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
