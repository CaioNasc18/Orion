import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminDashboard() {
    const [active, setActive] = useState("dashboard");

    const nav = [
        { id: "dashboard", label: "Dashboard" },
        { id: "accounts", label: "Contas" },
        { id: "tickets", label: "Tickets" },
        { id: "requests", label: "Pedidos" },
        { id: "docs", label: "Documentos" },
        { id: "settings", label: "Configurações" },
        { id: "content", label: "Gestão de Conteúdo" },
    ];

    const renderContent = () => {
        switch (active) {
            case "dashboard": return <Dashboard />;
            case "accounts": return <Accounts />;
            case "tickets": return <Tickets />;
            case "requests": return <Requests />;
            case "docs": return <Docs />;
            case "settings": return <Settings />;
            case "content": return <Content />;
            default: return null;
        }
    };

    return (
        <div className="d-flex vh-100">

            {/* SIDEBAR */}
            <div className="bg-dark text-white p-3 d-flex flex-column" style={{ width: 250 }}>
                <h4 className="mb-4">CyberBox</h4>
                {nav.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={`btn w-100 mb-2 text-start ${active === item.id ? "btn-primary" : "btn-outline-light"}`}
                    >
                        {item.label}
                    </button>
                ))}
                <div className="mt-auto pt-4 small text-secondary">© 2026 CyberBox</div>
            </div>

            {/* MAIN */}
            <div className="flex-grow-1 bg-light p-4 overflow-auto">

                {/* TOPBAR */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="m-0 text-capitalize">{active}</h4>
                    <div className="d-flex align-items-center gap-2">
                        <span className="badge bg-dark">Admin</span>
                        <img src="https://i.pravatar.cc/40" className="rounded-circle" alt="admin" />
                    </div>
                </div>

                {renderContent()}
            </div>
        </div>
    );
}

/* ───────────────────────── DASHBOARD ───────────────────────── */
function Dashboard() {
    return (
        <>
            <div className="row g-3 mb-4">
                <Card title="Utilizadores" value="24" color="primary" />
                <Card title="Tickets" value="7" color="danger" />
                <Card title="Pedidos" value="12" color="warning" />
                <Card title="Documentos" value="38" color="success" />
            </div>
            <div className="card p-3">
                <h6>Atividade recente</h6>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Admin fez login</li>
                    <li className="list-group-item">Ticket #T002 atualizado</li>
                    <li className="list-group-item">Novo utilizador criado</li>
                </ul>
            </div>
        </>
    );
}

