import React from 'react';
import Header from './Header';

const Projects = () => {
  return ( <>
  <Header />
    <div id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4"  style={{ textShadow: "5px 5px 10px green" }}>My Projects</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card card1">
              <img src="http://surl.li/sehlq" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h3 className="card-title">React Note Application</h3>
                <p className="card-text">Make a simple beginner-level application in React</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card card1">
              <img src="http://surl.li/seiai" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h3 className="card-title">Todo App</h3>
                <p className="card-text"> the ToDo app is a great idea for a React project. </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card card1">
              <img src="http://surl.li/sehur" className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <h3 className="card-title">Weather App</h3>
                <p className="card-text">Weather App. By building a weather application with React</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card card1">
              <img src="http://surl.li/sehto" className="card-img-top" alt="Project 4" />
              <div className="card-body">
                <h3 className="card-title">E-Commerce</h3>
                <p className="card-text">An e-commerce website built using React and Typescript</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card card1">
              <img src="http://surl.li/sehxj" className="card-img-top" alt="Project 5" />
              <div className="card-body">
                <h3 className="card-title">Calculator</h3>
                <p className="card-text">A simple to use calculator with an appealing user interface.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card card1">
              <img src="http://surl.li/seiby" className="card-img-top" alt="Project 6" />
              <div className="card-body">
                <h3 className="card-title">Music Player</h3>
                <p className="card-text"> Developing a music player app with React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Projects;
