import { useState } from 'react'
import './App.css'
import Search from './Components/Search.jsx'
import CurrentWeather from './Components/current-weather/CurrentWeather.jsx'
import { Weather_Api_Url ,Weather_Api_Key } from './Api.jsx'
import Forecast from './Components/Forecast/Forecast.jsx'
import Loading from './Components/loading/Loading.jsx'
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {
  const [loading, setLoading] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    setLoading(true);
    
    const weatherData = fetch(
      `${Weather_Api_Url}/weather?lat=${lat}&lon=${lon}&appid=${Weather_Api_Key}&units=metric`
    );
    
    const forecastFetch = fetch(
      `${Weather_Api_Url}/forecast?lat=${lat}&lon=${lon}&appid=${Weather_Api_Key}&units=metric`
    );
    
    Promise.all([weatherData, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => {
        console.error("Error fetching weather data:", err);
        // يمكنك إضافة تنبيه للمستخدم هنا
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode-active', !darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className="top-bar">
          <button 
            onClick={toggleDarkMode} 
            className="dark-mode-toggle"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          
          <div className="search-wrapper">
            <Search 
              onSearchChange={handleOnSearchChange} 
              onLoading={setLoading}
            />
          </div>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <>
            {currentWeather && (
              <div className="current-weather-section">
                <CurrentWeather data={currentWeather} darkMode={darkMode} />
              </div>
            )}
            
            {forecast && (
              <div className="forecast-section">
                <Forecast data={forecast} darkMode={darkMode} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default App