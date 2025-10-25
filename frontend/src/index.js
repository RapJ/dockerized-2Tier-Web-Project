import React, {useState} from "react";

function App(){
  const [city, setCity] = useState("accra");
  const [data, setData] = useState(null);

  async function fetchWeather(){
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL || ''}/weather?city=${encodeURIComponent(city)}`);
      const json = await res.json();
      setData(json);
    } catch(e) {
      setData({ error: e.message });
    }
  }

  return (
    <div style={{fontFamily:'Arial', padding:20}}>
      <h1>Simple Weather</h1>
      <input value={city} onChange={e=>setCity(e.target.value)} />
      <button onClick={fetchWeather} style={{marginLeft:8}}>Get</button>
      <pre>{data ? JSON.stringify(data, null, 2) : "No data yet"}</pre>
    </div>
  );
}

export default App;
