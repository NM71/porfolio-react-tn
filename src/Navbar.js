import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg text-uppercase fixed-top">
      <div className="container">
        <a className="navbar-brand font-weight-bold" href="#"><img src="/favicon.ico" alt="TN-logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-link active px-lg-4 rounded" aria-current="page" href="#Main">Home</a>
            <a className="nav-link px-lg-4 rounded" href="#Services">Services</a>
            <a className="nav-link px-lg-4 rounded" href="#Experience">Experience</a>
            <a className="nav-link px-lg-4 rounded" href="#About">About</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
