import { FaGraduationCap, FaSearch, FaHandshake, FaBookReader, FaUser } from 'react-icons/fa';
import '../styles/about.css';

const About = () => (
  <section className="about-pagina">
    <div className="about-hero">
      <div className="about-emoji">
        <FaGraduationCap style={{ color: '#d4af37', fontSize: '3rem' }} />
      </div>
      <h1 className="about-titulo">¿quiénes somos?</h1>
      <p className="about-subtitulo">
        Los que formamos el quipo somos Alison Rave, Maria clara Arboleda, mateo velasquez, luis Herrera y jeronimo Negrete, studiantes de grado once del colegio La Candelaria, apasionados
        por la tecnologia y convencidos de que entender las criptomonedas no
        deberia ser dificil para nadie.
      </p>
    </div>

    <div className="about-equipo">
      <h2 className="about-seccion-titulo">Nuestro equipo</h2>
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
      <h2 className="about-seccion-titulo">Nuestra mision</h2>
      <p className="about-seccion-texto">
        Cryptonguard nasio de un proyecto escolar con un objetivo claro: asercar
        el mundo de las criptomonedas a las personas de nuestra comunidad.
        Queremos que la gente pierda el miedo, entienda como funsionan las cryptos
        y pueda tomar desisiones informadas antes de conprar.
      </p>
    </div>

    <div className="about-seccion">
      <h2 className="about-seccion-titulo">¿Por qué lo hacemo?</h2>
      <p className="about-seccion-texto">
        En Colombia muchas personas han perdido dinero por no tener informasion
        confiable sobre vendedores y criptomonedas. Creamos este espasio para que
        la comunidad pueda revisar, calificar y comentar vendedores de forma
        anonima y transparente.
      </p>
    </div>

    <div className="about-valores">
      <div className="about-valor">
        <div className="about-valor-icono">
          <FaSearch style={{ color: '#00b4d8' }} />
        </div>
        <p className="about-valor-nombre">Transparensia</p>
        <p className="about-valor-texto">Informasion honesta sobre vendedores y cryptos.</p>
      </div>
      <div className="about-valor">
        <div className="about-valor-icono">
          <FaHandshake style={{ color: '#2ec4b6' }} />
        </div>
        <p className="about-valor-nombre">Comunidad</p>
        <p className="about-valor-texto">Juntos construimos un espasio de confiansa.</p>
      </div>
      <div className="about-valor">
        <div className="about-valor-icono">
          <FaBookReader style={{ color: '#ffb703' }} />
        </div>
        <p className="about-valor-nombre">Educasion</p>
        <p className="about-valor-texto">Aprende sin miedo sobre el mundo crypto.</p>
      </div>
    </div>
  </section>
);

export default About;

