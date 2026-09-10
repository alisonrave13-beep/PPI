import { useEffect, useState } from 'react';
import '../styles/cryptos.css';

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,tether,solana,binancecoin&order=market_cap_desc&per_page=5&page=1&sparkline=false&price_change_percentage=24h';
const REFRESH_INTERVAL = 30_000;

const CRYPTO_NAMES = {
  bitcoin: { name: 'Bitcoin', symbol: 'BTC' },
  ethereum: { name: 'Ethereum', symbol: 'ETH' },
  tether: { name: 'Tether', symbol: 'USDT' },
  solana: { name: 'Solana', symbol: 'SOL' },
  binancecoin: { name: 'BNB', symbol: 'BNB' },
};

const formatPrice = price => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: price < 1 ? 4 : 2,
}).format(price);

const formatChange = change => `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`;

const Cryptos = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPrices = async () => {
      try {
        const response = await fetch(API_URL, { signal: controller.signal });
        if (!response.ok) throw new Error('No se pudieron cargar los precios.');

        const prices = await response.json();
        setCryptos(prices.map(crypto => ({
          id: crypto.id,
          ...CRYPTO_NAMES[crypto.id],
          price: formatPrice(crypto.current_price),
          change: formatChange(crypto.price_change_percentage_24h ?? 0),
          changeValue: crypto.price_change_percentage_24h ?? 0,
        })));
        setLastUpdated(new Date());
        setError('');
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError('No se pudo actualizar el precio. Intenta de nuevo en unos segundos.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
    const intervalId = setInterval(fetchPrices, REFRESH_INTERVAL);

    return () => {
      controller.abort();
      clearInterval(intervalId);
    };
  }, []);

  if (loading) return <p className="cryptos-cargando">Cargando criptomonedas...</p>;

  return (
    <div className="cryptos-pagina">
      <h1 className="cryptos-titulo">Precios Crypto en Tiempo Real</h1>
      {error && <p className="cryptos-error">{error}</p>}
      {lastUpdated && (
        <p className="cryptos-actualizado">
          Actualizado a las {lastUpdated.toLocaleTimeString('es-CO')}. Se actualiza cada 30 segundos.
        </p>
      )}
      <ul className="cryptos-lista">
        {cryptos.map(crypto => (
          <li key={crypto.id} className="cryptos-item">
            <span style={{ fontWeight: 'bold', color: '#d4af37' }}>
              {crypto.name} ({crypto.symbol})
            </span>
            <span>
              {crypto.price}
              <small className={crypto.changeValue >= 0 ? 'cryptos-subida' : 'cryptos-bajada'}>
                {crypto.change}
              </small>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cryptos;

