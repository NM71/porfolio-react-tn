import React from 'react';

const MainSection = () => {
  return (
    <section className="main py-5" id="Main">
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-lg-6 py-5">
            <h3>
              <small>Hello! I'm </small> <br /> Tariq Naeem
            </h3>
            <input type="button" value="My Works" className="btn-work rounded" />
            <input type="button" value="Hire Me" className="btn-Hire rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
