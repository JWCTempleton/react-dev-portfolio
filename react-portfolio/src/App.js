import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Cta from "./components/Cta";

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Projects />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
