import { useState } from 'react';
import FormComentario from './FormComentario';
import '../styles/vendedorCard.css';

function estrellas(promedio) {
  return [1, 2, 3, 4, 5].map(n => (
    <span key={n} className={n <= Math.round(promedio) ? 'estrella-activa' : 'estrella-vacia'}>
      ★
    </span>
  ));
}

function promedioDe(lista) {
  if (!lista.length) return 0;
  return lista.reduce((acc, c) => acc + c.calificacion, 0) / lista.length;
}

function fecha(str) {
  return new Date(str).toLocaleDateString('es-CO', {
    day: '2-digit', month: 'short', year: 'numeric',
  });
}

const VendedorCard = ({ vendedor, comentarios, onNuevoComentario }) => {
  const [mostrarForm, setMostrarForm] = useState(false);
  const promedio = promedioDe(comentarios);

  return (
    <div className="vendedor-carta">
      <div className="vendedor-header">
        <div className="vendedor-info">
          <h2 className="vendedor-nombre">{vendedor.nombre}</h2>
          <span className="vendedor-moneda">{vendedor.moneda}</span>
        </div>
        <div className="vendedor-estrellas-wrap">
          <div className="vendedor-estrellas">{estrellas(promedio)}</div>
          <p className="vendedor-promedio">
            {promedio > 0
              ? `${promedio.toFixed(1)} / 5 · ${comentarios.length} reseña${comentarios.length !== 1 ? 's' : ''}`
              : 'Sin reseñas aún'}
          </p>
        </div>
      </div>

      <p className="vendedor-descripcion">{vendedor.descripcion}</p>

      <div className="comentarios-seccion">
        <p className="comentarios-titulo">Comentarios de la comunidad</p>

        {comentarios.length === 0 ? (
          <p className="sin-comentarios">Sé el primero en comentar.</p>
        ) : (
          comentarios.map(c => (
            <div key={c.id} className="comentario-item">
              <div className="comentario-header">
                <span className="comentario-autor">{c.nombre || 'Anónimo'}</span>
                <span className="comentario-estrellas">
                  {[1, 2, 3, 4, 5].map(n => (
                    <span key={n} style={{ color: n <= c.calificacion ? '#ffd700' : '#333333' }}>★</span>
                  ))}
                </span>
              </div>
              <p className="comentario-texto">{c.comentario}</p>
              <p className="comentario-fecha">{fecha(c.created_at)}</p>
            </div>
          ))
        )}

        <button
          className="btn-comentar"
          onClick={() => setMostrarForm(v => !v)}
        >
          {mostrarForm ? 'Cerrar' : '✏️ Comentar y puntuar'}
        </button>

        {mostrarForm && (
          <FormComentario
            idVendedor={vendedor.id}
            moneda={vendedor.moneda}
            onExito={() => { setMostrarForm(false); onNuevoComentario(); }}
            onCancelar={() => setMostrarForm(false)}
          />
        )}
      </div>
    </div>
  );
};

export default VendedorCard;
