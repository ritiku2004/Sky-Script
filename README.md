# 🌤️ Sky Script

Sky Script is a sleek and responsive weather forecast web application that provides real-time weather data for cities around the world. It features a clean, dark-themed user interface with dynamic animations and detailed weather information.

## 🚀 Live Demo

[![🌐 View Deployment](https://img.shields.io/badge/Live%20Demo-Click%20Here-blue?style=for-the-badge)](https://ritiku2004.github.io/Sky-Script/)

## ✨ Features

* **Current Weather:** Temperature, conditions (e.g., “More clouds than sun”), and icon.
* **Detailed Info:** Sunrise, sunset, moonrise, moonset, max/min temps (°C & °F), humidity, wind speed, rain/snow chance.
* **3-Day Forecast:** Summarized forecast for the next two days.
* **City Search:** Weather data for any city.
* **Responsive Design:** Works on all devices.
* **Loading Animation:** Custom loader while fetching data.
* **Smooth Animations:** GSAP for staggered, polished effects.

## 🛠 Technologies Used

* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **API:** WeatherAPI via RapidAPI
* **Animations:** GSAP (GreenSock Animation Platform)
* **Icons:** Font Awesome
* **Fonts:** Google Fonts (Open Sans)

## 🔑 Setup & Installation

```bash
# Clone the repository
git clone https://github.com/ritiku2004/Sky-Script.git

# Navigate to project directory
cd Sky-Script
```

### Get an API Key

1. Go to [RapidAPI - WeatherAPI](https://rapidapi.com/weatherapi/api/weatherapi-com/) and subscribe to the free plan.
2. Copy your **X-RapidAPI-Key**.
3. In `script.js`, locate the `options` constant:

```javascript
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY_HERE',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};
```

Replace `'YOUR_RAPIDAPI_KEY_HERE'` with your key.

### Run Locally

Open `index.html` in your browser.

## 📂 Code Structure

* `index.html` — Main structure
* `style.css` — Styling, dark theme, loader animations
* `script.js` — Data fetching, user input, GSAP animations

## 👤 Author

**Ritik** — [ritiku2004](https://github.com/ritiku2004)
