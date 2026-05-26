import Navbar from "../components/navbar";
import Hero from "../components/sections/hero";
import Context from "../components/sections/context";
import About from "../components/sections/about";
import Footer from "../components/footer";

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