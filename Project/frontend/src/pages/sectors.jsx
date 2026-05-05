import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import Context from "../components/sections/Context";
import About from "../components/sections/About";
import Footer from "../components/Footer";

const sectors = [
  {
    title: "PUBLIC ADMINISTRATION",
    description: "Governmental entities and public services",
    color: "#2563eb",
    icon: "🛡️",
  },
  {
    title: "INDUSTRY",
    description: "Manufacturing and industrial processes",
    color: "#9333ea",
    icon: "🗄️",
  },
  {
    title: "ENERGY",
    description: "Production and distribution of energy",
    color: "#d97706",
    icon: "⚡",
  },
  {
    title: "HEALTH",
    description: "Hospitals, clinics and health services",
    color: "#dc2626",
    icon: "🎯",
  },
  {
    title: "TRANSPORT",
    description: "Logistics and transportation infrastructure",
    color: "#16a34a",
    icon: "📈",
  },
  {
    title: "TECHNOLOGY COMPANIES",
    description: "Software, SaaS and digital services",
    color: "#4f46e5",
    icon: "🌐",
  },
];

function Sectors() {
  return (
    <>
      <Navbar />
      <Hero />
      <Context sectors={sectors} />
      <About />
      <Footer />
    </>
  );
}

export default Sectors;