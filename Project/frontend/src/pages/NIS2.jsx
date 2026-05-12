import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const sectors = [
  { icon: "⚡", label: "Energia" },
  { icon: "🚆", label: "Transportes" },
  { icon: "🏥", label: "Saúde" },
  { icon: "💧", label: "Água potável e saneamento" },
  { icon: "🌐", label: "Infraestruturas digitais" },
  { icon: "🛡️", label: "Administração pública" },
];

const howWeHelp = [
  { color: "#3c8dbc", bg: "#eaf4fb", icon: "🛡️", title: "ANÁLISE DE ENQUADRAMENTO", desc: "Determinamos se a sua entidade está abrangida pela NIS2" },
  { color: "#16a34a", bg: "#eaf7ee", icon: "📊", title: "AVALIAÇÃO DE MATURIDADE", desc: "Análise do nível atual de cibersegurança" },
  { color: "#9333ea", bg: "#f3e8ff", icon: "🎯", title: "GESTÃO DE RISCO", desc: "Implementação de framework de análise de risco" },
  { color: "#ea580c", bg: "#fff3e8", icon: "📄", title: "POLÍTICAS E PROCEDIMENTOS", desc: "Desenvolvimento de documentação necessária" },
  { color: "#dc2626", bg: "#fff0f0", icon: "🔒", title: "CONTROLOS TÉCNICOS", desc: "Implementação de medidas de segurança adequadas" },
  { color: "#7c3aed", bg: "#f0ebff", icon: "👁️", title: "GESTÃO DE INCIDENTES", desc: "Apoio à comunicação e resposta a incidentes" },
];

