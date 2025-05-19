import './App.css';
import Navbar from './components/Navbar';
import Fotter from './layouts/Fotter';
import Home from './layouts/Home';
import Skills from './layouts/Skills';
import Projects from './layouts/Projects';
import Profile from './layouts/Profile';
import Hobby from './layouts/Hobby'; // Import Hobby component
import Experiences from './layouts/Experiences'; // Import Experiences component
import Certificates from './layouts/Certificates';

function App() {
  return (
    <div className='bg-stone-100'>
      <Navbar />
      <Home />
      <Hobby /> {/* Hobby section */}
      <Skills />
      <Certificates />
      <Projects />
      <Experiences /> {/* Add Experiences component here */}
      <Profile />
      <Fotter />
    </div>
  );
}

export default App;