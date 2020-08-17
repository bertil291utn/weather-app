import App from './container/App';
import dataComponent from './components/dataComp';
import searchComponent from './components/search';

(async () => {
  document.getElementById('content').appendChild(await App());
  dataComponent.afterRender();
  searchComponent.afterRender();
})();
