import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { supabase } from '../utils/supabase';
import { appendLocalRecord } from '../utils/localCollections.js';
import { useIdioma } from '../useIdioma.js';
import '../styles/formComentario.css';

const FormComentario = ({ idVendedor, moneda, onExito, onCancelar }) => {
  const { t } = useIdioma();
  const [nombre, setNombre] = useState('');
  const [comentario, setComentario] = useState('');
  const [calificacion, setCalificacion] = useState(0);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comentario.trim() || calificacion === 0) {
      setError(t('Escribe un comentario y selecciona una calificacion.'));
      return;
    }
    setEnviando(true);
    setError(null);

    const nuevoComentario = {
      id: `local-${Date.now()}`,
      idVendedor,
      nombre: nombre.trim() || t('Anonimo'),
      comentario: comentario.trim(),
      calificacion,
      created_at: new Date().toISOString()
    };

    let guardadoEnSupabase = false;
    let guardadoLocal = false;
    try {
      const { error: errorSupabase } = await supabase.from('comentario').insert({
        nombre: nuevoComentario.nombre,
        comentario: nuevoComentario.comentario,
        calificacion: nuevoComentario.calificacion,
        idVendedor,
        crypto: moneda,
      });
      if (errorSupabase) throw errorSupabase;
      guardadoEnSupabase = true;
    } catch (errorSupabase) {
      console.error('Error saving review in Supabase:', errorSupabase);
      guardadoLocal = appendLocalRecord('comentarios_locales', nuevoComentario);
    }

    setEnviando(false);
    if (guardadoLocal) {
      onExito(true);
    } else if (guardadoEnSupabase) {
      onExito(false);
    } else {
      setError(t('No se pudo guardar la reseña. Inténtalo de nuevo.'));
    }
  };


  return (
    <form className="form-comentario" onSubmit={handleSubmit}>
      <p className="form-titulo">{t('Dejar un comentario sobre el vendedor')}</p>

      <div className="form-grupo">
        <label className="form-label" htmlFor="nombre">{t('Nombre (opcional)')}</label>
        <input
          id="nombre"
          className="form-input"
          type="text"
          placeholder={t('Anonimo')}
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </div>

      <div className="form-grupo">
        <label className="form-label" htmlFor="comentario">{t('Comentario *')}</label>
        <textarea
          id="comentario"
          className="form-textarea"
          placeholder={t('Que opinas de este vendedor?')}
          value={comentario}
          onChange={e => setComentario(e.target.value)}
        />
      </div>

      <div className="form-grupo">
        <label className="form-label">{t('Calificacion *')}</label>
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
          {enviando ? t('Enviando...') : t('Publicar')}
        </button>
        <button type="button" className="btn-cancelar" onClick={onCancelar}>
          {t('Cancelar')}
        </button>
      </div>
    </form>
  );

};

export default FormComentario;

