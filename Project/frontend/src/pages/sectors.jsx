import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const sectors = [
  { title: "ADMINISTRAÇÃO PÚBLICA", description: "Entidades governamentais e serviços públicos", color: "#2563eb", icon: "🛡️" },
  { title: "INDÚSTRIA", description: "Manufatura e processos industriais", color: "#9333ea", icon: "🗄️" },
  { title: "ENERGIA", description: "Produção e distribuição de energia", color: "#d97706", icon: "⚡" },
  { title: "SAÚDE", description: "Hospitais, clínicas e serviços de saúde", color: "#dc2626", icon: "🎯" },
  { title: "TRANSPORTE", description: "Logistica e infraestrutura de transporte", color: "#16a34a", icon: "📈" },
  { title: "EMPRESAS TECNOLÓGICAS", description: "Software, SaaS e serviços digitais", color: "#4f46e5", icon: "🌐" },
];

function SectorsSection() {
  const navigate = useNavigate();
  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh" }}>

      <div className="text-center py-5" style={{ background: "#fff", borderBottom: "1px solid #e5e4e7" }}>
        <span style={{ display: "inline-block", background: "#eaf4fb", color: "#3c8dbc", fontSize: 11, fontWeight: 700, letterSpacing: 2, padding: "4px 14px", borderRadius: 20, marginBottom: 16, border: "1px solid #bde0f5" }}>
          ÁREAS DE ATUAÇÃO
        </span>
        <h1 style={{ fontSize: 38, fontWeight: 700, color: "#1e293b", margin: "0 0 12px" }}>Setores que Servimos</h1>
        <p style={{ color: "#64748b", fontSize: 15 }}>Experiência especializada nas indústrias mais críticas e reguladas</p>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          {sectors.map((s, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div style={{ background: "#fff", border: "1px solid #e5e4e7", borderLeft: `4px solid ${s.color}`, borderRadius: 12, padding: "28px 24px", height: "100%" }}>
                <div style={{ width: 48, height: 48, background: "#f0f7ff", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>
                  {s.icon}
                </div>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1, color: "#1e293b", marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.6 }}>{s.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container pb-5">
        <div style={{ background: "#fff", border: "1px solid #e5e4e7", borderRadius: 12, padding: "40px 36px", textAlign: "center" }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: "#3c8dbc", marginBottom: 12, letterSpacing: 1 }}>PRONTO PARA PROTEGER O SEU SETOR?</h2>
          <p style={{ fontSize: 14, color: "#64748b", marginBottom: 24 }}>Fale connosco e descubra como podemos ajudar a sua organização.</p>
          <button onClick={() => navigate("/contact")} style={{ background: "linear-gradient(135deg, #2c3e50, #3c8dbc)", border: "none", borderRadius: 8, padding: "12px 32px", fontSize: 14, color: "#fff", fontWeight: 600, cursor: "pointer", letterSpacing: 0.5 }}>
            FALAR COM UM ESPECIALISTA →
          </button>
        </div>
      </div>

    </main>
  );
}

function Sectors() {
  return (
    <>
      <Navbar />
      <SectorsSection />
      <Footer />
    </>
  );
}

export default Sectors;