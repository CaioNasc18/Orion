function Login() {
    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
            <div className="card shadow-sm border-0 overflow-hidden" style={{ maxWidth: 700, width: '100%' }}>
                <div className="row g-0">

                    {/* Painel lateral */}
                    <div className="col-md-4 d-flex flex-column justify-content-between p-4"
                        style={{ background: '#042C53', minHeight: 480 }}>
                        <div>
                            <i className="bi bi-shield-lock fs-1" style={{ color: '#378ADD' }}></i>
                            <h2 className="fw-bold mt-3" style={{ fontFamily: 'Georgia, serif', color: '#B5D4F4' }}>
                                CyberBox
                            </h2>
                            <p style={{ color: '#378ADD', fontSize: 13 }}>
                                Segurança cibernética para empresas modernas.
                            </p>
                            <ul className="list-unstyled mt-3" style={{ fontSize: 12, color: '#85B7EB' }}>
                                <li>✓ Certificado NIS2</li>
                                <li>✓ ISO 27001</li>
                                <li>✓ GDPR compliant</li>
                            </ul>
                        </div>
                        <small style={{ color: '#185FA5' }}>© 2026 CyberBox</small>
                    </div>

                    {/* Formulário */}
                    <div className="col-md-8 p-4 p-md-5 d-flex flex-column justify-content-center">
                        <h3 className="fw-bold mb-1">Área de Cliente</h3>
                        <p className="text-muted mb-4" style={{ fontSize: 14 }}>
                            Aceda à sua conta de forma segura.
                        </p>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-semibold" style={{ fontSize: 13 }}>
                                Email
                            </label>
                            <input type="email" className="form-control" id="email"
                                placeholder="nome@empresa.pt" />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="password" className="form-label fw-semibold" style={{ fontSize: 13 }}>
                                Palavra-passe
                            </label>
                            <input type="password" className="form-control" id="password"
                                placeholder="••••••••" />
                        </div>

                        <div className="text-end mb-3">
                            <a href="#" className="text-decoration-none" style={{ fontSize: 13 }}>
                                Esqueceu a palavra-passe?
                            </a>
                        </div>

                        <button className="btn w-100 text-white mb-3"
                            style={{ background: '#042C53' }}>
                            Entrar
                        </button>

                        <div className="text-center text-muted mb-3" style={{ fontSize: 12 }}>
                            ou continuar com
                        </div>

                        <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2"
                            style={{ fontSize: 13 }}>
                            <img src="https://www.google.com/favicon.ico" width={16} alt="" />
                            Google
                        </button>

                        <p className="text-center mt-3 text-muted" style={{ fontSize: 13 }}>
                            Não tem conta? <a href="#" className="text-decoration-none">Fale connosco</a>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;