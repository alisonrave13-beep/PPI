import { Link } from 'react-router';
import { FaShieldAlt, FaTwitter, FaTelegram, FaGithub, FaDiscord } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contenido">
        <div className="footer-brand">
          <div className="brand-logo">
            <FaShieldAlt className="logo-icono" style={{ color: '#d4af37' }} />
            <span>Cryptonguard</span>
          </div>
          <p className="brand-desc">
            La plataforma comunitaria para verificar vendedores crypto y estar informado de las ultimas noticias.
          </p>
        </div>

        <div className="footer-columnas">
          <div className="footer-col">
            <h4>Navegacion</h4>
            <Link to="/">Inicio</Link>
            <Link to="/noticias">Noticias</Link>
            <Link to="/cryptos">Precios Crypto</Link>
            <Link to="/reseñas">Reseñas de Vendedores</Link>
          </div>

          <div className="footer-col">
            <h4>Vendedores</h4>
            <Link to="/registro-vendedor">Registrarme como vendedor</Link>
            <Link to="/reseñas">Lista de vendedores</Link>
            <Link to="/contacto">Soporte y Denuncias</Link>
          </div>

          <div className="footer-col">
            <h4>Comunidad</h4>
            <div className="footer-redes">
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter style={{ color: '#d4af37' }} /></a>
              <a href="https://telegram.org" target="_blank" rel="noreferrer"><FaTelegram style={{ color: '#d4af37' }} /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub style={{ color: '#d4af37' }} /></a>
              <a href="https://discord.com" target="_blank" rel="noreferrer"><FaDiscord style={{ color: '#d4af37' }} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Cryptonguard - Proyecto Estudiantil. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;