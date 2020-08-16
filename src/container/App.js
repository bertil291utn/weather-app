import 'css-reset-and-normalize';
import '../styles/style.scss';
import mainPage from '../pages/background';
import dataComponent from '../components/dataComp';
import searchComponent from '../components/search';

const App = () => {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');

  main.innerHTML = mainPage(
    dataComponent.dataRender({
      cityName: 'Los Angeles',
      iconSrc: '04d',
      stationName: 'Sunny',
      degrees: '78',
      cloudiness: '30',
      humidity: '16',
      wind: '30',
    }),
    searchComponent.searchInputRender(),
    'few-clouds'
  );
 

  return main;
};

export default App;
