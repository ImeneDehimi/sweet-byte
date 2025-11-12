import Flavors from './Components/Flavors'
import Footer from './Components/Footer';
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import 'animate.css';
import PriceCalculator from './Components/PriceCalculator';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from './Components/About';
import Contact from './Components/Contact';



const App = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (1s)
      once: false,    // animation happens every time you scroll back
      offset: 100,    // start the animation a bit before element is visible
    });
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Flavors></Flavors>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App