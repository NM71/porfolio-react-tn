import React from 'react';

const ServicesSection = () => {
  return (
    <section className="services py-5 bg-light" id="Services">
      <div className="container py-5">
        <h1 className="text-center pb-5">Services.</h1>
        <div className="row pb-3" data-aos-duration="3000">
          <div className="col-lg-4 mb-3" data-aos="fade-right">
            <div className="card text-center">
              <div className="card-body">
                <div className="circle">
                  <span><i className="fas fa-desktop"></i></span>
                </div>
                <h4 className="font-weight-bold pb-2">Web Design</h4>
                <p>I create visually appealing, user-friendly website layouts.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-3" data-aos="fade-up">
            <div className="card text-center">
              <div className="card-body">
                <div className="circle">
                  <span><i className="fas fa-code"></i></span>
                </div>
                <h4 className="font-weight-bold pb-2">Web Development</h4>
                <p>I develop dynamic, responsive websites using various programming languages and frameworks.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-3" data-aos="fade-left">
            <div className="card text-center">
              <div className="card-body">
                <div className="circle">
                  <span><i className="fas fa-hands-helping"></i></span>
                </div>
                <h4 className="font-weight-bold pb-2">Supervising</h4>
                <p>I guide and oversee web design and development projects, providing feedback and mentorship to students.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
