//import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <About />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
