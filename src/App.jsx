import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PreHeader from "./Component/Header/PreHeader";
import Navbar from "./Component/Header/Navbar";
import './App.css'

import Home from "./Pages/Home";
import Brewery from "./Pages/Brewery";
import Events from "./Pages/Events";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <PreHeader />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brewery" element={<Brewery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
