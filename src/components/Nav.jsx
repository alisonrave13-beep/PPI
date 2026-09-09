import { Link } from "react-router";
import { FaUserPlus } from "react-icons/fa";
import "../styles/nav.css";

const Nav = () => {
  const links = [
    { to: '/', label: 'Inicio' },
    { to: '/noticias', label: 'Noticias' },
    { to: '/cryptos', label: 'Crypto' },
    { to: '/reseñas', label: 'Reseñas' },
    { to: '/about', label: 'Nosotros' },
    { to: '/contacto', label: 'Contacto' },
  ];

  return (
    <nav className="nav">
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="nav-link">
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/registro-vendedor" className="nav-link nav-btn-registro">
            <FaUserPlus style={{ marginRight: '5px', color: '#d4af37' }} /> Soy Vendedor
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;