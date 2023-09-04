import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { HomePage } from "./Pages/Home";
import { AboutPage } from "./Pages/About";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Navbar />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
