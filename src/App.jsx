import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./pages/Home"; // updated import
import About from "./pages/About";
import Contact from "./pages/Contact"
import Shop from "./pages/Shop";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