function Check({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function NIS2() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main style={{ background: "#f8fafc", minHeight: "100vh" }}>

        <div className="text-center py-5" style={{ background: "#fff", borderBottom: "1px solid #e5e4e7" }}>
          <span style={{ display: "inline-block", background: "#eaf4fb", color: "#3c8dbc", fontSize: 11, fontWeight: 700, letterSpacing: 2, padding: "4px 14px", borderRadius: 20, marginBottom: 16, border: "1px solid #bde0f5" }}>
            LEGISLAÇÃO EUROPEIA
          </span>
          <h1 style={{ fontSize: 38, fontWeight: 700, color: "#1e293b", margin: "0 0 12px" }}>Diretiva NIS2 em Portugal</h1>
          <p style={{ color: "#64748b", fontSize: 15 }}>A Diretiva NIS2 foi transposta para a legislação portuguesa através do Decreto-Lei n.º 125/2025</p>
        </div>

        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-6">
              <div style={{ background: "linear-gradient(135deg, #1e3a5f, #2c5f8a)", borderRadius: 12, padding: 36, color: "#fff", height: "100%" }}>
                <h2 style={{ fontSize: 16, fontWeight: 800, letterSpacing: 1, color: "#fff", marginBottom: 18 }}>O QUE É A DIRETIVA NIS2</h2>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "#c8dff0", marginBottom: 28 }}>
                  A Diretiva NIS2 (Network and Information Security Directive 2) é legislação europeia destinada a reforçar a cibersegurança e a resiliência digital das organizações que prestam serviços essenciais ou importantes para a sociedade e economia.
                </p>
                {["Ataques de ransomware", "Exploração de vulnerabilidades em infraestruturas críticas", "Espionagem digital", "Ataques a serviços públicos e cadeias de abastecimento"].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, fontSize: 13.5, color: "#c8dff0", marginBottom: 12 }}>
                    <span>⚠️</span>{item}
                  </div>
                ))}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 20, marginTop: 8 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 4 }}>Em vigor na União Europeia desde 2023</div>
                  <div style={{ fontSize: 13, color: "#c8dff0" }}>Transposta para Portugal através do <strong style={{ color: "#fff" }}>Decreto-Lei n.º 125/2025</strong></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e4e7", padding: 36, height: "100%" }}>
                <h2 style={{ fontSize: 16, fontWeight: 800, letterSpacing: 1, color: "#3c8dbc", marginBottom: 8 }}>A QUEM SE APLICA</h2>
                <p style={{ fontSize: 13.5, color: "#64748b", marginBottom: 20 }}>A NIS2 aplica-se a <strong>Entidades Essenciais</strong> e <strong>Entidades Importantes</strong>:</p>
                {sectors.map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 16px", background: "#f0f7ff", borderRadius: 8, borderLeft: "3px solid #3c8dbc", fontSize: 14, color: "#1e293b", fontWeight: 500, marginBottom: 8 }}>
                    <span>{s.icon}</span>{s.label}
                  </div>
                ))}
                <div style={{ background: "#fffbeb", border: "1px solid #fcd34d", borderLeft: "3px solid #f59e0b", borderRadius: 8, padding: "14px 16px", fontSize: 13, color: "#475569", lineHeight: 1.65, marginTop: 16 }}>
                  <strong>Critérios gerais:</strong> Organizações com <strong>mais de 50 colaboradores</strong> ou com <strong>volume de negócios superior a 10 milhões de euros</strong>.<br />
                  Em Portugal, a autoridade responsável é o <strong>Centro Nacional de Cibersegurança (CNCS)</strong>.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pb-5">
          <div style={{ background: "#fff5f5", border: "1px solid #fca5a5", borderRadius: 12, padding: "40px 36px", textAlign: "center" }}>
            <div style={{ width: 52, height: 52, background: "#dc2626", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 24 }}>⚠️</div>
            <h2 style={{ fontSize: 20, fontWeight: 800, letterSpacing: 1.5, color: "#1e293b", marginBottom: 8 }}>SANÇÕES POR INCUMPRIMENTO</h2>
            <p style={{ fontSize: 14, color: "#64748b", marginBottom: 32 }}>As penalizações por não conformidade são significativas</p>
            <div className="row g-4 text-start mb-4">
              {[
                { title: "ENTIDADES ESSENCIAIS", icon: "🛡️", color: "#dc2626", items: ["Até €10 milhões ou 2% do volume de negócios", "Auditorias obrigatórias", "Ordens de implementação de medidas"] },
                { title: "ENTIDADES IMPORTANTES", icon: "🗄️", color: "#ea580c", items: ["Até €7 milhões ou 1.4% do volume de negócios", "Supervisão regulatória", "Responsabilização da gestão executiva"] },
              ].map((block, i) => (
                <div className="col-md-6" key={i}>
                  <div style={{ background: "#fff", border: "1px solid #e5e4e7", borderLeft: `4px solid ${block.color}`, borderRadius: 8, padding: "20px 24px" }}>
                    <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1, color: "#1e293b", marginBottom: 14 }}>{block.icon} {block.title}</div>
                    {block.items.map((item, j) => (
                      <div key={j} style={{ display: "flex", gap: 8, fontSize: 13.5, color: "#475569", marginBottom: 8 }}>
                        <Check color={block.color} />{item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => navigate("/contacto")} style={{ background: "linear-gradient(135deg, #2c3e50, #3c8dbc)", border: "none", borderRadius: 8, padding: "12px 32px", fontSize: 14, color: "#fff", fontWeight: 600, cursor: "pointer", letterSpacing: 0.5 }}>
              AVALIE A SUA CONFORMIDADE NIS2 →
            </button>
          </div>
        </div>

        <div className="container pb-5">
          <div style={{ background: "#fff", border: "1px solid #e5e4e7", borderRadius: 12, padding: "40px 36px" }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#3c8dbc", textAlign: "center", marginBottom: 36, letterSpacing: 1 }}>COMO AJUDAMOS NA CONFORMIDADE NIS2</h2>
            <div className="row g-4">
              {howWeHelp.map((item, i) => (
                <div className="col-md-4" key={i}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div style={{ width: 42, height: 42, background: item.bg, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0, borderLeft: `3px solid ${item.color}` }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, color: "#1e293b", marginBottom: 4 }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NIS2;