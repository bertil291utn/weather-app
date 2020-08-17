import 'css-reset-and-normalize';
import '../styles/style.scss';
import mainPage from '../pages/background';
import dataComponent from '../components/dataComp';
import searchComponent from '../components/search';
import API from '../controller/api';

const apiResponse = async () => {
  const { city, location } = await API.getDataByIpCheck();
  const { main, weather, wind, clouds } = await API.weatherDataByCity(city);
  const urlBackground = await API.cityBackgroundImage(city);

  return {
    city,
    clouds,
    location,
    main,
    urlBackground,
    weather,
    wind,
  };
};

const App = async () => {
  const mainElement = document.createElement('main');

  const {
    city,
    clouds,
    location,
    main,
    urlBackground,
    weather,
    wind,
  } = await apiResponse();
  mainElement.innerHTML = mainPage(
    dataComponent.dataRender({
      cityName: city,
      countryFlag: location.country_flag,
      iconSrc: weather[0].icon,
      stationName: weather[0].description,
      degrees: main.temp,
      cloudiness: clouds.all,
      humidity: main.humidity,
      wind: wind.speed,
    }),
    searchComponent.searchInputRender(),
    weather[0].description,
    urlBackground
  );

  return mainElement;
};

export default App;
