import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import Context from "../components/sections/Context";
import About from "../components/sections/About";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Context />
      <About />
      <Footer />
    </>
  );
}

export default Home;