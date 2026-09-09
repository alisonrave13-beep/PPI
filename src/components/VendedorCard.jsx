import { useState } from 'react';
import { FaStar, FaEdit, FaTimes } from 'react-icons/fa';
import FormComentario from './FormComentario';
import '../styles/vendedorCard.css';

function estrellas(promedio) {
  return [1, 2, 3, 4, 5].map(n => (
    <FaStar
      key={n}
      style={{
        color: n <= Math.round(promedio) ? '#d4af37' : '#333333',
        marginRight: '2px',
      }}
    />
  ));
}

function promedioDe(lista) {
  if (!lista.length) return 0;
  return lista.reduce((acc, c) => acc + (Number(c.calificacion) || 0), 0) / lista.length;
}

function fecha(str) {
  if (!str) return '';
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
              : 'Sin reseñas aun'}
          </p>
        </div>
      </div>

      <p className="vendedor-descripcion">{vendedor.descripcion}</p>

      <div className="comentarios-seccion">
        <p className="comentarios-titulo">Comentarios de la comunidad</p>

        {comentarios.length === 0 ? (
          <p className="sin-comentarios">Se el primero en comentar sobre este vendedor.</p>
        ) : (
          comentarios.map(c => (
            <div key={c.id} className="comentario-item">
              <div className="comentario-header">
                <span className="comentario-autor">{c.nombre || 'Anonimo'}</span>
                <span className="comentario-estrellas">
                  {[1, 2, 3, 4, 5].map(n => (
                    <FaStar
                      key={n}
                      style={{ color: n <= c.calificacion ? '#d4af37' : '#333333', fontSize: '0.85rem' }}
                    />
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
          {mostrarForm ? (
            <>
              <FaTimes style={{ marginRight: '6px' }} /> Cerrar
            </>
          ) : (
            <>
              <FaEdit style={{ marginRight: '6px' }} /> Comentar y puntuar
            </>
          )}
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

