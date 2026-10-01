import { FaGraduationCap, FaSearch, FaHandshake, FaBookReader, FaUser } from 'react-icons/fa';
import { useIdioma } from '../useIdioma.js';
import '../styles/about.css';

const About = () => {
  const { t } = useIdioma();

  return (
  <section className="about-pagina">
    <div className="about-hero">
      <div className="about-emoji">
        <FaGraduationCap style={{ color: '#d4af37', fontSize: '3rem' }} />
      </div>
      <h1 className="about-titulo">{t('¿quiénes somos?')}</h1>
      <p className="about-subtitulo">
        {t('El equipo está formado por Alison Rave, Maria Clara Arboleda, Mateo Velasquez, Luis Herrera y Jeronimo Negrete, estudiantes de grado once del colegio La Candelaria, apasionados por la tecnología y convencidos de que entender las criptomonedas no debería ser difícil para nadie.')}
      </p>
    </div>

    <div className="about-equipo">
      <h2 className="about-seccion-titulo">{t('Nuestro equipo')}</h2>
      <div className="about-integrantes">
        <div className="about-integrante">
          <div className="about-integrante-icono"><FaUser /></div>
          <span className="about-integrante-numero">01</span>
          <p>Alison Natalia Rave Bedoya</p>
        </div>
        <div className="about-integrante">
          <div className="about-integrante-icono"><FaUser /></div>
          <span className="about-integrante-numero">02</span>
          <p>Maria Clara Arboleda Rueda</p>
        </div>
        <div className="about-integrante">
          <div className="about-integrante-icono"><FaUser /></div>
          <span className="about-integrante-numero">03</span>
          <p>Mateo Velasquez Velez</p>
        </div>
        <div className="about-integrante">
          <div className="about-integrante-icono"><FaUser /></div>
          <span className="about-integrante-numero">04</span>
          <p>Luis Miguel Herrera Lopez</p>
        </div>
        <div className="about-integrante">
          <div className="about-integrante-icono"><FaUser /></div>
          <span className="about-integrante-numero">05</span>
          <p>Jeronimo Negrerte Arango</p>
        </div>
      </div>
    </div>

    <div className="about-seccion">
        <h2 className="about-seccion-titulo">{t('Nuestra mision')}</h2>
      <p className="about-seccion-texto">
        {t('Cryptonguard nació como un proyecto escolar con un objetivo claro: acercar el mundo de las criptomonedas a nuestra comunidad. Queremos que las personas pierdan el miedo, entiendan cómo funcionan las criptomonedas y tomen decisiones informadas antes de comprar.')}
      </p>
    </div>

    <div className="about-seccion">
        <h2 className="about-seccion-titulo">{t('¿Por qué lo hacemos?')}</h2>
      <p className="about-seccion-texto">
        {t('En Colombia muchas personas han perdido dinero por no tener información confiable sobre vendedores y criptomonedas. Creamos este espacio para que la comunidad pueda revisar, calificar y comentar sobre vendedores de forma anónima y transparente.')}
      </p>
    </div>

    <div className="about-valores">
      <div className="about-valor">
        <div className="about-valor-icono">
          <FaSearch style={{ color: '#00b4d8' }} />
        </div>
        <p className="about-valor-nombre">{t('Transparensia')}</p>
        <p className="about-valor-texto">{t('Información honesta sobre vendedores y criptomonedas.')}</p>
      </div>
      <div className="about-valor">
        <div className="about-valor-icono">
          <FaHandshake style={{ color: '#2ec4b6' }} />
        </div>
        <p className="about-valor-nombre">{t('Comunidad')}</p>
        <p className="about-valor-texto">{t('Juntos construimos un espacio de confianza.')}</p>
      </div>
      <div className="about-valor">
        <div className="about-valor-icono">
          <FaBookReader style={{ color: '#ffb703' }} />
        </div>
        <p className="about-valor-nombre">{t('Educasion')}</p>
        <p className="about-valor-texto">{t('Aprende sin miedo sobre el mundo crypto.')}</p>
      </div>
    </div>
  </section>
  );
};

export default About;

