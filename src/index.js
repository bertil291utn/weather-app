import App from './container/App';
import dataComponent from './components/dataComp';
import searchComponent from './components/search';


document.getElementById('content').appendChild(App());
dataComponent.afterRender();
searchComponent.afterRender();
