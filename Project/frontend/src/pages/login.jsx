import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // 🔥 direto para o dashboard (sem validação)
        navigate('/adminDashboard');
    };

    return (
        <div className="vh-100 d-flex">
            <div className="row g-0 w-100 h-100">

                {/* Painel lateral */}
                <div className="col-md-4 d-flex flex-column justify-content-between p-4"
                    style={{ background: '#042C53' }}>
                    <div>
                        <i className="bi bi-shield-lock fs-1" style={{ color: '#378ADD' }}></i>
                        <h2 className="fw-bold mt-3" style={{ fontFamily: 'Georgia, serif', color: '#B5D4F4' }}>
                            CyberBox
                        </h2>
                        <p style={{ color: '#378ADD', fontSize: 13 }}>
                            Segurança cibernética para empresas modernas.
                        </p>
                        <ul className="list-unstyled mt-3" style={{ fontSize: 12, color: '#85B7EB' }}>
                            <li>✓ Conformidade e segurança digital</li>
                            <li>✓ Controlo e prevenção de ameaças</li>
                            <li>✓ Infraestrutura tecnológica segura</li>
                        </ul>
                    </div>
                    <small style={{ color: '#185FA5' }}>© 2026 CyberBox</small>
                </div>

                {/* Formulário */}
                <div className="col-md-8 d-flex flex-column justify-content-center p-5"
                    style={{ background: '#f8f9fa' }}>

                    <div style={{ maxWidth: 480, width: '100%', margin: '0 auto' }}>

                        <h3 className="fw-bold mb-1">Login</h3>
                        <p className="text-muted mb-4" style={{ fontSize: 14 }}>
                            Aceda à sua conta de forma segura.
                        </p>

                        {/* 👇 FORM agora funcional */}
                        <form onSubmit={handleLogin}>

                            <div className="mb-3">
                                <label className="form-label fw-semibold" style={{ fontSize: 13 }}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="nome@empresa.pt"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="mb-2">
                                <label className="form-label fw-semibold" style={{ fontSize: 13 }}>
                                    Palavra-passe
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="text-end mb-3">
                                <a href="#" className="text-decoration-none" style={{ fontSize: 13 }}>
                                    Esqueceu a palavra-passe?
                                </a>
                            </div>

                            <button
                                type="submit"
                                className="btn w-100 text-white mb-3"
                                style={{ background: '#042C53' }}
                            >
                                Entrar
                            </button>

                        </form>

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