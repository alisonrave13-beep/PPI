import { useState } from 'react';
import { useNavigate } from 'react-router';
import { supabase } from '../utils/supabase';
import { appendLocalRecord } from '../utils/localCollections.js';
import { FaStore } from 'react-icons/fa';
import { useIdioma } from '../useIdioma.js';
import '../styles/registroVendedor.css';

const RegistroVendedor = () => {
  const { t } = useIdioma();
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
      setError(t('Por favor completa todos los campos obligatorios.'));
      return;
    }

    setCargando(true);
    setError(null);

    const nuevoVendedor = {
      id: `local-${Date.now()}`,
      nombre: nombre.trim(),
      moneda,
      descripcion: descripcion.trim()
    };

    let guardadoEnSupabase = false;
    let guardadoLocal = false;
    try {
      const { error: errorSupabase } = await supabase
        .from('vendedor')
        .insert([
          {
            nombre: nuevoVendedor.nombre,
            moneda: nuevoVendedor.moneda,
            descripcion: nuevoVendedor.descripcion
          }
        ]);

      if (errorSupabase) throw errorSupabase;
      guardadoEnSupabase = true;
    } catch (errorSupabase) {
      console.error('Error Supabase insert:', errorSupabase);
      guardadoLocal = appendLocalRecord('vendedores_locales', nuevoVendedor);
    }

    setCargando(false);
    if (guardadoLocal) {
      setMensaje(t('Vendedor guardado en este dispositivo. Para compartirlo con otros usuarios, configura Supabase.'));
    } else if (guardadoEnSupabase) {
      setMensaje(t('Perfil de vendedor guardado en Supabase.'));
    } else {
      setError(t('No se pudo guardar el perfil. Inténtalo de nuevo.'));
      return;
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
          {t('Registro de Vendedores')}
        </h1>
        <p className="registro-subtitulo">
          {t('Unete a nuestra lista de comerciantes crypto y recibe reseñas de tus clientes.')}
        </p>

        {mensaje && (
          <div className="mensaje-exito">
            {mensaje}
          </div>
        )}

        {error && <div className="mensaje-error">{error}</div>}

        <form onSubmit={handleSubmit} className="registro-formulario">
          <div className="grupo-input">
            <label>{t('Nombre del Vendedor o Alias *')}</label>
            <input
              type="text"
              placeholder="Ej: CryptoSanti_P2P"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="grupo-input">
            <label>{t('Moneda o Par de Cambio *')}</label>
            <select value={moneda} onChange={(e) => setMoneda(e.target.value)}>
              <option value="USDT / COP">USDT / COP</option>
              <option value="BTC / COP">BTC / COP</option>
              <option value="ETH / COP">ETH / COP</option>
              <option value="USDT / USD">USDT / USD</option>
              <option value="VARIAS CRIPTOS">VARIAS CRIPTOS</option>
            </select>
          </div>

          <div className="grupo-input">
            <label>{t('Descripcion de tus servicios *')}</label>
            <textarea
              rows="4"
              placeholder={t('Escribe aqui los medios de pago que aceptas, tu horario de atencion y condiciones...')}
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-registro" disabled={cargando}>
            {cargando ? t('Guardando...') : t('Crear Perfil de Vendedor')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegistroVendedor;

