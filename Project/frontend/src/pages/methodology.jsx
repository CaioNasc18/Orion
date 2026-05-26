import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const methodology = [
  { title: "ISO/IEC 27001", description: "Norma internacional para gestão de segurança da informação", color: "#3b82f6", bg: "#eaf2ff", icon: "🛡️" },
  { title: "NIST FRAMEWORK", description: "Framework de cibersegurança do National Institute of Standards and Technology", color: "#16a34a", bg: "#eaf7ee", icon: "📊" },
  { title: "CIS CONTROLS", description: "Conjunto prioritário de ações para defesa contra ameaças cibernéticas", color: "#9333ea", bg: "#f3e8ff", icon: "🎯" },
  { title: "ENISA GUIDELINES", description: "Recomendações da Agência Europeia para Segurança Cibernética", color: "#ea580c", bg: "#fff3e8", icon: "🏅" },
];

function MethodologySection() {
  const navigate = useNavigate();
  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh" }}>

      <div className="text-center py-5" style={{ background: "#fff", borderBottom: "1px solid #e5e4e7" }}>
        <span style={{ display: "inline-block", background: "#eaf4fb", color: "#3c8dbc", fontSize: 11, fontWeight: 700, letterSpacing: 2, padding: "4px 14px", borderRadius: 20, marginBottom: 16, border: "1px solid #bde0f5" }}>
          ABORDAGEM TÉCNICA
        </span>
        <h1 style={{ fontSize: 38, fontWeight: 700, color: "#1e293b", margin: "0 0 12px" }}>A Nossa Metodologia</h1>
        <p style={{ color: "#64748b", fontSize: 15 }}>Frameworks e normas internacionais que guiam o nosso trabalho</p>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          {methodology.map((m, i) => (
            <div className="col-md-6" key={i}>
              <div style={{ background: "#fff", border: "1px solid #e5e4e7", borderLeft: `4px solid ${m.color}`, borderRadius: 12, padding: "28px 24px", height: "100%" }}>
                <div style={{ width: 48, height: 48, background: m.bg, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>
                  {m.icon}
                </div>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1, color: "#1e293b", marginBottom: 8 }}>{m.title}</div>
                <div style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.6 }}>{m.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container pb-5">
        <div style={{ background: "#fff", border: "1px solid #e5e4e7", borderRadius: 12, padding: "40px 36px", textAlign: "center" }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: "#3c8dbc", marginBottom: 12, letterSpacing: 1 }}>QUER SABER MAIS SOBRE A NOSSA ABORDAGEM?</h2>
          <p style={{ fontSize: 14, color: "#64748b", marginBottom: 24 }}>Entre em contacto e explicamos como aplicamos estas frameworks ao seu caso.</p>
          <button onClick={() => navigate("/contacts")} style={{ background: "linear-gradient(135deg, #2c3e50, #3c8dbc)", border: "none", borderRadius: 8, padding: "12px 32px", fontSize: 14, color: "#fff", fontWeight: 600, cursor: "pointer", letterSpacing: 0.5 }}>
            FALAR COM UM ESPECIALISTA →
          </button>
        </div>
      </div>

    </main>
  );
}

function Methodology() {
  return (
    <>
      <Navbar />
      <MethodologySection />
      <Footer />
    </>
  );
}

export default Methodology;