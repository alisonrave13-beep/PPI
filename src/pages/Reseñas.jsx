import { useState, useEffect, useCallback } from 'react';
import { createClient } from '@supabase/supabase-js';
import VendedorCard from '../components/VendedorCard';
import '../styles/resenas.css';

const supabase = createClient(
  'https://uqdhxjqazauuxzikzfsm.supabase.co',
  'sb_publishable_qe-CRFypN-zowcxDaJaROQ_kQ1IYE58'
);

const Resenas = () => {
  const [vendedores, setVendedores] = useState([]);
  const [comentarios, setComentarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const cargarDatos = useCallback(async () => {
    setCargando(true);
    const [{ data: vend, error: errV }, { data: coms, error: errC }] = await Promise.all([
      supabase.from('vendedor').select('*'),
      supabase.from('comentario').select('*'),
    ]);

    if (errV || errC) {
      setError('No se pudieron cargar los datos.');
    } else {
      setVendedores(vend ?? []);
      setComentarios(coms ?? []);
    }
    setCargando(false);
  }, []);

  useEffect(() => { cargarDatos(); }, [cargarDatos]);

  if (cargando) return <p className="resenas-cargando">Cargando vendedores...</p>;
  if (error) return <p className="resenas-error">{error}</p>;

  return (
    <section className="resenas-pagina">
      <h1 className="resenas-titulo">Reseñas de Vendedores</h1>
      <p className="resenas-subtitulo">
        Conoce la experiencia de la comunidad con cada vendedor de criptomonedas.
      </p>

      {vendedores.length === 0 ? (
        <p className="resenas-vacio">No hay vendedores registrados aún.</p>
      ) : (
        <div className="resenas-grid">
          {vendedores.map(v => (
            <VendedorCard
              key={v.id}
              vendedor={v}
              comentarios={comentarios.filter(c => c.idVendedor === v.id)}
              onNuevoComentario={cargarDatos}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Resenas;
