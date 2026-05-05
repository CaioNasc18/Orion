function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        
        {/* Logo */}
        <a className="navbar-brand fw-bold" href="#">
          CyberBox
        </a>

        {/* Botão mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">NIS2</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Sectors</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Methodology</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">News</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Contacts</a>
            </li>

            <button className="btn btn-light btn-lg">
              Área de Cliente
            </button>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;