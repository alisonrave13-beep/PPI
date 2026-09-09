import { useState } from 'react';
import { useNavigate } from 'react-router';
import { supabase } from '../utils/supabase';
import { FaStore } from 'react-icons/fa';
import '../styles/registroVendedor.css';

const RegistroVendedor = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [moneda, setMoneda] = useState('USDT / COP');
  const [descripcion, setDescripcion] = useState('');
  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre.trim() || !descripcion.trim()) {
      setError('Por favor completa todos los campos obligatorios.');
      return;
    }

    setCargando(true);
    setError(null);

    const nuevoVendedor = {
      id: Date.now(),
      nombre: nombre.trim(),
      moneda,
      descripcion: descripcion.trim()
    };

    let errorSupabase = null;
    try {
      const { data, error: err } = await supabase
        .from('vendedor')
        .insert([
          {
            nombre: nuevoVendedor.nombre,
            moneda: nuevoVendedor.moneda,
            descripcion: nuevoVendedor.descripcion
          }
        ])
        .select();

      if (err) {
        errorSupabase = err;
        console.error('Error Supabase insert:', err);
      }
    } catch (e) {
      errorSupabase = e;
      console.error('Exception Supabase insert:', e);
    }

    const locales = JSON.parse(localStorage.getItem('vendedores_locales') || '[]');
    locales.push(nuevoVendedor);
    localStorage.setItem('vendedores_locales', JSON.stringify(locales));

    setCargando(false);
    if (errorSupabase) {
      setMensaje('Guardado en la app local (Nota: Supabase requiere activar la politica RLS de insercion).');
    } else {
      setMensaje('Felicidades! Tu perfil de vendedor ha sido guardado exitosamente en Supabase.');
    }

    setNombre('');
    setDescripcion('');
    setTimeout(() => {
      navigate('/reseñas');
    }, 1500);
  };



  return (
    <section className="registro-pagina">
      <div className="registro-card">
        <h1 className="registro-titulo">
          <FaStore style={{ marginRight: '10px', color: '#d4af37' }} />
          Registro de Vendedores
        </h1>
        <p className="registro-subtitulo">
          Unete a nuestra lista de comerciantes crypto y recibe reseñas de tus clientes.
        </p>

        {mensaje && (
          <div className="mensaje-exito">
            {mensaje}
          </div>
        )}

        {error && <div className="mensaje-error">{error}</div>}

        <form onSubmit={handleSubmit} className="registro-formulario">
          <div className="grupo-input">
            <label>Nombre del Vendedor o Alias *</label>
            <input
              type="text"
              placeholder="Ej: CryptoSanti_P2P"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="grupo-input">
            <label>Moneda o Par de Cambio *</label>
            <select value={moneda} onChange={(e) => setMoneda(e.target.value)}>
              <option value="USDT / COP">USDT / COP</option>
              <option value="BTC / COP">BTC / COP</option>
              <option value="ETH / COP">ETH / COP</option>
              <option value="USDT / USD">USDT / USD</option>
              <option value="VARIAS CRIPTOS">VARIAS CRIPTOS</option>
            </select>
          </div>

          <div className="grupo-input">
            <label>Descripcion de tus servicios *</label>
            <textarea
              rows="4"
              placeholder="Escribe aqui los medios de pago que aceptas, tu horario de atencion y condiciones..."
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-registro" disabled={cargando}>
            {cargando ? 'Guardando...' : 'Crear Perfil de Vendedor'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegistroVendedor;

