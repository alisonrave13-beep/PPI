import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheck } from 'react-icons/fa';
import '../styles/contacto.css';

const Contacto = () => {
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
      <h1 className="contacto-titulo">Contactanos</h1>
      <p className="contacto-subtitulo">
        Tienes alguna duda o quieres denunciar a un bendedor falso? Escribenos un mensaje.
      </p>

      <div className="contacto-contenedor">
        <div className="contacto-info">
          <h3>Informasion de Contacto</h3>
          <p className="info-desc">Estamos disponibles para ayudarte en la comunidad crypto.</p>
          
          <div className="info-item">
            <FaEnvelope className="info-icono" />
            <div>
              <strong>Correo electronico</strong>
              <p>soporte@cryptonguard.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhone className="info-icono" />
            <div>
              <strong>Telefono / Whatsapp</strong>
              <p>+57 300 123 4567</p>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="info-icono" />
            <div>
              <strong>Ubicasion</strong>
              <p>Colombia - Comunidad Crypto Latam</p>
            </div>
          </div>
        </div>

        <div className="contacto-form-card">
          {enviado && (
            <div className="contacto-exito">
              <FaCheck style={{ marginRight: '8px' }} /> Tu mensatje ha sido enbiado con exito. Te responderemos pronto!
            </div>
          )}

          <form onSubmit={handleSubmit} className="contacto-form">
            <div className="form-grupo">
              <label>Tu Nombre *</label>
              <input
                type="text"
                placeholder="Ej: Juan Perez"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className="form-grupo">
              <label>Correo Electronico *</label>
              <input
                type="email"
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-grupo">
              <label>Mensatje o Consulta *</label>
              <textarea
                rows="4"
                placeholder="Escribe tu mensatje detallado aqui..."
                value={mensajeText}
                onChange={(e) => setMensajeText(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-enviar-contacto">
              <FaPaperPlane style={{ marginRight: '8px' }} /> Enbiar Mensatje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
