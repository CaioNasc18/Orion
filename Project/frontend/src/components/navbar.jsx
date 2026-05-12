import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand bg-white shadow-sm">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          CyberBox
        </Link>

        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/nis2">NIS2</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/sectors">Sectors</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/methodology">Methodology</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/news">News</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contacts">Contacts</Link></li>
          <li className="nav-item ms-2">
            <Link className="btn btn-primary" to="/login">Área de Cliente</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;