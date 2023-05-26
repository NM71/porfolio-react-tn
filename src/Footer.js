import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start" style={{ backgroundColor: "#2e4f4f" }}>
      <div className="container d-flex justify-content-center py-5">
        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "#2e4f4f" }}>
          <i className="fab fa-facebook-f"></i>
        </button>
        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "#2e4f4f" }}>
          <i className="fab fa-instagram"></i>
        </button>
        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "#2e4f4f" }}>
          <i className="fab fa-twitter"></i>
        </button>
      </div>

      <div className="text-center text-white p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2023 Tariq Naeem Khan
      </div>
    </footer>
  );
}

export default Footer;
