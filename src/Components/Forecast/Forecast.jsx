import React, { useState } from 'react'
import './Forecast.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'

const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function Forecast({ data, darkMode }) {
  const [expandedItems, setExpandedItems] = useState([]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return {
      day: WEEK_DAYS[date.getDay()],
      date: date.getDate(),
      month: date.toLocaleString('en-US', { month: 'short' }),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  };

  const toggleAccordion = (index) => {
    setExpandedItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Group forecast by day
  const dailyForecast = data.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toDateString();
    if (!acc[date]) {
      acc[date] = {
        date: date,
        items: [],
        temps: [],
        icons: []
      };
    }
    acc[date].items.push(item);
    acc[date].temps.push(item.main.temp);
    acc[date].icons.push(item.weather[0].icon);
    return acc;
  }, {});

  const forecastDays = Object.values(dailyForecast).slice(0, 7);

  return (
    <div className={`forecast-container ${darkMode ? 'dark' : ''}`}>
      <h2 className="forecast-title">7-Day Forecast</h2>
      
      <Accordion allowZeroExpanded preExpanded={[]}>
        {forecastDays.map((dayData, idx) => {
          const { day, date, month } = formatDate(dayData.items[0].dt);
          const minTemp = Math.min(...dayData.temps);
          const maxTemp = Math.max(...dayData.temps);
          const avgIcon = dayData.icons[Math.floor(dayData.icons.length / 2)];
          const description = dayData.items[0].weather[0].description;

          return (
            <AccordionItem key={idx} uuid={`forecast-${idx}`}>
              <AccordionItemHeading>
                <AccordionItemButton 
                  onClick={() => toggleAccordion(idx)}
                  className={`forecast-header ${expandedItems.includes(idx) ? 'expanded' : ''}`}
                >
                  <div className="forecast-summary">
                    <div className="day-info">
                      <span className="day-name">{day}</span>
                      <span className="day-date">{date} {month}</span>
                    </div>
                    
                    <div className="weather-icon-small">
                      <img
                        src={`icons/${avgIcon}.png`}
                        alt={description}
                        className="forecast-icon"
                      />
                    </div>
                    
                    <div className="weather-description-small">
                      <span className="forecast-desc">{description}</span>
                    </div>
                    
                    <div className="temperature-range">
                      <span className="temp-max">{Math.round(maxTemp)}°</span>
                      <span className="temp-separator">/</span>
                      <span className="temp-min">{Math.round(minTemp)}°</span>
                    </div>
                    
                    <div className="accordion-indicator">
                      <span className="indicator-icon">
                        {expandedItems.includes(idx) ? '−' : '+'}
                      </span>
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              
              <AccordionItemPanel>
                <div className="hourly-forecast">
                  <h4 className="hourly-title">Hourly Forecast</h4>
                  <div className="hourly-grid">
                    {dayData.items.slice(0, 8).map((hour, hourIdx) => {
                      const hourTime = formatDate(hour.dt).time;
                      return (
                        <div key={hourIdx} className="hourly-item">
                          <span className="hour-time">{hourTime}</span>
                          <img
                            src={`icons/${hour.weather[0].icon}.png`}
                            alt={hour.weather[0].description}
                            className="hour-icon"
                          />
                          <span className="hour-temp">{Math.round(hour.main.temp)}°</span>
                          <span className="hour-desc">{hour.weather[0].description}</span>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="day-details">
                    <h4 className="details-title">Day Details</h4>
                    <div className="details-grid">
                      <div className="detail-item">
                        <span className="detail-label">Feels Like</span>
                        <span className="detail-value">
                          {Math.round(dayData.items[0].main.feels_like)}°
                        </span>
                      </div>
                      
                      <div className="detail-item">
                        <span className="detail-label">Humidity</span>
                        <span className="detail-value">
                          {dayData.items[0].main.humidity}%
                        </span>
                      </div>
                      
                      <div className="detail-item">
                        <span className="detail-label">Wind</span>
                        <span className="detail-value">
                          {dayData.items[0].wind.speed} m/s
                        </span>
                      </div>
                      
                      <div className="detail-item">
                        <span className="detail-label">Pressure</span>
                        <span className="detail-value">
                          {dayData.items[0].main.pressure} hPa
                        </span>
                      </div>
                      
                      <div className="detail-item">
                        <span className="detail-label">Clouds</span>
                        <span className="detail-value">
                          {dayData.items[0].clouds.all}%
                        </span>
                      </div>
                      
                      <div className="detail-item">
                        <span className="detail-label">Visibility</span>
                        <span className="detail-value">
                          {(dayData.items[0].visibility / 1000).toFixed(1)} km
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}