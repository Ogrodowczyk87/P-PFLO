import './App.css';
import Navbar from './components/ui/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Profile from './pages/Profile';
import Hobby from './pages/Hobby';
import Experiences from './pages/Experiences';
import Certificates from './pages/Certificates';
import Github from './pages/Github'; // Import komponentu GitHub

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-blue-50 via-white to-yellow-100">
      <Navbar />
      <Home />
      <Skills />
      {/* <Github /> */}  {/* temporary rejection component  env file with old token */}
      <Certificates />
      <Projects />
      <Experiences />
      <Hobby />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
