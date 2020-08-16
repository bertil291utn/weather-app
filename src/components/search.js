import IconSvg from '../assets/icons.svg';

const searchComponent = {
  searchInputRender: async () => `
  <div class="input">
    <div class="input-container">
      <input type="text" id="search-input" placeholder="City" autocomplete="off">
      <svg class="svg-icon" id="search-button">
        <use href="${IconSvg}#search-symbol"></use>
      </svg>
    </div>
  </div>
`,

  afterRender: async () => {
    const searchButton = document.querySelector('#search-button');
    const searchInput = document.querySelector('#search-input');

    searchButton.addEventListener('click', () => {
      console.log(searchInput.value);
      searchInput.value = '';
    });
  },
};

export default searchComponent;
