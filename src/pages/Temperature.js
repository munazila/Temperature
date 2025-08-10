import { useEffect, useState } from 'react';

export default function Temperature(){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const apiBase = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  async function fetchTemp(){
    setLoading(true);
    setErr(null);
    try{
      const res = await fetch(`${apiBase}/temperature`);
      if (!res.ok) throw new Error('Network response not ok');
      const json = await res.json();
      setData(json);
    }catch(e){
      setErr(e.message);
    }finally{
      setLoading(false);
    }
  }

  useEffect(()=>{ fetchTemp() }, []);

  return (
    <main style={{padding:20}}>
      <h1>Temperature</h1>

      {loading && <p>Loading…</p>}
      {err && <p style={{color:'red'}}>Error: {err}</p>}

      {data && (
        <div>
          <p><strong>Temperature:</strong> {data.temperature} {data.unit || 'C'}</p>
          <p><strong>Timestamp:</strong> {data.timestamp ? new Date(data.timestamp).toLocaleString() : '—'}</p>
          <button onClick={fetchTemp}>Refresh</button>
        </div>
      )}
    </main>
  );
}