/* ───────────────────────── ACCOUNTS ───────────────────────── */
function Accounts() {
    const [accounts, setAccounts] = useState([
        {
            id: 1,
            company: "TechCorp",
            clients: [{ name: "João Pereira", email: "joao@techcorp.com", phone: "+351 910 000 001" }],
            securityManager: { name: "Carlos Silva", email: "carlos@techcorp.com", phone: "+351 910 000 002" },
            permanentContact: { name: "Ana Costa", email: "ana@techcorp.com", phone: "+351 910 000 003" },
            status: "Ativo",
        },
    ]);

    const emptyCompanyForm = {
        company: "", status: "Ativo", companyId: "",
        clients: [{ name: "", email: "", phone: "" }],
        securityManager: { name: "", email: "", phone: "" },
        permanentContact: { name: "", email: "", phone: "" },
    };

    const emptyPersonForm = { name: "", email: "", phone: "", password: "" };

    const [showForm, setShowForm] = useState(false);
    const [formTab, setFormTab] = useState("company");
    const [companyForm, setCompanyForm] = useState(emptyCompanyForm);
    const [admins, setAdmins] = useState([]);
    const [managers, setManagers] = useState([]);
    const [adminForm, setAdminForm] = useState(emptyPersonForm);
    const [managerForm, setManagerForm] = useState(emptyPersonForm);
    const [expanded, setExpanded] = useState(null);

    const setField = (f, v) => setCompanyForm((p) => ({ ...p, [f]: v }));
    const setSubField = (s, f, v) => setCompanyForm((p) => ({ ...p, [s]: { ...p[s], [f]: v } }));
    const setClient = (i, f, v) => setCompanyForm((p) => {
        const c = [...p.clients]; c[i] = { ...c[i], [f]: v }; return { ...p, clients: c };
    });
    const addClient = () => setCompanyForm((p) => ({ ...p, clients: [...p.clients, { name: "", email: "", phone: "" }] }));
    const removeClient = (i) => setCompanyForm((p) => ({ ...p, clients: p.clients.filter((_, idx) => idx !== i) }));

    const generatePassword = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
        return Array.from({ length: 12 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
    };

    const handleCreate = () => {
        if (formTab === "company" && companyForm.company) {
            setAccounts([...accounts, { id: Date.now(), ...companyForm }]);
            setCompanyForm(emptyCompanyForm);
        } else if (formTab === "admin" && adminForm.name && adminForm.email) {
            setAdmins((prev) => [
                ...prev,
                {
                    id: Date.now(),
                    ...adminForm,
                },
            ]);
            setAdminForm(emptyPersonForm);
        }
        else if (formTab === "manager" && managerForm.name && managerForm.email) {
            setManagers((prev) => [
                ...prev,
                {
                    id: Date.now(),
                    ...managerForm,
                },
            ]);
            setManagerForm(emptyPersonForm);
        }
        setShowForm(false);
    };

    return (
        <div className="card p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">Gestão de Contas</h5>
                <button className="btn btn-sm btn-dark" onClick={() => setShowForm(!showForm)}>
                    {showForm ? "Cancelar" : "+ Nova Conta"}
                </button>
            </div>

            {/* ── Formulário com tabs ── */}
            {showForm && (
                <div className="border p-3 mb-4 bg-white">
                    <h6 className="mb-3">Nova Conta</h6>

                    {/* Tabs internas */}
                    <ul className="nav nav-tabs mb-3">
                        {[
                            { id: "company", label: "Empresa / Cliente" },
                            { id: "admin", label: "Administrador" },
                            { id: "manager", label: "Gestor" },
                        ].map((t) => (
                            <li className="nav-item" key={t.id}>
                                <button
                                    className={`nav-link ${formTab === t.id ? "active" : ""}`}
                                    onClick={() => setFormTab(t.id)}
                                >
                                    {t.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {formTab === "company" && (
                        <>
                            {/* ── Escolha inicial ── */}
                            <div className="row g-2 mb-3">
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold" style={{ fontSize: 12 }}>Empresa *</label>
                                    <select className="form-select form-select-sm"
                                        value={companyForm.companyId || ""}
                                        onChange={(e) => setField("companyId", e.target.value)}>
                                        <option value="">+ Criar nova empresa</option>
                                        {accounts.map((a) => (
                                            <option key={a.id} value={a.id}>{a.company}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Estado só aparece se for empresa nova */}
                                {!companyForm.companyId && (
                                    <>
                                        <div className="col-md-4">
                                            <label className="form-label fw-semibold" style={{ fontSize: 12 }}>Nome da Empresa *</label>
                                            <input className="form-control form-control-sm" placeholder="Ex: TechCorp Lda"
                                                value={companyForm.company} onChange={(e) => setField("company", e.target.value)} />
                                        </div>
                                        <div className="col-md-2">
                                            <label className="form-label fw-semibold" style={{ fontSize: 12 }}>Estado</label>
                                            <select className="form-select form-select-sm"
                                                value={companyForm.status} onChange={(e) => setField("status", e.target.value)}>
                                                <option value="Ativo">Ativo</option>
                                                <option value="Pendente">Pendente</option>
                                                <option value="Inativo">Inativo</option>
                                            </select>
                                        </div>
                                    </>
                                )}
                            </div>
                            <hr />

                            {/* Clientes */}
                            <div className="mb-3">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <label className="fw-semibold" style={{ fontSize: 13 }}>Clientes</label>
                                    <button className="btn btn-sm btn-outline-dark" onClick={addClient}>+ Adicionar Cliente</button>
                                </div>
                                {companyForm.clients.map((client, i) => (
                                    <div className="row g-2 mb-2 align-items-end" key={i}>
                                        <div className="col-md-3">
                                            <label className="form-label" style={{ fontSize: 11 }}>Nome</label>
                                            <input className="form-control form-control-sm" placeholder="Nome"
                                                value={client.name} onChange={(e) => setClient(i, "name", e.target.value)} />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label" style={{ fontSize: 11 }}>Email</label>
                                            <input className="form-control form-control-sm" placeholder="email@empresa.com"
                                                value={client.email} onChange={(e) => setClient(i, "email", e.target.value)} />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label" style={{ fontSize: 11 }}>Telefone</label>
                                            <input className="form-control form-control-sm" placeholder="+351 910 000 000"
                                                value={client.phone} onChange={(e) => setClient(i, "phone", e.target.value)} />
                                        </div>
                                        <div className="col-md-2">
                                            {companyForm.clients.length > 1 && (
                                                <button className="btn btn-sm btn-outline-danger w-100"
                                                    onClick={() => removeClient(i)}>Remover</button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Responsável e Contacto — só para empresa nova */}
                            {!companyForm.companyId && (
                                <>
                                    <hr />
                                    <div className="mb-3">
                                        <label className="fw-semibold d-block mb-2" style={{ fontSize: 13 }}>Responsável de Segurança</label>
                                        <div className="row g-2">
                                            {["name", "email", "phone"].map((f) => (
                                                <div className="col-md-4" key={f}>
                                                    <label className="form-label" style={{ fontSize: 11 }}>
                                                        {f === "name" ? "Nome" : f === "email" ? "Email" : "Telefone"}
                                                    </label>
                                                    <input className="form-control form-control-sm"
                                                        placeholder={f === "name" ? "Nome" : f === "email" ? "email@empresa.com" : "+351 910 000 000"}
                                                        value={companyForm.securityManager[f]}
                                                        onChange={(e) => setSubField("securityManager", f, e.target.value)} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="mb-3">
                                        <label className="fw-semibold d-block mb-2" style={{ fontSize: 13 }}>Contacto Permanente</label>
                                        <div className="row g-2">
                                            {["name", "email", "phone"].map((f) => (
                                                <div className="col-md-4" key={f}>
                                                    <label className="form-label" style={{ fontSize: 11 }}>
                                                        {f === "name" ? "Nome" : f === "email" ? "Email" : "Telefone"}
                                                    </label>
                                                    <input className="form-control form-control-sm"
                                                        placeholder={f === "name" ? "Nome" : f === "email" ? "email@empresa.com" : "+351 910 000 000"}
                                                        value={companyForm.permanentContact[f]}
                                                        onChange={(e) => setSubField("permanentContact", f, e.target.value)} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </>
                    )}

                    {/* ── Tab: Admin e Gestor ── */}
                    {(formTab === "admin" || formTab === "manager") && (
                        <div className="row g-3">
                            {[
                                { f: "name", label: "Nome Completo", type: "text", ph: formTab === "admin" ? "Nome do administrador" : "Nome do gestor" },
                                { f: "email", label: "Email", type: "email", ph: formTab === "admin" ? "admin@cyberbox.pt" : "gestor@cyberbox.pt" },
                                { f: "phone", label: "Telefone", type: "tel", ph: "+351 910 000 000" },
                            ].map(({ f, label, type, ph }) => (
                                <div className="col-md-6" key={f}>
                                    <label className="form-label fw-semibold" style={{ fontSize: 12 }}>{label}</label>
                                    <input type={type} className="form-control form-control-sm" placeholder={ph}
                                        value={formTab === "admin" ? adminForm[f] : managerForm[f]}
                                        onChange={(e) => formTab === "admin"
                                            ? setAdminForm({ ...adminForm, [f]: e.target.value })
                                            : setManagerForm({ ...managerForm, [f]: e.target.value })
                                        } />
                                </div>
                            ))}

                            {/* Campo password com botão Gerar */}
                            <div className="col-md-6">
                                <label className="form-label fw-semibold" style={{ fontSize: 12 }}>Password</label>
                                <div className="input-group input-group-sm">
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        placeholder="Clique para Gerar"
                                        readOnly
                                        value={formTab === "admin" ? adminForm.password : managerForm.password}
                                    />
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        onClick={() => {
                                            const pwd = generatePassword();
                                            formTab === "admin"
                                                ? setAdminForm({ ...adminForm, password: pwd })
                                                : setManagerForm({ ...managerForm, password: pwd });
                                        }}
                                    >
                                        Gerar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    <button className="btn btn-sm btn-success mt-3" onClick={handleCreate}>
                        Criar {formTab === "company" ? "Empresa" : formTab === "admin" ? "Administrador" : "Gestor"}
                    </button>
                </div>
            )}

            {/* ── Tabela ── */}
            <table className="table">
                <thead>
                    <tr>
                        <th>Empresa</th><th>Clientes</th><th>Responsável Seg.</th>
                        <th>Contacto Perm.</th><th>Estado</th><th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map((a) => (
                        <>
                            <tr key={a.id}>
                                <td className="fw-semibold">{a.company}</td>
                                <td>
                                    <button className="btn btn-sm btn-outline-secondary"
                                        onClick={() => setExpanded(expanded === a.id ? null : a.id)}>
                                        {a.clients.length} cliente(s) {expanded === a.id ? "▲" : "▼"}
                                    </button>
                                </td>
                                <td style={{ fontSize: 13 }}>{a.securityManager.name}</td>
                                <td style={{ fontSize: 13 }}>{a.permanentContact.name}</td>
                                <td>
                                    <span className={`badge ${a.status === "Ativo" ? "bg-success" : a.status === "Pendente" ? "bg-warning" : "bg-danger"}`}>
                                        {a.status}
                                    </span>
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-outline-danger"
                                        onClick={() => setAccounts(accounts.filter((acc) => acc.id !== a.id))}>
                                        Remover
                                    </button>
                                </td>
                            </tr>
                            {expanded === a.id && (
                                <tr key={`${a.id}-exp`}>
                                    <td colSpan={6} className="bg-light">
                                        <table className="table table-sm mb-0">
                                            <thead>
                                                <tr><th>Nome</th><th>Email</th><th>Telefone</th></tr>
                                            </thead>
                                            <tbody>
                                                {a.clients.map((c, i) => (
                                                    <tr key={i}>
                                                        <td>{c.name}</td><td>{c.email}</td><td>{c.phone}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            )}
                        </>
                    ))}
                </tbody>
                
            </table>
        </div>
    );
}

/* ───────────────────────── TICKETS ───────────────────────── */
function Tickets() {
    return (
        <div className="card p-3">
            <h5>Tickets</h5>
            <ul className="list-group mt-3">
                <li className="list-group-item">#T001 - VPN falhou</li>
                <li className="list-group-item">#T002 - Relatório em falta</li>
            </ul>
        </div>
    );
}

/* ───────────────────────── REQUESTS ───────────────────────── */
function Requests() {
    return (
        <div className="card p-3">
            <h5>Pedidos</h5>
            <p>Lista de pedidos pendentes</p>
        </div>
    );
}

/* ───────────────────────── DOCS ───────────────────────── */
function Docs() {
    return (
        <div className="card p-3">
            <h5>Documentos</h5>
            <p>Repositório de ficheiros</p>
        </div>
    );
}

/* ───────────────────────── SETTINGS ───────────────────────── */
function Settings() {
    return (
        <div className="card p-3">
            <h5>Configurações</h5>
            <div className="mb-3">
                <label className="form-label">Nome</label>
                <input className="form-control" defaultValue="Admin User" />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input className="form-control" defaultValue="admin@cyberbox.pt" />
            </div>
            <button className="btn btn-dark">Guardar</button>
        </div>
    );
}

/* ───────────────────────── CARD ───────────────────────── */
function Card({ title, value, color }) {
    return (
        <div className="col-md-3">
            <div className={`card text-bg-${color} p-3`}>
                <h6>{title}</h6>
                <h3>{value}</h3>
            </div>
        </div>
    );
}

/* ───────────────────────── CONTENT ───────────────────────── */
function Content() {
    const [pages, setPages] = useState([
        { id: 1, page: "Início", section: "Hero", content: "Segurança cibernética para empresas modernas.", updated: "10/05/2026" },
        { id: 2, page: "Home", section: "Sobre nós", content: "A CyberBox protege empresas desde 2018...", updated: "08/05/2026" },
        { id: 3, page: "Serviços", section: "Intro", content: "Oferecemos soluções completas de cibersegurança.", updated: "02/05/2026" },
        { id: 4, page: "NIS2", section: "Descrição", content: "A diretiva NIS2 entra em vigor em 2024...", updated: "28/04/2026" },
        { id: 5, page: "Contacto", section: "Texto", content: "Entre em contacto connosco para mais informações.", updated: "20/04/2026" },
    ]);

    const [editing, setEditing] = useState(null);
    const [text, setText] = useState("");

    const handleEdit = (item) => { setEditing(item.id); setText(item.content); };

    const handleSave = (id) => {
        setPages(pages.map(p => p.id === id
            ? { ...p, content: text, updated: new Date().toLocaleDateString("pt-PT") }
            : p
        ));
        setEditing(null);
    };

    return (
        <div className="card p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">Gestão de Conteúdo</h5>
                <span className="badge bg-secondary">{pages.length} secções</span>
            </div>
            <table className="table">
                <thead>
                    <tr><th>Página</th><th>Secção</th><th>Conteúdo</th><th>Atualizado</th><th>Ação</th></tr>
                </thead>
                <tbody>
                    {pages.map((item) => (
                        <tr key={item.id}>
                            <td><span className="badge bg-dark">{item.page}</span></td>
                            <td>{item.section}</td>
                            <td style={{ maxWidth: 250 }}>
                                {editing === item.id ? (
                                    <textarea className="form-control form-control-sm" rows={2}
                                        value={text} onChange={(e) => setText(e.target.value)} />
                                ) : (
                                    <span className="text-muted" style={{ fontSize: 13 }}>{item.content}</span>
                                )}
                            </td>
                            <td style={{ fontSize: 13, color: "#6b7280" }}>{item.updated}</td>
                            <td>
                                {editing === item.id ? (
                                    <>
                                        <button className="btn btn-sm btn-success me-1" onClick={() => handleSave(item.id)}>Guardar</button>
                                        <button className="btn btn-sm btn-outline-secondary" onClick={() => setEditing(null)}>Cancelar</button>
                                    </>
                                ) : (
                                    <button className="btn btn-sm btn-outline-dark" onClick={() => handleEdit(item)}>Editar</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}