import { useState } from 'react';
import './App.css';


function App() {
  const apiKey = "b8114607394def65f1e890eb493b22ca"
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState([{}])


  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => setWeather(data))
    }
    setCity("")
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>

        <input type="text"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          placeholder="Enter City"
        />
      </form>

      {typeof weather.main === 'undefined' ?
        <>
        </> : (
          <div className="weather-data">
            <p className="name">{weather.name}, {weather.sys.country}</p>
            <p className="temp">{weather.main.temp} ℃</p>

            <p className="weather1" > {weather.weather[0].main}</p>

          </div>
        )}

      {weather.cod === '404' ? <p>No city found</p> : <> </>}

    </div>
  );
}

export default App;
