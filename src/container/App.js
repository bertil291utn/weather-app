
import 'css-reset-and-normalize';
import '../styles/style.scss';



const App = () => {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');

  main.innerHTML=`
    <div class="card" id="shower-rain">
      <div class="card-container">
        <div class="card-content">
          <h1 class="title">A title</h1>
          <h3 class="subtitle">A subtitle</h3>
        </div>
      </div>
    </div>
  `;

  return main;
};

export default App;
