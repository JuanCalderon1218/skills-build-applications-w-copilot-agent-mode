import { useEffect, useState } from 'react';

const codespace = import.meta.env.VITE_CODESPACE_NAME;
const API_URL = codespace
  ? `https://${codespace}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/';

export default function Workouts() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setItems(Array.isArray(data) ? data : data.results || []))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Workouts</h2>
      {items.map((item, index) => (
        <pre key={index}>{JSON.stringify(item, null, 2)}</pre>
      ))}
    </div>
  );
}
