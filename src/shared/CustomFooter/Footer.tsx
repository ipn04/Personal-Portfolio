import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="text-center text-lg-start text-dark">
        <section>
          <div className="container text-center text-md-start">
            <div className="row">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
                <h6 className="text-uppercase fw-bold">Ivan Nicolas</h6>
                <hr className="custom-hr" />
                <p>I'm Ivan Nicolas, a Full-Stack Developer passionate about building intuitive, impactful digital solutions across the entire development stack — from interactive interfaces to scalable back-end systems.</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                <h6 className="text-uppercase fw-bold">Portfolio</h6>
                <hr className="custom-hr" />
                <p><a href="#!" className="text-dark">Home</a></p>
                <p><a href="#!" className="text-dark">Academic & Experience</a></p>
                <p><a href="#!" className="text-dark">Projects</a></p>
                <p><a href="#!" className="text-dark">Tech Stack</a></p>
                <p><a href="#!" className="text-dark">Achievements</a></p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="custom-hr" />
                <p><i className="fas fa-home me-2"></i> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope me-2"></i> info@example.com</p>
                <p><i className="fas fa-phone me-2"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print me-2"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>
        <div className="footer-bottom text-center p-3">
          © 2025 Ivan Nicolas
        </div>
      </footer>
    </div>
  );
};

export default Footer;
