import React from 'react';

function HeroSection() {
  return (
    <div className="container py-5">
      <div className="row">
       
        <div className="col-md-6" style={{ padding: '124px', backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <div className="text-center">
            <h2 className="display-4">Hi,<br />I am <span style={{ textShadow: "5px 5px 10px green" }}>Komal</span></h2>

            <p className="lead">A React.js Developer</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="text-center">
            <img src="http://surl.li/segus" alt="Developer" className="img-fluid rounded-circle" style={{ maxWidth: '57%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
