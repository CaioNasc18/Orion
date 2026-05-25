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
      <main className="page-main">

        <div className="page-header">
          <span className="page-badge">SOLUÇÕES EMPRESARIAIS</span>
          <h1 className="page-title">Os Nossos Serviços</h1>
          <p className="page-subtitle">
            Oferecemos uma gama completa de serviços de cibersegurança adaptados às necessidades da sua organização.
          </p>
        </div>

        <div className="container py-5">
          <div className="row g-4">
            {services.map((s, i) => (
              <div className="col-lg-4" key={i}>
                <div className={`service-card ${s.highlight ? "destaque" : ""}`}>
                  {s.highlight && <div className="destaque-badge">DESTAQUE</div>}
                  <div className="service-icon" style={{ background: s.iconBg }}>
                    {s.icon}
                  </div>
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.description}</p>
                  <ul className="service-items">
                    {s.items.map((item, j) => (
                      <li key={j}>
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
          <div className="critical-box">
            <h4>PORQUE A CIBERSEGURANÇA É CRÍTICA</h4>
            <p>
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