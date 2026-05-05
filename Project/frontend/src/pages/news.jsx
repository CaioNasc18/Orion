 import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
 

 const posts = [
    {
      categoria: "Boas Práticas",
      data: "25/03/2026",
      titulo: "5 erros comuns em cibersegurança que as PMEs cometem",
      descricao:
        "Pequenas e médias empresas são alvos frequentes de ciberataques. Evite estes erros comuns.",
      autor: "Carlos Ferreira",
      tags: ["PME", "Boas Práticas", "Erros Comuns"],
      imagem: "https://via.placeholder.com/600x300",
    },
    {
      categoria: "Segurança",
      data: "20/03/2026",
      titulo: "Ransomware: Como proteger a sua organização",
      descricao:
        "Os ataques de ransomware estão a aumentar. Conheça as melhores práticas para proteger os seus dados.",
      autor: "Maria Santos",
      tags: ["Ransomware", "Ameaças", "Proteção"],
      imagem: "https://via.placeholder.com/600x300",
    },
    {
      categoria: "Legislação",
      data: "15/03/2026",
      titulo: "O que é a Diretiva NIS2 e como prepara a sua empresa",
      descricao:
        "A Diretiva NIS2 estabelece novos requisitos de cibersegurança para setores críticos.",
      autor: "João Silva",
      tags: ["NIS2", "Legislação", "Conformidade"],
      imagem: "https://via.placeholder.com/600x300",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">Últimas Notícias</h1>
      <p className="text-center text-gray-500 mt-2">
        Mantenha-se atualizado com as últimas notícias e desenvolvimentos em cibersegurança.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={post.imagem}
              alt={post.titulo}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  {post.categoria}
                </span>
                <span>{post.data}</span>
              </div>

              <h2 className="font-semibold text-lg mt-2">{post.titulo}</h2>

              <p className="text-gray-600 text-sm mt-2">{post.descricao}</p>

              <p className="text-xs text-gray-400 mt-3">👤 {post.autor}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

function News() {
  return (
    <>
      <Navbar />
      <Hero />
      <Context frameworks={news} />
      <About />
      <Footer />
    </>
  );
}

export default News;