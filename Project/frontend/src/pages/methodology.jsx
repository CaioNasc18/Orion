import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import Context from "../components/sections/Context";
import About from "../components/sections/About";
import Footer from "../components/Footer";

const methodology = [
  {
    title: "ISO/IEC 27001",
    description: "Norma internacional para gestão de segurança da informação",
    color: "#3b82f6",
    bg: "#eaf2ff",
    icon: "🛡️",
  },
  {
    title: "NIST FRAMEWORK",
    description: "Framework de cibersegurança do National Institute of Standards and Technology",
    color: "#16a34a",
    bg: "#eaf7ee",
    icon: "📊",
  },
  {
    title: "CIS CONTROLS",
    description: "Conjunto prioritário de ações para defesa contra ameaças cibernéticas",
    color: "#9333ea",
    bg: "#f3e8ff",
    icon: "🎯",
  },
  {
    title: "ENISA GUIDELINES",
    description: "Recomendações da Agência Europeia para Segurança Cibernética",
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