import { Routes, Route, useNavigate } from "react-router-dom";
import { auth, db } from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";

import Login from "./components/Login";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Register from "./components/register";

function App() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const handleAction = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        fname: firstName,
        state: "CA",
        country: "USA",
        email: email,
      });
      await navigate("/dashboard");
      // await sendEmailVerification(auth.currentUser);
    } catch (error) {
      setError(error);
    }
  };

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <Login
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              login={login}
              error={error}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              firstname={firstName}
              setFirstName={setFirstName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              error={error}
              register={handleAction}
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard logout={logout} />} />
      </Routes>
    </>
  );
}

export default App;
