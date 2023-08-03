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
    <div className={darkMode ? "app dark" : "app"}>
      <Hero toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Cta darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default App;
