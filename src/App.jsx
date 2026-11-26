import { useCallback, useEffect, useState } from 'react';

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

  return (
    <>
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      {advice && !loading && (
        <>
          <p>ADVICE #{advice.id}</p>
          <p>“{advice.advice}”</p>
        </>
      )}
    </>
  );
}

export default App;
