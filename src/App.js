// src/App.js

import React from "react";
import { BrowserRouter, Routes, Route }
    from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Writing from "./pages/Writing";
import Blog from "./pages/Blog";
import Bio from "./pages/Bio";

export default function App() {
  return (
    <main className="text-stone-700 bg-stone-100 body-font min-h-screen">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/writing' element={<Writing />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/bio' element={<Bio />} />
      </Routes>
    </BrowserRouter>
    </main>
  );
}