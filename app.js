// YOUR JS CODE HERE
const weather = document.querySelector(".weather");

const getWeather = async () => {
  const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1");
  const weatherData = await res.json();
  let weatherHTML = `
    <div id="temperature">${weatherData.current.temperature_2m}°C</div>
    <div id="wind-speed">Wind speed: ${weatherData.current.wind_speed_10m} km/h</div>
    <div id="timezone">${weatherData.timezone}</div>
    <div id="last-updated">Last updated: ${new Date(weatherData.current.time).toLocaleString()}</div>`;
  weather.innerHTML += weatherHTML;
}

getWeather();