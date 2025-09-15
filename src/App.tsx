import { useRef } from 'react';
import Achievements from '@pages/Achievements/Achievements';
import Experience from '@pages/Experience/Experience';
import Introduction from '@pages/Introduction/Introduction';
import ProjectSection from '@pages/ProjectSection/ProjectSection';
import TechStack from '@pages/TechStackSection/TechStack';
import Footer from '@shared/CustomFooter/Footer';
import Popup from '@shared/Popup/Popup';

function App() {
  const introRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const techRef = useRef<HTMLDivElement | null>(null);
  const achievementsRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="main-container">
      <div ref={introRef}>
        <Introduction onScrollToExperience={() => scrollTo(experienceRef)} />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={projectRef}>
        <ProjectSection />
      </div>
      <div ref={techRef}>
        <TechStack />
      </div>
      <div ref={achievementsRef}>
        <Achievements />
      </div>
      <Popup />
      <Footer
        onScrollTo={(section: string) => {
          switch (section) {
            case 'home':
              scrollTo(introRef);
              break;
            case 'experience':
              scrollTo(experienceRef);
              break;
            case 'projects':
              scrollTo(projectRef);
              break;
            case 'tech':
              scrollTo(techRef);
              break;
            case 'achievements':
              scrollTo(achievementsRef);
              break;
          }
        }}
      />
    </div>
  );
}

export default App;
