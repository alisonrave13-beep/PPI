import { useSupabaseTable } from '../hooks/useSupabaseTable';
import '../styles/cryptos.css';

const Cryptos = () => {
  const { data: cryptos, loading, error } = useSupabaseTable('cryptos');

  if (loading) return <p className="cryptos-cargando">Cargando cryptos...</p>;
  if (error) return <p className="cryptos-error">Error: {error}</p>;
  if (cryptos.length === 0) return <p className="cryptos-vacio">No hay cryptos disponibles.</p>;

  return (
    <div className="cryptos-pagina">
      <h1 className="cryptos-titulo">Cryptos</h1>
      <ul className="cryptos-lista">
        {cryptos.map(crypto => (
          <li key={crypto.id} className="cryptos-item">
            {crypto.name ?? JSON.stringify(crypto)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cryptos;
