import "./App.css";
import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Cta from "./components/Cta";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }
  return (
    <div className="app">
      <Hero toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <About />
      <Projects />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
