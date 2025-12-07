import React from 'react'
import './CurrentWeather.css'
import { WiThermometer, WiHumidity, WiStrongWind, WiBarometer, WiSunrise, WiSunset, WiRaindrop } from 'react-icons/wi'
import { FaEye, FaCloud } from 'react-icons/fa'

export default function CurrentWeather({ data, darkMode }) {
  const formatDate = () => {
    const date = new Date(data.dt * 1000);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className={`weather-card ${darkMode ? 'dark' : ''}`}>
      <div className="weather-header">
        <div className="location-info">
          <h2 className="city">{data.city}</h2>
          <p className="date">{formatDate()}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <div className="weather-icon-container">
          <img
            alt={data.weather[0].description}
            className="weather-icon"
            src={`icons/${data.weather[0].icon}.png`}
          />
          <p className="current-temp">{Math.round(data.main.temp)}°C</p>
        </div>
      </div>

      <div className="weather-details">
        <div className="details-grid">
          {/* الصف الأول */}
          <div className="detail-item ">
            <span className="detail-label">
              <WiThermometer className="detail-label-icon" />
              Feels Like
            </span>
            <span className="detail-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">
              <WiHumidity className="detail-label-icon" />
              Humidity
            </span>
            <span className="detail-value">
              {data.main.humidity}%
            </span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">
              <WiStrongWind className="detail-label-icon" />
              Wind Speed
            </span>
            <span className="detail-value">
              {data.wind.speed} m/s
            </span>
          </div>
          
          {/* الصف الثاني */}
          <div className="detail-item ">
            <span className="detail-label">
              <WiBarometer className="detail-label-icon" />
              Pressure
            </span>
            <span className="detail-value">
              {data.main.pressure} hPa
            </span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">
              <FaEye className="detail-label-icon" />
              Visibility
            </span>
            <span className="detail-value">
              {(data.visibility / 1000).toFixed(1)} km
            </span>
          </div>
          
          <div className="detail-item ">
            <span className="detail-label">
              <FaCloud className="detail-label-icon" />
              Cloudiness
            </span>
            <span className="detail-value">
              {data.clouds?.all || 0}%
            </span>
          </div>
          
          {/* الصف الثالث */}
          <div className="detail-item ">
            <span className="detail-label">
              <WiSunrise className="detail-label-icon" />
              Sunrise
            </span>
            <span className="detail-value">
              {formatTime(data.sys.sunrise)}
            </span>
          </div>
          
          <div className="detail-item ">
            <span className="detail-label">
              <WiSunset className="detail-label-icon" />
              Sunset
            </span>
            <span className="detail-value">
              {formatTime(data.sys.sunset)}
            </span>
          </div>
          
          {data.rain && (
            <div className="detail-item secondary">
              <span className="detail-label">
                <WiRaindrop className="detail-label-icon" />
                Rain (3h)
              </span>
              <span className="detail-value">
                {data.rain['3h']} mm
              </span>
            </div>
          )}
          
          {data.snow && (
            <div className="detail-item secondary">
              <span className="detail-label">
                <WiSnow className="detail-label-icon" />
                Snow (3h)
              </span>
              <span className="detail-value">
                {data.snow['3h']} mm
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}