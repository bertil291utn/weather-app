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
  <div class="card" id="${displayWeatherString(
    time
  )}" style="background: url(${urlBackground}) no-repeat center center fixed;">
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
