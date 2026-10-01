import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useIdioma } from '../useIdioma.js';
import '../styles/contacto.css';

const Contacto = () => {
  const { t } = useIdioma();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensajeText, setMensajeText] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !email.trim() || !mensajeText.trim()) return;
    setEnviado(true);
    setNombre('');
    setEmail('');
    setMensajeText('');
  };

  return (
    <section className="contacto-pagina">
      <h1 className="contacto-titulo">{t('Contactanos')}</h1>
      <p className="contacto-subtitulo">
        {t('Tienes alguna duda o quieres denunciar a un vendedor falso? Escribenos un mensaje.')}
      </p>

      <div className="contacto-contenedor">
        <div className="contacto-info">
          <h3>{t('Informacion de Contacto')}</h3>
          <p className="info-desc">{t('Estamos disponibles para ayudarte en la comunidad crypto.')}</p>
          
          <div className="info-item">
            <FaEnvelope className="info-icono" style={{ color: '#d4af37' }} />
            <div>
              <strong>{t('Correo electronico')}</strong>
              <p>soportecryptonguard@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhone className="info-icono" style={{ color: '#d4af37' }} />
            <div>
              <strong>{t('Telefono / Whatsapp')}</strong>
              <p>+57 300 123 4567</p>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="info-icono" style={{ color: '#d4af37' }} />
            <div>
              <strong>{t('Ubicacion')}</strong>
              <p>{t('Colombia - Comunidad Crypto Latam')}</p>
            </div>
          </div>
        </div>

        <div className="contacto-form-card">
          {enviado && (
            <div className="contacto-exito">
              {t('Tu mensaje ha sido enviado con exito. Te responderemos pronto!')}
            </div>
          )}

          <form onSubmit={handleSubmit} className="contacto-form">
            <div className="form-grupo">
              <label>{t('Tu Nombre *')}</label>
              <input
                type="text"
                placeholder={t('Ej: Juan Perez')}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className="form-grupo">
              <label>{t('Correo Electronico *')}</label>
              <input
                type="email"
                placeholder={t('ejemplo@correo.com')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-grupo">
              <label>{t('Mensaje o Consulta *')}</label>
              <textarea
                rows="4"
                placeholder={t('Escribe tu mensaje detallado aqui...')}
                value={mensajeText}
                onChange={(e) => setMensajeText(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-enviar-contacto">
              {t('Enviar Mensaje')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;

