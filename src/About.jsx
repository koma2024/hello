// About.js
import React from 'react';

const About = () => {
  return (
    <div id="about" className="py-6 bg-light about-section">
      <div className="container">
        <h2 className="text-center mb-4"  style={{ textShadow: "5px 5px 10px green" }}>About Me</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <h3>Education</h3>
                </div>
                <div className="card-back">
                  <p>I graduated with a degree in Computer Science from XYZ University.</p>
                  <p>I also completed online courses in web development and software engineering.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <h3>Experience</h3>
                </div>
                <div className="card-back">
                  <p>I have worked as a software developer intern at ABC Company.</p>
                  <p>Currently, I'm freelancing and working on personal projects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <h3>Skills</h3>
                </div>
                <div className="card-back">
                  <ul>
                    <li>JavaScript (React.js, Node.js)</li>
                    <li>HTML6 & CSS3</li>
                    <li>Database Management (MySQL, MongoDB)</li>
                    <li>Version Control (Git)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <h3>Hobbies</h3>
                </div>
                <div className="card-back">
                  <p>In my free time, I enjoy reading, hiking, and playing guitar.</p>
                  <p>I'm also passionate about photography and traveling.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
