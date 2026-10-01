import { Link } from "react-router";
import { FaGlobe, FaUserPlus } from "react-icons/fa";
import { useIdioma } from "../useIdioma.js";
import "../styles/nav.css";

const Nav = () => {
  const { idioma, setIdioma, t } = useIdioma();
  const links = [
    { to: '/', label: t('Inicio') },
    { to: '/noticias', label: t('Noticias') },
    { to: '/cryptos', label: t('Crypto') },
    { to: '/reseñas', label: t('Reseñas') },
    { to: '/manuales', label: t('Manuales') },
    { to: '/about', label: t('Nosotros') },
    { to: '/contacto', label: t('Contacto') },
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
            <FaUserPlus style={{ marginRight: '5px', color: '#d4af37' }} /> {t('Soy Vendedor')}
          </Link>
        </li>
        <li>
          <button
            type="button"
            className="nav-idioma"
            onClick={() => setIdioma(idioma === 'es' ? 'en' : 'es')}
            aria-label={idioma === 'es' ? 'Switch to English' : 'Cambiar a español'}
            title={idioma === 'es' ? 'Switch to English' : 'Cambiar a español'}
          >
            <FaGlobe aria-hidden="true" /> {idioma === 'es' ? 'EN' : 'ES'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;