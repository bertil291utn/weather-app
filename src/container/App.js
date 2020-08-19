/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
import 'css-reset-and-normalize';
import '../styles/style.scss';
import mainPage from '../pages/background';
import dataComponent from '../components/dataComp';
import searchComponent from '../components/search';
import API from '../controller/api';
import cityNotFoundComponent from '../components/city-not-found';

const apiResponse = async () => {
  const { city, location } = await API.getDataByIpCheck();
  const returnCityData = await Promise.all([
    API.weatherDataByCity(city),
    API.cityBackgroundImage(city),
  ]);

  const { main, weather, wind, clouds } = await returnCityData[0];
  const urlBackground = await returnCityData[1];

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
      degrees: Math.round(main.temp),
      cloudiness: clouds.all,
      humidity: main.humidity,
      wind: wind.speed,
    }),
    searchComponent.searchInputRender(),
    cityNotFoundComponent.cityNotFoundRenderPage(),
    weather[0].main,
    urlBackground
  );

  return mainElement;
};

export default App;
