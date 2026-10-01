import { Link } from 'react-router';
import { FaStar, FaComments, FaNewspaper, FaShieldAlt } from 'react-icons/fa';
import { useIdioma } from '../useIdioma.js';
import '../styles/home.css';

const tarjetas = [
  {
    icono: <FaStar style={{ color: '#d4af37' }} />,
    titulo: 'Califica vendedores',
    texto: 'Lee las experiencias de otros usuarios antes de confiarle tu dinero a un vendedor.',
  },
  {
    icono: <FaComments style={{ color: '#d4af37' }} />,
    titulo: 'Comenta anonimamente',
    texto: 'Tu opinion es valida. Comparte tu experiencia sin revelar tu identidad.',
  },
  {
    icono: <FaNewspaper style={{ color: '#d4af37' }} />,
    titulo: 'Informate bien',
    texto: 'Accede a las ultimas noticias del mundo crypto para tomar mejores decisiones.',
  },
  {
    icono: <FaShieldAlt style={{ color: '#d4af37' }} />,
    titulo: 'Protegete de estafas',
    texto: 'Saber que vendedores son confiables te ayuda a evitar fraudes en la red.',
  },
];

const pasos = [
  {
    numero: '1',
    titulo: 'Busca el vendedor',
    texto: 'Explora la lista de vendedores registrados en nuestra plataforma comunitaria.',
  },
  {
    numero: '2',
    titulo: 'Revisa calificaciones',
    texto: 'Mira los comentarios y puntos que la comunidad le ha dado por sus transacciones.',
  },
  {
    numero: '3',
    titulo: 'Registra tu opinion',
    texto: 'Deja tu reseña despues de operar para ayudar a otros compradores.',
  },
];

const Home = () => {
  const { t } = useIdioma();

  return (
    <section className="home-pagina">
    <div className="home-hero">
      <h1 className="home-hero-titulo">
        {t('El crypto en')} <span>{t('tu idioma')}</span>
      </h1>
      <p className="home-hero-texto">
        {t('Cryptonguard es el espacio de la comunidad para conocer algunos comentarios de unos compradores sobre su expecia con vendedores de criptomonedas, compartir experiencias y estar al dia con las noticias del mundo crypto.')}
      </p>
      <div className="home-hero-botones">
        <Link to="/reseñas" className="home-hero-btn">
          {t('Ver vendedores')}
        </Link>
        <Link to="/registro-vendedor" className="home-btn-secundario">
          {t('Registrarme como vendedor')}
        </Link>
      </div>
    </div>

    <hr className="home-divisor" />

    <h2 className="home-seccion-titulo">{t('Por que usar Cryptonguard?')}</h2>
    <div className="home-tarjetas">
      {tarjetas.map(tarjeta => (
        <div key={tarjeta.titulo} className="home-tarjeta">
          <div className="home-tarjeta-icono">{tarjeta.icono}</div>
          <h3 className="home-tarjeta-titulo">{t(tarjeta.titulo)}</h3>
          <p className="home-tarjeta-texto">{t(tarjeta.texto)}</p>
        </div>
      ))}
    </div>

    <hr className="home-divisor" />

    <div className="home-stats">
      <div className="stat-card">
        <h3>+500</h3>
        <p>{t('Usuarios activos')}</p>
      </div>
      <div className="stat-card">
        <h3>100%</h3>
        <p>{t('Transparencia comunitaria')}</p>
      </div>
      <div className="stat-card">
        <h3>24/7</h3>
        <p>{t('Noticias actualizadas')}</p>
      </div>
    </div>

    <hr className="home-divisor" />

    <h2 className="home-seccion-titulo">{t('Como funciona la plataforma?')}</h2>
    <div className="home-pasos">
      {pasos.map(p => (
        <div key={p.numero} className="home-paso-card">
          <div className="paso-numero">{p.numero}</div>
          <h3>{t(p.titulo)}</h3>
          <p>{t(p.texto)}</p>
        </div>
      ))}
    </div>

    <hr className="home-divisor" />

    <div className="home-banner-vendedor">
      <div className="banner-info">
        <h2>{t('Eres vendedor de crypto?')}</h2>
        <p>{t('Unete a nuestro directorio comunitario para ganar reputacion y ser visto por mas clientes confiables.')}</p>
      </div>
      <Link to="/registro-vendedor" className="home-hero-btn">
        {t('Crear perfil de vendedor')}
      </Link>
    </div>

  </section>
  );
};

export default Home;


