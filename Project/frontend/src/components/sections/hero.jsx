function Hero() {
  return (
    <section 
      className="text-white py-5"
      style={{ background: "linear-gradient(to right, #2c3e50, #3c8dbc)" }}
    >
      <div className="container">
        <div className="row align-items-center">
          
          {/* Texto */}
          <div className="col-md-6">
            <h1 className="display-4 fw-bold mb-4">
              Cibersegurança para organizações
            </h1>
            <p className="lead mb-4">
              Num contexto em que os ataques cibernéticos aumentam todos os dias, as organizações precisam de proteger os seus sistemas, dados e serviços críticos. Apoiamos empresas e entidades públicas na redução do risco cibernético, no cumprimento de requisitos regulatórios, incluindo a Diretiva Europeia NIS2, e no reforço da sua postura de segurança.
            </p>
            <button className="btn btn-light btn-lg">
              Contactar
            </button>
          </div>

          {/* Lado direito */}
          <div className="col-md-6 text-center">
            <div className="bg-light text-dark d-flex align-items-center justify-content-center" style={{ height: "200px" }}>
              Imagem / Ilustração
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;