import React from 'react';
import Header from './Header';


const Contact = () => {
  return (
    <>
    <Header />
    <div className="container contact">
      <div className="contact-form">
        <form
          action="https://formspree.io/f/xdoqwbbw"
          method="POST"
          className="contact-inputs"
        >
          <div className="form-group">
            <h1 style={{textAlign:"center" , textShadow: "5px 5px 10px green" }}>Contact Me</h1>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              className="form-control"
              cols="30"
              rows="6"
              placeholder="Message"
              autoComplete="off"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
