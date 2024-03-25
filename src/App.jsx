import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sklills from "./components/Sklills";
import Works from "./components/Works";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sklills />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
