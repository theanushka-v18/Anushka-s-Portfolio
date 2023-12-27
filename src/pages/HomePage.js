import Navbar from "../components/Navbar"
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      {/* <Skills />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  )
}

export default HomePage