// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './Footer';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import "./App.css"

import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>

      <Footer />
    </Router>
  );
}

export default App;
