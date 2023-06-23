import React from "react";
import { GlobalStyles } from "./styles/global";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";


function App() {

  let location = useLocation();

  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      {location.pathname=='/' && <Home />}
      {location.pathname=='/about' && <About />}
      {location.pathname=='/projects' && <Projects />}
      {location.pathname=='/skills' && <Skills />}
      {location.pathname=='/certificates' && <Certificates />}
      <Footer />
    </div>
  );
}

export default App;
