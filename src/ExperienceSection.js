import React from 'react';

const ExperienceSection = () => {
  return (
    <section className="services py-5 bg-light" id="Experience">
      <div className="container py-5">
        <h1 className="text-center pb-5">Experience.</h1>
        <div className="row pb-3" data-aos-duration="3000">
          <div className="col-lg-4 mb-3" data-aos="fade-right">
            <div className="card text-center">
              <div className="card-body">
                <div className="circle">
                  <span><i className="fas fa-university"></i></span>
                </div>
                <h4 className="font-weight-bold pb-2">Lecturer <br /> <small>Air University</small></h4>
                <p>Feb 2016 - Mar 2020 · 4 years 2 months <br /> Multan</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-3" data-aos="fade-down">
            <div className="card text-center">
              <div className="card-body">
                <div className="circle">
                  <span><i className="fas fa-chalkboard-teacher"></i></span>
                </div>
                <h4 className="font-weight-bold pb-2">IT Trainer <br /> <small>Engility Corporation - IRG</small></h4>
                <p>Nov 2013 - Aug 2015 · 1 year 10 months <br /> Hill Road,  <br /> Islamabad</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-3" data-aos="fade-left">
            <div className="card text-center">
              <div className="card-body">
                <div className="circle">
                  <span><i className="fas fa-university"></i></span>
                </div>
                <h4 className="font-weight-bold pb-2">Lecturer <br /> <small>Bakhtar University</small></h4>
                <p>Nov 2012 - Sep 2013 · 11 months <br /> Kabul, Afghanistan</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row pb-3" data-aos-duration="3000">
          <div className="col-lg-4 mb-3" data-aos="fade-right">
            <div className="card text-center">
              <div className="card-body">
                <div className="circle">
                  <span><i className="fas fa-university"></i></span>
                </div>
                <h4 className="font-weight-bold pb-2">Teacher Assistant <br /> <small>Department of Computer Science, University of Peshawar</small></h4>
                <p>Jan 2012 - Oct 2012 · 10 months <br /> Peshawar</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-3" data-aos="fade-up">
            <div className="card text-center">
              <div className="card-body">
                <div className="circle">
                  <span><i className="fab fa-node-js"></i></span>
                </div>
                <h4 className="font-weight-bold pb-2">Junior Programmer <br /> <small>Data Perfection Software Solution</small></h4>
                <p>May 2010 - Oct 2012 · 2 years 6 months <br /> <small>Data Perfection Software Solution</small></p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-3" data-aos="fade-left">
            <div className="card text-center">
              <div className="card-body">
                <div className="circle">
                  <span><i className="fas fa-university"></i></span>
                </div>
                <h4 className="font-weight-bold pb-2">Teacher <br /> <small>Army Public School and Girls College</small></h4>
                <p>Aug 2010 - Feb 2011 · 7 months <br /> <small>56-A The Mall, near PTV station Peshawar cantt, Peshawar</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
