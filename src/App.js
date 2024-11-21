import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/utils/Home";
import About from "./pages/utils/About";
import Profile from "./pages/utils/Profile";
import SignIn from "./pages/utils/SignIn";
import SignUp from "./pages/utils/SignUp";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className=" px-4 sm:px-[4vw] md:px-[6vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
