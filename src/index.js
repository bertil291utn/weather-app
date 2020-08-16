import App from './container/App';

App().then((response) => {
  console.log(response);
});
document.getElementById('content').appendChild(App());
