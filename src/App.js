import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/utils/Home";
import About from "./pages/utils/About";
import Profile from "./pages/utils/Profile";
import SignIn from "./pages/utils/SignIn";
import SignOut from "./pages/utils/SignOut";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-out" element={<SignOut />} />
      </Routes>
    </div>
  );
};

export default App;
