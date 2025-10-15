import React, { useState, useEffect } from 'react';
import './NavbarStyle.scss';
import BurgerIcon from '@assets/icons/BurgerIcon';
import Logo from '@assets/images/icons/logo.png';

interface NavbarProps {
  sectionRefs: {
    home: React.RefObject<HTMLDivElement | null>;
    experience: React.RefObject<HTMLDivElement | null>;
    projects: React.RefObject<HTMLDivElement | null>;
    tech: React.RefObject<HTMLDivElement | null>;
    achievements: React.RefObject<HTMLDivElement | null>;
  };
}

function Navbar({ sectionRefs }: NavbarProps) {
  const [ show, setShow ] = useState(true);
  const [ lastScrollY, setLastScrollY ] = useState(0);
  const [ activeSection, setActiveSection ] = useState('home');
  // const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) setShow(false);
    else setShow(true);
    setLastScrollY(window.scrollY);
  };

  const handleScroll = () => {
    const scrollPos = window.scrollY + 100;
    for (const [ key, ref ] of Object.entries(sectionRefs)) {
      if (ref.current) {
        const offsetTop = ref.current.offsetTop;
        const offsetBottom = offsetTop + ref.current.offsetHeight;
        if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
          setActiveSection(key);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ lastScrollY, sectionRefs ]);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    // setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar d-flex justify-content-center align-items-center">
      <div className={`navbar-container ${show ? 'active' : 'hidden'}`}>
        <div className="logo">
          <img className="logo-image" src={Logo} alt="Logo.png" />
        </div>
        <ul className="nav-links px-2 py-0 m-0">
          {Object.entries(sectionRefs).map(([ key, ref ]) => (
            <li key={key}>
              <a
                href={`#${key}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(ref);
                }}
                className={activeSection === key ? 'active' : ''}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-100 d-flex justify-content-between align-items-center mobile-nav">
        <div className="logo">
          <img className="logo-image" src={Logo} alt="Logo.png" />
        </div>
        <div
          className="menu-icon"
          // onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <BurgerIcon />
        </div>

        {/* {mobileMenuOpen && (
          <div className="mobile-menu-modal">
            {Object.entries(sectionRefs).map(([ key, ref ]) => (
              <div
                key={key}
                className={`mobile-menu-item ${
                  activeSection === key ? 'active' : ''
                }`}
                onClick={() => scrollToSection(ref)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </div>
            ))}
          </div>
        )} */}
      </div>
    </nav>
  );
}

export default Navbar;
