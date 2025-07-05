import "./App.css";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import NavBar from "./Component/Navbar";
import Projects from "./Component/Project";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
