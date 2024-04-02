// Footer.js
import React from 'react';
import { FaTwitter, FaFacebook,FaGithub ,FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2024 My Portfolio</p>
          </div>
          <div className="col-md-6">
            <ul className="social-icons">
              <li><a href="#"><FaTwitter /></a></li>
              <li><a href="#"><FaFacebook /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
              <li> <a href="#"><FaGithub /> </a> </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
