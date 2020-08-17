const sanitizeNames = (name) => name.trim().toLowerCase().replace(/\s/g, '-');

const displayWeatherString = (stringWeather) => {
  switch (stringWeather) {
    case 'clear sky':
      return 'sunny';
    case 'scattered clouds':
    case 'broken clouds':
      return 'raining';
    case 'rain':
      return 'raining';
    case 'thunderstorm':
    case 'snow':
    case 'mist':
      return 'shower-rain';
    default:
      return sanitizeNames(stringWeather);
  }
};

const mainPage = (dataComponent, searchComponent, time, urlBackground) => `
  <div class="card" id="${displayWeatherString(time)}" >
    <div class="card-container">
      <div class="city-image" style="background: url(${urlBackground}) center/cover">
        ${searchComponent}
      </div>
      <div class="card-content">
        ${dataComponent}
      </div>
   
    </div>
  </div>
`;

export default mainPage;
