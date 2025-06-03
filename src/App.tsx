import './App.css';
import Navbar from './components/Navbar';
import Fotter from './layouts/Fotter';
import Home from './layouts/Home';
import Skills from './layouts/Skills';
import Projects from './layouts/Projects';
import Profile from './layouts/Profile';
import Hobby from './layouts/Hobby';
import Experiences from './layouts/Experiences';
import Certificates from './layouts/Certificates';

function App() {
  return (
    <div className='bg-cod'>
      <Navbar />
      <Home />
      <Hobby />
      <Skills />
      <Certificates />
      <Projects />
      <Experiences />
      <Fotter />
    </div>
  );
}

export default App;