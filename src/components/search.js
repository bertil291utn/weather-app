import IconSvg from '../assets/icons.svg';
import API from '../controller/api';
import mainPage from '../pages/background';
import dataComponent from './dataComp';

const searchComponent = (() => {
  const searchInputRender = () => `
  <div class="input">
    <div class="input-container">
      <input type="text" id="search-input" placeholder="City" autocomplete="off">
      <svg class="svg-icon" id="search-button">
        <use href="${IconSvg}#search-symbol"></use>
      </svg>
    </div>
  </div>
`;

  const afterRender = () => {
    const searchButton = document.querySelector('#search-button');
    const searchInput = document.querySelector('#search-input');
    const mainElement = document.querySelector('main');

    searchButton.addEventListener('click', async () => {
      const { main, weather, wind, clouds,sys } = await API.weatherDataByCity(
        searchInput.value
      );
      const urlBackground = await API.cityBackgroundImage(searchInput.value);

      mainElement.innerHTML = mainPage(
        dataComponent.dataRender({
          cityName: searchInput.value,
          countryFlag: `https://www.countryflags.io/${sys.country}/flat/64.png`,
          iconSrc: weather[0].icon,
          stationName: weather[0].description,
          degrees: Math.round(main.temp),
          cloudiness: clouds.all,
          humidity: main.humidity,
          wind: wind.speed,
        }),
        searchComponent.searchInputRender(),
        weather[0].description,
        urlBackground
      );
      searchInput.value = '';
      afterRender();
      dataComponent.afterRender();
    });
  };

  return { afterRender, searchInputRender };
})();

export default searchComponent;
