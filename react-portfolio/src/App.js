import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects"

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
