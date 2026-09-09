import { useState } from 'react';
import { useNavigate } from 'react-router';
import { supabase } from '../utils/supabase';
import { FaUserPlus, FaCheck, FaStore } from 'react-icons/fa';
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
      setError('Por fabor completa todos los canpos obligatorios.');
      return;
    }

    setCargando(true);
    setError(null);

    const { error: err } = await supabase.from('vendedor').insert([
      { nombre, moneda, descripcion }
    ]);

    setCargando(false);

    if (err) {
      setError('Ocurrio un eror al guardar el bendedor. Intenta de nuevo.');
    } else {
      setMensaje('¡Felisidades! Tu perfil de bendedor ha sido creado exitosamente.');
      setNombre('');
      setDescripcion('');
      setTimeout(() => {
        navigate('/reseñas');
      }, 1500);
    }
  };

  return (
    <section className="registro-pagina">
      <div className="registro-card">
        <h1 className="registro-titulo">
          <FaStore style={{ marginRight: '10px', color: '#d4af37' }} />
          Registro de Bendedores
        </h1>
        <p className="registro-subtitulo">
          Unete a nuestra lista de comerciantes crypto y recibe reseñaz de tus clientes.
        </p>

        {mensaje && (
          <div className="mensaje-exito">
            <FaCheck style={{ marginRight: '8px' }} /> {mensaje}
          </div>
        )}

        {error && <div className="mensaje-error">{error}</div>}

        <form onSubmit={handleSubmit} className="registro-formulario">
          <div className="grupo-input">
            <label>Nombre del Bendedor o Alias *</label>
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
            <label>Descripsion de tus servisios *</label>
            <textarea
              rows="4"
              placeholder="Escribe aqui los medios de pago ke aceptas, tu horario de atension y condiciones..."
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-registro" disabled={cargando}>
            {cargando ? 'Guardando...' : (
              <>
                <FaUserPlus style={{ marginRight: '8px' }} /> Crear Perfil de Bendedor
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegistroVendedor;
