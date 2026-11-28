import { useCallback, useEffect, useState } from 'react';
import AdviceCard from '@/components/AdviceCard/AdviceCard.jsx';

const API_URL = 'https://api.adviceslip.com/advice';

function App() {
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAdvice = useCallback((signal) => {
    fetch(API_URL, { signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => setAdvice(data.slip))
      .catch((error) => {
        if (error.name !== 'AbortError') setError(error.message);
      })
      .finally(() => {
        if (!signal?.aborted) setLoading(false);
      });
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    getAdvice(controller.signal);

    return () => controller.abort();
  }, [getAdvice]);

  const handleClick = () => {
    setLoading(true);
    setError(null);
    getAdvice();
  };

  return (
    <main>
      <AdviceCard advice={advice} loading={loading} error={error} onRefresh={handleClick} />
    </main>
  );
}

export default App;
