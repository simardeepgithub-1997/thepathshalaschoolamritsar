import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Facilities from './components/Facilities';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Hero />
      <About />
      <Academics />
      <Facilities />
      <Footer />
    </div>
  );
}

export default App;
