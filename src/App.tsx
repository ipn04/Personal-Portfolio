import { useRef } from 'react';
import Achievements from '@pages/Achievements/Achievements';
import Experience from '@pages/Experience/Experience';
import Introduction from '@pages/Introduction/Introduction';
import ProjectSection from '@pages/ProjectSection/ProjectSection';
import TechStack from '@pages/TechStackSection/TechStack';
import Popup from '@shared/Popup/Popup';
// import Footer from '@shared/CustomFooter/Footer';

function App() {
  const experienceRef = useRef<HTMLDivElement | null>(null);

  const scrollToExperience = () => {
    experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="main-container">
      <Introduction onScrollToExperience={scrollToExperience} />
      <div ref={experienceRef}>
        <Experience />
      </div>
      <ProjectSection />
      <TechStack />
      <Achievements />
      <Popup />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
