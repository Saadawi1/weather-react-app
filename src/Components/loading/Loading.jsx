import React from 'react'
import './Loading.css'

export default function Loading({ darkMode }) {
  return (
    <div className={`loading-container ${darkMode ? 'dark' : ''}`}>
      <div className="loading-content">
        <div className="loading-spinner">
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
        </div>
        <p className="loading-text">Loading weather data...</p>
      </div>
    </div>
  );
}