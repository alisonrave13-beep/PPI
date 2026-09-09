import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { supabase } from '../utils/supabase';
import '../styles/formComentario.css';

const FormComentario = ({ idVendedor, moneda, onExito, onCancelar }) => {
  const [nombre, setNombre] = useState('');
  const [comentario, setComentario] = useState('');
  const [calificacion, setCalificacion] = useState(0);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comentario.trim() || calificacion === 0) {
      setError('Escribe un comentario y selecciona una calificacion.');
      return;
    }
    setEnviando(true);
    setError(null);

    const nuevoComentario = {
      id: Date.now(),
      idVendedor,
      nombre: nombre.trim() || 'Anonimo',
      comentario: comentario.trim(),
      calificacion,
      created_at: new Date().toISOString()
    };

    try {
      await supabase.from('comentario').insert({
        nombre: nuevoComentario.nombre,
        comentario: nuevoComentario.comentario,
        calificacion: nuevoComentario.calificacion,
        idVendedor,
        crypto: moneda,
      });
    } catch (err) {
      console.log('Comment Supabase insert bypassed:', err);
    }

    const comentariosLocales = JSON.parse(localStorage.getItem('comentarios_locales') || '[]');
    comentariosLocales.push(nuevoComentario);
    localStorage.setItem('comentarios_locales', JSON.stringify(comentariosLocales));

    setEnviando(false);
    onExito();
  };


  return (
    <form className="form-comentario" onSubmit={handleSubmit}>
      <p className="form-titulo">Dejar un comentario sobre el vendedor</p>

      <div className="form-grupo">
        <label className="form-label" htmlFor="nombre">Nombre (opcional)</label>
        <input
          id="nombre"
          className="form-input"
          type="text"
          placeholder="Anonimo"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </div>

      <div className="form-grupo">
        <label className="form-label" htmlFor="comentario">Comentario *</label>
        <textarea
          id="comentario"
          className="form-textarea"
          placeholder="Que opinas de este vendedor?"
          value={comentario}
          onChange={e => setComentario(e.target.value)}
        />
      </div>

      <div className="form-grupo">
        <label className="form-label">Calificacion *</label>
        <div className="estrellas-selector">
          {[1, 2, 3, 4, 5].map(n => (
            <button
              key={n}
              type="button"
              className={`estrella-btn ${n <= calificacion ? 'activa' : ''}`}
              onClick={() => setCalificacion(n)}
            >
              <FaStar style={{ color: n <= calificacion ? '#d4af37' : '#444' }} />
            </button>
          ))}
        </div>
      </div>

      {error && <p className="form-error">{error}</p>}

      <div className="form-acciones">
        <button type="submit" className="btn-enviar" disabled={enviando}>
          {enviando ? 'Enviando...' : 'Publicar'}
        </button>
        <button type="button" className="btn-cancelar" onClick={onCancelar}>
          Cancelar
        </button>
      </div>
    </form>
  );

};

export default FormComentario;

