import { useSupabaseTable } from '../hooks/useSupabaseTable';
import '../styles/cryptos.css';

const CRYPTOS_DUMMY = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', price: '$91,250.00', change: '+2.4%' },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: '$3,420.50', change: '+1.8%' },
  { id: 3, name: 'Tether', symbol: 'USDT', price: '$1.00', change: '0.0%' },
  { id: 4, name: 'Solana', symbol: 'SOL', price: '$198.30', change: '+5.1%' },
  { id: 5, name: 'BNB', symbol: 'BNB', price: '$645.10', change: '+0.9%' }
];

const Cryptos = () => {
  const { data: cryptos, loading, error } = useSupabaseTable('cryptos');
  const lista = (cryptos && cryptos.length > 0) ? cryptos : CRYPTOS_DUMMY;

  if (loading) return <p className="cryptos-cargando">Cargando criptomonedas...</p>;

  return (
    <div className="cryptos-pagina">
      <h1 className="cryptos-titulo">Precios Crypto en Tiempo Real</h1>
      <ul className="cryptos-lista">
        {lista.map(crypto => (
          <li key={crypto.id} className="cryptos-item">
            <span style={{ fontWeight: 'bold', color: '#d4af37' }}>{crypto.name} ({crypto.symbol})</span>
            <span>{crypto.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cryptos;

