import { useNavigate } from "react-router-dom";

const roles = [
  {
    icon: "🔒", color: "#3c8dbc", bg: "#eaf4fb", borderColor: "#3c8dbc",
    title: "ADMINISTRADOR", subtitle: "Acesso total ao sistema",
    items: ["Gestão de empresas e contas", "Todos os clientes", "Configurações do sistema", "Logs de atividade"],
    path: "/login",
  },
  {
    icon: "👥", color: "#16a34a", bg: "#eaf7ee", borderColor: "#16a34a",
    title: "GESTOR", subtitle: "Gestão de clientes",
    items: ["Dashboard de gestão", "Clientes atribuídos", "Gestão de incidências", "Relatórios e analytics"],
    path: "/login",
  },
  {
    icon: "👤", color: "#ea580c", bg: "#fff3e8", borderColor: "#ea580c",
    title: "CLIENTE", subtitle: "Portal do cliente",
    items: ["Dashboard personalizado", "Gestão de ativos", "Incidências e alertas", "Documentos e relatórios"],
    path: "/login",
  },
];

function ClientArea() {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #1e3a5f 0%, #2c5f8a 50%, #1a4a6b 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 20px", fontFamily: "system-ui, 'Segoe UI', sans-serif" }}>

      <button onClick={() => navigate("/")} style={{ background: "transparent", border: "none", color: "rgba(255,255,255,0.7)", fontSize: 14, cursor: "pointer", marginBottom: 32 }}>
        ← Voltar ao Website
      </button>

      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
        <div style={{ width: 48, height: 48, background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.3)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>🛡️</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: "#fff", margin: 0 }}>CyberBox Security</h1>
      </div>
      <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, marginBottom: 48 }}>Selecione o tipo de acesso</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, width: "100%", maxWidth: 960 }}>
        {roles.map((role, i) => (
          <div key={i} onClick={() => navigate(role.path)}
            style={{ background: "#fff", borderRadius: 14, borderTop: `4px solid ${role.borderColor}`, padding: "32px 28px", cursor: "pointer", boxShadow: "0 4px 24px rgba(0,0,0,0.15)", transition: "transform 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div style={{ width: 64, height: 64, background: role.bg, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, margin: "0 auto 20px" }}>{role.icon}</div>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: "#1e293b", margin: "0 0 6px" }}>{role.title}</h3>
              <p style={{ fontSize: 13.5, color: "#64748b", margin: 0 }}>{role.subtitle}</p>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {role.items.map((item, j) => (
                <li key={j} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13.5, color: "#475569" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: role.color, flexShrink: 0, display: "inline-block" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: 48 }}>© 2026 CyberBox Security — Sistema de Gestão de Cibersegurança</p>
    </div>
  );
}

export default ClientArea;