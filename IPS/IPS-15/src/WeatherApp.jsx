import React, { useState, useEffect } from "react";

function WeatherApp() {
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const longitude = 80.2705;
  const latitude = 13.0843;

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json();
      setTemperature(data.current_weather.temperature);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const styles = {
    container: {
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      padding: "20px",
    },
    error: {
      color: "red",
    },
    weatherInfo: {
      marginTop: "10px",
      fontSize: "18px",
    },
    button: {
      marginTop: "10px",
      padding: "10px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Current Weather</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={styles.error}>Error: {error}</p>}
      {temperature !== null && !loading && !error && (
        <div style={styles.weatherInfo}>
          <p>Temperature: {temperature}°C</p>
          <p>Location: Chennai</p>
        </div>
      )}
      <button onClick={fetchWeather} disabled={loading} style={styles.button}>
        Refresh
      </button>
    </div>
  );
}

export default WeatherApp;
