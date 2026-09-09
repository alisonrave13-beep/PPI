import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { FaUserPlus, FaStore } from 'react-icons/fa';
import { supabase } from '../utils/supabase';
import VendedorCard from '../components/VendedorCard';
import '../styles/resenas.css';

const Resenas = () => {
  const [vendedores, setVendedores] = useState([]);
  const [comentarios, setComentarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  const cargarDatos = async () => {
    setCargando(true);
    
    const { data: resVendedores } = await supabase.from('vendedor').select('*');
    const { data: resComentarios } = await supabase.from('comentario').select('*');

    setVendedores(resVendedores || []);
    setComentarios(resComentarios || []);
    setCargando(false);
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  if (cargando) return <p className="resenas-cargando">Cargando vendedores...</p>;

  return (
    <section className="resenas-pagina">
      <div className="resenas-header-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <h1 className="resenas-titulo" style={{ margin: 0 }}>Reseñas de Vendedores</h1>
          <p className="resenas-subtitulo" style={{ margin: '0.5rem 0 0' }}>
            Conoce la experiencia de la comunidad con cada vendedor de criptomonedas.
          </p>
        </div>
        <Link to="/registro-vendedor" className="btn-registro-header" style={{
          background: '#d4af37',
          color: '#000',
          padding: '0.75rem 1.2rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.9rem'
        }}>
          <FaUserPlus style={{ color: '#000' }} /> Registrarme como Vendedor
        </Link>
      </div>

      {vendedores.length === 0 ? (
        <div className="resenas-vacio-box" style={{ textAlign: 'center', padding: '3rem 1rem', background: '#141414', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
          <FaStore style={{ fontSize: '3rem', color: '#d4af37', marginBottom: '1rem' }} />
          <p className="resenas-vacio" style={{ color: '#aaa', marginBottom: '1rem' }}>No hay vendedores registrados aun en la base de datos.</p>
          <Link to="/registro-vendedor" style={{ color: '#d4af37', fontWeight: 'bold' }}>
            Se el primer vendedor en registrarte aqui
          </Link>
        </div>
      ) : (
        <div className="resenas-grid">
          {vendedores.map(v => (
            <VendedorCard
              key={v.id}
              vendedor={v}
              comentarios={comentarios.filter(c => String(c.idVendedor) === String(v.id))}
              onNuevoComentario={cargarDatos}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Resenas;
