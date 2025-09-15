import './Footer.scss';
import Logo from '@assets/images/icons/logo.png';

type FooterProps = {
  onScrollTo?: (section: string) => void;
};

const Footer = ({ onScrollTo }: FooterProps) => {
  return (
    <div className="footer-container">
      <footer className="text-center text-lg-start">
        <section className='footer-section'>
          <div className="items container text-center text-md-start">
            <div className="row">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
                <div className="title d-flex align-items-center">
                  <span>
                    <img className="logo" src={Logo} alt="Logo" />
                  </span>
                  <h6 className='text-uppercase fw-bold m-0'>
                    Ivan Nicolas
                  </h6>
                </div>
                <hr className="top-custom-hr" />
                <p>I'm Ivan Nicolas, a Full-Stack Developer passionate about building intuitive, impactful digital solutions across the entire development stack — from interactive interfaces to scalable back-end systems.</p>
              </div>

              <div className="sections col-md-2 col-lg-2 col-xl-2 mx-auto">
                <h6 className="section-title text-uppercase fw-bold">Portfolio</h6>
                <hr className="custom-hr" />
                <p className='mb-2'>
                  <span className="text-reset text-decoration-none cursor-pointer" onClick={() => onScrollTo?.('home')}>Home</span>
                </p>
                <p className='mb-2'>
                  <span className="text-reset text-decoration-none cursor-pointer" onClick={() => onScrollTo?.('experience')}>Academic Experience</span>
                </p>
                <p className='mb-2'>
                  <span className="text-reset text-decoration-none cursor-pointer" onClick={() => onScrollTo?.('projects')}>Projects</span>
                </p>
                <p className='mb-2'>
                  <span className="text-reset text-decoration-none cursor-pointer" onClick={() => onScrollTo?.('tech')}>Tech Stack</span>
                </p>
                <p className='mb-2'>
                  <span className="text-reset text-decoration-none cursor-pointer" onClick={() => onScrollTo?.('achievements')}>Achievements</span>
                </p>
              </div>
              <div className="sections col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="section-title text-uppercase fw-bold">Contact</h6>
                <hr className="custom-hr" />
                <p className='mb-2'>
                  ivan.nicolas446@gmail.com
                </p>
                <p className='mb-2'>
                  Bagong Silang, Caloocan City
                </p>
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
