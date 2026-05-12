import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    icon: "🛡️", iconColor: "#3c8dbc", iconBg: "#eaf4fb",
    title: "IMPLEMENTAÇÃO DA DIRETIVA NIS2",
    description: "Ajudamos a sua organização a alinhar-se com os requisitos da diretiva europeia NIS2 através de uma abordagem estruturada.",
    items: ["Análise de enquadramento da entidade", "Avaliação de maturidade de cibersegurança", "Análise e gestão de risco", "Definição de políticas e procedimentos", "Implementação de controlos técnicos", "Apoio à gestão de incidentes"],
    highlight: true,
  },
  {
    icon: "👁️", iconColor: "#9333ea", iconBg: "#f3e8ff",
    title: "AUDITORIAS DE CIBERSEGURANÇA",
    description: "As auditorias permitem avaliar o nível real de segurança da organização.",
    items: ["Auditorias de configuração de sistemas", "Análise de vulnerabilidades", "Revisão da arquitetura de segurança", "Avaliação de controlos de acesso", "Auditoria a políticas e procedimentos"],
    highlight: false,
  },
  {
    icon: "👥", iconColor: "#ea580c", iconBg: "#fff3e8",
    title: "FORMAÇÃO E AWARENESS",
    description: "Uma parte significativa dos incidentes de segurança começa com erro humano. Os programas de awareness ajudam a reduzir este risco.",
    items: ["Formação em cibersegurança para colaboradores", "Campanhas de phishing simulado", "Workshops para equipas técnicas", "Sessões para equipas de gestão"],
    highlight: false,
  },
];

function Check({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function Services() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#f8fafc", minHeight: "100vh" }}>

        <div className="text-center py-5" style={{ background: "#fff", borderBottom: "1px solid #e5e4e7" }}>
          <span style={{ display: "inline-block", background: "#eaf4fb", color: "#3c8dbc", fontSize: 11, fontWeight: 700, letterSpacing: 2, padding: "4px 14px", borderRadius: 20, marginBottom: 16, border: "1px solid #bde0f5" }}>
            SOLUÇÕES EMPRESARIAIS
          </span>
          <h1 style={{ fontSize: 38, fontWeight: 700, color: "#1e293b", margin: "0 0 12px" }}>Os Nossos Serviços</h1>
          <p style={{ color: "#64748b", maxWidth: 520, margin: "0 auto", fontSize: 15 }}>
            Oferecemos uma gama completa de serviços de cibersegurança adaptados às necessidades da sua organização.
          </p>
        </div>

        <div className="container py-5">
          <div className="row g-4">
            {services.map((s, i) => (
              <div className="col-lg-4" key={i}>
                <div style={{ background: "#fff", borderRadius: 12, border: s.highlight ? "2px solid #3c8dbc" : "1px solid #e5e4e7", padding: 28, height: "100%", position: "relative", boxShadow: s.highlight ? "0 4px 24px rgba(60,141,188,0.12)" : "0 1px 4px rgba(0,0,0,0.05)" }}>
                  {s.highlight && (
                    <div style={{ position: "absolute", top: -1, right: 24, background: "#3c8dbc", color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, padding: "3px 10px", borderRadius: "0 0 6px 6px" }}>
                      DESTAQUE
                    </div>
                  )}
                  <div style={{ width: 52, height: 52, background: s.iconBg, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 20 }}>
                    {s.icon}
                  </div>
                  <h3 style={{ fontSize: 14, fontWeight: 800, color: "#1e293b", letterSpacing: 0.5, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 13.5, color: "#64748b", marginBottom: 20, lineHeight: 1.6 }}>{s.description}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {s.items.map((item, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13.5, color: "#475569" }}>
                        <Check color={s.iconColor} />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container pb-5">
          <div style={{ background: "#fff8f5", border: "1px solid #fcd5ba", borderLeft: "4px solid #ea580c", borderRadius: 10, padding: "28px 32px" }}>
            <h4 style={{ fontSize: 13, fontWeight: 800, letterSpacing: 1.5, color: "#1e293b", marginBottom: 12 }}>PORQUE A CIBERSEGURANÇA É CRÍTICA</h4>
            <p style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.75, margin: 0 }}>
              Hoje em dia quase todas as organizações dependem de sistemas digitais para funcionar. Um incidente de segurança pode causar <strong>interrupção de serviços</strong>, <strong>perda de dados</strong>, <strong>impacto financeiro</strong> e <strong>danos reputacionais</strong>. A cibersegurança é hoje uma questão de <strong>continuidade do negócio</strong>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Services;