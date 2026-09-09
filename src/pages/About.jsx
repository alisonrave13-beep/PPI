import '../styles/about.css';

const About = () => (
  <section className="about-pagina">
    <div className="about-hero">
      <div className="about-emoji">🎓</div>
      <h1 className="about-titulo">¿Quiénes somos?</h1>
      <p className="about-subtitulo">
        Somos estudiantes de grado once del colegio en La Candelaria, apasionados
        por la tecnología y convencidos de que entender las criptomonedas no
        debería ser difícil para nadie.
      </p>
    </div>

    <div className="about-seccion">
      <h2 className="about-seccion-titulo">Nuestra misión</h2>
      <p className="about-seccion-texto">
        Cryptonguard nació de un proyecto escolar con un objetivo claro: acercar
        el mundo de las criptomonedas a las personas de nuestra comunidad.
        Queremos que la gente pierda el miedo, entienda cómo funcionan las cryptos
        y pueda tomar decisiones informadas antes de comprar.
      </p>
    </div>

    <div className="about-seccion">
      <h2 className="about-seccion-titulo">¿Por qué lo hacemos?</h2>
      <p className="about-seccion-texto">
        En Colombia muchas personas han perdido dinero por no tener información
        confiable sobre vendedores y criptomonedas. Creamos este espacio para que
        la comunidad pueda revisar, calificar y comentar vendedores de forma
        anónima y transparente.
      </p>
    </div>

    <div className="about-valores">
      <div className="about-valor">
        <div className="about-valor-icono">🔍</div>
        <p className="about-valor-nombre">Transparencia</p>
        <p className="about-valor-texto">Información honesta sobre vendedores y cryptos.</p>
      </div>
      <div className="about-valor">
        <div className="about-valor-icono">🤝</div>
        <p className="about-valor-nombre">Comunidad</p>
        <p className="about-valor-texto">Juntos construimos un espacio de confianza.</p>
      </div>
      <div className="about-valor">
        <div className="about-valor-icono">📚</div>
        <p className="about-valor-nombre">Educación</p>
        <p className="about-valor-texto">Aprende sin miedo sobre el mundo crypto.</p>
      </div>
    </div>
  </section>
);

export default About;
