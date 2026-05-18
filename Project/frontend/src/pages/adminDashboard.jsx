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
    ];

    const renderContent = () => {
        switch (active) {
            case "dashboard":
                return <Dashboard />;
            case "accounts":
                return <Accounts />;
            case "tickets":
                return <Tickets />;
            case "requests":
                return <Requests />;
            case "docs":
                return <Docs />;
            case "settings":
                return <Settings />;
            default:
                return null;
        }
    };

    return (
        <div className="d-flex vh-100">

            {/* SIDEBAR */}
            <div className="bg-dark text-white p-3" style={{ width: 250 }}>
                <h4 className="mb-4">CyberBox</h4>

                {nav.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={`btn w-100 mb-2 text-start ${active === item.id ? "btn-primary" : "btn-outline-light"
                            }`}
                    >
                        {item.label}
                    </button>
                ))}

                <div className="mt-auto pt-4 small text-secondary">
                    © 2026 CyberBox
                </div>
            </div>

            {/* MAIN */}
            <div className="flex-grow-1 bg-light p-4 overflow-auto">

                {/* TOPBAR */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="m-0 text-capitalize">{active}</h4>

                    <div className="d-flex align-items-center gap-2">
                        <span className="badge bg-dark">Admin</span>
                        <img
                            src="https://i.pravatar.cc/40"
                            className="rounded-circle"
                            alt="admin"
                        />
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
    return (
        <div className="card p-3">
            <h5>Contas de utilizador</h5>

            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>João</td>
                        <td>joao@empresa.com</td>
                        <td><span className="badge bg-success">Ativo</span></td>
                    </tr>
                    <tr>
                        <td>Ana</td>
                        <td>ana@empresa.com</td>
                        <td><span className="badge bg-warning">Pendente</span></td>
                    </tr>
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