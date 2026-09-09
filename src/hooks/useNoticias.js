import { useState, useEffect } from 'react';

const NOTICIAS_EJEMPLO = [
  {
    id: '1',
    title: 'Bitcoin supera los 90k dolares en un nuevo maximo estorico',
    body: 'El precio de bitcoin continua subiendo de forma inpresionante impulsado por la conpra masiva de fondos de inbercion.',
    source: 'CryptoNotisias',
    url: 'https://coindesk.com',
    imageurl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Ethereum lanza su nueba actualizasion para reducir comisiones',
    body: 'Las tarifas de gas en la red de Ethereum bajaron significatibamente tras la inplementasion de los ultimos cambios tecnicos.',
    source: 'Diario Cripto',
    url: 'https://cointelegraph.com',
    imageurl: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=600&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Nuebas regulasiones crypto aprobadas en Latinoamerica',
    body: 'Varios paises de la rejion estan firmando leyes para dar seguridad juridica a los comerciantes de activos digitales.',
    source: 'Mundo Blockchain',
    url: 'https://coingape.com',
    imageurl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Aumenta el comercio P2P de criptomonedas y USDT',
    body: 'Cada ves mas vendedores y conpradores prefieren el intercanbio directo para protejer su dinero de la inflasion.',
    source: 'Finanzas Digitales',
    url: 'https://binance.com',
    imageurl: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=600&auto=format&fit=crop'
  }
];

export function useNoticias() {
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargar() {
      try {
        const res = await fetch(
          'https://min-api.cryptocompare.com/data/v2/news/?lang=EN&sortOrder=latest'
        );
        const json = await res.json();
        if (json && json.Data && json.Data.length > 0) {
          setNoticias(json.Data);
        } else {
          setNoticias(NOTICIAS_EJEMPLO);
        }
      } catch {
        setNoticias(NOTICIAS_EJEMPLO);
      } finally {
        setCargando(false);
      }
    }
    cargar();
  }, []);

  return { noticias, cargando, error };
}

