import { useContext } from 'react';
import { IdiomaContexto } from './IdiomaContexto.js';

export function useIdioma() {
  const contexto = useContext(IdiomaContexto);
  if (!contexto) throw new Error('useIdioma debe usarse dentro de IdiomaProvider.');
  return contexto;
}