import Achievements from '@pages/Achievements/Achievements';
import Experience from '@pages/Experience/Experience';
import ProjectSection from '@pages/ProjectSection/ProjectSection';
import TechStack from '@pages/TechStackSection/TechStack';

function App() {
  return (
    <div className="main-container">
      <Experience />
      <ProjectSection />
      <TechStack />
      <Achievements />
    </div>
  );
}

export default App;
