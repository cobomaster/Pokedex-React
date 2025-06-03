import { Link } from 'react-router-dom';

function Navegacion() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/equipo" className="nav-link">Mi equipo</Link>
    </nav>
  );
}

export default Navegacion;
