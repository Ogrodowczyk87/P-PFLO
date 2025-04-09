import './App.css'
import Navbar from './components/Navbar';
import Fotter from './layouts/Fotter';
import Home from './layouts/Home';
import Skills from './layouts/Skills';

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <Skills />
      <Fotter />
    </div>
  );
}

export default App;
