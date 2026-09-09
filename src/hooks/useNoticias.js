import { useState, useEffect } from 'react';

const NOTICIAS_DATOS = [
  {
    id: '1',
    title: 'Bitcoin supera los 90k dolares en un nuevo maximo historico',
    body: 'El precio de bitcoin continua subiendo de forma impresionante impulsado por la compra masiva de fondos de inversion.',
    source: 'CryptoNoticias',
    url: 'https://coindesk.com',
    imageurl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Ethereum lanza su nueva actualizacion para reducir comisiones',
    body: 'Las tarifas de gas en la red de Ethereum bajaron significativamente tras la implementacion de los ultimos cambios tecnicos.',
    source: 'Diario Cripto',
    url: 'https://cointelegraph.com',
    imageurl: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?w=600&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Nuevas regulaciones crypto aprobadas en Latinoamerica',
    body: 'Varios paises de la region estan firmando leyes para dar seguridad juridica a los comerciantes de activos digitales.',
    source: 'Mundo Blockchain',
    url: 'https://coingape.com',
    imageurl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Aumenta el comercio P2P de criptomonedas y USDT',
    body: 'Cada vez mas vendedores y compradores prefieren el intercambio directo para proteger su dinero de la inflacion.',
    source: 'Finanzas Digitales',
    url: 'https://binance.com',
    imageurl: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=600&auto=format&fit=crop'
  }
];

export function useNoticias() {
  const [noticias, setNoticias] = useState(NOTICIAS_DATOS);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  return { noticias, cargando, error };
}


