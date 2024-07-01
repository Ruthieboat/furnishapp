import Navbar from "../../components/navbar";
import About from "./components/about";
import Collection from "./components/collection";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Production from "./components/production";
import Services from "./components/services";
import Statistic from "./components/statistic";
import Testimonial from "./components/testimonials";

const Landing = () => {
  return <div>
        <Hero/>
        <Services/>
        <About/>
        <Collection/>
        <Statistic/>
        <Testimonial/>
        <Production/>
    </div>;
};

export default Landing;