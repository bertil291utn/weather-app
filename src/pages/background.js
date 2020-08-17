const displayWeatherString = (stringWeather) => {
  switch (stringWeather) {
    case 'Clear':
      return 'sunny';
    case 'Rain':
      return 'raining';
    case 'Thunderstorm':
    case 'Snow':
    case 'mist':
      return 'shower-rain';
    default:
      return 'few-clouds';
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
