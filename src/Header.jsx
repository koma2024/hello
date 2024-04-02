// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark py-3">
      <div className="container head">
        <h1 className="text-light" style={{ textShadow: "5px 4px 2px green" }}>Welcome..!!</h1>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">About me</Link></li>
            <li className="nav-item"><Link to="/projects" className="nav-link">  My Projects</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link">Contact me</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
