import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import Context from "../components/sections/Context";
import About from "../components/sections/About";
import Footer from "../components/Footer";

const sectors = [
  {
    title: "ADMINISTRAÇÃO PÚBLICA",
    description: "Entidades governamentais e serviços públicos",
    color: "#2563eb",
    icon: "🛡️",
  },
  {
    title: "INDÚSTRIA",
    description: "Manufatura e processos industriais",
    color: "#9333ea",
    icon: "🗄️",
  },
  {
    title: "ENERGIA",
    description: "Produção e distribuição de energia",
    color: "#d97706",
    icon: "⚡",
  },
  {
    title: "SAÚDE",
    description: "Hospitais, clínicas e serviços de saúde",
    color: "#dc2626",
    icon: "🎯",
  },
  {
    title: "TRANSPORTE",
    description: "Logistica e infraestrutura de transporte",
    color: "#16a34a",
    icon: "📈",
  },
  {
    title: "EMPRESAS TECNOLÓGICAS",
    description: "Software, SaaS e serviços de digitais",
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