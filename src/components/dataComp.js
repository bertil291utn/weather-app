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

  const dataRender = async ({
    cityName,
    iconSrc,
    stationName,
    degrees,
    cloudiness,
    humidity,
    wind,
  }) => `
  <div class="data-content">
    <div class="weather-city">
      <p class="title">${cityName}</p>
      <div class="weather-content">
        <div class="weather-data">
          <div class="date" id="display-date">${displayDate()}</div>
          <div class="icon">
            <img src="http://openweathermap.org/img/wn/${iconSrc}@2x.png" alt="icon" width="50">
            <span class="weather-station">${stationName}</span>
          </div>
        </div>
        <div class="degrees-container">
          <div class="degrees">${degrees}&deg;</div>
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
        <div class="wind">Wind <p>${wind}m/s</p>
        </div>
      </div>
    </div>
  </div>
`;

  const afterRender = async () => {
    const centigradeButton = document.querySelector('#centigrade');
    const fahrenheitButton = document.querySelector('#fahrenheit');

    fahrenheitButton.addEventListener('click', (e) => {
      if (!e.srcElement.classList.contains('inactive')) return;
      e.srcElement.classList.remove('inactive');
      centigradeButton.classList.add('inactive');
    });

    centigradeButton.addEventListener('click', (e) => {
      if (!e.srcElement.classList.contains('inactive')) return;
      e.srcElement.classList.remove('inactive');
      fahrenheitButton.classList.add('inactive');
    });
  };

  return { afterRender, dataRender };
})();
export default dataComponent;
