import { IconContext } from "react-icons";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <IconContext.Provider value={{ size: "1.2em" }}>
      <div style={{ background: "#0a0a0f", minHeight: "100vh" }}>
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </IconContext.Provider>
  );
}

export default App;

