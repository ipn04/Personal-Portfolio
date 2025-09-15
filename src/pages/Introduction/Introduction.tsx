import './Introduction.scss';
import ArrowRight from '@assets/icons/ArrowRight';
import Github from '@assets/icons/Git';
import Linkedin from '@assets/icons/Linkedin';
import profile from '@assets/images/profile/profile.png';

type IntroductionProps = {
  onScrollToExperience?: () => void;
};

function Introduction({ onScrollToExperience }: IntroductionProps) {
  const socialLinks = [
    { icon: <Linkedin />, url: 'https://www.linkedin.com/in/ivan-nicolas-7522b1221' },
    { icon: <Github />, url: 'https://github.com/ipn04' }
  ];

  return (
    <div className="introduction-container gap-5 container d-flex flex-row justify-content-center align-items-center">
      <div className="left">
        <h5 className='introduction'>Hi, I'm</h5>
        <h1 className='full-name mt-3'>Ivan Nicolas</h1>
        <h1 className='introduction-role mb-3'>Full-Stack Developer</h1>
        <p className='introduction-description'>
            I'm Ivan Nicolas, a Full-Stack Developer with a strong passion for crafting seamless digital experiences. I enjoy working across the full development stack — from designing interactive user interfaces to building reliable, scalable back-end systems.
        </p>
        <p className='introduction-description'>
            Over the years, I've worked with technologies like React, Laravel, and SQL to bring innovative projects to life. Whether it's developing web platforms, mobile applications, or IoT-based solutions, I focus on writing clean, maintainable code that drives impact.
        </p>
        <p className='introduction-description'>
            Beyond the technical side, I value collaboration, user-centered design, and continuous learning. I strive to build products that are not just functional but also intuitive and meaningful — helping solve real-world problems through technology.
        </p>
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="d-flex align-items-center gap-2 work-experience-wrapper" onClick={onScrollToExperience}>
          <h5 className='work-experience'>Work Experience</h5>
          <ArrowRight />
        </div>
      </div>
      <div className="right">
        <img className='profile-image' src={profile} alt="profile" />
      </div>
    </div>
  );
}

export default Introduction;