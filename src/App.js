// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import "./App.css"
import HeroSection from './HeroSection';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>

          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Routes>
        <HeroSection />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
