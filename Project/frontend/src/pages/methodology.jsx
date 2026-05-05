import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import Context from "../components/sections/Context";
import About from "../components/sections/About";
import Footer from "../components/Footer";

const methodology = [
  {
    title: "ISO/IEC 27001",
    description: "International standard for information security management",
    color: "#3b82f6",
    bg: "#eaf2ff",
    icon: "🛡️",
  },
  {
    title: "NIST FRAMEWORK",
    description: "Framework for cybersecurity from the National Institute of Standards and Technology",
    color: "#16a34a",
    bg: "#eaf7ee",
    icon: "📊",
  },
  {
    title: "CIS CONTROLS",
    description: "Prioritized set of actions for defense against cyber threats",
    color: "#9333ea",
    bg: "#f3e8ff",
    icon: "🎯",
  },
  {
    title: "ENISA GUIDELINES",
    description: "Recommendations from the European Union Agency for Cybersecurity",
    color: "#ea580c",
    bg: "#fff3e8",
    icon: "🏅",
  },
];

function Methodology() {
  return (
    <>
      <Navbar />
      <Hero />
      <Context frameworks={methodology} />
      <About />
      <Footer />
    </>
  );
}

export default Methodology;