const dataComponent = (() => {
  const displayDate = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const d = new Date();
    const year = d.getFullYear();
    const month = months[d.getMonth()];
    const day = d.getDate();

    return `${month} ${day}, ${year}`;
  };

  const dataRender = ({
    cityName,
    cloudiness,
    countryFlag,
    degrees,
    humidity,
    iconSrc,
    stationName,
    wind,
  }) => `
  <div class="data-content">
    <div class="weather-city">
      <div class="place">
        <p class="title">${cityName}</p>
        <img src="${countryFlag}" alt="country flag" width="50">
      </div>
      <div class="weather-content">
        <div class="weather-data">
          <div class="date" id="display-date">${displayDate()}</div>
          <div class="icon">
            <img src="http://openweathermap.org/img/wn/${iconSrc}@2x.png" alt="icon" width="50">
            <span class="weather-station">${stationName}</span>
          </div>
        </div>
        <div class="degrees-container">
          <div class="degrees"><span class="degree-content">${degrees}</span>&deg;</div>
          <span id="centigrade">&deg; C</span>
          <span class="inactive"> / </span>
          <span class="inactive" id="fahrenheit">&deg; F</span>
        </div>
      </div>
    </div>
    <hr>
    <div class="additional-info">
      <h3 class="additional-info-title">Additional info</h3>
      <div class="additional-info-container">
        <div class="clouds">Cloudiness <p>${cloudiness}%</p>
        </div>
        <div class="humidity">Humidity <p>${humidity}%</p>
        </div>
        <div class="wind">Wind <p>${wind} m/s</p>
        </div>
      </div>
    </div>
  </div>
`;

  const celsiusToFahrenheit = (celsiusDegree) => Math.round((celsiusDegree * 9) / 5 + 32);

  const afterRender = () => {
    const centigradeButton = document.querySelector('#centigrade');
    const fahrenheitButton = document.querySelector('#fahrenheit');
    const degreesElement = document.querySelector('.degree-content');
    const centigradeDegree = +degreesElement.textContent;

    fahrenheitButton.addEventListener('click', (e) => {
      if (!e.srcElement.classList.contains('inactive')) return;
      e.srcElement.classList.remove('inactive');
      centigradeButton.classList.add('inactive');
      celsiusToFahrenheit(+degreesElement.textContent);
      degreesElement.innerHTML = celsiusToFahrenheit(+degreesElement.textContent);
    });

    centigradeButton.addEventListener('click', (e) => {
      if (!e.srcElement.classList.contains('inactive')) return;
      e.srcElement.classList.remove('inactive');
      fahrenheitButton.classList.add('inactive');
      degreesElement.innerHTML = centigradeDegree;
    });
  };

  return { afterRender, dataRender };
})();
export default dataComponent;
