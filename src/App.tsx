import Achievements from '@pages/Achievements/Achievements';
import Experience from '@pages/Experience/Experience';
import Introduction from '@pages/Introduction/Introduction';
import ProjectSection from '@pages/ProjectSection/ProjectSection';
import TechStack from '@pages/TechStackSection/TechStack';
// import Footer from '@shared/CustomFooter/Footer';

function App() {
  return (
    <div className="main-container">
      <Introduction />
      <Experience />
      <ProjectSection />
      <TechStack />
      <Achievements />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
