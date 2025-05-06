import './App.css';
import Navbar from './components/Navbar';
import Fotter from './layouts/Fotter';
import Home from './layouts/Home';
import Skills from './layouts/Skills';
import Projects from './layouts/Projects';
import Profile from './layouts/Profile';
import Hobby from './layouts/Hobby'; // Import Hobby component
import Experiences from './layouts/Experiences'; // Import Experiences component

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Hobby /> {/* Hobby section */}
      <Experiences /> {/* Add Experiences component here */}
      <Skills />
      <Projects />
      <Profile />
      <Fotter />
    </div>
  );
}

export default App;

