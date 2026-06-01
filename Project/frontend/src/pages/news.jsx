import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

const CATEGORY_STYLES = {
  Ameaças:          { color: "#dc2626", bg: "#fff0f0", border: "#dc2626" },
  Vulnerabilidades: { color: "#d97706", bg: "#fffbeb", border: "#d97706" },
  "Boas práticas":  { color: "#16a34a", bg: "#eaf7ee", border: "#16a34a" },
  Legislação:       { color: "#3c8dbc", bg: "#eaf4fb", border: "#3c8dbc" },
  Ransomware:       { color: "#dc2626", bg: "#fff0f0", border: "#dc2626" },
  Malware:          { color: "#dc2626", bg: "#fff0f0", border: "#dc2626" },
  Phishing:         { color: "#ea580c", bg: "#fff3e8", border: "#ea580c" },
  Incidentes:       { color: "#dc2626", bg: "#fff0f0", border: "#dc2626" },
  Privacidade:      { color: "#9333ea", bg: "#f3e8ff", border: "#9333ea" },
  "IA & Segurança": { color: "#9333ea", bg: "#f3e8ff", border: "#9333ea" },
  Ferramentas:      { color: "#16a34a", bg: "#eaf7ee", border: "#16a34a" },
};

const FILTERS = ["Todas", "Ameaças", "Vulnerabilidades", "Boas práticas", "Legislação", "Ransomware", "Incidentes"];

function SkeletonCard() {
  return (
    <div style={{ background: "#fff", border: "1px solid #e5e4e7", borderRadius: 12, overflow: "hidden" }}>
      <div style={{ height: 8, background: "#e2e8f0" }} />
      <div style={{ padding: "20px 24px" }}>
        <div style={{ height: 12, background: "#f1f5f9", borderRadius: 6, width: "40%", marginBottom: 12 }} />
        <div style={{ height: 16, background: "#f1f5f9", borderRadius: 6, marginBottom: 8 }} />
        <div style={{ height: 16, background: "#f1f5f9", borderRadius: 6, width: "80%", marginBottom: 8 }} />
        <div style={{ height: 13, background: "#f1f5f9", borderRadius: 6, width: "60%" }} />
      </div>
    </div>
  );
}

function NewsCard({ post }) {
  const style = CATEGORY_STYLES[post.categoria] || { color: "#64748b", bg: "#f8fafc", border: "#64748b" };
  return (
    <div style={{ background: "#fff", border: "1px solid #e5e4e7", borderLeft: `4px solid ${style.border}`, borderRadius: 12, padding: "24px", display: "flex", flexDirection: "column", gap: 12, height: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: style.color, background: style.bg, padding: "3px 10px", borderRadius: 20 }}>
          {post.categoria}
        </span>
        <span style={{ fontSize: 12, color: "#94a3b8" }}>{post.data}</span>
      </div>
      <h2 style={{ fontSize: 15, fontWeight: 700, color: "#1e293b", lineHeight: 1.45, margin: 0 }}>{post.titulo}</h2>
      <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65, margin: 0, flex: 1 }}>{post.descricao}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {(post.tags || []).map((tag, i) => (
          <span key={i} style={{ fontSize: 11, background: "#f8fafc", border: "1px solid #e5e4e7", color: "#64748b", padding: "2px 8px", borderRadius: 20 }}>{tag}</span>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #f1f5f9", paddingTop: 12, marginTop: "auto" }}>
        <span style={{ fontSize: 12, color: "#94a3b8" }}>✍️ {post.autor}</span>
        {post.url && (
          <a href={post.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "#3c8dbc", fontWeight: 600, textDecoration: "none" }}>
            Ler mais →
          </a>
        )}
      </div>
    </div>
  );
}

function NewsSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Todas");
  const [lastUpdate, setLastUpdate] = useState(null);

  const fetchNews = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://orion-dewp.onrender.com/api/news");
      if (!res.ok) throw new Error("Erro no servidor");
      const data = await res.json();
      setPosts(data);
      setLastUpdate(new Date().toLocaleString("pt-PT"));
    } catch (e) {
      setError("Não foi possível carregar as notícias. Tenta novamente.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchNews(); }, [fetchNews]);

  const filtered = activeFilter === "Todas" ? posts : posts.filter((p) => p.categoria === activeFilter);

  return (
    <main style={{ background: "#f8fafc", minHeight: "100vh" }}>

      <div className="text-center py-5" style={{ background: "#fff", borderBottom: "1px solid #e5e4e7" }}>
        <span style={{ display: "inline-block", background: "#eaf4fb", color: "#3c8dbc", fontSize: 11, fontWeight: 700, letterSpacing: 2, padding: "4px 14px", borderRadius: 20, marginBottom: 16, border: "1px solid #bde0f5" }}>
          CIBERSEGURANÇA
        </span>
        <h1 style={{ fontSize: 38, fontWeight: 700, color: "#1e293b", margin: "0 0 12px" }}>Últimas Notícias</h1>
        <p style={{ color: "#64748b", fontSize: 15 }}>Mantenha-se atualizado com as últimas notícias em cibersegurança</p>
      </div>

      <div className="container py-5">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 28 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {FILTERS.map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)} style={{
                fontSize: 12, padding: "6px 14px", borderRadius: 20, border: `1px solid ${activeFilter === f ? "#3c8dbc" : "#e5e4e7"}`,
                background: activeFilter === f ? "#3c8dbc" : "#fff", color: activeFilter === f ? "#fff" : "#64748b",
                fontWeight: activeFilter === f ? 700 : 400, cursor: "pointer", transition: "all 0.15s"
              }}>{f}</button>
            ))}
          </div>
          <button onClick={fetchNews} disabled={loading} style={{ fontSize: 13, padding: "7px 18px", borderRadius: 8, border: "1px solid #e5e4e7", background: "#fff", color: "#475569", cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            {loading ? "⏳ A carregar..." : "🔄 Atualizar"}
          </button>
        </div>

        {error && (
          <div style={{ background: "#fff0f0", border: "1px solid #fca5a5", borderRadius: 12, padding: "20px", textAlign: "center", color: "#dc2626", marginBottom: 24 }}>
            {error}
          </div>
        )}

        <div className="row g-4">
          {loading
            ? Array(6).fill(null).map((_, i) => <div className="col-md-6 col-lg-4" key={i}><SkeletonCard /></div>)
            : filtered.map((post, i) => <div className="col-md-6 col-lg-4" key={i}><NewsCard post={post} /></div>)
          }
        </div>

        {lastUpdate && !loading && (
          <p style={{ textAlign: "right", fontSize: 12, color: "#94a3b8", marginTop: 24 }}>
            Última atualização: {lastUpdate}
          </p>
        )}
      </div>
    </main>
  );
}

function News() {
  return (
    <>
      <Navbar />
      <NewsSection />
      <Footer />
    </>
  );
}

export default News;