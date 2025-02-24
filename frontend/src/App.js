import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import LoginForm from "./loginform";  // Import your LoginForm component
import RegisterForm from "./registerform";  // Import your RegisterForm component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/registerform" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
};

export default App;
