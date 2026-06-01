import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";

const contactInfo = [
  {
    icon: "📧",
    title: "EMAIL",
    value: "geral@orion.pt",
    link: "mailto:geral@orion.pt",
    color: "#3c8dbc",
    bg: "#eaf4fb",
  },
  {
    icon: "📞",
    title: "TELEFONE",
    value: "+351 000 000 000",
    link: "tel:+351000000000",
    color: "#16a34a",
    bg: "#eaf7ee",
  },
  {
    icon: "📍",
    title: "LOCALIZAÇÃO",
    value: "Lisboa, Portugal",
    link: null,
    color: "#9333ea",
    bg: "#f3e8ff",
  },
  {
    icon: "🕐",
    title: "HORÁRIO",
    value: "Seg–Sex, 9h–18h",
    link: null,
    color: "#ea580c",
    bg: "#fff3e8",
  },
];

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  fontSize: 13.5,
  border: "1px solid #e5e4e7",
  borderRadius: 8,
  outline: "none",
  color: "#1e293b",
  background: "#f8fafc",
};

const labelStyle = {
  display: "block",
  fontSize: 12,
  fontWeight: 700,
  color: "#475569",
  marginBottom: 6,
  letterSpacing: 0.5,
};

function Contacts() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    empresa: "",
    assunto: "",
    mensagem: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    if (!form.nome || !form.email || !form.mensagem) {
      return alert("Preenche os campos obrigatórios.");
    }

    setLoading(true);

    await new Promise((r) => setTimeout(r, 1000));

    setLoading(false);
    setSent(true);
  };

  return (
    <>
      <Navbar />

      <main style={{ background: "#f8fafc", minHeight: "100vh" }}>
        {/* HERO */}
        <div
          className="text-center py-5"
          style={{
            background: "#fff",
            borderBottom: "1px solid #e5e4e7",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "#eaf4fb",
              color: "#3c8dbc",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              padding: "4px 14px",
              borderRadius: 20,
              marginBottom: 16,
              border: "1px solid #bde0f5",
            }}
          >
            CONTACTO
          </span>

          <h1
            style={{
              fontSize: 38,
              fontWeight: 700,
              color: "#1e293b",
              margin: "0 0 12px",
            }}
          >
            Fale Connosco
          </h1>

          <p style={{ color: "#64748b", fontSize: 15 }}>
            A nossa equipa está pronta para ajudar a proteger a sua organização
          </p>
        </div>

        {/* CONTENT */}
        <div
          className="container py-5"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {/* CONTACT CARDS */}
          <div className="row g-4 mb-4">
            {contactInfo.map((c, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid #e5e4e7",
                    borderLeft: `4px solid ${c.color}`,
                    borderRadius: 12,
                    padding: "24px",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      background: c.bg,
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      marginBottom: 14,
                    }}
                  >
                    {c.icon}
                  </div>

                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: 1,
                      color: "#94a3b8",
                      marginBottom: 6,
                    }}
                  >
                    {c.title}
                  </div>

                  {c.link ? (
                    <a
                      href={c.link}
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: c.color,
                        textDecoration: "none",
                      }}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#1e293b",
                      }}
                    >
                      {c.value}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* FORM */}
          <div className="row justify-content-center g-4">
            <div className="col-lg-8">
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #e5e4e7",
                  borderRadius: 12,
                  padding: "36px",
                }}
              >
                <h2
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    letterSpacing: 1,
                    color: "#3c8dbc",
                    marginBottom: 24,
                  }}
                >
                  ENVIAR MENSAGEM
                </h2>

                {sent ? (
                  <div
                    style={{
                      background: "#eaf7ee",
                      border: "1px solid #86efac",
                      borderRadius: 12,
                      padding: "32px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>

                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#16a34a",
                        marginBottom: 8,
                      }}
                    >
                      Mensagem enviada!
                    </div>

                    <div style={{ fontSize: 13.5, color: "#64748b" }}>
                      Entraremos em contacto brevemente.
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                    }}
                  >
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label style={labelStyle}>Nome *</label>

                        <input
                          name="nome"
                          value={form.nome}
                          onChange={handle}
                          placeholder="O seu nome"
                          style={inputStyle}
                        />
                      </div>

                      <div className="col-md-6">
                        <label style={labelStyle}>Email *</label>

                        <input
                          name="email"
                          value={form.email}
                          onChange={handle}
                          placeholder="email@empresa.pt"
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <div className="row g-3">
                      <div className="col-md-6">
                        <label style={labelStyle}>Empresa</label>

                        <input
                          name="empresa"
                          value={form.empresa}
                          onChange={handle}
                          placeholder="Nome da empresa"
                          style={inputStyle}
                        />
                      </div>

                      <div className="col-md-6">
                        <label style={labelStyle}>Assunto</label>

                        <input
                          name="assunto"
                          value={form.assunto}
                          onChange={handle}
                          placeholder="Ex: Avaliação NIS2"
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Mensagem *</label>

                      <textarea
                        name="mensagem"
                        value={form.mensagem}
                        onChange={handle}
                        placeholder="Descreva como podemos ajudar..."
                        rows={5}
                        style={{
                          ...inputStyle,
                          resize: "vertical",
                        }}
                      />
                    </div>

                    <button
                      onClick={submit}
                      disabled={loading}
                      style={{
                        background:
                          "linear-gradient(135deg, #2c3e50, #3c8dbc)",
                        border: "none",
                        borderRadius: 8,
                        padding: "13px 32px",
                        fontSize: 14,
                        color: "#fff",
                        fontWeight: 600,
                        cursor: "pointer",
                        letterSpacing: 0.5,
                        opacity: loading ? 0.7 : 1,
                      }}
                    >
                      {loading ? "A enviar..." : "ENVIAR MENSAGEM →"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Contacts;