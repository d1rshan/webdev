import { useEffect, useState } from "react";

const WeatherApp = () => {
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(null);

  const api =
    "https://api.open-meteo.com/v1/forecast?latitude=13.0843&longitude=80.2705&current_weather=true";
  async function fetchTemperature() {
    setLoading(true);
    try {
      const res = await fetch(api);
      console.log(res);
      const data = await res.json();
      console.log(data);
      setTemperature(data.current_weather.temperature);
    } finally {
      setLoading(false);
    }
    // console.log(data);
  }

  useEffect(() => {
    fetchTemperature();
  }, []);
  return (
    <div>
      <h1>Current Weather</h1>
      {loading && <p>Loading...</p>}
      {!loading && temperature && (
        <div>
          <p>Temperature: {temperature}</p>
          <p>Location: Chennai</p>
          <button onClick={fetchTemperature}>Refresh</button>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
