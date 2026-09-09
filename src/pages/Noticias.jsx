import { useNoticias } from '../hooks/useNoticias';
import { FaNewspaper } from 'react-icons/fa';
import '../styles/noticias.css';

const Noticias = () => {
  const { noticias, cargando, error } = useNoticias();

  if (cargando) return <p className="noticias-cargando">Cargando ultimas noticias...</p>;
  if (error) return <p className="noticias-error">{error}</p>;

  const [destacada, ...resto] = noticias;

  return (
    <section className="noticias-pagina">
      <h1 className="noticias-titulo">
        <FaNewspaper style={{ marginRight: '10px', color: '#d4af37' }} />
        Noticias Crypto
      </h1>
      <p className="noticias-subtitulo">Las ultimas noticias mas importantes del mundo crypto.</p>

      {destacada && (
        <a className="noticia-destacada" href={destacada.url} target="_blank" rel="noreferrer">
          <img
            className="noticia-destacada-imagen"
            src={destacada.imageurl}
            alt={destacada.title}
            onError={e => { e.target.style.display = 'none'; }}
          />
          <div className="noticia-destacada-contenido">
            <p className="noticia-fuente">{destacada.source_info?.name ?? destacada.source}</p>
            <h2 className="noticia-titulo-grande">{destacada.title}</h2>
            <p className="noticia-cuerpo">{destacada.body}</p>
            <span className="noticia-leer-mas">
              Leer articulo
            </span>
          </div>
        </a>
      )}

      <div className="noticias-grid">
        {resto.slice(0, 11).map(n => (
          <a key={n.id} className="noticia-carta" href={n.url} target="_blank" rel="noreferrer">
            {n.imageurl && (
              <img
                className="noticia-carta-imagen"
                src={n.imageurl}
                alt={n.title}
                onError={e => { e.target.style.display = 'none'; }}
              />
            )}
            <div className="noticia-carta-contenido">
              <p className="noticia-fuente">{n.source_info?.name ?? n.source}</p>
              <h3 className="noticia-carta-titulo">{n.title}</h3>
              <p className="noticia-carta-cuerpo">{n.body}</p>
              <span className="noticia-leer-mas">
                Leer mas
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Noticias;


