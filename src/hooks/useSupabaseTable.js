import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';

export function useSupabaseTable(table, select = '*') {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!table) return;

    async function fetchData() {
      setLoading(true);
      setError(null);

      const { data: result, error: err } = await supabase
        .from(table)
        .select(select);

      if (err) {
        setError(err.message);
      } else {
        setData(result ?? []);
      }

      setLoading(false);
    }

    fetchData();
  }, [table, select]);

  return { data, loading, error };
}
