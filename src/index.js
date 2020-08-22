import App from './container/App';
import dataComponent from './components/dataComp';
import searchComponent from './components/search';
import cityNotFoundComponent from './components/city-not-found';

(async () => {
  document.getElementById('content').appendChild(await App());
  dataComponent.afterRender();
  searchComponent.afterRender();
  cityNotFoundComponent.afterRender();
})();
