import { Link } from 'react-router';
import { FaStar, FaComments, FaNewspaper, FaShieldAlt, FaUserPlus, FaCheckCircle, FaStore, FaArrowRight } from 'react-icons/fa';
import '../styles/home.css';

const tarjetas = [
  {
    icono: <FaStar style={{ color: '#ffd700' }} />,
    titulo: 'Califika vendedores',
    texto: 'Lee las esperiensias de otros usuarios antes de confiarle tu dinero a un vendedor.',
  },
  {
    icono: <FaComments style={{ color: '#00b4d8' }} />,
    titulo: 'Comenta anonimament',
    texto: 'Tu opinion es valida. Comparte tu esperiensia sin revelar tu identidad.',
  },
  {
    icono: <FaNewspaper style={{ color: '#ffb703' }} />,
    titulo: 'Informate bien',
    texto: 'Accede a las ultimas notisias del mundo crypto para tomar mejores desisiones.',
  },
  {
    icono: <FaShieldAlt style={{ color: '#2ec4b6' }} />,
    titulo: 'Protejete de estafas',
    texto: 'Saber ke vendedores son confiables te ayuda a evitar fraudes en la red.',
  },
];

const pasos = [
  {
    numero: '1',
    titulo: 'Buska el vendedor',
    texto: 'Explora la lista de vendedores registrados en nuestra plataforma comunitaria.',
  },
  {
    numero: '2',
    titulo: 'Rebisa calificaciones',
    texto: 'Mira los comentarios y puntos que la comunidad le ha dado por sus transasiones.',
  },
  {
    numero: '3',
    titulo: 'Registra tu opinion',
    texto: 'Deja tu reseña despues de operar para ayudar a otros conpradores.',
  },
];

const Home = () => (
  <section className="home-pagina">
    <div className="home-hero">
      <h1 className="home-hero-titulo">
        El crypto en <span>tu idioma</span>
      </h1>
      <p className="home-hero-texto">
        Cryptonguard es el espasio de la comunidad para conoserm vendedores de
        criptomonedas, conpartir esperiensias y estar al dia con las notisias
        del mundo crypto.
      </p>
      <div className="home-hero-botones">
        <Link to="/reseñas" className="home-hero-btn">
          Ver vendedores <FaArrowRight style={{ marginLeft: '6px' }} />
        </Link>
        <Link to="/registro-vendedor" className="home-btn-secundario">
          <FaUserPlus style={{ marginRight: '6px' }} /> Registrarme como vendedor
        </Link>
      </div>
    </div>

    <hr className="home-divisor" />

    <h2 className="home-seccion-titulo">¿Por ke usar Cryptonguard?</h2>
    <div className="home-tarjetas">
      {tarjetas.map(t => (
        <div key={t.titulo} className="home-tarjeta">
          <div className="home-tarjeta-icono">{t.icono}</div>
          <h3 className="home-tarjeta-titulo">{t.titulo}</h3>
          <p className="home-tarjeta-texto">{t.texto}</p>
        </div>
      ))}
    </div>

    <hr className="home-divisor" />

    <div className="home-stats">
      <div className="stat-card">
        <h3>+500</h3>
        <p>Usuarios activos</p>
      </div>
      <div className="stat-card">
        <h3>100%</h3>
        <p>Transparencia comunitaria</p>
      </div>
      <div className="stat-card">
        <h3>24/7</h3>
        <p>Notisias actualisadas</p>
      </div>
    </div>

    <hr className="home-divisor" />

    <h2 className="home-seccion-titulo">¿Como funsiona la plataforma?</h2>
    <div className="home-pasos">
      {pasos.map(p => (
        <div key={p.numero} className="home-paso-card">
          <div className="paso-numero">{p.numero}</div>
          <h3>{p.titulo}</h3>
          <p>{p.texto}</p>
        </div>
      ))}
    </div>

    <hr className="home-divisor" />

    <div className="home-banner-vendedor">
      <div className="banner-info">
        <h2><FaStore style={{ marginRight: '10px', color: '#d4af37' }} /> ¿Eres vendedor de crypto?</h2>
        <p>Unete a nuestro directorio comunitaria para ganar reputasion y ser visto por mas clientes confiables.</p>
      </div>
      <Link to="/registro-vendedor" className="home-hero-btn">
        Crear perfil de vendedor
      </Link>
    </div>
  </section>
);

export default Home;

