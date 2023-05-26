import React from 'react';

const AboutSection = () => {
  return (
    <section className="about" id="About">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <img src="./sirTariq.png" height="400" className="img-fluid" data-aos="fade-right" data-aos-duration="2000" alt="sample-image" />
          </div>
          <div className="col-lg-7">
            <h1 data-aos="flip-left" data-aos-duration="2000">About Me.</h1>
            <p className="py-5">I am <span className="font-weight-bold">Tariq Naeem</span> from Air University Islamabad. I have completed my M.S. in Computer Sciences from the Department of Computer Science, University of Peshawar. I have worked with International Resource Group (IRG), Peshawar Electric Supply Company (PESCO) Headquarters as a turn-around company, National Electric Power Company (NEPRA), and Multan Electric Power Company (MEPCO), conducting corporate trainings on the USAID funded Power Distribution Program.<br /><br />
              I have 7 years of professional experience in analyzing, modeling, developing, deploying, and maintaining software projects in Pakistan and abroad. I have significant experience in developing different core modules of software for various organizations. Furthermore, I have immense experience in lecturing at the university level.<br /><br />
              In addition, I have conducted training programs for Bakhtar University in Kabul for local government officials on the Information Communication Technology (ICT) program. Currently, I am a lecturer at Air University Islamabad and supervising undergraduate students as well.</p>

            <input type="button" className="btn-DL rounded" value="Download C.V" data-aos="fade-down-right" /> {' '}
            <input type="button" className="btn-Contact rounded" value="Contact Me" data-aos="fade-up-right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
