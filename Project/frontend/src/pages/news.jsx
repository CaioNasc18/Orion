import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
 
const CATEGORY_STYLES = {
  Ameaças:          { bg: "bg-red-100 text-red-700" },
  Vulnerabilidades: { bg: "bg-amber-100 text-amber-700" },
  "Boas práticas":  { bg: "bg-green-100 text-green-700" },
  Legislação:       { bg: "bg-blue-100 text-blue-700" },
  Ransomware:       { bg: "bg-red-100 text-red-700" },
  Malware:          { bg: "bg-red-100 text-red-700" },
  Phishing:         { bg: "bg-orange-100 text-orange-700" },
  Incidentes:       { bg: "bg-red-100 text-red-700" },
  Privacidade:      { bg: "bg-purple-100 text-purple-700" },
  "IA & Segurança": { bg: "bg-purple-100 text-purple-700" },
  Ferramentas:      { bg: "bg-green-100 text-green-700" },
};
 
const FILTERS = ["Todas", "Ameaças", "Vulnerabilidades", "Boas práticas", "Legislação", "Ransomware", "Incidentes"];
 
function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden animate-pulse">
      <div className="h-44 bg-gray-100" />
      <div className="p-5 space-y-3">
        <div className="flex gap-2">
          <div className="h-5 w-24 bg-gray-100 rounded-full" />
          <div className="h-5 w-20 bg-gray-100 rounded-full" />
        </div>
        <div className="h-4 bg-gray-100 rounded w-full" />
        <div className="h-4 bg-gray-100 rounded w-4/5" />
        <div className="h-3 bg-gray-100 rounded w-3/5" />
      </div>
    </div>
  );
}
 
function NewsCard({ post }) {
  const style = CATEGORY_STYLES[post.categoria] || { bg: "bg-gray-100 text-gray-600" };
 
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col">
      <div className="h-44 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      </div>
 
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${style.bg}`}>
            {post.categoria}
          </span>
          <span className="text-xs text-gray-400">{post.data}</span>
        </div>
 
        <h2 className="font-semibold text-gray-900 text-[15px] leading-snug">{post.titulo}</h2>
 
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{post.descricao}</p>
 
        <div className="flex flex-wrap gap-1.5">
          {(post.tags || []).map((tag, i) => (
            <span key={i} className="text-xs bg-gray-50 border border-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
 
        <div className="flex items-center justify-between pt-2 border-t border-gray-50 mt-auto">
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {post.autor}
          </span>
          {post.url && (
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1 font-medium"
            >
              Ler mais
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
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
      // Chama o teu backend Express — ver newsRoute.js
      const res = await fetch("/api/news");
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
 
  useEffect(() => {
    fetchNews();
  }, [fetchNews]);
 
  const filtered =
    activeFilter === "Todas"
      ? posts
      : posts.filter((p) => p.categoria === activeFilter);
 
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Últimas Notícias</h1>
        <p className="text-gray-500 mt-2 text-sm">
          Mantenha-se atualizado com as últimas notícias em cibersegurança.
        </p>
      </div>
 
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-xs px-3.5 py-1.5 rounded-full border transition-colors duration-150 ${
                activeFilter === f
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
 
        <button
          onClick={fetchNews}
          disabled={loading}
          className="flex items-center gap-2 text-sm px-4 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 ${loading ? "animate-spin" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {loading ? "A carregar..." : "Atualizar"}
        </button>
      </div>
 
      {error && (
        <div className="text-center py-10 text-red-500 bg-red-50 rounded-xl border border-red-100">
          {error}
        </div>
      )}
 
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {loading
          ? Array(6).fill(null).map((_, i) => <SkeletonCard key={i} />)
          : filtered.map((post, i) => <NewsCard key={i} post={post} />)}
      </div>
 
      {lastUpdate && !loading && (
        <p className="text-right text-xs text-gray-400 mt-6">
          Última atualização: {lastUpdate}
        </p>
      )}
    </section>
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