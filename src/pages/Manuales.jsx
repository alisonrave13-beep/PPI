import { useIdioma } from '../useIdioma.js';
import '../styles/manuales.css';

const Manuales = () => {
  const { t } = useIdioma();

  return (
    <main className="manuales-pagina">
      <header className="manuales-cabecera">
        <p className="manuales-eyebrow">Cryptonguard</p>
        <h1>{t('Manuales de Cryptonguard')}</h1>
        <p>{t('Consulta la guía que necesitas.')}</p>
      </header>

      <nav className="manuales-menu" aria-label={t('Seleccionar manual')}>
        <a href="#usuario">{t('Manual de usuario')}</a>
        <a href="#administrador">{t('Manual de administrador')}</a>
      </nav>

      <section className="manuales-seccion" id="usuario">
        <h2>{t('Manual de usuario')}</h2>
        <p>{t('Guía para consultar vendedores, compartir experiencias y usar las herramientas de Cryptonguard.')}</p>
        <div className="manuales-pasos">
          <article>
            <h3>{t('Explorar vendedores')}</h3>
            <p>{t('En Reseñas, consulta el nombre, el par de monedas, la descripción, la calificación y las opiniones de la comunidad.')}</p>
          </article>
          <article>
            <h3>{t('Publicar una reseña')}</h3>
            <p>{t('Abre “Comentar y puntuar” en el perfil correspondiente, escribe tu comentario y elige de 1 a 5 estrellas. El nombre es opcional.')}</p>
          </article>
          <article>
            <h3>{t('Registrar un vendedor')}</h3>
            <p>{t('Completa el nombre o alias, el par de monedas y la descripción de los servicios en “Soy Vendedor”.')}</p>
          </article>
          <article>
            <h3>{t('Consultar información')}</h3>
            <p>{t('Noticias muestra titulares de una fuente externa; Crypto muestra cotizaciones en USD que se actualizan periódicamente. Verifica los datos antes de operar.')}</p>
          </article>
        </div>
      </section>

      <section className="manuales-seccion" id="administrador">
        <h2>{t('Manual de administrador')}</h2>
        <p>{t('Guía para responsables de la plataforma. La gestión de datos se realiza en Supabase; el sitio no tiene un panel administrativo.')}</p>
        <div className="manuales-pasos">
          <article>
            <h3>{t('Configurar el almacenamiento compartido')}</h3>
            <p>{t('En el editor SQL de Supabase, ejecuta supabase/schema.sql para crear las tablas y habilitar la lectura y el registro públicos. La aplicación no autentica usuarios; establece moderación adicional si hace falta.')}</p>
          </article>
          <article>
            <h3>{t('Gestionar la plataforma')}</h3>
            <p>{t('Accede al proyecto desde el panel oficial de Supabase y revisa las tablas vendedor y comentario. No compartas claves de servicio ni credenciales.')}</p>
          </article>
          <article>
            <h3>{t('Proteger los datos')}</h3>
            <p>{t('Configura y prueba las políticas RLS para limitar quién puede leer o insertar registros. La aplicación no autentica usuarios ni ofrece roles administrativos.')}</p>
          </article>
          <article>
            <h3>{t('Revisar contenido')}</h3>
            <p>{t('Contrasta las reseñas con la información disponible y gestiona registros directamente en Supabase según las políticas de la comunidad.')}</p>
          </article>
          <article>
            <h3>{t('Copias de seguridad')}</h3>
            <p>{t('Usa las herramientas de respaldo de Supabase y verifica la recuperación de datos antes de cambios importantes.')}</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Manuales;
