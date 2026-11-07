import './App.css';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import HomeSection from './sections/HomeSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import HobbiesSection from './sections/HobbiesSection';
import ExperienceSection from './sections/ExperienceSection';
import CertificatesSection from './sections/CertificatesSection';

function App() {
  return (
    <div className="portfolio-theme">
      <Navbar />
      <main>
        <HomeSection />
        <SkillsSection />
        <CertificatesSection />
        <ProjectsSection />
        <ExperienceSection />
        <HobbiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
