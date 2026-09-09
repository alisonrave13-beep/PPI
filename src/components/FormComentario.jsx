import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import '../styles/formComentario.css';

const supabase = createClient(
  'https://uqdhxjqazauuxzikzfsm.supabase.co',
  'sb_publishable_qe-CRFypN-zowcxDaJaROQ_kQ1IYE58'
);

const FormComentario = ({ idVendedor, moneda, onExito, onCancelar }) => {
  const [nombre, setNombre] = useState('');
  const [comentario, setComentario] = useState('');
  const [calificacion, setCalificacion] = useState(0);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comentario.trim() || calificacion === 0) {
      setError('Escribe un comentario y selecciona una calificación.');
      return;
    }
    setEnviando(true);
    setError(null);

    const { error: err } = await supabase.from('comentario').insert({
      nombre: nombre.trim() || 'Anónimo',
      comentario: comentario.trim(),
      calificacion,
      idVendedor,
      crypto: moneda,
    });

    setEnviando(false);
    if (err) {
      setError('No se pudo guardar. Intenta de nuevo.');
    } else {
      onExito();
    }
  };

  return (
    <form className="form-comentario" onSubmit={handleSubmit}>
      <p className="form-titulo">Dejar un comentario</p>

      <div className="form-grupo">
        <label className="form-label" htmlFor="nombre">Nombre (opcional)</label>
        <input
          id="nombre"
          className="form-input"
          type="text"
          placeholder="Anónimo"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </div>

      <div className="form-grupo">
        <label className="form-label" htmlFor="comentario">Comentario *</label>
        <textarea
          id="comentario"
          className="form-textarea"
          placeholder="¿Qué opinas de este vendedor?"
          value={comentario}
          onChange={e => setComentario(e.target.value)}
        />
      </div>

      <div className="form-grupo">
        <label className="form-label">Calificación *</label>
        <div className="estrellas-selector">
          {[1, 2, 3, 4, 5].map(n => (
            <button
              key={n}
              type="button"
              className={`estrella-btn ${n <= calificacion ? 'activa' : ''}`}
              onClick={() => setCalificacion(n)}
            >
              ★
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
