# 🌤️ Weather React App

<p align="center">
    <img src="https://img.shields.io/badge/React-2023-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Badge">
    <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel Badge">
    <img src="https://img.shields.io/badge/API-OpenWeatherMap-FF9800?style=for-the-badge" alt="OpenWeatherMap Badge">
    <img src="https://img.shields.io/badge/Responsive-Design-blue?style=for-the-badge" alt="Responsive Design Badge">
</p>

A sleek, modern, and production-ready weather application built with **React**, delivering accurate, **real-time** weather data with a beautiful, intuitive interface.

---

## 🎯 Live Demo

<p align="center">👉 <a href="https://weather-react-app-plum-eight.vercel.app" target="_blank">weather-react-app-plum-eight.vercel.app</a></p>

---

## ✨ Key Features

* **🌍 Real-Time Weather:** Get current conditions for any city worldwide.
* **📱 Fully Responsive:** Perfectly adapts to mobile, tablet, and desktop screens.
* **📍 Auto-Location:** Fetch instant weather for your current GPS location.
* **📊 Detailed Analytics:** Temperature, humidity, wind, UV index, and more.
* **⚡ Blazing Fast:** Optimized API calls and state management.
* **🎨 Dynamic UI:** Colors and visuals adapt to current weather conditions.

---

## 🛠️ Tech Stack

| Category             | Technology                        |
| :------------------- | :-------------------------------- |
| **Frontend**         | React 18 + CSS3                   |
| **API**              | OpenWeatherMap                    |
| **Deployment**       | Vercel                            |
| **Styling**          | CSS Variables + Responsive Design |
| **State Management** | React Hooks                       |

---

## 🚀 Quick Start (Local Setup)

1. **Clone the repository:**

```bash
    git clone https://github.com/Saadawi1/weather-react-app.git
```

2. **Navigate to the project folder:**

```bash
    cd weather-react-app
```

3. **Install dependencies:**

```bash
    npm install
```

4. **Set up environment variables:**

```bash
    cp .env.example .env.local
```

* Add your **OpenWeatherMap API Key** in `.env.local`:

```env
REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
```

5. **Start the development server:**

```bash
    npm start
```

Open `http://localhost:3000` in your browser.

---

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components (WeatherCard, SearchBar, Forecast)
├── services/       # API calls & data fetching logic
├── styles/         # Global CSS and design tokens
├── utils/          # Helper functions and formatters
└── App.jsx         # Main app component
```

---

## 🎨 Design Highlights & Performance

* Modern gradient backgrounds and smooth transitions.
* Adaptive color schemes based on current weather.
* Accessibility-friendly design.
* Minimal bundle size ensures fast loading.

---

## 🤝 Contributing

1. Fork the repository.
2. Create a new feature branch:

```bash
    git checkout -b feature/AmazingFeature
```

3. Commit your changes:

```bash
    git commit -m 'Add some AmazingFeature'
```

4. Push the branch:

```bash
    git push origin feature/AmazingFeature
```

5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License. See `LICENSE` for details.

*MIT © 2024 Saadawi1*

<div align="center">
    <p>Made with ❤️ using React & OpenWeatherMap</p>

[Live Demo](https://weather-react-app-plum-eight.vercel.app) ·
[Report Issue](https://github.com/Saadawi1/weather-react-app/issues) ·
[Request Feature](https://github.com/Saadawi1/weather-react-app/issues)

</div>
