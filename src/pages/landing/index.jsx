import Navbar from "../../components/navbar";
import About from "./components/about";
import Collection from "./components/collection";
import Hero from "./components/hero";
import Services from "./components/services";

const Landing = () => {
  return <div>
        <Navbar/>
        <Hero/>
        <Services/>
        <About/>
        <Collection/>
    </div>;
  
};

export default Landing;