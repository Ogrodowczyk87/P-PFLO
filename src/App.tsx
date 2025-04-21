import './App.css'
import Navbar from './components/Navbar';
import Fotter from './layouts/Fotter';
import Home from './layouts/Home';
import Skills from './layouts/Skills';
import Projects from './layouts/Projects';
import Profile from './layouts/Profile';

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Profile />
      <Fotter />
    </div>
  );
}

export default App;

  