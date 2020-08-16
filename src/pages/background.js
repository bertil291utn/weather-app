const sanitizeNames = (name) => name.trim().toLowerCase().replace(/\s/g, '-');


const displayWeatherString = (stringWeather) => {
  switch (stringWeather) {
    case 'clear sky':
      return 'sunny';
    case 'scattered clouds' || 'broken clouds':
      return 'few-clouds';
    case 'rain' || 'thunderstorm' || 'snow' || 'mist':
      return 'raining';
    default:
      return sanitizeNames(stringWeather);
  }
};

const mainPage = (dataComponent, searchComponent, time) => `
  <div class="card" id="${displayWeatherString(time)}">
    <div class="card-container">
      <div></div>
      <div class="card-content">
        ${dataComponent}
      </div>
      ${searchComponent}
    </div>
  </div>
`;

export default mainPage;
